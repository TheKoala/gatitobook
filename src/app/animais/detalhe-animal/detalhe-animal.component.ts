import { AnimaisService } from './../animais.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Animal } from '../animais';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css'],
})
export class DetalheAnimalComponent {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animaisService: AnimaisService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.animalId = activatedRoute.snapshot.params['animalId'];
    this.animal$ = animaisService.buscarPorId(this.animalId);
  }

  curtir() {
    this.animaisService.curtir(this.animalId).subscribe({
      next: (curtida) => {
        if(curtida){
          this.animal$ = this.animaisService.buscarPorId(this.animalId)
        }
      },
      error: (error) => console.log(error),
    });
  }

  excluir() {
    this.animaisService.exluirAnimal(this.animalId).subscribe({
      next: () => {
        this.router.navigate(['/animais/']);
      },
      error: (error) => console.log(error),
    });
  }
}
