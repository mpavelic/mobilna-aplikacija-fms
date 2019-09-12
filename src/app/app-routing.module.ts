import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'log-in', loadChildren: './log-in/log-in.module#LogInPageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'main-page', loadChildren: './main-page/main-page.module#MainPagePageModule' },
  { path: 'new-expense', loadChildren: './expenses/expenses.module#ExpensesPageModule' },
  { path: 'expenses-list', loadChildren: './expenses-list/expenses-list.module#ExpensesListPageModule' },
  { path: 'new-revenue', loadChildren: './revenues/revenues.module#RevenuesPageModule' },
  { path: 'revenues-list', loadChildren: './revenues-list/revenues-list.module#RevenuesListPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
