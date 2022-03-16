import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeesComponent } from './employees/employees.component';

export const routes: Routes = [
    { path: 'employees', component: EmployeesComponent },
    { path: 'add-employee', component: AddEmployeeComponent },
    { path: '', redirectTo: 'employees', pathMatch: "full" },

];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})

export class AppRoutingModule { }