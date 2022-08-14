import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotePadComponent } from './components/note-pad/note-pad.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { FormsModule} from '@angular/forms'
import { NoteEffects } from 'src/effects/note.effect';
import { noteReducer } from 'src/reducers/note.reducer';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NotePadComponent,
    NoteListComponent,
    NoteCardComponent,
    NoteDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    StoreModule.forRoot({note: noteReducer}, {}),
    EffectsModule.forRoot([NoteEffects]),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
