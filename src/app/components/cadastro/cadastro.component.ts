import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule, FormBuilder, Validators, NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Cep } from 'src/app/models/cep.model';
import { ConsultaCEPService } from 'src/app/services/consulta-cep.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})

export class CadastroComponent {
  cepValue: string | null = '';
  cep: Cep = {};


  constructor(private form: NonNullableFormBuilder, private consultService: ConsultaCEPService, private router: Router, private api: UsuarioService) {
    
  }

  registerForm = this.form.group( {
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')]],
    dataNascimento: ['', Validators.required],
    cpf: ['', Validators.required],
    cep: ['', Validators.required],
    logradouro: ['', Validators.required],
    cidade: ['', Validators.required],
    uf: ['', Validators.required],
  })
  
  // registerForm = this.form.group( {
  //   nome: this.form.nonNullable.control('', Validators.required),
  //   email: this.form.nonNullable.control(Validators.required, Validators.email),
  //   senha: this.form.nonNullable.control([Validators.required, Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')]),
  //   dataNascimento: this.form.nonNullable.control('', Validators.required),
  //   cpf: this.form.nonNullable.control('', Validators.required),
  //   cep: this.form.nonNullable.control('', Validators.required),
  //   logradouro: this.form.nonNullable.control('', Validators.required),
  //   cidade: this.form.nonNullable.control('', Validators.required),
  //   uf: this.form.nonNullable.control('', Validators.required),
  // })

  
  consultaCEP() {
    this.cepValue = this.registerForm.controls['cep'].value
    if (this.cepValue) {
      this.consultService.getCEP(this.cepValue).subscribe(data => {
        this.cep = data;
        if (this.cep.logradouro) {
          this.registerForm.controls['logradouro'].setValue(this.cep.logradouro)
        }
        if (this.cep.localidade) {
          this.registerForm.controls['cidade'].setValue(this.cep.localidade)
        }
        if (this.cep.uf) {
          this.registerForm.controls['uf'].setValue(this.cep.uf)
        }
      })
    }   
  }

  onSubmit() {
    this.api.postUsuario(this.registerForm.value).subscribe(res => {      
      console.log('deu certo')
    })
    console.log(this.registerForm.value)
    // this.router.navigate(['concluido'])
  }
}

