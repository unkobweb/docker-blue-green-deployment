# Utilisation de l'image officielle d'Apache
FROM httpd:latest

# Copier le fichier HTML dans le dossier web d'Apache
COPY index.html /usr/local/apache2/htdocs/

# Configuration du reverse proxy pour /backend
RUN echo "LoadModule proxy_module modules/mod_proxy.so" >> /usr/local/apache2/conf/httpd.conf
RUN echo "LoadModule proxy_http_module modules/mod_proxy_http.so" >> /usr/local/apache2/conf/httpd.conf
RUN echo "ProxyPass /backend http://backend:3000/" >> /usr/local/apache2/conf/httpd.conf
RUN echo "ProxyPassReverse /backend http://backend:3000/" >> /usr/local/apache2/conf/httpd.conf
