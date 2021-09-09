import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDto } from './dto/login.dto';
import { APIS } from '../../utils/api';
import { CredentialsDto } from './dto/credentials.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(credentials: CredentialsDto): Observable<LoginDto> {
    return this.http.post<LoginDto>(APIS.auth, credentials);
  }
}
