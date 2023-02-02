import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  UrlTree,
  Router,
  CanMatch,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoGuard implements CanMatch {
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (!this.usuarioService.estalogado()) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }
}
