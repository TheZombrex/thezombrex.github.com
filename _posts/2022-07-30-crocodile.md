---
title: "Crocodile"
excerpt: "[StartingPoint][HackTheBox] Writeup de crocodile."
header:
  teaser: ""
tags:
  - hackthebox
  - StartingPoint
  - writeup
categories:
  - hackthebox
---

# Preguntas

**What nmap scanning switch employs the use of default scripts during a scan?**

-sC

**What service version is found to be running on port 21?**

Vsftpd 3.0.3

**What FTP code is returned to us for the "Anonymous FTP login allowed" message?**

230

**What command can we use to download the files we find on the FTP server?**

get

**What is one of the higher-privilege sounding usernames in the list we retrieved?**

admin

**What version of Apache HTTP Server is running on the target host?**

2.4.41

**What is the name of a handy web site analysis plug-in we can install in our browser?**

Wappalyzer

**What switch we can use with gobuster to specify we are looking for specific filetypes?**

-x

**What file have we found that can provide us a foothold on the target?**

login.php

# Proceso

Entrar al sitio web desde el navegador poniendo la ip

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/htb/crocodile/1.png){: .align-center}

Analizar todos los directorios de la web utilizando el diccionario de palabras comunes de dirb y usando el comando

```bash
gobuster dir –u 10.129.142.57 -w /usr/share/dirb/wordlists/common.txt -x .php  
```

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/htb/crocodile/2.png){: .align-center}

Saldrá una web de login  

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/htb/crocodile/3.png){: .align-center}

Entrar al login de la web

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/htb/crocodile/4.png){: .align-center}

Entrar por ftp al sitio de forma anónima usando el comando  

```bash
ftp 10.129.142.57  
```
![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/htb/crocodile/5.png){: .align-center}

Listar el contenido con el comando `ls`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/htb/crocodile/6.png){: .align-center}

Descargar ambos archivos usando el comando  

`get allowed.userlist`  y  `get allowed.userlist.passwd`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/htb/crocodile/7.png){: .align-center}

Leer ambos archivos desde el directorio personal

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/htb/crocodile/8.png){: .align-center}

Utilizar el usuario admin y la contraseña `rKXM59ESxesUFHAd`

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/htb/crocodile/9.png){: .align-center}

Aparecerá la flag

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/htb/crocodile/10.png){: .align-center}
