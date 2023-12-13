import { Component } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Cep } from 'src/app/models/cep.model';
import { ConsultaCEPService } from 'src/app/services/consulta-cep.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})

export class ClienteCadastroComponent {
  cepValue: string | null = '';
  cep: Cep = {};

  constructor(private form: NonNullableFormBuilder, private api: UsuarioService, private consultService: ConsultaCEPService) {
  }

  clientForm = this.form.group( {
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    dataNascimento: ['', Validators.required],
    cpf: ['', Validators.required],
    cep: ['', Validators.required],
    logradouro: ['', Validators.required],
    cidade: ['', Validators.required],
    uf: ['', Validators.required],
  })

  consultaCEP() {
    this.cepValue = this.clientForm.controls['cep'].value
    if (this.cepValue) {
      this.consultService.getCEP(this.cepValue).subscribe(data => {
        this.cep = data;
        if (this.cep.logradouro) {
          this.clientForm.controls['logradouro'].setValue(this.cep.logradouro)
        }
        if (this.cep.localidade) {
          this.clientForm.controls['cidade'].setValue(this.cep.localidade)
        }
        if (this.cep.uf) {
          this.clientForm.controls['uf'].setValue(this.cep.uf)
        }
      })
    }   
  }
 
  onSubmit() {
    this.api.postUsuario(this.clientForm.value).subscribe(res => {      
      console.log(this.clientForm.value)
    })
  }
}

