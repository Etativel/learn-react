import { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [{ id: 1, value: "valu" }],
      inputVal: { id: "", value: "" },
      index: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputVal: { ...this.state.inputVal, value: e.target.value },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.inputVal.value.trim()) {
      alert("It cannot be empty");
      return;
    }
    const newTask = {
      id: crypto.randomUUID(),
      value: this.state.inputVal.value,
    };

    this.setState((state) => ({
      inputVal: { id: "", value: "" },
      todos: state.todos.concat(newTask),
      index: null,
    }));
  }

  handleEditSubmit(e) {
    e.preventDefault();
    if (!this.state.inputVal.value.trim()) {
      alert("It cannot be empty");
      return;
    }

    const updatedTodos = this.state.todos.map((todo) =>
      todo.id === this.state.index
        ? { ...todo, value: this.state.inputVal.value }
        : todo
    );

    this.setState({
      todos: updatedTodos,
      inputVal: { id: "", value: "" },
      index: null, // Clear the edit state
    });
  }

  handleDelete(id) {
    const filter = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      inputVal: { id: "", value: "" },
      todos: filter,
    });
  }

  handleEdit(id) {
    const todoToEdit = this.state.todos.find((todo) => todo.id === id);
    this.setState({
      inputVal: { id, value: todoToEdit.value },
      index: id,
    });
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal.value}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>
          There is <Count todos={this.state.todos} /> todo on the list
        </h4>

        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>
              {this.state.index === todo.id ? (
                <form onSubmit={this.handleEditSubmit}>
                  <input
                    type="text"
                    value={this.state.inputVal.value}
                    onChange={this.handleChange}
                  />
                  <button type="submit">Update</button>
                </form>
              ) : (
                <>
                  {todo.value}
                  <button onClick={() => this.handleDelete(todo.id)}>
                    Delete
                  </button>
                  <button onClick={() => this.handleEdit(todo.id)}>Edit</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

class Count extends Component {
  render() {
    return <span>{this.props.todos.length}</span>;
  }
}

export default ClassInput;
