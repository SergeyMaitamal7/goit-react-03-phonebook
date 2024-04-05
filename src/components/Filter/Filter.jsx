import { Component } from 'react';
import { Input } from './Filter.styled';

export class Filter extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <>
        <p>Find contacrs by name</p>
        <Input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={value}
          onChange={onChange}
          required
        />
      </>
    );
  }
}
