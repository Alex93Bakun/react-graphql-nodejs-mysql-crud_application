import cors from 'cors';
import express from 'express';
import { createConnection } from 'typeorm';
import {graphqlHTTP} from "express-graphql";
import { schema } from './Schema';
import {Users} from "./Entities/Users";

const main = async () => {
    await createConnection({
        type: 'mysql',
        database: 'graphqlcrud',
        username: "root",
        password: "root",
        logging: true,
        synchronize: false,
        entities: [Users]
    });

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

    app.listen(3001, () => {
        console.log(`Server started at port: 3001`);
    });
};

main().catch((err) => {
    console.log(err);
});
