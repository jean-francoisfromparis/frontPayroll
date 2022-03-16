import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee.model'
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent implements OnInit {
  api: string = 'https://jsonplaceholder.typicode.com/users';
  data = [];
  employees!: Employee[];
  dtOptions: DataTables.Settings = {};

  constructor(
    private employeeService: EmployeeService) {
    this.employees = employeeService.listEmployees();
    }

  ngOnInit(): void {
    // this.getPosts();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
  // getPosts() {
  //   const promise = new Promise<void>((resolve, reject) => {
  //     const apiURL = this.api;
  //     this.http.get<Employee[]>(apiURL).subscribe({
  //       next: (Employee: any) => {
  //         this.data = Employee.map((Employee: any) => {
  //           return new Post(Employee.id, Employee.name, Employee.username, Employee.email, Employee.role);
  //         });
  //         resolve();
  //       },
  //       error: (err: any) => {
  //         reject(err);
  //       },
  //       complete: () => {
  //         console.log('complete');
  //       },
  //     });
  //   });
  //   return promise;
  // }
  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }
}
