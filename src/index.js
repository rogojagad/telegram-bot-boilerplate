process.env["NTBA_FIX_319"] = 1;
require("dotenv").config();

const express = require("express");
const botFactory = require("./bot/factory");
const botBootstraper = require("./bot/bootstraper");

const setupApp = (app) => {
    app.use(express.json());

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
};

const app = express();
setupApp(app);

const bot = botFactory.createOne();
botBootstraper.bootstrap(bot);
