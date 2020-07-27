import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appventas';

  constructor(private authService:AuthService, private router:Router,private toastr: ToastrService){

  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/']);
    this.toastr.info('Cerraste CPP');
  }
}
