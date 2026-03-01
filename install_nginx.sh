#!/bin/bash

sudo apt-get update
sudo apt-get install nginx -y

sudo systemctl start nginx
sudo systemctl enable nginx

echo "<h1> Terraform in on shot by Shatataraka </h1>" | sudo tee /var/www/nginx/html/index.html

