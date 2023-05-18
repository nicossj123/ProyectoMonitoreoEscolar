import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-notas',
  templateUrl: './registro-notas.page.html',
  styleUrls: ['./registro-notas.page.scss'],
})
export class RegistroNotasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  clickVolver(){
    this.router.navigate(['/menu-registros'])
  }
}
