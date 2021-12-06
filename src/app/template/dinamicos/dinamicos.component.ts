import { Component, } from '@angular/core';

interface Persona {
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
    nombre: 'Timothy',
    favoritos: [
      { id: 1, nombre:'Luigis Mansion'},
      { id: 2, nombre: 'super Mario Odyssey'}
    ]
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }

  guardar(){
    console.log('entra click')
  }

  eliminar( index: number){
    this.persona.favoritos.splice(index, 1);
  }
}
