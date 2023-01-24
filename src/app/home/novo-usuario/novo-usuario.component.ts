import { UsuarioExisteService } from './usuario-existe.service';
import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { minusculoValidator } from './minusculo.validator';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExisteService: UsuarioExisteService
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        email: [
          '',
          Validators.compose([Validators.required, Validators.email]),
        ],
        fullName: [
          '',
          Validators.compose([Validators.required, Validators.minLength(4)]),
        ],
        userName: [
          '',
          Validators.compose([Validators.required, minusculoValidator]),
          [this.usuarioExisteService.usuarioJaExiste()],
        ],
        password: ['', Validators.compose([Validators.required])],
      },
      {
        validators: [usuarioSenhaIguaisValidator],
      }
    );
  }

  cadastrar() {
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
  }
}
