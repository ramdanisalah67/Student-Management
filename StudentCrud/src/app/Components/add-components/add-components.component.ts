import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Services/student.service';
import {delay} from 'utils-decorators'
@Component({
  selector: 'app-add-components',
  templateUrl: './add-components.component.html',
  styleUrls: ['./add-components.component.css']
})
export class AddComponentsComponent implements OnInit {
  
  myformbuilder:any
  s:Student= new Student()
  dataMessage: { [key: string]: string } = {};
  messageSuccess=""
  messageError=""
constructor(private fb:FormBuilder,private serv:StudentService){
  this.myformbuilder = this.fb.group({
    name:['',[Validators.minLength(3),Validators.required,Validators.pattern("[A-Z][a-z]{1,12}")]],
    note:['',[Validators.min(0) , Validators.max(20)]]
  })
  

}
ngOnInit(): void {
  

}



get name(){
  return this.myformbuilder.get('name')
}
get note(){
  return this.myformbuilder.get('note')
}

addStudent(){
 this.s=this.myformbuilder.value

 if(this.myformbuilder.valid) {
  console.log("valid")
  this.serv.addStudent(this.s).subscribe( data=>{       console.log(data);
                                                   if(data['data'])  this.dataMessage =data['data'];
                                                   else if(data['message'])  {
                                                    this.messageSuccess=data['message']
                                                    this.deleteAlertmessage()
                                                  }
                                                  

                                                  },
                                                  error =>{ this.messageError = error.error ;this.deleteErrorMessage()}
                                                  
                                                  )
                              }

}

@delay(2000)
deleteAlertmessage(){
this.messageSuccess=""
}

@delay(2000)
deleteErrorMessage(){
this.messageError=""
}
}
