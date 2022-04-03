export default () => ({
  port: parseInt(process.env.PORT, 10) || 3333,
  database: {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    name: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT, 10) || 5432,
  },
  jwt: {
    secret: String(process.env.JWT_SCRET),
  },
});
