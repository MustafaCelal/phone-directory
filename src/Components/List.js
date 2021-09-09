import React, { Component } from "react";
import "./List.css";

export default class List extends Component {
  state = {
    filterText: "",
  };

  onChangeFilterText = (e) => {
    // console.log(e.target.value);
    this.setState({ filterText: e.target.value });
  };

  render() {
    const filteredContacts = this.props.contacts.filter((contact) => {
      return (
        contact.name
          .toLowerCase()
          .indexOf(this.state.filterText.toLowerCase()) !== -1
      );
    });

    return (
      <div className={"listArea"}>
        <input
          value={this.state.filterText}
          onChange={this.onChangeFilterText}
          name={"filter"}
          id={"filter"}
          placeholder={"Filter by name or phone"}
        />
        <ul className={"list"}>
          {filteredContacts.map((contact) => (
            <li key={contact.phone}>
              <span className={"name"}>{contact.name}</span>
              <span className={"phone"}>{contact.phone}</span>
              <span className={"clearfix"} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
