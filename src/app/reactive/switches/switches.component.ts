import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ 'M', Validators.required ],
    condiciones: [ false, Validators.requiredTrue ]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor( private fb: FormBuilder) { }


  ngOnInit() {
    this.miFormulario.reset( {
      ...this.persona,
      condiciones: true
    });

    // this.miFormulario.get('condicones')?.valueChanges.subscribe( newValue => {
    //   console.log(newValue)
    // })

    this.miFormulario.valueChanges.subscribe( ({ condicones, ...rest }) => {
      // delete form.condiciones;
      this.persona = rest;
    })
  }

  guardar() {
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;

    this.persona = formValue
  }


}
