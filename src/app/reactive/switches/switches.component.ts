import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup;

  persona = {
    genero: 'F',
    notificaciones: true
  };

  constructor( private fb: FormBuilder){
    this.miFormulario = this.fb.group({
      genero: ['M', Validators.required],
      notificaciones: [true, Validators.required],
      condiciones: [false, Validators.requiredTrue],
    });
  }
  ngOnInit() {
    this.miFormulario.reset( {...this.persona, condiciones: false} );
    this.miFormulario.valueChanges.subscribe(({condiciones, ...rest})=>{
      this.persona = rest;
    })
  }

  guardar(){
    const formValue = { ...this.miFormulario.value};
    delete formValue.condiciones;
    this.persona = formValue;
  }

}
