import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
             
  loginobj: any = {
     userName: ' ',
     password: ' '
  };
   
  router = inject(Router)
  onLogin() {
    if(this.loginobj.userName ===  'admin' && this.loginobj.password === '12345678') {
       this.router.navigateByUrl('/dashboard')
    } else {
      alert('Wrong Credentials')
    }
  }
}
