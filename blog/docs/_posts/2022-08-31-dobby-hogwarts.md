---
title: "Markup: Another Post with Images"
excerpt: "Examples and code for displaying images in posts."
header:
  teaser: "http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_c.jpg"
tags: 
  - sample post
  - images
  - test
---


https://www.vulnhub.com/entry/hogwarts-dobby,597/

`sudo nmap -vvv -sS -sV -O 192.168.1.0/24`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/dobby_hogwarts/1.png){: .align-center}

Saldrá una IP con el puerto 80 abierto


Abrir navegador e ir a la IP, en este caso

`192.168.1.82`

Se abrirá una web por defecto de apache

Hacemos click derecho e inspeccionar elemento

Abajo del todo veremos una pista que nos dice que miremos en /alohomora así que ponemos

`192.168.122.23/alohomora`


Nos dirá que la clave de Draco es su casa (slytherin)


Ahora hacemos un gobuster para ver qué más directorios existen

`gobuster  dir -u 192.168.122.23 -P 80 -w /usr/share/dirb/wordlists/common.txt`

Nos saldrán más directorios, entre ellos uno llamado log



Accedemos a el así `192.168.122.23/log`

Nos dará una contraseña y nos dirá que miremos en /DiagonAlley

La contraseña está cifrada en base64, la desciframos y saldrá algo así


`::ilikesocks`


Vamos a DiagonAlley así `192.168.122.23/DiagonAlley`

Veremos una web con dos artículos


El primer artículo tendrá un código cifrado, lo podemos descifrar en decode.fr/cipher-identifier

Ahora hacemos de nuevo un gobuster pero bajo ese directorio

`gobuster  dir -u 192.168.122.23/DiagonAlley`

Nos mostrará que hay varios directorios y archivos de wordpress, entre ellos uno llamado wp-admin

Accedemos a él así `192.168.122.23/DiagonAlley/wp-admin`

Nos saldrá una página de inicio de sesión

Colocamos de nombre Draco y de contraseña slytherin

Copiar php-reverse-shell.php de /usr/share/webshells/php a Documentos 

Cambiar el propietario del archivo con chown para poder editarlo 

Editarlo con nano para que lo IP sea la de nuestro equipo y el puerto que queramos poner como escucha 

Copiar todo el código e ir a la web de wordpress con el usuario de Draco 

Ir a Apariencia -> editor de temas 
 
Seleccionar de la lista el de error 404 

Pegar el código y aplicar cambios 

Usar el comando `nc -nlvp 4444` para escuchar desde ese puerto 

Ingresar un enlace inválido en wordpress 

Se abrirá el acceso a la Shell del equipo que tiene wordpress 

Ejecutar el comando `find . -exec /bin/bash -p \; -quit` 

Nos dará acceso al bash en lugar de sh y con el usuario root 

O cambiamos al usuario dobby con la contraseña que encontramos antes (ilikesocks) 

Vamos al directorio /home/dobby y usamos el comando base32 al archivo flag1.txt para poder leer archivos dado que Cat no funciona 

Usamos la web dcode.fr/identification-chiffrement para saber que cifrado está utilizando y nos saldrá que es base32 

Lo pasamos por un descifrador de base32 

Y saldrá otra flag nueva, repetimos el proceso de detectar que cifrado usa 

Y nos dirá ques cifrado md5, lo desciframos 

Nos saldrá un mensaje que dice goodjob 

Esto, no sirve para nada realmente 

Ahora miramos el directorio del usuario root 

Y leemos el archivo llamado proof.txt 

Here are some examples of what a post with images might look like. If you want to display two or three images next to each other responsively use `figure` with the appropriate `class`. Each instance of `figure` is auto-numbered and displayed in the caption.

### Figures (for images or video)

#### One Up

<figure>
	<a href="http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_b.jpg"><img src="http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_c.jpg"></a>
	<figcaption><a href="http://www.flickr.com/photos/80901381@N04/7758832526/" title="Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr">Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr</a>.</figcaption>
</figure>

Vero laborum commodo occupy. Semiotics voluptate mumblecore pug. Cosby sweater ullamco quinoa ennui assumenda, sapiente occupy delectus lo-fi. Ea fashion axe Marfa cillum aliquip. Retro Bushwick keytar cliche. Before they sold out sustainable gastropub Marfa readymade, ethical Williamsburg skateboard brunch qui consectetur gentrify semiotics. Mustache cillum irony, fingerstache magna pour-over keffiyeh tousled selfies.

#### Two Up

Apply the `half` class like so to display two images side by side that share the same caption.

```html
<figure class="half">
    <a href="/assets/images/image-filename-1-large.jpg"><img src="/assets/images/image-filename-1.jpg"></a>
    <a href="/assets/images/image-filename-2-large.jpg"><img src="/assets/images/image-filename-2.jpg"></a>
    <figcaption>Caption describing these two images.</figcaption>
</figure>
```

And you'll get something that looks like this:

<figure class="half">
	<a href="http://placehold.it/1200x600.JPG"><img src="http://placehold.it/600x300.jpg"></a>
	<a href="http://placehold.it/1200x600.jpeg"><img src="http://placehold.it/600x300.jpg"></a>
	<figcaption>Two images.</figcaption>
</figure>

#### Three Up

Apply the `third` class like so to display three images side by side that share the same caption.

```html
<figure class="third">
	<img src="/images/image-filename-1.jpg">
	<img src="/images/image-filename-2.jpg">
	<img src="/images/image-filename-3.jpg">
	<figcaption>Caption describing these three images.</figcaption>
</figure>
```

And you'll get something that looks like this:

<figure class="third">
	<img src="http://placehold.it/600x300.jpg">
	<img src="http://placehold.it/600x300.jpg">
	<img src="http://placehold.it/600x300.jpg">
	<figcaption>Three images.</figcaption>
</figure>
