import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {
  @Input() name ;
  @Output() sendDataToPapa = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  /*
  Crée un event
  mettre les datas que je veux envoyer dans l'event
  envoyer l event
  */
  sendData() {
    this.sendDataToPapa.emit('cc papa');
  }
}
