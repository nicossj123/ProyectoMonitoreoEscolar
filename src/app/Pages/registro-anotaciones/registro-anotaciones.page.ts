import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observation } from './observations-data';
@Component({
  selector: 'app-registro-anotaciones',
  templateUrl: './registro-anotaciones.page.html',
  styleUrls: ['./registro-anotaciones.page.scss'],
})
export class RegistroAnotacionesPage implements OnInit {

  constructor(private router: Router) { }

  observaciones: Observation[] = [{ teacherName: 'Juan Sepulveda', observationDate: new Date('2021-10-01'), observationText: 'El alumno grita en clases en reiteradas ocaciones sin respetar a los demas en la sala de clases.' },
  { teacherName: 'Maria Retamal', observationDate: new Date('2021-10-02'), observationText: 'Participó activamente en clase.' },
  { teacherName:'Pedro Alvarez', observationDate: new Date('2021-10-03'), observationText: 'Necesita mejorar su comportamiento.' },]

  ngOnInit() {
  }

  clickVolver(){
    this.router.navigate(['/menu-registros'])
  }
}




  


