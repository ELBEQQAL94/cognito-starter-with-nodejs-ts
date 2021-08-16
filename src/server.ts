import express from "express";
import App from "./app";

import HomeController from "./controllers/home.controller";
import AuthController from "./controllers/auth.controller";

const app = new App({
  port: 3333,
  controllers: [
    new HomeController(),
    new AuthController(),
    // new ProtectedController()
  ],
  middleWares: [express.json(), express.urlencoded({ extended: true })],
});

app.listen();
