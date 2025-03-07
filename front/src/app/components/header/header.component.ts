import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/api/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token:string='';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.token = ''+localStorage.getItem('token');
    this.isLoggedIn = this.authService.isLoggedIn();

  }
  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
