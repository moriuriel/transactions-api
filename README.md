<h1 align="center">
  Transactions API 🪙
</h1>

## Requisitos

- Docker
- docker-compose

## Instalação

```bash
$ yarn install
```

## Env

```bash
cp .env.example .env
```

```
DB_PORT=
DB_USER=
DB_PASS=
DB_NAME=

JWT_SCRET=

PORT=
```

## Iniciar aplicação

```bash
$ yarn docker:up
```

## Parar aplicação

```bash
$ yarn docker:down
```

## Testes

```bash
$ yarn test

$ yarn test:e2e

$ npm run test:cov
```

## API Request

`USERS`

| Endpoint   | HTTP Method |        Descrição         |
| ---------- | :---------: | :----------------------: |
| `/user`    |   `POST`    |     `Criar usuário`      |
| `/user/me` |    `GET`    | `Lista dados do usuário` |

`Auth`

| Endpoint | HTTP Method |      Descrição       |
| -------- | :---------: | :------------------: |
| `/auth`  |   `POST`    | `Autenticar usuário` |

## Request via Curl

- Criar usuário

`Request`

```curl
curl --request POST \
  --url http://localhost:8080/users \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "Joe Doe",
	"user_name": "joeDoe",
	"password": "password",
	"email": "joe@doe.com"
}'
```

- Listar dados do usuário

`Request`

```curl
  curl --request GET \
  --url http://localhost:8080/user/me \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvZUBkb2UuY29tIiwiaWF0IjoxNjQ4OTI3Mzg3LCJleHAiOjE2NDg5Mjc0NDd9.ufw1OECaKmVzSee8n3JYVw-LxwtqmH5mls5pr8LqKcg'
```

`Response`

```json
{
  "account": {
    "_id": "62465506c400c6a99f34eb03",
    "password": "$2a$08$dNf1dcrUoWbLKvdJ/TE.Xe5g5UKeAc5hsP4YWUzM9yZ6g9nG2eVpG",
    "email": "joe@doe.com",
    "user_name": "Joe Doe",
    "name": "Joe Doe",
    "createdAt": "2022-04-01T01:27:34.366Z",
    "updatedAt": "2022-04-01T01:27:34.366Z",
    "__v": 0
  }
}
```

- Autenticar usuário

`Request`

```curl
curl --request POST \
  --url http://localhost:8080/auth \
  --header 'Content-Type: application/json' \
  --data '{
	"email": "joe@doe.com",
	"password": "Joe Doe"
}'
```

`Response`

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvZUBkb2UuY29tIiwiaWF0IjoxNjQ4Nzc2ODM1LCJleHAiOjE2NDg3NzY4OTV9.Jv0uo_d7cMdOwe7YLUEr6RCcblz2SMPQr5zdgBHwUoE"
}
```
