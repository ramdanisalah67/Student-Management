import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponentsComponent } from './Components/add-components/add-components.component';
import { EditStudentComponent } from './Components/edit-student/edit-student.component';
import { ListOfStudentComponent } from './Components/list-of-student/list-of-student.component';

const routes: Routes = [
  {path:'addStudent',component:AddComponentsComponent},
  {path:'allStudents',component:ListOfStudentComponent},
  {path:'editStudent/:id',component:EditStudentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
