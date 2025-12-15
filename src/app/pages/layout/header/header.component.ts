import { Component, OnInit } from '@angular/core';
import { RoutePath } from '../../../core/config';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  activeClass:boolean = false;
  home = RoutePath.home;
  mode:string = localStorage.getItem('theme') || 'light';
  menuList:{label:string,link:string,class:string,active:string}[] = [
    { label: 'Home', link: RoutePath.home, class:'',active:'active'},
    { label: 'About', link: RoutePath.about, class:'',active:'active'},
    { label: 'Services', link:  RoutePath.services, class:'',active:'active'},
    { label: 'Countries', link: RoutePath.countries, class:'',active:'active'},
    { label: 'Blog', link:  RoutePath.blog, class:'',active:'active'},
    { label: 'contact', link:  RoutePath.contact,class:'btn btn-primary px-4 py-2',active:'active'},
  ];

  ngOnInit(){
    const currentTheme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', this.mode);
  }

  themeChanged(){
    this.mode = this.mode === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme',this.mode)
    const currentTheme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', this.mode);
  }
}
