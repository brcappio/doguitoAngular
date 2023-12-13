import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';

@Component({
  selector: 'app-listaprodutos',
  templateUrl: './listaprodutos.component.html',
  styleUrls: ['./listaprodutos.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class ListaprodutosComponent implements OnInit {
  produtos: Produto[] = []
  constructor(private produtoService: ProdutoService, private confirmationService: ConfirmationService,
    private messageService: MessageService) {
  }


  ngOnInit(): void {
    this.produtoService.getProduto().subscribe((data) => {
      this.produtos = data;
    })
  }

  edit(rowId: number) {
    console.log('editei o item de id ' + rowId)
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
        this.produtoService.deleteProduto(rowId).subscribe(
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
