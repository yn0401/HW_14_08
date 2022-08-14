import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note } from 'src/models/note.model';
import { NoteDocument } from 'src/schemas/note.shemas';

@Injectable()
export class ServiceService {
    constructor(@InjectModel('notes') private noteModel: Model<NoteDocument>) {}

    async create(note: Note) {
        let createNote = new this.noteModel();
        createNote.title = note.title;
        createNote.body = note.body;
        return await createNote.save();
    }

    async findAll(){
        return await this.noteModel.find().exec();
    }

    async findById(id: string){
        return await this.noteModel.findById(id).exec();
    }
    async updateNote(id: string, note: Note){
        return await this.noteModel.findByIdAndUpdate(id, note, {new: true}).exec();
    }
    async deleteNote(id: string){
        return await this.noteModel.findByIdAndDelete(id).exec();
    }
}
