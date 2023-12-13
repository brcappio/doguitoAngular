import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class ClienteListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  constructor(
    private usuarioService: UsuarioService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe((data) => {
      this.usuarios = data;
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
        this.usuarioService.deleteUsuario(rowId).subscribe(
          () => {
            console.log('deletei o item de id ' + rowId); this.ngOnInit();
          },
          (err) => console.log(err)
        );
      },
    });
  }
}
