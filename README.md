<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Tiny URL

Tiny URL is a REST API shortening service built with NestJS and Clean Architecture principles, designed to create shorter aliases for long URLs. This allows for easier sharing and tracking of URLs.

## Features

- URL Shortening: Convert long URLs into manageable short links.
- Redirection: Redirect short URLs to their original destinations.

## Getting Started

### Prerequisites

What things you need to install the software and how to install them.

```bash
node -v  &&
npm -v && 
docker -v && 
docker-compose -v
```

### Installing

A step-by-step series of examples that tell you how to get a development environment running.

1. Clone the repository:

```bash
   git clone https://github.com/yourusername/tiny-url.git
```

2. Install NPM packages:

```bash
  npm install
```

3. Use docker to run:

```
npm run docker:dev
```

### Running the Tests

```bash
npm run test
```

### Built With

- NestJS - The framework used
- TypeORM - ORM used
- Docker - Containerization platform
- Clean Architecture
