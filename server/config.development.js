'use strict';
module.exports = {
  'restApiRoot': '/api',
  // 0.0.0.0 is to binding to all connection possible
  'host': '0.0.0.0',
  'port': 3000,
};

// OR
// {
// "restApiRoot": "/api",
// "host": process.env.HOST,
// "port": process.env.PORT
// }
