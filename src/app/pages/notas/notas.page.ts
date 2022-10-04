import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {

  constructor(private navctrl: NavController) {}

  ngOnInit() {
  }

  showPageInicio(){
    this.navctrl.navigateForward('home');
  }

  showPageCalendario(){
    this.navctrl.navigateForward('calendario');
  }

  showPageNotas(){
    this.navctrl.navigateForward('notas');
  }

  showPageSair(){
    this.navctrl.navigateForward('sair');
  }

}
