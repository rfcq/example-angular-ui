import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user: User = {
    name: '',
    surname: '',
    username: '',
    birthDate: '',
    email: '',
    phoneNumber: ''
  };

  constructor(private userService: UserService) {}

  saveUser(): void {
    const data = {
      name: this.user.name,
      surname: this.user.surname,
      username: this.user.username,
      birthDate: this.user.birthDate,
      email: this.user.email,
      phoneNumber: this.user.phoneNumber
    };

    this.userService.create(data).subscribe({
      next: (res) => {
        alert("Usuário registrado com sucesso!");
        window.location.reload();
      },
      error: (e) => console.error(e)
    });
  }
}
