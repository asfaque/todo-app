import React, { Component } from 'react';
import _ from 'lodash';
import './styles.scss';

class TodoList extends Component {
    state={
        editValue: this.props.list.content,
        editItem: false
    }

    onChange = (e) => {
        if(e.target.value !== '') {
            this.setState({
                editValue: e.target.value
            })
        }
    }

    inputElement = React.createRef();

    editHandler = () => {
        this.setState({
            editItem: true,
        });

        if(!_.isUndefined(this.inputElement) && !_.isNull(this.inputElement)) {
            this.inputElement.current.focus();
        }
        
    }

    saveHandler = (e) => {
        e.preventDefault();
        if(this.state.editItem !== '') {
            this.props.updateToDo(this.props.id, this.state.editValue)

            this.setState({
                editItem: false
            })
        }
    }

    render() {
        return (
            <div className="list-item" id={this.props.id}>
                <div className="list-item-inner">
                    <input type="text" onChange={this.onChange} value={this.state.editValue} readOnly={this.state.editItem ? false : true} ref={this.inputElement} />
                </div>
                <div className="list-item-action">
                    {this.state.editItem ?
                        <button
                            onClick={this.saveHandler}
                            className="saveBtn"
                        >
                            Save
                        </button>
                        :
                        <button
                            onClick={this.editHandler}
                            className="editBtn"
                        >
                            Edit
                        </button>
                    }
                    <button
                        onClick={this.props.deleteHandler}
                        className="deleteBtn"
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default TodoList;