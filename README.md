
```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

### Before test

```bash
# unit tests
$ pnpm run test

# e2e tests 
$ pnpm run test:e2e

# test coverage 
$ pnpm run test:cov
```


## development commands cheatsheet:
### bootstrap a local posgreSQL instance with Docker
```bash
docker run  --name container-name-postgres -p 5432:5432 -e POSTGRES_PASSWORD=123456 -d postgres

### introduction
#  --name specify the container name, so you can start or stop it on your computer
# -e refers to environment variables,
# -d means detached mode, which means the container runs in the background
#    and we can use our terminal for other commands.
###
```
### References
    - [how to set up a PostgreSQL Database with Docker in Youtube](https://www.youtube.com/watch?v=RdPYA-wDhTA)
    - [Docker Image in docker hub](https://hub.docker.com/_/postgres)
