import { Component } from '@angular/core';
import { Validators, NonNullableFormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cep } from 'src/app/models/cep.model';
import { ConsultaCEPService } from 'src/app/services/consulta-cep.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  cepValue: string | null = '';
  cep: Cep = {};
  registerForm: FormGroup;

  constructor(
    private form: NonNullableFormBuilder,
    private consultService: ConsultaCEPService,
    private router: Router,
    private api: UsuarioService
  ) {
    this.registerForm = this.form.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}'
          ),
        ],
      ],
      dataNascimento: ['', Validators.required],
      cpf: ['', Validators.required],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required],
    });
  }

  consultaCEP() {
    this.cepValue = this.registerForm.controls['cep'].value;
    if (this.cepValue) {
      this.consultService.getCEP(this.cepValue).subscribe((data) => {
        this.cep = data;
        if (this.cep.logradouro) {
          this.registerForm.controls['logradouro'].setValue(
            this.cep.logradouro
          );
        }
        if (this.cep.localidade) {
          this.registerForm.controls['cidade'].setValue(this.cep.localidade);
        }
        if (this.cep.uf) {
          this.registerForm.controls['uf'].setValue(this.cep.uf);
        }
      });
    }
  }

  onSubmit() {
    this.api.postUsuario(this.registerForm.value).subscribe((res) => {
      console.log('deu certo');
    });
    console.log(this.registerForm.value);
    this.router.navigate(['concluido']);
  }
}
