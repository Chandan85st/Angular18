import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Student } from './students/interface/student.model';

@Injectable()
export class StudentAppService {
  private apiUrl = 'http://localhost:3001/students';

  // searchedKey = new Subject<any>();
  // searchedKey = new BehaviorSubject<any>(null);


  constructor(private _http: HttpClient) { }

  getList(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }

  addStudent(stud: Student) {
    return this._http.post(`${this.apiUrl}`, stud)
  }

  editStudent(id: string, studentData: Student) {
    return this._http.put(`${this.apiUrl}/${id}`, studentData)
  }

  deleteStud(id: number): Observable<any> {
    console.log(this._http.delete(`${this.apiUrl}/${id}`))
    return this._http.delete(`${this.apiUrl}/${id}`)
  }


}