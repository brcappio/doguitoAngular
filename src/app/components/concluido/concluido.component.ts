import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-concluido',
  templateUrl: './concluido.component.html',
  styleUrls: ['./concluido.component.css']
})
export class ConcluidoComponent {

  constructor(private router: Router) {

  }

  navegar() {
    this.router.navigate(['sistema'])
  }
}
