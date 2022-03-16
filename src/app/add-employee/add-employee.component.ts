import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  newEmployee = new Employee();
  message :String | undefined;
  constructor(private employeeService: EmployeeService) { }


  ngOnInit(): void {

  }
  addEmployee(): void {
    this.employeeService.addEmployee(this.newEmployee);
    this.message = 'l\'employé.e ' + this.newEmployee.name + ' a été.e ajouté.e avec succès';
  }

}
