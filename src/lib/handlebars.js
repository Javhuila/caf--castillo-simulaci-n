const { format } = require('timeago.js');

const helpers = {};
//timeago para la fecha
//timestamp debe ser llamado al campo mysql de fecha "timestamp"
//EJ: {{timeago timestamp}}
helpers.timeago = (timestamp) => {
    return format(timestamp);
};

module.exports = helpers;