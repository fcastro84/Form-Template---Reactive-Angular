import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  @ViewChild('miForm') miForm!: NgForm;

  iniForm = {
    producto: 'RTX 4080i',
    precio: 10,
    existencia: 10
  }

  nombreValido(): boolean{
    return this.miForm?.controls['producto']?.invalid && this.miForm?.controls['producto']?.touched ;
  }

  precioValido(): boolean{
      return this.miForm?.controls['precio']?.touched && this.miForm?.controls['precio']?.value < 0;
  }

  guardar(){
  console.log(this.miForm);
  this.miForm.resetForm({
    precio: 0,
    existencia: 0
  });
  }

}
