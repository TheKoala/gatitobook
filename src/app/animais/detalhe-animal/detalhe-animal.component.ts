import { AnimaisService } from './../animais.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Animal } from '../animais';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css']
})
export class DetalheAnimalComponent {
  animalId !: number;
  animal$ !: Observable<Animal>

  constructor (private animaisService: AnimaisService, private activatedRoute: ActivatedRoute) {
    this.animalId = activatedRoute.snapshot.params['animalId'];
    this.animal$ = animaisService.buscarPorId(this.animalId);
  }
}
