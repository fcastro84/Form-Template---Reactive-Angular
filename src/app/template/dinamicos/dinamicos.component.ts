import { Component } from '@angular/core';


interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {


  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Fidel',
    favoritos: [
      {
        id: 1,
        nombre: 'Super Mario'
      },
      {
        id: 2,
        nombre: 'Mortal Kombat'
      },

    ]
  }

  guardar() {
    console.log("hfhfh");
  }

  eliminar( i:number ){
    this.persona.favoritos.splice(i, 1);
  }

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = ''
  }

}
