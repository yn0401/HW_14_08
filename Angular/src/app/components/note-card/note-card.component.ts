import { DatePipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/models/note.model';
import { Store } from '@ngrx/store';
import { NoteState } from 'src/states/note.state';
import * as NoteActions from 'src/actions/note.action';


@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  
  noteState$ = this.store.select('note');
  notes$ =  this.store.select((state)=>state.note.notes);

  today: Date = new Date();
  pipe = new DatePipe('en-US');

  datetime = this.pipe.transform(Date.now(), 'dd/MM/yyyy');
  
  constructor(private store: Store<{ note: NoteState }>) {}

  ngOnInit(): void {
    this.noteState$.subscribe(state =>{
      console.log(state);
    });
    this.store.dispatch(NoteActions.getNote());
  }
  
  // updateNote(){
  //    this.store.dispatch(NoteActions.updateNote({note: this.oldNote}));
  //   //  window.location.reload();
  //  }

  deleteNote(_id: string): void{
    this.store.dispatch(NoteActions.deleteNote({id: _id}));
    this.store.dispatch(NoteActions.getNote());
    // alert("ghi chú mã " + this.currentNote.id + " đã được xóa");
    // window.location.reload();
  }

}
