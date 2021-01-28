# How to run NodeJS and PSQL in Docker portainer

1. SSH to your PI and create a folder 
	* ```mkdir nodeProject``` 
1. Bring your nodejs project the folder ("nodeProject") we just created
1. Now login to your portainer and click Stacks and +Add stack
	* 
	```
	version: "2.2"
	services:
	  node:
		image: "node:latest"
		user: "node"
		working_dir: /home/node/app
		environment:
		  - NODE_ENV=development
		volumes:
		  - /home/pi/nodeProject:/home/node/app
		ports:
		  - 3000:3000
		command: "npm run dev"   
	  postgres:
		image: "postgres:latest"
		ports:
		  - 5432:5432
		environment:
		  - POSTGRES_PASSWORD=12345678
		  - PGDATA=/var/lib/postgresql/data/pgdata
		volumes:
		  - /home/pi/psqldata/:/var/lib/postgresql/data
	```
1. Open the browser and navigate to http://yourraspberrypiip:3000/ . You should see your nodejs project in up.
1. When you make changes in your node project, it will automatically update your project. You don't need to restart the sever since we are running our app.js by nodemon, check package.json line 8.
1. To check PSQL go to the terminal and write
	* ```docker exec -it nodepsql_postgres_1 bash```
	* ```psql postgres --u postgres```
	* ```\l``` to see add the database available
	* ```\c databaseName``` to connect to the database
	* ```\dt``` to see the table belong to the database
1. To create a new PSQL user and dabatase
	* ```CREATE ROLE newuser WITH LOGIN PASSWORD '12345678';```
	* ```ALTER ROLE newuser CREATEDB;```
	* ```\q```
	* ```psql postgres -U newuser```
	* ```CREATE DATABASE newdatabase;```
	* ```GRANT ALL PRIVILEGES ON DATABASE newdatabase TO newuser;```
	* ```\q```
	
1. If you want to user docker-compose and NOT PORTAINER. Download docker-compose folder and run
	* ```docker-compose down && docker-compose build && docker-compose up -d && docker ps -a``` 
1. I made two different script. One for development and another one for production.	
1. For development use
	* ```docker-compose down && docker-compose build && docker-compose up -d && docker ps -a```
1. For production use
	* ```docker-compose down && docker-compose -f docker-compose-production.yaml build && docker-compose -f docker-compose-production.yaml up -d && docker ps -a```
1. Open the browser and navigate to http://yourraspberrypiip:3000/ . You should see your nodejs project up and running.	
