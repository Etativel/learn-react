import { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <span>{this.props.todos.length}</span>;
  }
}

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 2, value: "walk" },
        { id: 1, value: "run" },
      ],
      inputVal: { id: "", value: "" },
      editVal: { id: "", value: "" },
      editId: "",
      editIndex: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleEditInputChange = this.handleEditInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputVal: { id: "", value: e.target.value },
    });
  }

  handleEditInputChange(e) {
    this.setState({
      editVal: { id: this.state.editId, value: e.target.value },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.inputVal.value === "") {
      alert("This field cannot be empty");
      return;
    }
    const newTask = this.state.inputVal;
    newTask.id = crypto.randomUUID();
    this.setState((state) => ({
      todos: state.todos.concat(newTask),
      inputVal: { id: "", value: "" },
    }));
  }

  handleEditSubmit(e, index) {
    e.preventDefault();
    if (this.state.editVal.value === "") {
      alert("This field cannot be empty");
      return;
    }
    const removeEditedToDo = [...this.state.todos];
    removeEditedToDo[index] = this.state.editVal;

    console.log(removeEditedToDo);
    this.setState({
      editVal: { id: "", value: "" },
      editId: "",
      editIndex: "",
      todos: removeEditedToDo,
    });
  }

  handleDelete(id) {
    const updatedTask = this.state.todos.filter((todo) => todo.id !== id);
    console.log(updatedTask);
    this.setState((state) => ({
      ...state,
      todos: updatedTask,
    }));
  }

  handleEdit(id) {
    const todoToEdit = this.state.todos.filter((todo) => todo.id === id);
    console.log(todoToEdit);
    this.setState((state) => ({
      ...state,
      editId: id,
      editVal: todoToEdit[0],
    }));
  }

  render() {
    return (
      <section>
        {console.log(this.state)}
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal.value}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>
          There is <Count todos={this.state.todos} /> todos in the list
        </h4>

        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={todo.id}>
              {this.state.editId === todo.id ? (
                <>
                  <input
                    type="text"
                    name="edit-entry"
                    value={this.state.editVal.value}
                    onChange={this.handleEditInputChange}
                  />
                  <button onClick={(e) => this.handleEditSubmit(e, index)}>
                    Update
                  </button>
                </>
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

export default ClassInput;
