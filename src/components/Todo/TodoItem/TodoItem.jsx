import React from 'react';
import PropTypes from 'prop-types';
import EditButton from '../EditButton/EditButton';
import './TodoItem.scss';

const TodoItem = (props) => {
  const { task } = props;
  const { id, title, completed } = task;

  return (
    <li className='todo__item' key={id}>
      <span className='todo__item-id'>{id}</span>
      <span className='todo__item-title'>{title}</span>
      <span className='todo__item-status'>{completed ? 'true' : 'false'}</span>
      <EditButton className='todo__item-edit' />
      <button className='todo__item-remove'>Remove</button>
    </li>
  );
};

TodoItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }),
};

TodoItem.defaultProps = { task: {} };

export default TodoItem;
