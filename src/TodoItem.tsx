import * as React from 'react';
import { Item } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'
import { ITodoItem, NoteStore } from './store';
import { inject } from 'mobx-react';

interface IProps {
    todo: ITodoItem
    noteId: string;
}

interface IState {
    done: boolean;
}

interface Injected extends IProps {
    noteStore: NoteStore;
}

@inject('noteStore')
export default class TodoItem extends React.Component<IProps, IState> {


    public get injected() {
        return this.props as Injected;
    }
    
    public handleChange = (e: any, data: any) => {
        this.injected.noteStore.setTodoStatus(this.props.noteId, this.props.todo.id, data.checked);

    }


    public render() {
        return (
            <Item>
                <Item.Content> 
                    <Checkbox label={this.props.todo.title} checked={this.props.todo.done} onChange={this.handleChange} />
                </Item.Content>
            </Item>
        )
    }
}
