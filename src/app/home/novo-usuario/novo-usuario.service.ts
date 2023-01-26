import { environment } from './../../../environments/environment.development';
import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private httpClient: HttpClient) {}

  cadastrarNovoUsuario(novousuario: NovoUsuario): Observable<any> {
    return this.httpClient.post(
      `${API}/user/signup`,
      novousuario
    );
  }

  verificaUsuarioExistente(nomeUsuario: string): Observable<any> {
    return this.httpClient.get(
      `${API}/user/exists/${nomeUsuario}`
    );
  }
}
