import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  // TODO: Temporalmente
  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  noPuedeSerStrider( control: FormControl ) {
    
    const valor: string = control.value?.trim().toLowerCase();
    if ( valor === 'strider' ) {
      return {
        noStrider: true
      }
    }

    return null;
  }


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern( this.nombreApellidoPattern ) ] ],
    email: ['', [ Validators.required, Validators.pattern( this.emailPattern ) ] ],
    username: ['', [ Validators.required, this.noPuedeSerStrider ] ],
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Pablo Camarotta',
      email: 'test1@test.com',
      username: 'pablo_camarotta'
    })

  }

  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid
          && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {

    this.miFormulario.markAllAsTouched();

  }

}
