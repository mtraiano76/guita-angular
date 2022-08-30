import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'; //incluir

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import { HttpClientModule } from '@angular/common/http';
import { ConcatenarPipe } from './concatenar.pipe';
import { MenuComponent } from './Component/menu/menu.component' //incluir
import { ListadosModule } from './listados/listados.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    CatalogoComponent,
    DetalleComponent,
    ConcatenarPipe,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //incluir
    FormsModule, ReactiveFormsModule, // incluir
    ListadosModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
