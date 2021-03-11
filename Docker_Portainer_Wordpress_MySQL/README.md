# How to install Docker, portainer, wordpress, MySQL, nodejs and PSQL in RaspberryPi

1. Install docker as non-root user
	* ```curl -fsSL get.docker.com -o get-docker.sh && sh get-docker.sh```
1. Add pi user in Docker group
	* ```sudo usermod -aG docker pi```
1. Check docker version 
	* ```docker -v```
1. Block all incoming traffic, allow all outgoing traffic and allow ssh so we can ssh to our pi. And enable it
	* ```sudo ufw default deny incoming && sudo ufw default allow outgoing && sudo ufw allow ssh && sudo ufw enable```
1. Check ufw status
	* ```sudo ufw status```
1. Run portainer in docker container 
	* ```docker run --restart always -d --name portainer -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce```
1. Check all docker container is running
	* ```docker ps -a```	
1. Now we will install docker compose 
	* ```sudo apt install libffi-dev libssl-dev python3 python3-pip && pip3 install docker-compose```		
1. Create Dockerfile
	* ```nano Dockerfile```  and add ```FROM wordpress:latest```
	* ```ctrl+x``` press y and enter
1. Create a folder called db. Go inside the folder and create a file call Dockerfile and a the line
	* ```mkdir db```
	* ```cd db```
	* ```nano Dockerfile```
	* ```FROM hypriot/rpi-mysql:latest```
1. Create docker-compose.yaml file
	* ```nano docker-compose.yaml```
1. Add this to the file docker-compose.yaml file
	* Add this 
	```
	version: "3.7"
	services:
	 db:
	   build: ./db
	   container_name: db
	   ports:
		 - "3306:3306"
	   volumes:
		 - db_data:/var/lib/mysql
	   environment:
		 MYSQL_ROOT_PASSWORD: myrootpasswordisveryhard
		 MYSQL_DATABASE: wordpress
		 MYSQL_USER: wordpress
		 MYSQL_PASSWORD: myrootpasswordisveryhard
	   networks:
		 website_network:
		   aliases:
		     - wordpress         
	 wordpress:
	   build: .
	   container_name: wordpress_new
	   ports:
		 - "8080:80"
	   networks:
		 website_network:
		   aliases:
		     - wordpress
	   environment:
		 WORDPRESS_DB_HOST: db:3306
		 WORDPRESS_DB_USER: wordpress
		 WORDPRESS_DB_PASSWORD: myrootpasswordisveryhard
		 WORDPRESS_DB_NAME: wordpress
	 nodejs:
	   build: ./nodejs
	   container_name: nodejs
	   ports:
		 - "3000:3000" 
	 postgres:
		image: postgres
		container_name: postgres 
		environment:
		  POSTGRES_USER: postgres
		  POSTGRES_PASSWORD: postgres
		ports: 
		  - "5432:5432"
		volumes:
		  - psql_data:/var/lib/postgresql/data

	networks:
	 website_network:
	   name: website_network
	volumes:
	 db_data:
	   driver: local
	   name: db_data
	 psql_data:
	   driver: local
	   name: psql_data
	 ```
1. Now we will fire up our docker composer
	* ```docker-compose down && docker-compose build && docker-compose up -d && docker ps -a```


