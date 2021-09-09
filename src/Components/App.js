import { Component } from "react";
import "../App.css";
import Contacts from "./Contacts";

export default class App extends Component {
  state = {
    contacts: [
      {
        name: "Ali",
        phone: "555-555-55-51",
      },
      {
        name: "Veli",
        phone: "555-555-55-52",
      },
      {
        name: "Ahmet",
        phone: "555-555-55-53",
      },
    ],
  };

  addContact = (contact) => {
    console.log(contact);
    const { contacts } = this.state;
    contacts.push(contact);

    this.setState({ contacts });
  };

  render() {
    return (
      <div className={"App"}>
        <Contacts addContact={this.addContact} contacts={this.state.contacts} />
      </div>
    );
  }
}
