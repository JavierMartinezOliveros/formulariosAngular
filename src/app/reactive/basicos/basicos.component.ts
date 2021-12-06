import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX 4080ti'),
  //   'precio': new FormControl(1500),
  //   'stock' : new FormControl(5)
  // }) en teoria esto es lo mismo al form builder

  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)]  ],
    precio: [ , [Validators.min(0), Validators.required] ],
    stock : [ , [Validators.min(0), Validators.required] ],
  })

  constructor( private fb:FormBuilder) { }

  ngOnInit() {
    this.miFormulario.reset({
      nombre: 'Nintendo Switch',
      precio: 10000
    })
  }

  campoEsValido( campo: string ){
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched
  }

  guardar() {

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
