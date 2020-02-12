import * as React from 'react';
import { Input, Button } from 'semantic-ui-react'
import { INote, NoteStore } from './store';
import { Card } from 'semantic-ui-react';
import dayjs from 'dayjs';
import { inject } from 'mobx-react';
import TodoList from './TodoList';

interface IState {
    inputField: string;
} 

interface Injected extends INote {
    noteStore: NoteStore;
}

@inject('noteStore')
export default class Note extends React.Component<INote, IState> {
    
    public constructor(props: INote) {
        super(props);
        this.state = {
            inputField: ''
        }
    }

    public get injected() {
        return this.props as Injected;
    }
    //input text for new todo
    public handleChange = (e: any) => {
        this.setState({ inputField: e.currentTarget.value });
    }

    public addTodo = () => {
        this.injected.noteStore.addToDo({
            noteId: this.props.id, 
            todoTitle: this.state.inputField 
        });
            
            }
     
    


    public render() {
        return (
            <Card style={{float:'left', marginLeft:10}}>
                <Card.Content header={this.props.name} />
                <Card.Content extra>
                    <div>Created at: {dayjs(this.props.creationDate).format("D/MM/YY HH:mm:ss")}</div>
                    <div>modified at: {dayjs(this.props.lastModified).format("D/MM/YY HH:mm:ss")}</div>
                </Card.Content>
                <Card.Content extra>
                    <Input id="imputAddTodo" style={{width:"100%"}} placeholder='Add todo' onChange={this.handleChange} />
                    <Button style={{marginTop:10, width:"100%"}} onClick={this.addTodo}>Add todo</Button>
                </Card.Content>
                <Card.Content extra>
                    <TodoList noteId={this.props.id} todoList={this.props.todoList} />
                </Card.Content>
            </Card>
        );
    }
}