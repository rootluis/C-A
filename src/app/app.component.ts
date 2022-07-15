import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  usuarios: any[] =[];
  usuario = {
    userId: null,
    nombre: "",
    apPaterno: "",
    apMaterno: "",
    email: "",
    equipo: "",
    activo:false
  }

  constructor(
    private appService: AppService
  ){

  }

  ngOnInit(): void {
    this.getAllUsers();
  }
  
  getAllUsers(){
    this.appService.getUsers()
    .subscribe((data: any) => this.usuarios = data);     
  }

  saveUser(){
    console.log(this.usuario);
    if(this.usuario.userId){
      console.log("Usuario a actualizar: ");
      console.log(this.usuario);
      this.appService.updateUser(this.usuario.userId!, this.usuario)
        .subscribe(() => this.getAllUsers());
    }else{
      console.log("Usuario a crear: " + this.usuario);
      this.appService.createUser(this.usuario)
        .subscribe(() => this.getAllUsers());
    }

    this.usuario = {
      userId: null,
      nombre: "",
      apPaterno: "",
      apMaterno: "",
      email: "",
      equipo: "",
      activo:false
    }
  }

  edit(usuario: any){
    console.log("Desde el metodo edit()");
    console.log(usuario);
    this.usuario = {
      ...usuario
    };
  }

  deleteUser(usuario: any){
    this.appService.deleteUser(usuario.userId).subscribe((() => this.getAllUsers()));
  }

}


