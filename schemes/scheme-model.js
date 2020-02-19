const schemeDB = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  // findSteps,
  // add,
  // addStep,
  // update,
  // remove
}

function find() {
  return schemeDB('schemes');
}

// resolves to null?
function findById(id) {
  return schemeDB('schemes')
    .where({ id })
    .first()
}
