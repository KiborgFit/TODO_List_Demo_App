import React from 'react';
import './App.scss';
import Todo from '../../components/Todo/Todo';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = { tasks: null };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => this.setState({ tasks: data }));
  }

  render() {
    const { tasks } = this.state;

    return (
      <div className='app'>
        <div className='header'>
          <h1 className='header-title'>TODO List Demo App</h1>
          <p className='header-text'>Do it now.</p>
        </div>
        <main className='main'>
          <Todo tasks={tasks} />
        </main>
      </div>
    );
  }
}
