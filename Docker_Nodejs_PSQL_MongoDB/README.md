# How to run NodeJS, PSQL and MongoDB in Docker portainer

1. SSH to your PI and create a folder 
	* ```mkdir nodeProject``` 
1. Bring your nodejs project the folder we just created
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
1. To check PSQL
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
	
		

