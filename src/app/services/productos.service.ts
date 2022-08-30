import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { __values } from 'tslib';
import { Producto, ResponseProducto } from '../interfaces/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


constructor(
  private http:HttpClient
) { }
getAll():Observable<ResponseProducto>{
  return this.http.get<ResponseProducto>(environment.apiEndpoint+"sites/MLA/search?q=gibson")
}
getAllPromise():Promise<ResponseProducto>{
  return lastValueFrom(this.http.get<ResponseProducto>(environment.apiEndpoint+"sites/MLA/search?q=gibson"))
}
getAllPipe():Observable<Producto[]>{
  return this.http.get<ResponseProducto>(environment.apiEndpoint+"sites/MLA/search?q=gibson").pipe(map((value:ResponseProducto)=>value.results))
}
getById(id:string):Observable<Producto>{
  return this.http.get<Producto>(environment.apiEndpoint+"items/"+id)
}
create(data:any){
  return this.http.post("URl",data)
}
update(id:string,data:any){
  return this.http.put("URl/"+id,data)
}
delete(id:string){
  return this.http.delete("URl/"+id)
}
}

