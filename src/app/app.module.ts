import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularFireModule } from '@angular/fire';

import { FormsModule }   from '@angular/forms';


// import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';
import { ContactComponent } from './contact/contact.component';

import { ExperiencesComponent } from './experiences/experiences.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ExperiencesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebase,'mytestdemoangular'),
    FormsModule,
    // AngularFirestoreModule // imports firebase/firestore, only needed for database features
    // AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    // AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
