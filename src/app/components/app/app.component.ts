import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,  } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { DemoService } from '../../services/demo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyApp';
  demo = inject(DemoService);

  constructor(){
    this.demo.launch();
  }
}
