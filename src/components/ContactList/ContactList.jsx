import { Component } from 'react';
import { List, Item, Button } from './ContactList.styled';

export class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <>
        <List>
          {contacts.map(({ id, name, number }) => (
            <Item key={id}>
              {`${name}: ${number}`}{' '}
              <Button key={id} type="submit" onClick={() => deleteContact(id)}>
                Delete
              </Button>
            </Item>
          ))}
        </List>
      </>
    );
  }
}
