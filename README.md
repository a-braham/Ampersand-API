# Ampersand Software Engineer Project

## Description
This is an app that helps operate battery swap network for ampersand.
## Documentation
In this project you can access the endpoints
- [![Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/7261441/2s8YYJp2gw)

### Dependencies
- NodeTS
- express
- yarn
- postgres
- sequelize


### Getting Started
#### Run The Service
- clone the repo git clone `https://github.com/a-braham/Ampersand-API.git`
- `cd Ampersand-API` to enter the dir of cloned repo
- install dependencies `yarn install`
- copy the `.env.example` to .env cp .env
- Update the `env` variables on .env accordingly
- create the db: `psql CREATE DATABAE db_name`
- Run migrations `yarn db:migrate` and seeders `yarn db:seed`
- Start the app `yarn dev`

### Testing
- WIP

### Contribute
- Fork the repo
- Branch from main
- Create a branch to work from.
- Once done working on your task push to your forked repo
- Create a PR and ask for review and merge.