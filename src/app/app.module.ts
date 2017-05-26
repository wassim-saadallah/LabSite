import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { AproposComponent } from './apropos/apropos.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { IndexComponent } from './index/index.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'about', component:  AproposComponent},
  { path: 'contact', component:  ContactComponent},
  { path: 'services', component:  ServicesComponent},
  { path: 'forum', component:  PostsComponent},
  { path: 'comments', component:  CommentsComponent},
  { path: '', component:  IndexComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ServicesComponent,
    AproposComponent,
    PostsComponent,
    CommentsComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
