var store = [{
        "title": "Appointment",
        "excerpt":"Preguntas What does the acronym SQL stand for? Structured Query Language What is one of the most common type of SQL vulnerabilities? SQL injection What does PII stand for? Personally Identifiable Information What does the OWASP Top 10 list name the classification for this vulnerability? A03:2021-Injection What service and version...","categories": ["hackthebox"],
        "tags": ["hackthebox","StartingPoint","writeup"],
        "url": "/hackthebox/appointment/",
        "teaser": ""
      },{
        "title": "Breakout",
        "excerpt":"https://www.vulnhub.com/series/empire,507/ sudo nmap -vvv -sS -sV -O 192.168.1.0/24 Saldrá la máquina breakout Entrar al servidor web con la dirección 192.168.1.146, saldrá la web por defecto de Apache Dar click derecho e inspeccionar elemento y saldrá un mensaje encriptado Usar el identificador de cifrado de la web decode.fr, dirá que es...","categories": ["vulnhub"],
        "tags": ["vulnhub","easy","writeup"],
        "url": "/vulnhub/breakout/",
        "teaser": ""
      },{
        "title": "Crocodile",
        "excerpt":"Preguntas What nmap scanning switch employs the use of default scripts during a scan? -sC What service version is found to be running on port 21? Vsftpd 3.0.3 What FTP code is returned to us for the “Anonymous FTP login allowed” message? 230 What command can we use to download...","categories": ["hackthebox"],
        "tags": ["hackthebox","StartingPoint","writeup"],
        "url": "/hackthebox/crocodile/",
        "teaser": ""
      },{
        "title": "Dancing",
        "excerpt":"Preguntas What does the 3-letter acronym SMB for? server message block What port does SMB use to operate at? 445 What network communication model does SMB use, architecturally speaking? client_server model What is the service name for port 445 that came up in our nmap scan? microsoft-ds What is the...","categories": ["hackthebox"],
        "tags": ["hackthebox","StartingPoint","writeup"],
        "url": "/hackthebox/dancing/",
        "teaser": ""
      },{
        "title": "Fawn",
        "excerpt":"Preguntas What does the 3-letter acronym FTP stand for? file transfer protocol Which port does the FTP service listen on usually? 21 What acronym is used for the secure version of FTP? sftp What is the command we can use to send an ICMP echo request to test our connection...","categories": ["hackthebox"],
        "tags": ["hackthebox","StartingPoint","writeup"],
        "url": "/hackthebox/fawn/",
        "teaser": ""
      },{
        "title": "LupinOne",
        "excerpt":"https://www.vulnhub.com/entry/empire-lupinone,750/ sudo nmap -vvv -sS -sV -O 192.168.1.0/24 Saldrá la máquina LupinOne Entrar al servidor web con la dirección 192.168.1.146, saldrá una web con el logo de LupinOne. Al inspeccionar elemento no se encuentra nada Hacer un escaneo de todos los directorios del servidor Ir a /robots.txt Usar ffuf para...","categories": ["vulnhub"],
        "tags": ["vulnhub","medium","writeup"],
        "url": "/vulnhub/lupinone/",
        "teaser": ""
      },{
        "title": "Meow",
        "excerpt":"Preguntas What does the acronym VM stand for? virtual machine What do we use to interact with the operating system in order to issue commands via the command line, such as the one to start our VPN connection? It’s also known as a console or shell terminal What service do...","categories": ["hackthebox"],
        "tags": ["hackthebox","StartingPoint","writeup"],
        "url": "/hackthebox/meow/",
        "teaser": ""
      },{
        "title": "MrRobot",
        "excerpt":"https://www.vulnhub.com/entry/mr-robot-1,151/ sudo nmap -vvv -sS -sV -O 192.168.1.0/24 Saldrá una IP con el puerto 80 abierto Abrir navegador e ir a la IP, en este caso 192.168.1.132 Realizar un gobuster para ver los directorios ocultos en la web Saldrán varios directorios, entre ellos uno llamado /robots Ir a 192.168.122.132/robots Saldrán...","categories": ["vulnhub"],
        "tags": ["vulnhub","easy","writeup"],
        "url": "/vulnhub/mrrobot/",
        "teaser": ""
      },{
        "title": "Redeemer",
        "excerpt":"Preguntas Which TCP port is open on the machine? 6379 Which service is running on the port that is open on the machine? Redis What type of database is Redis? Choose ftom the following options: (i) In-memory Database, (ii) Traditional Database In-memory Database Which command-line utility is used to interact...","categories": ["hackthebox"],
        "tags": ["hackthebox","StartingPoint","writeup"],
        "url": "/hackthebox/redeemer/",
        "teaser": ""
      },{
        "title": "Dobby hogwarts",
        "excerpt":"https://www.vulnhub.com/entry/hogwarts-dobby,597/ sudo nmap -vvv -sS -sV -O 192.168.1.0/24 Saldrá una IP con el puerto 80 abierto Abrir navegador e ir a la IP, en este caso 192.168.1.82 Se abrirá una web por defecto de apache Hacemos click derecho e inspeccionar elemento Abajo del todo veremos una pista que nos dice...","categories": ["vulnhub"],
        "tags": ["vulnhub","easy","writeup"],
        "url": "/vulnhub/dobby-hogwarts/",
        "teaser": ""
      },{
        "title": "KBVuln 1",
        "excerpt":"https://www.vulnhub.com/entry/kb-vuln-1,540/ sudo nmap -vvv -sS -sV -O 192.168.122.0/24 Saldrá una máquina con varios puertos abiertos Entrar al servidor web desde el navegador, aparecerá una web normal Analizar directorios ocultos con gobuster gobuster dir –u 192.168.122.4 -w /usr/share/dirb/wordlists/common.txt No aparece nada fuera de lo normal. Tratar de entrar en el servidor...","categories": ["vulnhub"],
        "tags": ["vulnhub","easy","writeup"],
        "url": "/vulnhub/kbvuln1/",
        "teaser": ""
      },{
        "title": "KBVuln 2",
        "excerpt":"https://www.youtube.com/watch?v=WhLngRlmMrA https://github.com/wetw0rk/malicious-wordpress-plugin sudo nmap -vvv -sS -sV -O 192.168.122.0/24 Saldrá una máquina con varios puertos abiertos Entrar al servidor web con la dirección 192.168.122.6, saldrá la web por defecto de Apache Usar gobuster para ver directorios ocultos, mostrará como resultado varios directorios, entre ellos uno llamado wordpress sudo gobuster dir...","categories": ["vulnhub"],
        "tags": ["vulnhub","easy","writeup"],
        "url": "/vulnhub/kbvuln2/",
        "teaser": ""
      },{
    "title": "Page Not Found",
    "excerpt":"Sorry, but the page you were trying to view does not exist.  ","url": "http://localhost:4000/404.html"
  },{
    "title": "About",
    "excerpt":"Me llamo David Fernández Pérez, aunque en internet uso el seudonimo de TheZombrex. Soy un aficionado de la informática desde los 12 años y trato de aprender lo máximo posible por mi cuenta. Este blog será un intento de reflejar todo lo que voy aprendiendo en la seguridad informática. Si...","url": "http://localhost:4000/about/"
  },{
    "title": "Archive Layout with Content",
    "excerpt":"A variety of common markup showing how the theme styles them. Header one Header two Header three Header four Header five Header six Blockquotes Single line blockquote: Stay hungry. Stay foolish. Multi line blockquote with a cite reference: People think focus means saying yes to the thing you’ve got to...","url": "http://localhost:4000/archive-layout-with-content/"
  },{
    "title": "Posts by Category",
    "excerpt":" ","url": "http://localhost:4000/categories/"
  },{
    "title": "Posts by Collection",
    "excerpt":"                                                                                                         ","url": "http://localhost:4000/collection-archive/"
  },{
    "title": "Edge Case",
    "excerpt":"Sample post listing for the category Edge Case.  ","url": "http://localhost:4000/categories/edge-case/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:4000/"
  },{
    "title": "Lorem Ipsum",
    "excerpt":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend imperdiet, nisi orci ullamcorper massa, et adipiscing orci velit quis magna. Praesent sit amet ligula id orci venenatis...","url": "http://localhost:4000/lorem-ipsum/"
  },{
    "title": null,
    "excerpt":"var idx = lunr(function () { this.field('title') this.field('excerpt') this.field('categories') this.field('tags') this.ref('id') this.pipeline.remove(lunr.trimmer) for (var item in store) { this.add({ title: store[item].title, excerpt: store[item].excerpt, categories: store[item].categories, tags: store[item].tags, id: item }) } }); $(document).ready(function() { $('input#search').on('keyup', function () { var resultdiv = $('#results'); var query = $(this).val().toLowerCase(); var result = idx.query(function...","url": "http://localhost:4000/assets/js/lunr/lunr-en.js"
  },{
    "title": null,
    "excerpt":"step1list = new Array(); step1list[\"ΦΑΓΙΑ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΟΥ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΩΝ\"] = \"ΦΑ\"; step1list[\"ΣΚΑΓΙΑ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΟΥ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΩΝ\"] = \"ΣΚΑ\"; step1list[\"ΟΛΟΓΙΟΥ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΑ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΩΝ\"] = \"ΟΛΟ\"; step1list[\"ΣΟΓΙΟΥ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΑ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΩΝ\"] = \"ΣΟ\"; step1list[\"ΤΑΤΟΓΙΑ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΟΥ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΩΝ\"] = \"ΤΑΤΟ\"; step1list[\"ΚΡΕΑΣ\"]...","url": "http://localhost:4000/assets/js/lunr/lunr-gr.js"
  },{
    "title": null,
    "excerpt":"var store = [ {%- for c in site.collections -%} {%- if forloop.last -%} {%- assign l = true -%} {%- endif -%} {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%} {%- for doc in docs -%} {%- if doc.header.teaser -%} {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture...","url": "http://localhost:4000/assets/js/lunr/lunr-store.js"
  },{
    "title": "Markup",
    "excerpt":"Sample post listing for the tag `markup`. ","url": "http://localhost:4000/tags/markup/"
  },{
    "title": "Page A",
    "excerpt":"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.","url": "http://localhost:4000/page-a/"
  },{
    "title": "Page Archive",
    "excerpt":"{% for post in site.pages %}   {% unless post.hidden %}     {% include archive-single.html %}   {% endunless %} {% endfor %} ","url": "http://localhost:4000/page-archive/"
  },{
    "title": "Page B",
    "excerpt":"(lorem ipsum)","url": "http://localhost:4000/page-b/"
  },{
    "title": "Pets",
    "excerpt":"Sample document listing for the collection `_pets`. ","url": "http://localhost:4000/pets/"
  },{
    "title": "Portfolio",
    "excerpt":"Sample document listing for the collection `_portfolio`. ","url": "http://localhost:4000/portfolio/"
  },{
    "title": "Post Archive with Feature Rows",
    "excerpt":"{% for post in site.posts limit: 5 %}   {% include archive-single.html %} {% endfor %}  {% include feature_row id=\"intro\" type=\"center\" %}  {% include feature_row %}  {% include feature_row id=\"feature_row2\" type=\"left\" %}  {% include feature_row id=\"feature_row3\" type=\"right\" %}  {% include feature_row id=\"feature_row4\" type=\"center\" %}","url": "http://localhost:4000/post-archive-feature-rows/"
  },{
    "title": "Recipes",
    "excerpt":"Sample document listing for the collection `_recipes`.","url": "http://localhost:4000/recipes/"
  },{
    "title": "Sample Page",
    "excerpt":"This is an example page. It's different from a blog post because it will stay in one place and will show up in your site navigation (in most themes). Most people start with an About page that introduces them to potential site visitors. It might say something like this: >...","url": "http://localhost:4000/sample-page/"
  },{
    "title": "Sitemap",
    "excerpt":"A list of all the posts and pages found on the site. For you robots out there is an [XML version]({{ \"sitemap.xml\" | relative_url }}) available for digesting as well. Pages {% for post in site.pages %} {% include archive-single.html %} {% endfor %} Posts {% for post in site.posts...","url": "http://localhost:4000/sitemap/"
  },{
    "title": "Splash Page",
    "excerpt":"{% include feature_row id=\"intro\" type=\"center\" %}  {% include feature_row %}  {% include feature_row id=\"feature_row2\" type=\"left\" %}  {% include feature_row id=\"feature_row3\" type=\"right\" %}  {% include feature_row id=\"feature_row4\" type=\"center\" %}","url": "http://localhost:4000/splash-page/"
  },{
    "title": "Posts by Tag",
    "excerpt":"","url": "http://localhost:4000/tags/"
  },{
    "title": "Terms and Privacy Policy",
    "excerpt":"## Privacy Policy The privacy of my visitors is extremely important. This Privacy Policy outlines the types of personal information that is received and collected and how it is used. First and foremost, I will never share your email address or any other personal information to anyone without your direct...","url": "http://localhost:4000/terms/"
  },{
    "title": "Posts by Year",
    "excerpt":"","url": "http://localhost:4000/year-archive/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:4000/page2/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:4000/page3/"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %} {% endif %} {% assign collections = site.collections | where_exp:'collection','collection.output != false' %}{% for collection in collections %}{% assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}{% for doc in docs %} {{ doc.url | replace:'/index.html','/' | absolute_url | xml_escape }} {% if doc.last_modified_at or doc.date...","url": "http://localhost:4000/sitemap.xml"
  },{
    "title": null,
    "excerpt":"Sitemap: {{ \"sitemap.xml\" | absolute_url }} ","url": "http://localhost:4000/robots.txt"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %}{% endif %}Jekyll{{ site.time | date_to_xmlschema }}{{ page.url | absolute_url | xml_escape }}{% assign title = site.title | default: site.name %}{% if page.collection != \"posts\" %}{% assign collection = page.collection | capitalize %}{% assign title = title | append: \" | \" | append: collection %}{% endif...","url": "http://localhost:4000/feed.xml"
  }]
