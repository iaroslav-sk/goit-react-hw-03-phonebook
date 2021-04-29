import React, { Component } from 'react';
import Form from './components/Form.jsx';
import ContactList from './components/ContactList.jsx';
import Filter from './components/Filter.jsx';
import { v4 as uuidv4 } from 'uuid';
import style from './components/Style.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));

    localStorageContacts && this.setState({ contacts: localStorageContacts });
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  dublicateContacts = name => {
    const { contacts } = this.state;

    const isFinded = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (isFinded) {
      this.deleteContact(isFinded.id);
      alert('Контакт уже есть в списке !');
    }
  };

  formSubmitData = data => {
    const { name, number } = data;
    const generetedId = uuidv4();

    const contact = {
      id: generetedId,
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
    this.dublicateContacts(name);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = element => {
    this.setState({ filter: element.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normaliseNameContact = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normaliseNameContact),
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    const { filter } = this.state;
    return (
      <div className={style.wrapper}>
        <h1>Phonebook</h1>
        <Form onSubmitData={this.formSubmitData} />
        <h2>Contacts</h2>
        <Filter value={filter} onCange={this.changeFilter} />

        <ContactList
          contacts={filteredContacts}
          onDeteleContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
