import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,  } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, LoadingComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyApp';

  constructor(){
  }
}
