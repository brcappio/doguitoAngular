import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { PetService } from 'src/app/services/pet.service';

interface Especie {
  name: string;
  id: number;
}

@Component({
  selector: 'app-pet-cadastro',
  templateUrl: './pet-cadastro.component.html',
  styleUrls: ['./pet-cadastro.component.css'],
})
export class PetCadastroComponent implements OnInit {
  constructor(private form: NonNullableFormBuilder, private api: PetService) {}

  especies: Especie[] | undefined;

  especie: Especie | undefined;

  ngOnInit() {
    this.especies = [
      { name: 'Cachorro', id: 1 },
      { name: 'Gato', id: 2 },
      { name: 'Pássaro', id: 3 },
      { name: 'Réptil', id: 4 },
      { name: 'Peixe', id: 5 },
    ];
  }

  petForm = this.form.group({
    nome: ['', Validators.required],
    especie: [, Validators.required],
    idade: [0, Validators.required],
  });

  onSubmit() {
    this.api.postPet(this.petForm.value).subscribe((res) => {
      console.log(this.petForm.value);
    });
  }
}
