<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
<img src="assets/project-name.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Ticket Nami Project</h3>

  <p align="center">
    This Project to book tickets for events
    <br />
    <a href="https://ticket.longphanp.com"><strong>Website</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

> https://ticket-api.longphanp.com

- This api service allow you to book a ticket for an event.

### Built With

- [![Node][Node]][Node-url]
- [![Typescript][Typescript]][Typescript-url]
- [![ExpressJs][ExpressJs]][ExpressJs-url]
- [![MongoDb][MongoDb]][MongoDb-url]
- [![Redis][Redis]][Redis-url]
- [![RabbitMQ][RabbitMQ]][RabbitMQ-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

You need to install Node >= v18.19.1

- MacOS

```bash
  brew install node@18.19.1
```

- Linux

```bash
  sudo apt install node@18.19.1
```

Check to see node available on your machine

```bash
  node -v
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/longphanp/booking-ticket-service.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create .env file that include

   ```
    PORT=
    MONGO_SCHEME=
    MONGO_HOST=
    MONGO_USERNAME=
    MONGO_PASSWORD=
    MONGO_DB

    REDIS_HOST=
    REDIS_PORT=
    REDIS_PASSWORD=

    RABBITMQ_PROTOCOL=
    RABBITMQ_HOST=
    RABBITMQ_PORT=
    RABBITMQ_USERNAME=
    RABBITMQ_PASSWORD=

    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=

    GMAIL_USERNAME=
    GMAIL_PASSWORD=

   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

### Run this project

- For development env

```bash
 npm run dev
```

Go to http://localhost:$PORT

- For production env

  ```bash
    npm run build
    npm run start
  ```

  Go to http://localhost:$PORT

## Contact

Phan Long - phanlonghd5200@gmail.com

Project Link: [https://github.com/longphanp/booking-ticket-service.git](https://github.com/longphanp/booking-ticket-service.git)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: images/screenshot.png
[Node]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Typescript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[MongoDb]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDb-url]: https://www.mongodb.com/
[ExpressJs]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[ExpressJs-url]: https://expressjs.com/
[Redis]: https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white
[Redis-url]: https://redis.io/
[RabbitMQ]: https://img.shields.io/badge/rabbitmq-%23FF6600.svg?&style=for-the-badge&logo=rabbitmq&logoColor=white
[RabbitMQ-url]: https://www.rabbitmq.com/
