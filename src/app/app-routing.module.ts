import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AriannaComponent } from './arianna/arianna.component';
import { DealCalcComponent } from './deal-calc/deal-calc.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',redirectTo:'/arianna',pathMatch:'full'},
  {path:'arianna',component:AriannaComponent},
  {path:'dealcalculator',component:DealCalcComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
