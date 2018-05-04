import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { JournalEntriesService } from 'app/services/journal-entries.service';
import { EntryListComponent } from './components/entry-list/entry-list.component';

const routes: Routes = [
   { path: 'journalentries',  component: AppComponent }
  // { path: '', redirectTo: '/movies', pathMatch: 'full' },
  // { path: 'movies',  component: MovieListComponent },
  // { path: 'movies/:id', component: MovieDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalEntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
