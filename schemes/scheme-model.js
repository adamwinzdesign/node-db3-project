const schemeDB = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
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

// list all steps for a scheme
// schemes has id and scheme_name
// steps has id, step_number, instructions, and scheme_id
function findSteps(id) {
  return schemeDB('steps')
    .join('schemes', 'schemes.id', 'steps.scheme_id')
    .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
    .where('scheme_id', id)
    .orderBy('steps.step_number')
}

// add scheme
function add(scheme) {
  return schemeDB('schemes').insert(scheme, 'id')
}

// add step to scheme, given scheme id
// body will have step_number and instructions, scheme_id will be in req.params
function addStep(id) {

}

function update(id, changes) {
  return schemeDB('schemes')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return schemeDB('schemes')
    .where({ id })
    .del()
}
