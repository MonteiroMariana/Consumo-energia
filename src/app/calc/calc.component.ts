import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  pessoas: number = 0;
  comodos: number = 0;
  tvs: number = 0;
  pcs: number = 0;
  tarifa: number = 0;
  lava: boolean = false;
  seca: boolean = false;
  resultado: string = "";

  enviar()
  {
    let total = 0;
    total += this.pessoas * 30 * 5000 * 0.167 / 1000; //dias do mês, potência, hrs por dia
    total += this.comodos * 30 * 15 * 12 / 1000;
    total += this.tvs * 30 * 200 * 6 / 1000;
    total += this.pcs * 30 * 350 * 6 / 1000;
    if(this.lava)
    {
      total += 12 * 1500 * 1.1 / 1000;
    }
    if(this.seca)
    {
      total += 12 * 3500 * 0.75 / 1000;
    }

    this.resultado = "KW: " + total.toFixed(2) + " | Valor: " + (total * this.tarifa).toFixed(2);
  }
}
