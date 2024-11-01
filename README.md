# tip-assessment

### Project Setup

#### 1. Create .env inside main project folder and paste:
```sh
VITE_SWOP_API_URL="https://swop.cx/rest"
VITE_SWOP_API_KEY="CREATE YOUR API TOKEN AT SWOP WEBSITE"
```

#### 2. Inside main project folder, run next steps:
```sh
- Run docker-compose build
- Run docker-compose up
- Access in your browser: http://localhost:3110/
```

### Lint with [ESLint](https://eslint.org/)

```sh
Run inside the container: npm run lint
```

### Cors error in development server

```sh
Use browser extension like it: https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino
```