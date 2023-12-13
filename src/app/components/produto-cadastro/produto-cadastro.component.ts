import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent {

  constructor(private form: FormBuilder, private api: ProdutoService) {
  }

  productForm = this.form.group({
    nome: this.form.nonNullable.control('', Validators.required),
    preco: this.form.nonNullable.control(0, Validators.required),
    quantidade: this.form.nonNullable.control(0, Validators.required),
    descricao: this.form.nonNullable.control('', Validators.required),
  })
 
  onSubmit() {
    this.api.postProduto(this.productForm.value).subscribe(res => {      
      console.log(this.productForm.value)
    })
  }
}
