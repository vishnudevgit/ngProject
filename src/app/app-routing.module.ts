import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ReservationComponent} from './reservation/reservation.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AssetListComponent } from './asset-list/asset-list.component';



const routes: Routes = [
 {path:'',pathMatch:'full',redirectTo:'login'},
{path:'employees',component:EmployeeListComponent},
{path:'add',component:CreateEmployeeComponent},
{path:'update/:id',component:UpdateEmployeeComponent},
{path:'details/:id',component:EmployeeDetailsComponent},
{path:'login',component:LoginComponent},
{path:'assets',component:AssetListComponent},
{path:'reservation',component:ReservationComponent},
{path:'admin',component:AdminComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
