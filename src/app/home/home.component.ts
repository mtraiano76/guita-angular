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
  productos=[
    {
      id:1,
      title:"Gibson Les Paul",
      price:100
    },
    {
      id:2,
      title:"Gibson Explorer",
      price:150
    }

  ]
  categorias=[
    "Guitarras",
    "Bajos"
  ]
  constructor() { }
  add(){
    this.productos=[
      {
        id:3,
        title:"Jackson",
        price:100
      }
    ]
  }
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
