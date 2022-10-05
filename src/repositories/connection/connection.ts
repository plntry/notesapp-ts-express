import { Sequelize } from "sequelize-typescript";

import { Note } from "../models/notes.model";

const hostname = process.env.HOST;
const username = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DB;
const dialect: any = process.env.DIALECT;

const connection = new Sequelize({
  dialect: dialect,
  host: hostname,
  username: username,
  password: password,
  database: database,
  logging: false,
  models: [Note],
});

export default connection;