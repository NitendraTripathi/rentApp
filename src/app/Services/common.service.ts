import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
baseUrl:string="https://jsonplaceholder.typicode.com/users";

baseurlWebApi: string= "https://localhost:7154/api/Student/GetStudents";
  constructor(private http:HttpClient) { }

  getGender()
  {
    return ['Male','Female','Other']
  }
  getAllUserList()
  {
    return this.http.get(this.baseUrl)
  }
  getAllStudents()
  {
    return this.http.get(this.baseurlWebApi)
  }
}
