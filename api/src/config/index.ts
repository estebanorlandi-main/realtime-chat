export const API = {
  port: process.env.PORT || 3001,
};

export const DB = {
  name: process.env.DB_NAME || "chat",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 27017,
};

export default {
  ...API,
  ...DB,
};
