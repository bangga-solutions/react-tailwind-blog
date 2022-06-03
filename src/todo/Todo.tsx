import React from 'react';

interface MyState {
  items: [];
  text: any;
}

interface MyProps {
}

class TodoApp extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e: { target: { value: any; }; }) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }

    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    
    this.setState((state: {items: any}) => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}


class TodoList extends React.Component<any, any> {
  render() {
    return (
      <ul>
        {this.props.items.map((item: {id: string, text: string}) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default TodoApp
