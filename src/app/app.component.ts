import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgwWowService } from 'ngx-wow';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'appventas';


  constructor(private wowService: NgwWowService ,private authService:AuthService, private router:Router,private toastr: ToastrService ){
    
  }
  ngOnInit(){
    this.wowService.init();
  }
  onLogout(){
    this.authService.logout();
    this.router.navigate(['/']);
    this.toastr.info('Cerro Sesion');
  }
  
}
