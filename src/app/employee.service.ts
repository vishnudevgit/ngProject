import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl ="http://localhost:8282/RestApiEmployee/api";

  constructor(private http:HttpClient) { }

  getEmployee(id: number):Observable<any>{
    return this.http.get(this.baseUrl+'/employeedetailsid/'+id);
  }

 getEmployeesList(): Observable<any>{
   return this.http.get(this.baseUrl+'/employeedetails');
 }

 createEmployee(employee:Object):Observable<Object>{
   return this.http.post(this.baseUrl+'/employeedetailsinsert',employee);
 }

 updateEmployee(id:number,employee:Employee):Observable<any>{
   return this.http.put(this.baseUrl+'/employeedetailsupdate/'+id,employee);
 }

 deleteEmployee(id:number,employee:Employee):Observable<any>{
   return this.http.put(this.baseUrl+'/employeedetailsdelete/'+id,employee);
 }
}
