import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';
import { Action } from 'rxjs/internal/scheduler/Action';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  result: string;
  value: string;

  constructor(private navctrl: NavController, private as: ActionSheetController ) {}

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

  async actionsheet() {
    const actionSheet = await this.as.create({
      header: 'Calendário',
      buttons: [
        {
          text: 'Agosto',
          role: 'selected',
          handler: ()=>{
            this.result = '2022-08';
           }
        },
        {
          text: 'Setembro',
          role: 'selected',
          handler: ()=>{
            this.result = '2022-09';
           }
        },
        {
          text: 'Outubro',
          role: 'selected',
          handler: ()=>{
            this.result = '2022-10';
           }
        },
        {
          text: 'Novembro',
          role: 'selected',
          handler: ()=>{
            this.result = '2022-11';
           }
        },
        {
          text: 'Dezembro',
          role: 'selected',
         handler: ()=>{
          this.result = '2022-12';
         }
        },
        {
          text: 'Sair',
          role: 'cancel',
          data: {
            action: 'cancel'
          }
        },
      ],
    });

    await actionSheet.present();


  }
}





