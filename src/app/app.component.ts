import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { SliderInitService } from './core/service/slider-init.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
constructor(private sliderInit: SliderInitService) {}
  title = 'ar_immigrration';
   ngOnInit() {
      AOS.init({
        duration: 800,
        once: true
      });
  }
  
}
