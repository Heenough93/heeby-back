import cors from 'cors';

const corsOptions: cors.CorsOptions = {
  origin: [
    'http://localhost:3000',
    'https://heeby.kr',
  ],
  methods: [ 'POST', 'GET', 'PUT', 'DELETE' ],
  allowedHeaders: [ 'Content-Type', 'Authorization' ],
  exposedHeaders: [ 'Auth-Token' ],
  credentials: false,
  maxAge: 3600,
};

export default cors(corsOptions);