import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

/*interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}*/

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFromulario: FormGroup;
  nuevoFavorito: FormControl;

  constructor(private fb: FormBuilder){

    this.miFromulario = this.fb.group({
      nombre: ['', [ Validators.required, Validators.minLength(3) ]],
      favoritos: this.fb.array( [
        ['Super Mario', Validators.required],
        ['Mortal Kombat', Validators.required]
      ], Validators.required)
    });

    this.nuevoFavorito = this.fb.control('', Validators.required);
  }

  get getArray(){
    return this.miFromulario.get('favoritos') as FormArray;
  }

  validarCampo( campo: string ){
    return this.miFromulario.controls[campo].errors
              && this.miFromulario.controls[campo].touched;
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){ return ;}

    this.getArray.push( new FormControl( this.nuevoFavorito.value, Validators.required ));
    //this.getArray.push( this.fb.control( this.nuevoFavorito.value, Validators.required ));
    this.nuevoFavorito.reset();
  }

  borrar( i: number){

    this.getArray.removeAt(i);

  }


  guardar() {

    if(this.miFromulario.invalid){
      return this.miFromulario.markAllAsTouched();
    }

    console.log(this.miFromulario.value);
    this.miFromulario.reset();


  }

}
