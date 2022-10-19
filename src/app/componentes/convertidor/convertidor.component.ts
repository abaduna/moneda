import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  cantidad = 0
  tengo = "usd"
  quiero = "eur"
  total = 0
  monedas:string[] = ["eur", "libra","usd" ]
  constructor() { }

  ngOnInit(): void {
  }
  convertir(){
    switch(this.tengo){
      case "usd":
        if(this.quiero=="usd"){
          this.total = this.cantidad
        }
        if(this.quiero==="eur"){
          this.total = this.cantidad*1.2    
           }
           if(this.quiero==="libra"){
            this.total = this.cantidad*0.89
             }
        break
      case "eur":
        if(this.quiero=="usd"){
          this.total = this.cantidad*0.98
        }
        if(this.quiero==="eur"){
          this.total = this.cantidad   
           }
           if(this.quiero==="libra"){
            this.total = this.cantidad*0.87
             }
        break
      case "libra":
        if(this.quiero=="usd"){
          this.total = this.cantidad*1.12
        }
        if(this.quiero==="eur"){
          this.total = this.cantidad*1.15
           }
           if(this.quiero==="libra"){
            this.total = this.cantidad
             }
        break
    }
  }
}
