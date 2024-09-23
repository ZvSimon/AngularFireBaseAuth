import {Component, inject, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AuthService} from "./auth/services/auth.service";
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{

  authService = inject(AuthService)


  ngOnInit() {
    this.authService.user$.subscribe((user:User |null) =>{
      if(user){
        this.authService.currentUserSign.set({
          email : user.email!,
          username:user.displayName!,
        })
      }else{
        this.authService.currentUserSign.set(null)
      }
    })
  }

  logout(){
    this.authService.logout();
  }
}
