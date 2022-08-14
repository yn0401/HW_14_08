import { Component, OnInit } from '@angular/core';
import { Note } from 'src/models/note.model';
import { Store } from '@ngrx/store';
import { NoteState } from 'src/states/note.state';
import * as NoteActions from 'src/actions/note.action';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {
  noteState$ = this.store.select('note');
  notes$ =  this.store.select((state)=>state.note.notes);
  
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  datetime = this.pipe.transform(Date.now(), 'dd/MM/yyyy');
  currentNote: Note={
    _id: '',
    title: '',
    body: '',
  }
  
  constructor(private store: Store<{ note: NoteState }>) { }


  ngOnInit(): void {
    this.noteState$.subscribe(state =>{
      console.log(state);
    });
    this.store.dispatch(NoteActions.getNote());
  }
  
  addNewNote(){
    console.log(this.currentNote);
    this.store.dispatch(NoteActions.addNote({note: this.currentNote}));
    alert("Đã thêm");
    // window.location.reload()
    this.store.dispatch(NoteActions.getNote());
  }
  

  
}
