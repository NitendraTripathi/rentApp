import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
baseurl : string="https://localhost:7154/api/Student/";
  constructor(private http: HttpClient) { }

  AddStudents(st : any)
  {
    debugger;

return   this.http.post(this.baseurl+"CreateStudent",st)
  }

  UpdateStudents(st : any)
  {
    debugger;

return   this.http.put(this.baseurl+"UpdateStudent",st)
  }

  DeleteStudent(stid : any)
  {
    debugger;

return   this.http.delete(this.baseurl+"DeleteStudent/"+stid)
  }

  getAllStudents()
  {
    return this.http.get(this.baseurl+"GetStudents")
  }
}
