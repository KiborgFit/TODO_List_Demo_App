import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem/TodoItem';
import './Todo.scss';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  get getTodoList() {
    const { tasks } = this.props;
    const listItems = tasks.map((task) => <TodoItem task={task} key={task.id} />);

    return listItems;
  }

  render() {
    const { tasks } = this.props;

    return (
      <ul className='todo'>
        <li className='todo-title'>
          <span className='todo__title-id'>#</span>
          <span className='todo__title-title'>Task Name</span>
          <span className='todo__title-status'>Status</span>
          <span className='todo__title-edit'>Edit</span>
          <span className='todo__title-remove'>Remove</span>
        </li>
        {tasks && this.getTodoList}
      </ul>
    );
  }
}

Todo.propTypes = { tasks: PropTypes.arrayOf(PropTypes.object) };
Todo.defaultProps = { tasks: [] };
