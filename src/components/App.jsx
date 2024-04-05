import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Container/Container';
import { Filter } from './Filter/Filter';
import { FormContacts } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  nameInputId = nanoid();

  handleSubmit = ({ id, name, number }) => {
    const { contacts } = this.state;
    const contact = { id: this.nameInputId, name, number };
    const doubleContact = contacts.find(contact => contact.name === name);
    if (doubleContact) {
      return;
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilter = evt => {
    this.setState({ filter: evt.currentTarget.value.toLowerCase() });
  };

  getVisibleContacts() {
    const { contacts, filter } = this.state;
    const normilizedFilter = filter.toLocaleLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
    return visibleContacts;
  }
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Section title={'Phonebook'}>
          <FormContacts submit={this.handleSubmit} />
        </Section>
        <Section title={'Contacts'}>
          <Filter value={filter} onChange={this.handleFilter} />
          <ContactList
            contacts={visibleContacts}
            deleteContact={this.deleteContact}
          />{' '}
        </Section>
      </Container>
    );
  }
}
