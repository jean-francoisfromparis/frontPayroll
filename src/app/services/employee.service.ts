import { Injectable } from '@angular/core'
import { Employee } from '../model/employee.model'

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  static listEmployees(): Employee[] {
    throw new Error('Method not implemented.')
  }
  employees!: Employee[]
  constructor() {
    this.employees = [
      {
        id: 1,
        firstname: 'jean',
        name: 'martin',
        email: 'jean@martin.fr',
        role: 'User',
      },
      {
        id: 2,
        firstname: 'marie',
        name: 'bertrand',
        email: 'marie@bertrand.fr',
        role: 'User',
      },
      {
        id: 3,
        firstname: 'paul',
        name: 'petit',
        email: 'paul@petit.fr',
        role: 'User',
      },
      {
        id: 4,
        firstname: 'lea',
        name: 'claude',
        email: 'lea@claude.fr',
        role: 'User',
      },
      {
        id: 5,
        firstname: 'dominique',
        name: 'lambert',
        email: 'dominique@lambert.fr',
        role: 'User',
      },
      {
        id: 6,
        firstname: 'August',
        name: 'Thouard',
        email: 'August@Thouard.fr',
        role: 'User',
      },
      {
        id: 7,
        firstname: 'Terrell',
        name: 'Beier',
        email: 'Terrell@Beier.fr',
        role: 'User',
      },
      {
        id: 8,
        firstname: 'Holly',
        name: 'Nienow',
        email: 'Darryl@Rodriguez.fr',
        role: 'User',
      },
      {
        id: 9,
        firstname: 'Gwen',
        name: 'Windler',
        email: 'Gwen@Windler.fr',
        role: 'User',
      },
      {
        id: 10,
        firstname: 'Candace',
        name: 'Crooks',
        email: 'Candace@Crooks.fr',
        role: 'User',
      },
    ]
  }

  listEmployees(): Employee[] {
    return this.employees
  }

  addEmployee(newEmployee: Employee) {
    this.employees.push(newEmployee);
  }
}
