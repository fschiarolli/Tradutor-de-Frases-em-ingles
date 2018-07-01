import { Component, OnInit, OnChanges, Input} from '@angular/core';
import { Coracao } from '../shared/coracao.model';
@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  @Input() public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  constructor() { }

      // Toda vez que houver uma alteraçāo dos atributos no componente pai,
      // ė executada a condição abaixo
  ngOnChanges() {
      // Verifica se o numero de tentativas é diferente do tamanho do array(3)
    if (this.tentativas !== this.coracoes.length) {
      // Caso seja, é criado uma variável chamada 'índice' que vai decrementando
      // e alterando o atributo cheio para false, diminuindo a quantidade de coraçōes na tela
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }
  }

  ngOnInit() {

  }
}
