const isDevelopment = process.env.NODE_ENV !== "production";

export const ROOT_URL = isDevelopment
  ? `http://localhost:${process.env.DEV_PORT}`
  : `${process.env.HOST_FRONTEND}`;
