const moment = require('moment');

function formatMessage(username, text, color, time) {

    return {
        username,
        text,
        time,
        color
    };

};

module.exports = formatMessage;