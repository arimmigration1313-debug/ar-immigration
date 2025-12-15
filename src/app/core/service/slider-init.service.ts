import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare global {
  interface Window {
    initSliders: any;
    initMainScripts:any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class SliderInitService {

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
         setTimeout(() => {
                  if (window.initSliders) {
                    window.initSliders(); 
                    window.initMainScripts(); 
                  }
            }, 50);
      }
    });
  }
}
