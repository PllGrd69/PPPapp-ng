import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nom:string;

  constructor() { }

  ngOnInit(): void {
  }

  nombre="Juan Perez";
  edad=18;
  soltero=true;
  habilidades=['programar','Jugar Futbol','Dibujar','VideoJuegos'];
  cumple=new Date(1998, 4, 15);
  precio=50.80;

  mostrarMensaje(){
    alert("hola mundo angular");
  }

  persona={
    nom: "Angel Condori"
  }
}
