import './App.css';
import React, { Component } from 'react';

class App extends Component {
    state = {
        todoItems: [],
        done: false,
        modified: false,
        editText: '',
        text: '',
        id: ''
    }

    componentDidMount() {
        const todoItems = JSON.parse(localStorage.getItem('todoItems'));
        todoItems && this.setState(() => (
            { todoItems }
        ))
    }

    componentDidUpdate() {
        localStorage.setItem('todoItems', JSON.stringify(this.state.todoItems))
    }

    addItem = (event) => {
        event.preventDefault();
        const id = Math.random().toString(36).substr(-8);
        const newItem = { ...this.state, id };

        this.setState(currentState => (
            { todoItems: [...currentState.todoItems, newItem] }
        ))
        this.cleanForm('text')
    }

    handleInputChange = (event, key) => {
        this.setState({
            [key]: event.target.value
        })
    }

    onItem = (item, action) => {
        this.setState((currentState) => (action === 'delete' ?
            { todoItems: currentState.todoItems.filter(i => (i.id !== item.id)) }
            :
            { todoItems: currentState.todoItems.map(i => (i.id === item.id ? { ...i, [action]: true } : i)) }
        )
        )
    }

    editItem = (event, item) => {
        event.preventDefault()

        this.setState((currentState) => ({
            todoItems: currentState.todoItems.map(i => (
                i.id === item.id ? { ...i, text: this.state.editText, modified: false } : i))
        }))
        this.cleanForm('editText')
    }

    cleanForm = (key) => {
        this.setState({ [key]: '' })
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.addItem}>
                    <input
                        type='text'
                        value={this.state.text}
                        placeholder='Enter your new item...'
                        onChange={(e) => this.handleInputChange(e, 'text')}
                    />
                    <button>Add Item</button>
                </form>
                <ul>
                    {this.state.todoItems.map(item => (
                        <div>
                            { item.modified === true ?
                                <form onSubmit={(e) => this.editItem(e, item)}>
                                    <input
                                        type='text'
                                        value={this.state.editText}
                                        placeholder={item.text}
                                        onChange={(e) => this.handleInputChange(e, 'editText')}
                                    />
                                </form>
                                :
                                <li key={item.id} className={item.done === true ? 'completed' : ''}>{item.text}</li>
                            }
                            <button onClick={() => this.onItem(item, 'delete')}>🗑</button>
                            <button onClick={() => this.onItem(item, 'done')}>✅</button>
                            <button onClick={() => this.onItem(item, 'modified')}>🖊</button>
                        </div>
                    ))
                    }
                </ul>
            </div>
        );
    }
}

export default App;