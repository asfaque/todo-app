import React, { Component } from 'react';
import f from './function';
import './styles.scss';
import TodoList from '../../components/TodoList/TodoList';
import AddTodo from '../../components/AddTodo/AddTodo';
import uuid from 'uuid';

class ToDo extends Component {
    state={
        lists: [],
        id: uuid()
    }

    addToDo = f.addToDo.bind(this);
    updateToDo = f.updateToDo.bind(this);
    deleteHandler = f.deleteHandler.bind(this);
    clearAll = f.clearAll.bind(this);
   
    render() {
        return (
            <div className="todo">
                <AddTodo addToDo={this.addToDo} />
                <div className="todo-inner">
                    {this.state.lists.length > 0 ?
                        this.state.lists.map((list, index) =>
                            <TodoList 
                                list={list}
                                saveHandler={this.saveHandler}
                                deleteHandler={() => this.deleteHandler(list.id)}
                                id={list.id}
                                key={index}
                                updateToDo={this.updateToDo}
                            />
                        )
                        :
                        <p className="noitem">No Todos left yay!</p>
                    }
                </div>
                {this.state.lists.length > 0 &&
                    <button onClick={this.clearAll} className="clear-btn">Clear All</button>
                }
            </div>
        );
    }
}

export default ToDo;