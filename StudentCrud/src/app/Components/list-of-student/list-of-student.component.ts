import { Component, OnInit } from '@angular/core';
import { delay } from 'utils-decorators';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-student',
  templateUrl: './list-of-student.component.html',
  styleUrls: ['./list-of-student.component.css']
})
export class ListOfStudentComponent implements OnInit {



students:Student[]
  message: string="";
  constructor(private myService:StudentService,private myRoute:Router){

  }
  ngOnInit(): void {
    this.myService.allStudent().subscribe(data=>{this.students=data})
  }

  deleteStudent(id: number) {
    this.myService.deleteStudent(id).subscribe(data=>{this.message =data['message'];this.deleteMessage();this.ngOnInit()})
    }


    editStudent(id: number) {
      this.myRoute.navigate(['/editStudent',id])
    }

    @delay(2000)
    deleteMessage(){
      this.message=""
    }

    goToAdd() {
      this.myRoute.navigate(['addStudent'])
      }
}
