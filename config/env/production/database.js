const parse = require("pg-connection-string").parse;
const config = parse(
  "postgres://jilwscfuyplxdn:b71e66716f62cddf2b3e26c2a0e2317aeb33b2c3ae3ac4ca45bb969ea272ef72@ec2-3-208-79-113.compute-1.amazonaws.com:5432/d24i3ksrtpojcl"
);
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
