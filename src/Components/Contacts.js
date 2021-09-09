import React from "react";
import { PropTypes } from "prop-types";
import Form from "./Form";
import List from "./List";

const Contacts = (props) => (
  <div>
    <List contacts={props.contacts} />
    <Form addContact={props.addContact} />
  </div>
);

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func,
};

export default Contacts;
