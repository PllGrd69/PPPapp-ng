import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email:string;
  public password:string;



  constructor(public authService:AuthService, public router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmitLogin(){
    this.authService.loginEmail(this.email,this.password).
    then((res)=>{
      console.log(res);
      this.toastr.success('Ingreso Correcto');
      this.router.navigate(['./administrador']);
    }).catch((err)=>{
      console.log(err)
      this.toastr.error('Error : Usuario o contraseña incorrecta');
    })
  }

}
