import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfStudentComponent } from './Components/list-of-student/list-of-student.component';
import { AddComponentsComponent } from './Components/add-components/add-components.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EditStudentComponent } from './Components/edit-student/edit-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    ListOfStudentComponent,
    AddComponentsComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IonicModule.forRoot({})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
