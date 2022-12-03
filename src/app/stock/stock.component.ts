import { Component } from '@angular/core';


@Component({

    selector: 'app-stock',
    templateUrl: './stock.component.html',
    styleUrls: ['./stock.component.css']

})


export class StockComponent{

    total_abacaxi: number = 0;
    total_bananas: number = 0;
    total_laranjas: number = 0;
    

    AdicionarAbacaxi(){
     this.total_abacaxi++;
    };

    RemoverAbacaxi(){
    this.total_abacaxi--;
    };
 
    AdicionarBanana(){
    this.total_bananas++;
    };

    RemoverBanana(){
    this.total_bananas--;
    };

    AdicionarLaranja(){
    this.total_laranjas++;
    };

    RemoverLaranja(){
    this.total_laranjas--;
    };

 
    CalcularTotal(){
        return this.total_abacaxi + this.total_bananas + this.total_laranjas;
    }
 
    //estilos
     
    EstiloAbacaxi(){
    let estilo = "black";
    if(this.total_abacaxi <= 0)
    estilo = "red";
    return estilo;
}
    EstiloBanana(){
    let estilo = "black";
    if(this.total_bananas <= 0)
    estilo = "red";
    return estilo;
    
    
    }
    EstiloLaranja(){
        let estilo = "black";
        if(this.total_laranjas <= 0)
        estilo = "red";
        return estilo;
    }
}