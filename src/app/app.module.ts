import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { NewPostModule } from './components/posts/new-post/new-post.module';
import { PostComponent } from './components/posts/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';

import { ReactiveFormsModule } from '@angular/forms';

/*Firebase*/
import { AngularFirestoreModule} from '@angular/fire/firestore'
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'

import { environment } from 'src/environments/environment';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    PostComponent,
    ToolbarComponent,
    ContainerAppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,

    AppRoutingModule,
    NewPostModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [PostComponent],
  providers: [ { provide: StorageBucket, useValue: 'gs://ngblog-2e1fb.appspot.com' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
