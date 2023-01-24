import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private httpClient: HttpClient) {}

  cadastrarNovoUsuario(novousuario: NovoUsuario): Observable<any> {
    return this.httpClient.post(
      'http://localhost:3000/user/signup',
      novousuario
    );
  }

  verificaUsuarioExistente(nomeUsuario: string): Observable<any> {
    return this.httpClient.get(
      `http://localhost:3000/user/exists/${nomeUsuario}`
    );
  }
}
