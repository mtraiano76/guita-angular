import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Hola Miguel"
  modificado = false
  classInput = ""
  op1 = 0
  op2 = 0
  resultado = 0
  constructor() { }
  cambiarTitle() {
    if (this.title === "") {
      this.classInput = "error"
    } else {
      this.classInput = "ok"
    }
    this.title = "Hola Miguel"
    this.modificado = true
  }
  calcular() {
    this.resultado = this.op1 + this.op2
  }

  ngOnInit(): void {
  }

}
