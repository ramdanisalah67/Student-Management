import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  api = "http://localhost:8085/api/student/" 

  constructor(private http:HttpClient) { }

  addStudent(s:Student):Observable<any> {
    
    return this.http.post(this.api+'add',s)
  }
  allStudent():Observable<any> {
    
    return this.http.get(this.api+'all')
  }
  deleteStudent(id:number):Observable<any> {
    
    return this.http.get(this.api+'delete/'+id)
  }
  getById(id:number):Observable<any> {
    
    return this.http.get(this.api+'getById/'+id)
  }

  editStudent(s:Student,id:number):Observable<any> {
    
    return this.http.put(this.api+'edit/'+id,s)
  }
}
