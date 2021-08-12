import { createAction } from "@reduxjs/toolkit";

// ***** get contacts ***** //
const getContactsRequest = createAction("contacts/fetchContactsRequest");
const getContactsSuccess = createAction("contacts/fetchContactsSuccess");
const getContactsFailure = createAction("contacts/fetchContactsFailure");

// ***** add contacts ***** //
const addContactRequest = createAction("contacts/addContactRequest");
const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactFailure = createAction("contacts/addContactFailure");

// ***** remove contacts ***** //
const removeContactRequest = createAction("contacts/removeContactRequest");
const removeContactSuccess = createAction("contacts/removeContactSuccess");
const removeContactFailure = createAction("contacts/removeContactFailure");

// ***** filter contacts ***** //
const filterContact = createAction("contacts/filterСhange");

export {
  filterContact,
  addContactRequest,
  addContactSuccess,
  addContactFailure,
  removeContactRequest,
  removeContactSuccess,
  removeContactFailure,
  getContactsRequest,
  getContactsSuccess,
  getContactsFailure,
};
