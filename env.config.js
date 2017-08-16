module.exports = {
  LM_NODE_ENV: process.env.NODE_ENV || 'development',
  LM_PORT: process.env.PORT || 8080,
  LM_REST_ENV: process.env.REST_ENV,
  BASE_API_URL: process.env.BASE_API_URL || 'http://localhost:5000/api'
}
