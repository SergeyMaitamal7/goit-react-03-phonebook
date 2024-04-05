import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Container/Container';
import { Filter } from './Filter/Filter';
import { FormContacts } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  nameInputId = nanoid();

  handleSubmit = ({ id, name, number }) => {
    const { contacts } = this.state;
    const doubleContact = contacts.find(contact => contact.name === name);
    if (doubleContact) {
      alert(`You have already added ${name} to Contact list!!!`);
      return;
    }
    const contact = { id: this.nameInputId, name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
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
    if (contacts) {
      const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normilizedFilter)
      );
      return visibleContacts;
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    this.setState({ contacts: parseContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
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
