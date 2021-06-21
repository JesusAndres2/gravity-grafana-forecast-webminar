# gravity-grafana-forecast-webminar
Repository with information and code of Gravity webminar. You can find here useful resources to reply all matery that has been imparted
This repository is a Webminar, so subfolders contains distinct modules of it.

* history-data-extractor: Extract data from forecast API in multiple coordinates and send it to other module by http.
* db-writer: Receives an Incoming event with data to insert in database.

# Specifications
* Node version: lts/fermium due to a error with serverless offline with post methods
https://github.com/dherault/serverless-offline/issues/1150
* Docker: We are goind to need docker images about postgresql and Grafana (alguna más?)
* DB Manager: DBeaver, for example
* Stormglass Api Key

# Docker commands
* Postgresql
- sudo docker run --name grafana-forecast --network="host" -e POSTGRES_PASSWORD=mysecretpassword -d postgres
* Grafana
* Prometheus?

# Grafana plugins
