import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  miFormulario: FormGroup;

  constructor(private fb: FormBuilder){

    this.miFormulario = this.fb.group({
      nombre: [, [Validators.required, Validators.minLength(3)]],
      precio: [, [Validators.required, Validators.min(0)]],
      existencias: [, [Validators.required, Validators.min(0)]]
    });

  }

  ngOnInit() {
    this.miFormulario.reset({
      nombre: 'New',
      precio: 1600,
      existencias: 20
    })
  }

  validarCampos( campo: string) {
    return this.miFormulario.controls[campo].errors
                && this.miFormulario.controls[campo].touched;
  }


  guardar() {

    if( this.miFormulario.invalid){
      return this.miFormulario.markAllAsTouched();
    }

    this.miFormulario.reset();

    console.log(this.miFormulario);

  }

}
