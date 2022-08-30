import { Component, OnInit } from '@angular/core';
import { Producto, ResponseProducto } from 'src/app/interfaces/Productos';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos:Producto[]=[]
  loading:boolean=true
  constructor(
    private productosServices:ProductosService
  ) { 
    this.productosServices.getAll()
    .subscribe({
      next:(data:ResponseProducto)=>{
        console.log(data)
        this.productos=data.results
        this.loading=false
      },
      error:error=>{
        console.log(error)
      }
    })

    
  }
  
  ngOnInit(): void {
  }

}

