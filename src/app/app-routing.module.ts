import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSecionComponent } from './componentes/iniciar-secion/iniciar-secion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';


const routes: Routes = [
  {path: 'portfolio',component:PortfolioComponent},
  {path: 'iniciarSecion',component:IniciarSecionComponent},
  {path: '',redirectTo:'iniciarSecion', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
