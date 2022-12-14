import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navctrl: NavController) {}


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
