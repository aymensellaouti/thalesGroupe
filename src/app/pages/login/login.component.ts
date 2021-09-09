import { Component, OnInit } from '@angular/core';
import { CredentialsDto } from '../../auth/services/dto/credentials.dto';
import { AuthService } from '../../auth/services/auth.service';
import { LoginDto } from 'src/app/auth/services/dto/login.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {}
  login(credentials: CredentialsDto): void {
    this.authService.login(credentials).subscribe(
      (loginData: LoginDto) => {
        localStorage.setItem('token', loginData.id);
        this.router.navigate(['cv']);
      }
    )
  }

}
