import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent {

  constructor(private userService: UserService) {
    this.getAllUsers();
  }

  userList : User[] = [];

  getAllUsers(){
    this.userService.getAll().subscribe((response : User[])=>{
      this.userList = response;
    });
  }

  deleteUser(userId : string){
    if(confirm("O usuário será deletado. Confirma?")){
      this.userService.delete(userId).subscribe(()=>{
        alert("Usuário removido com sucesso!");
        window.location.reload();
      });
    }
  }

  deleteAllUsers(){
    if(confirm("Esvaziar base?")){
      this.userService.deleteAll().subscribe(()=>{
        alert("Base esvaziada!");
        window.location.reload();
      });
    }
  }
}
