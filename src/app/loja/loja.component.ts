import { Component } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})


  
export class LojaComponent {
  produtos: any[] = [];

  AdicionarAbacaxi(){
    //adiciona um abacaxi ao componente
    this.produtos.push(
      {
        'icon':  'abacaxi.png',
        'nome':'Abacaxi'
      
       }
        );
    
  }

  AdicionarBanana(){
    //adiciona uma  banana ao componente
    this.produtos.push(
      {
        'icon': 'banana.png' ,
        'nome': 'Banana'
      }
    );
  }


  AdicionarLaranja(){
    //adiciona uma laranja ao componente
    this.produtos.push(
      {
        'icon': 'laranja.png',
        'nome': 'Laranja'
      }
    );
  }
}
