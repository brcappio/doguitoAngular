import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';

@Component({
  selector: 'app-pet-lista',
  templateUrl: './pet-lista.component.html',
  styleUrls: ['./pet-lista.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class PetListaComponent implements OnInit {
  pets: Pet[] = [];
  constructor(
    private petService: PetService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.petService.getPet().subscribe((data) => {
      this.pets = data;
    });
  }

  edit(rowId: number) {
    console.log('editei o item de id ' + rowId);
  }

  delete(rowId: number) {
    this.confirmationService.confirm({
      message: 'Tem certeza que quer deletar o item?',
      header: 'Deletar item',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Confirmado',
          detail: 'Item deletado',
        });
        this.petService.deletePet(rowId).subscribe(
          () => {
            console.log('deletei o item de id ' + rowId); this.ngOnInit();
          },
          (err) => console.log(err)
        );
        this.ngOnInit();
      },
    });
  }
}
