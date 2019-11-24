import { element } from 'protractor';
import { BootService } from '../boot.service';
import { DadosService } from '../dados.service';

import { Component, ViewChild, ElementRef } from '@angular/core';
import { JsonPipe } from '@angular/common';

export interface Message {
  remetente?: string;
  mensagem: string;
  data?: Date;

}
@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})

export class BotComponent {


  msg: string;
  resultados: Message[]

  constructor(private chatBoot: BootService, private dados: DadosService) {
    this.initBoot()

    dados.getAll();



  }

  initBoot() {
    this.resultados = []
    this.chatBoot.getResponse('oi')
      .subscribe((lista: any) => {
        lista.result.fulfillment.messages.forEach((element) => {
          this.resultados.push({ remetente: 'boot', mensagem: element.speech, data: lista.timestamp })
        });
      })
  }

  sendMessage() {
    this.resultados.push({ remetente: 'eu', mensagem: this.msg, data: new Date() })
    this.chatBoot.getResponse(this.removerAcentos(this.msg))
      .subscribe((lista: any) => {
        lista.result.fulfillment.messages.forEach((element) => {
          this.resultados.push({ remetente: 'boot', mensagem: element.speech, data: lista.timestamp })
        });
      })

    this.msg = '';
  }
  ngAfterViewChecked() {
  }

  private removerAcentos(s) {
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
  }


}
