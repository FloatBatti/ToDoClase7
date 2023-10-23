import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/autServices/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() isUser: boolean = false;


  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  public goToLogin() {
    this.router.navigate(["/auth/login"]);
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
