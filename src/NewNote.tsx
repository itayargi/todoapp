import * as React from 'react';
import { Input, Button } from 'semantic-ui-react'
import { inject } from 'mobx-react';
import { NoteStore } from './store';


interface IState {
    inputValue: string;
}

interface IProps { }

interface Injected extends IProps {
    noteStore: NoteStore;
}


@inject('noteStore')
export default class NewNote extends React.Component<IProps, IState> {

    state: IState = {
        inputValue: ''
    }

    public get injected() {
        return this.props as Injected;
    }

    //input text for new notes
    public handleChange = (e: any) => {
        this.setState({ inputValue: e.currentTarget.value });
    }

    public addNoteToStore = () => {
        this.injected.noteStore.addNote(this.state.inputValue);
        (document.getElementById("newNote") as HTMLInputElement).value=""

    }

    public render() {
        return (
            <div>
                <Input id="newNote" type="text" onChange={this.handleChange} placeholder="add note" />
                <Button style={{marginLeft:5}} primary onClick={this.addNoteToStore}>Add Note</Button>
            </div>
        )
    }

}