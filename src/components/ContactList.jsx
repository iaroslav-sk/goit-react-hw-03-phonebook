import React from 'react';
import style from './Style.module.css';

const ContactList = ({ contacts, onDeteleContact }) => (
  <ul className={style.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={style.item}>
        {name}: {number};
        <button onClick={() => onDeteleContact(id)}>Delete contact</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
