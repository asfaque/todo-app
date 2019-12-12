import React, { Component } from 'react';
import f from './function';
import './styles.scss';
import uuid from 'uuid';

class AddTodo extends Component {
    state={
        content: '',
        id: uuid()
    }

    onHandleChange = f.onHandleChange.bind(this);
    handleSubmit = f.handleSubmit.bind(this);

    render() {
        return (
            <div className="form-inner">
                <h3 className="heading">Add Todo</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-field">
                        <input 
                            className="input-field"
                            type="text"
                            onChange={this.onHandleChange}
                            value={this.state.content}
                        />
                        <button
                            onClick={this.handleSubmit}
                            className="addBtn"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddTodo;