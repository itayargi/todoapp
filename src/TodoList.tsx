import * as React from 'react';
import { Item } from 'semantic-ui-react'
import { ITodoItem } from './store';
import TodoItem from './TodoItem';


interface IProps {
    todoList: ITodoItem[];
    noteId: string;
}

export default class TodoList extends React.Component<IProps, {}> {
    public render() {
        return (
            <Item.Group divided>
                {this.props.todoList.map((todo,i) => <TodoItem key={i} noteId={this.props.noteId} todo={todo} />)}
            </Item.Group>
        );
    }
}