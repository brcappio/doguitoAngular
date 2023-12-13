import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { ConcluidoComponent } from './components/concluido/concluido.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProdutoCadastroComponent } from './components/produto-cadastro/produto-cadastro.component';
import { SistemaComponent } from './components/sistema/sistema.component';
import { ListaprodutosComponent } from './components/produto-lista/produto-lista.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ClienteListaComponent } from './components/cliente-lista/cliente-lista.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';
import { PetCadastroComponent } from './components/pet-cadastro/pet-cadastro.component';
import { PetListaComponent } from './components/pet-lista/pet-lista.component';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { InputMaskModule } from 'primeng/inputmask';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ConcluidoComponent,
    FormularioComponent,
    NavbarComponent,
    ProdutoCadastroComponent,
    SistemaComponent,
    ListaprodutosComponent,
    ClienteListaComponent,
    ClienteCadastroComponent,
    PetCadastroComponent,
    PetListaComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    InputTextModule,
    CalendarModule,
    PasswordModule,
    DividerModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MenubarModule,
    MenuModule,
    InputNumberModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    DropdownModule,
    InputMaskModule,
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
