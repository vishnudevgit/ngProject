import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;
  employees: Observable<Employee[]>;
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id)
    .subscribe(data => {
      console.log(data)
      this.employee = data;
    },error => console.log(error));
  }
  updateEmployee() {
    console.log(this.id);
    this.employeeService.updateEmployee(this.id,this.employee)
    .subscribe(data =>console.log(data),error=>console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }
  onSubmit(){
    this.updateEmployee();
  }
  gotoList(){
    this.employees = this.employeeService.getEmployeesList();
    this.router.navigate(['/employees']);
  }
}
