import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeTaxableComponent} from './income-taxable/income-taxable.component'; 

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
