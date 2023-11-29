---
title: "Dobby hogwarts"
excerpt: "[Easy][Vulnhub] Writeup de Dobby hogwarts."
header:
  teaser: ""
tags:
  - vulnhub
  - easy
  - writeup
categories:
  - vulnhub
---

[https://www.vulnhub.com/entry/hogwarts-dobby,597/](https://www.vulnhub.com/entry/hogwarts-dobby,597/)

```bash
sudo nmap -vvv -sS -sV -O 192.168.1.0/24
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/1.png){: .align-center}

Saldrá una IP con el puerto 80 abierto

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/2.png){: .align-center}

Abrir navegador e ir a la IP, en este caso

```bash
192.168.1.82
```

Se abrirá una web por defecto de apache

Hacemos click derecho e inspeccionar elemento

Abajo del todo veremos una pista que nos dice que miremos en /alohomora así que ponemos

```bash
192.168.122.23/alohomora
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/3.png){: .align-center}


Nos dirá que la clave de Draco es su casa (slytherin)

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/4.png){: .align-center}

Ahora hacemos un gobuster para ver qué más directorios existen

```bash
gobuster  dir -u 192.168.122.23 -P 80 -w /usr/share/dirb/wordlists/common.txt
```

Nos saldrán más directorios, entre ellos uno llamado log

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/5.png){: .align-center}

Accedemos a el así
```bash
192.168.122.23/log
```

Nos dará una contraseña y nos dirá que miremos en /DiagonAlley

La contraseña está cifrada en base64, la desciframos y saldrá algo así

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/6.png){: .align-center}

```bash
::ilikesocks
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/7.png){: .align-center}

Vamos a DiagonAlley así
```bash
192.168.122.23/DiagonAlley
```

Veremos una web con dos artículos

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/8.png){: .align-center}

El primer artículo tendrá un código cifrado, lo podemos descifrar en decode.fr/cipher-identifier

Ahora hacemos de nuevo un gobuster pero bajo ese directorio

```bash
gobuster  dir -u 192.168.122.23/DiagonAlley
```

Nos mostrará que hay varios directorios y archivos de wordpress, entre ellos uno llamado wp-admin

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/9.png){: .align-center}

Accedemos a él así
```bash
192.168.122.23/DiagonAlley/wp-admin
```

Nos saldrá una página de inicio de sesión

Colocamos de nombre Draco y de contraseña slytherin

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/10.png){: .align-center}

Copiar php-reverse-shell.php de /usr/share/webshells/php a Documentos

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/11.png){: .align-center}

Cambiar el propietario del archivo con chown para poder editarlo

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/12.png){: .align-center}

Editarlo con nano para que lo IP sea la de nuestro equipo y el puerto que queramos poner como escucha

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/13.png){: .align-center}

Copiar todo el código e ir a la web de wordpress con el usuario de Draco

Ir a Apariencia -> editor de temas

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/14.png){: .align-center}

Seleccionar de la lista el de error 404

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/15.png){: .align-center}

Pegar el código y aplicar cambios

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/16.png){: .align-center}

Usar el comando nc para escuchar desde ese puerto
```bash
nc -nlvp 4444
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/17.png){: .align-center}

Ingresar un enlace inválido en wordpress

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/18.png){: .align-center}

Se abrirá el acceso a la Shell del equipo que tiene wordpress

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/19.png){: .align-center}

Ejecutar el comando
```bash
find . -exec /bin/bash -p \; -quit
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/20.png){: .align-center}

Nos dará acceso al bash en lugar de sh y con el usuario root

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/21.png){: .align-center}

Cambiamos al usuario dobby con la contraseña que encontramos antes (ilikesocks)

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/22.png){: .align-center}

Vamos al directorio /home/dobby y usamos el comando base32 al archivo flag1.txt para poder leer archivos dado que cat no funciona

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/23.png){: .align-center}

Usamos la web dcode.fr/identification-chiffrement para saber que cifrado está utilizando y nos saldrá que es base32

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/24.png){: .align-center}

Lo pasamos por un descifrador de base32

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/25.png){: .align-center}

Y saldrá otra flag nueva, repetimos el proceso de detectar que cifrado usa

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/26.png){: .align-center}

Y nos dirá ques cifrado md5, lo desciframos

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/27.png){: .align-center}

Nos saldrá un mensaje que dice goodjob

Esto, no sirve para nada realmente

Ahora miramos el directorio del usuario root

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/28.png){: .align-center}

Y leemos el archivo llamado proof.txt

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/29.png){: .align-center}
