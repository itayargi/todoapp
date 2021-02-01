import { observable, action, toJS } from "mobx";
import shortid from 'shortid';
//todo
export interface ITodoItem {
    id: string;
    title: string;
    done: boolean;
}
//note
export interface INote {
    id: string;
    name: string;
    lastModified: number;
    creationDate: number;
    todoList: ITodoItem[];
}

interface IaddTodo {
    noteId: string, 
    todoTitle: string
    
}


export class NoteStore {
    @observable notes: INote[] = [];
    @observable todos: ITodoItem[] = [];

    getNotes() {
        return toJS(this.notes);
    }

    @action
    public importNotes(notes: INote[]) {
        this.notes = notes.splice(0);
    }

    @action
    public addNote(name: string) {
        if(!name) {
            alert ('Please enter a name for the note')
            return;
        }
        if(this.notes.length<10){
        this.notes.push({
            name, 
            id: shortid.generate(),
            todoList: [],
            creationDate: Date.now(),
            lastModified: Date.now()
        });
        }
        else{
            alert('Only 10 notes are allowed')
        }
    }

   
    @action
    public addToDo({ noteId, todoTitle }: IaddTodo) {
        let target = this.notes.find(n => n.id === noteId);
        if (target && todoTitle) {
            target.lastModified = Date.now();
            target.todoList.push({
                id: shortid.generate(),
                title: todoTitle,
                done: false,
                
            });
        }
    }

    @action
    public setTodoStatus(noteId: string, todoId: string, status: boolean) {
        let target = this.notes.find(n => n.id === noteId);
        if (target) {
            let todoItem = target.todoList.find(todo => todo.id === todoId);
            if (todoItem) {
                target.lastModified = Date.now();
                todoItem.done = status;
            }
        }
    }
}

const noteStore = new NoteStore();

// @ts-ignore
window.noteStore = noteStore;

export default noteStore;