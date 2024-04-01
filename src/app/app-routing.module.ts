import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UserlistComponent } from './components/userlist/userlist.component';

const routes: Routes = [
  {path : "users" , component : UserComponent},
  {path : "userlist" , component : UserlistComponent},
  { path: '',   redirectTo: '/', pathMatch: 'full' }, // redirect to `users-component` if the path is empty
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
