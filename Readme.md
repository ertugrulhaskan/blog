
# Blog App

Create own blog application. (Server side application and I am working on it).
## Features

- AOuth
- CRUD Operations
- Responsive Design
- Dark Mode
- Cross platform

## Tech Stack

**Server:** Node, Express

**Database:** MongoDB





## Run Locally

Clone the project

```bash
  git clone https://github.com/ertugrulhaskan/blog.git
```

Go to the project directory

```bash
  cd blog
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

`MONGO_DB`

`SECRET_API_KEY`

## Roadmap

- Additional browser support

- Add more integrations


## API Reference

#### Get Life posts

```http
  GET /life
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get Life post details

```http
  GET /life/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

```http
  GET /tech-stack
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get Life post details

```http
  GET /tech-stack/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

```http
  GET /login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get Life post details

```http
  GET /register
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




## Feedback

If you have any feedback, please reach out to us at ertughaskan@gmail.com

