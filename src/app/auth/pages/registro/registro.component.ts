import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup;
  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if( errors!['required'] ){
      return 'Email es obligatorio....';
    }
    else if( errors!['pattern'] ){
      return 'El campo Email no cumple con el formato de un correo....';
    }
    else if( errors!['emailTomado'] ){
      return 'El correo ya existe....';
    }

    return '';
  }

  constructor(private fb: FormBuilder, private validationService: ValidatorService, private emailValidator: EmailValidatorService){
    this.miFormulario = this.fb.group({
      nombre: ['', [ Validators.required, Validators.pattern( this.validationService.nombreApellidoPattern ) ]],
      email: ['', [ Validators.required, Validators.pattern( this.validationService.emailPattern)], [ this.emailValidator]],
      username: ['', [ Validators.required, this.validationService.noPuedeSerStrider ]],
      password: ['', [ Validators.required, Validators.minLength(6)]],
      password2: ['', [ Validators.required]],

    }, {
      validators: [ this.validationService.camposIguales('password', 'password2') ]
    });
  }
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Fernando Herrera',
      email: 'test1@gmail.com',
      username: 'pepe',
      password: 'pepe',
      password2: 'pepe',
    })
  }

  campoNoValido( campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

 /* emailRequerido(){
    return this.miFormulario.get('email')?.errors!['required'] && this.miFormulario.get('email')?.touched;
  }

  emailFormato(){
    return this.miFormulario.get('email')?.errors!['pattern'] && this.miFormulario.get('email')?.touched;
  }

  emailTomado(){
    return this.miFormulario.get('email')?.errors!['emailTomado'] && this.miFormulario.get('email')?.touched;
  }*/



  submitFormulario(){

    this.miFormulario.markAllAsTouched();

  }

}
