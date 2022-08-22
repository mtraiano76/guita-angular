import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'; //incluir

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HttpClientModule } from '@angular/common/http';
import { ConcatenarPipe } from './concatenar.pipe' //incluir

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    CatalogoComponent,
    DetalleComponent,
    ConcatenarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //incluir
    FormsModule, ReactiveFormsModule // incluir
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
