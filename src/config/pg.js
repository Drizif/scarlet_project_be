const { Pool } = require('pg');

// const { host, user, password, database, port } = require('./vars').dbConstants;

const { dbConstants } = require('./vars');

// const client = new Pool({ host, user, password, database, port });
const client = new Pool({
  host: dbConstants.host,
  user: dbConstants.user,
  password: dbConstants.password,
  database: dbConstants.database,
  port: dbConstants.port
});

client.on('error', (error, _client) => {
  console.log(error.message);
  throw error;
});

client.connect((error, _client, _done) => {
  if (error && _client) {
    _client.release();
    throw error;
  }
  (async () => { console.log(await testConnect()) })();

});

async function testConnect() {
  try {
    const { rows } = await client.query('SELECT NOW()');
    return `DB Connected ${rows[0].now}`;
  } catch (error) {
    return error.message || error;
  }
}

async function dbQuery(query, values) {
  try {
    const { rows } = values ? await client.query(query.toString(), values) : await client.query(query.toString());
    return rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = dbQuery;