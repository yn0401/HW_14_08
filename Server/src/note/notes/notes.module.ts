import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { ServiceService } from "./service/service.service";
import { NoteSchema } from "src/schemas/note.shemas";


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'notes', schema: NoteSchema }]),
  ],
  providers: [ServiceService],
  exports: [ServiceService],
})
export class NotesModule {}
