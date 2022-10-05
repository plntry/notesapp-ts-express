import 'dotenv/config'
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import connection from './repositories/connection/connection';
import { notesRouter } from "./routes/notes.router";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}
 
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/notes', notesRouter);


const start = async (): Promise<void> => {
    try {
      await connection.sync();
      app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
      });
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
void start();


// app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`);
// });