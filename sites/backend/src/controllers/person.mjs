import { PersonModel } from '../models/person.mjs'

export function PersonController() {}

/*
 * Create a person for the authenticated user
 * See: https://freesewing.dev/reference/backend/api
 */
PersonController.prototype.create = async (req, res, tools) => {
  const Person = new PersonModel(tools)
  await Person.guardedCreate(req)

  return Person.sendResponse(res)
}

/*
 * Read a person
 * See: https://freesewing.dev/reference/backend/api
 */
PersonController.prototype.read = async (req, res, tools) => {
  const Person = new PersonModel(tools)
  await Person.guardedRead(req)

  return Person.sendResponse(res)
}

/*
 * Update a person
 * See: https://freesewing.dev/reference/backend/api
 */
PersonController.prototype.update = async (req, res, tools) => {
  const Person = new PersonModel(tools)
  await Person.guardedUpdate(req)

  return Person.sendResponse(res)
}

/*
 * Remove a person
 * See: https://freesewing.dev/reference/backend/api
 */
PersonController.prototype.delete = async (req, res, tools) => {
  const Person = new PersonModel(tools)
  await Person.guardedDelete(req)

  return Person.sendResponse(res)
}

/*
 * Clone a person
 * See: https://freesewing.dev/reference/backend/api
 */
PersonController.prototype.clone = async (req, res, tools) => {
  const Person = new PersonModel(tools)
  await Person.guardedClone(req)

  return Person.sendResponse(res)
}