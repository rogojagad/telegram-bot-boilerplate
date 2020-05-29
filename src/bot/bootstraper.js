const pingHandler = require("./../handler/pingHandler");

exports.bootstrap = (bot) => {
    // register event listener here

    bot.on("polling_error", (error) => {
        console.log(error);
    });

    bot.onText(/\/ping/, (msg) => {
        pingHandler.handle(msg);
    });
};
