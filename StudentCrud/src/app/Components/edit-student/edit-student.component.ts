import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Services/student.service';
import { delay } from 'utils-decorators';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  id:number
  myformbuilder:any
  s:Student= new Student()
  dataMessage: { [key: string]: string } = {};
  messageSuccess=""
vis="d-none";

  ngOnInit(): void {
    this.route.params.subscribe(params=>{this.id=params['id']})
   
   this.myService.getById(this.id).subscribe(data=>{
    this.s.name =data['name'],this.s.note=data['note']
   this.myformbuilder.get('name').setValue(this.s.name);
   this.myformbuilder.get('note').setValue(this.s.note);

  })
   console.log(this.s)

 }

 constructor(private route:ActivatedRoute,private myService:StudentService,private fb:FormBuilder,private myroute:Router){
   this.myformbuilder = this.fb.group({
     name:[this.s.name,[Validators.minLength(3),Validators.required,Validators.pattern("[A-Z][a-z]{1,12}")]],
     note:[this.s.note,[Validators.min(0) , Validators.max(20)]]
   })
 }
 goToHome() {
this.myroute.navigate(['allStudents'])
 }

get name(){
  return this.myformbuilder.get('name')
}
get note(){
  return this.myformbuilder.get('note')
}


@delay(1000)
deleteAlertmessage(){
this.messageSuccess=""
this.vis="d-block"
}




  editStudent(){
    this.s=this.myformbuilder.value
   
    if(this.myformbuilder.valid) {
     console.log("valid")
     this.s = this.myformbuilder.value
     console.log(this.s)
     this.s.id =this.id
     this.myService.editStudent(this.s,this.id).subscribe( (resp)=>{   
      this.messageSuccess= resp['message']
      this.deleteAlertmessage()
      console.log(resp)
                })
   
   }
}

}