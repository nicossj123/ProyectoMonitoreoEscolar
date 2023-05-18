import {  Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-menu-registros',
  templateUrl: './menu-registros.page.html',
  styleUrls: ['./menu-registros.page.scss'],
})
export class MenuRegistrosPage implements OnInit {

  @ViewChild('animar1', { read: ElementRef, static: true }) animar1: any; ElementRef: any;

  constructor(private router: Router, private animationCtrl: AnimationController) {
  }
    

  ngAfterViewInit() {
    const animar1 = this.animationCtrl.create()
      .addElement(this.animar1.nativeElement)
      .duration(5500)
      .fromTo('opacity', '0', '3')
      .iterations(1)

    const animar = this.animationCtrl.create()
      .addAnimation([animar1]);

    animar.play()
  }

  ngOnInit() {
  }

  clickNotas(){
    this.router.navigate(['/registro-notas'])
  } 

  clickAsistencia(){
    this.router.navigate(['/registro-asistencia'])
  }  

  clickAnotaciones(){
    this.router.navigate(['/registro-anotaciones'])
  }  
}
