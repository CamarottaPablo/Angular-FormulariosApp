import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern ) ] ],
    email: ['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ] ],
    username: ['', [ Validators.required, this.validatorService.noPuedeSerStrider ] ],
  })

  constructor( private fb: FormBuilder,
               private validatorService: ValidatorService ) { }

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
