import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {NotesComponent} from './notes/notes.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NoteComponent} from './notes/note/note.component';
import {NoteTextFilterPipe} from './shared/note-text-filter.pipe';
import {LoginComponent} from './login/login.component';
import {AuthenticatedGuard} from './shared/authenticated.guard';
import {NotAuthenticatedGuard} from './shared/not-authenticated.guard';

const appRoutes: Routes = [
  {
    path: 'notes',
    component: NotesComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [NotAuthenticatedGuard]
  },
  {
    path: '',
    component: NotesComponent,
    pathMatch: 'full',
    canActivate: [AuthenticatedGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeedbackComponent,
    NotesComponent,
    NotFoundComponent,
    NoteComponent,
    NoteTextFilterPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
