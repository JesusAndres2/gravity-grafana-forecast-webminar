# gravity-grafana-forecast-webminar
Repository with information and code of Gravity webminar. You can find here useful resources to reply all matery that has been imparted
This repository is a Webminar, so subfolders contains distinct modules of it.

* history-data-extractor: Extract data from forecast API in multiple coordinates and send it to other module by http.
* db-writer: Receives an Incoming event with data to insert in database.

# Specifications
* Node version: lts/fermium due to a error with serverless offline with post methods
https://github.com/dherault/serverless-offline/issues/1150
* Docker: We are goind to need docker images about postgresql and Grafana
* DB Manager: DBeaver, for example
* Stormglass Api Key

# Docker commands
* Postgresql
To use as our metrics database
- docker run --name forecast-metrics-db -p 5436:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres
To use as Grafana database. Set in another port.
- docker run --name grafana-db -p 5434:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres

* Grafana
Extract BD and datasource IPs to use as Environment variables of Grafana container and Grafana Datasource.

- docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' grafana-db
- docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' forecast-metrics-db

With these IPs, we can run Grafana container. Assume 172.17.0.2 is the ip of grafana-db.

- docker run -d -p 8080:3000 --name=grafana-webminar -e "GF_DATABASE_TYPE=postgres" -e "GF_DATABASE_HOST=172.17.0.2:5432" -e "GF_DATABASE_NAME=postgres" -e "GF_DATABASE_USER=postgres" -e "GF_DATABASE_PASSWORD=mysecretpassword" grafana/grafana  

# Test Users

* admin/webminar
* Yisus/Yisus

Create a User and set Password. Use the invite link to set pwd.

* https://community.grafana.com/t/create-new-user/xxxx/x


# Grafana plugins
Install example
* docker exec -ti id-container sh
* grafana-cli plugins install digrich-bubblechart-panel
* docker restart id-container

Used Plugins:
- Bubble Chart
- Pie Chart
- GeoMap

# Run all
docker start grafana-db forecast-metrics-db grafana-webminar

# Stop all

docker start grafana-db forecast-metrics-db grafana-webminar

# Run code

* Use nvm to use the correct version of NodeJS
* In db writer folder, execute npm install && npm run start:local
* in metrics extractor, execute npm install and run index.js.