import React from 'react';
import style from './Style.module.css';

const Filter = ({ value, onCange }) => (
  <label className={style.filter}>
    Filter by name:
    <input type="text" value={value} onChange={onCange}></input>
  </label>
);

export default Filter;
