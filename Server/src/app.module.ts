import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteController } from './apis/note/note.controller';
import { NotesModule } from './note/notes/notes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    NotesModule,
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.1tgy1zc.mongodb.net/?retryWrites=true&w=majority'),
  ],
  controllers: [AppController, NoteController],
  providers: [AppService],
})
export class AppModule {}
