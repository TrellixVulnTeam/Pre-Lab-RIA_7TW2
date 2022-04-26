import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { allowedNodeEnvironmentFlags } from 'process';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  form: FormGroup;
  constructor(private _fb: FormBuilder) { }

  createForm(){
    this.form = this._fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      cedula: ["", [
        Validators.required,
        Validators.min(8),
        Validators.max(9)
      ]],
      telefono: ["", [
        Validators.required,
        Validators.max(9),
        Validators.min(8)
      ]],
      direccion: ["", Validators.required],
      fechaNac: ["", Validators.required]
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  enviar(){
    if(this.form.valid){
      let n = this.form.get('nombre')?.value;
      let a = this.form.get('apellido')?.value;
      let ci = this.form.get('cedula')?.value;
      let tel = this.form.get('telefono')?.value;
      let fecha = this.form.get('fechaNac')?.value;

      /*let client = new Cliente(n,a,ci,tel,fecha);*/
    }
  }

}
class Cliente {
  cedula: number;
  nombre: string;
  apellido: string;
  telefono: number;
  direccion: string;
  fechaNac: string;
    

constructor(n:string, a:string, ci:number, tel:number, dir:string, f:string) {
    this.apellido = a;
    this.cedula = ci;
    this.nombre = n;
    this.telefono = tel;
    this.direccion = dir;
    this.fechaNac = f;
}}
