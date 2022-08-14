import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from 'src/models/note.model';
import { collection, collectionSnapshots, deleteDoc, Firestore } from '@angular/fire/firestore';
import { doc, setDoc } from '@firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  // constructor(private db: Firestore) { }

  // addNote(note: Note) {
  //   if (!note) {
  //     throw new Error('Notes is required');
  //   }
  //   return setDoc(doc(this.db, 'notes/' + note), note);
  // }
  // getNote(){
  //   return collectionSnapshots(collection(this.db, 'notes'));
  // }
  // // getAll(){
  // //   return collectionSnapshots(collection(this.db, 'students'));
  // // }
  // // update(student: Student){
  // //   return setDoc(doc(this.db, 'students/' + student.id), student);
  // // }
  // deleteNote(noteId: String){
  //   return deleteDoc(doc(this.db, 'notes/' + noteId));
  // }
  // updateNote(note: Note) {
  //   return setDoc(doc(this.db, 'notes/'), note);
  // }
  constructor(
    private Http: HttpClient
  ) { }

  getAllNotes():Observable<Note[]>{
    return this.Http.get<Note[]>(`http://localhost:3000/note/all`);
  }
  getNoteById(id:string):Observable<Note[]>{
    return this.Http.get<Note[]>(`http://localhost:3000/note/?title=${id}`+id);
  }
  addNote(note:Note):Observable<Note[]>{
    return this.Http.post<Note[]>(`http://localhost:3000/note/`,note);
  }
  updateNote(note:Note):Observable<Note[]>{
    return this.Http.put<Note[]>(`http://localhost:3000/note/`,note);
  }
  deleteNote(id:string):Observable<Note[]>{
    return this.Http.delete<Note[]>(`http://localhost:3000/note/?id=`+id);
  }

}
