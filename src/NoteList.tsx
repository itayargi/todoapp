import * as React from 'react';
import { observer, inject } from "mobx-react"
import { NoteStore } from './store'
import Note from './Note';
import { toJS } from 'mobx';
import { Grid } from 'semantic-ui-react'
interface IProps {

}

interface Injected extends IProps {
    noteStore: NoteStore;
}



@inject('noteStore')
@observer
export default class NoteList extends React.Component<IProps, {}> {
    

    public get injected() {
        return this.props as Injected;
    }

    

    

    public render() {
        const notes = toJS(this.injected.noteStore.notes)

        return (
            <Grid style={{marginTop:10}} columns={4} divided>
                <Grid.Row>
                    
                {notes.map((note,i) => (
                   
                       
                         <Grid.Column key={i} style={{marginTop:5}}>
                    <Note 
                        id={note.id} 
                        creationDate={note.creationDate}
                        lastModified={note.lastModified}
                        name={note.name}
                        todoList={note.todoList}
                       
                    />

                    </Grid.Column>
                  
                ))}
                </Grid.Row>
           </Grid>
        );              
        
    }
}