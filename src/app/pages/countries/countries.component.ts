import { Component } from '@angular/core';
import { countriesList } from '../../core/const/countries';
import { Router } from '@angular/router';
import { RoutePath } from '../../core/config';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent {
  link = RoutePath;
  countries = countriesList;
  constructor(private router:Router){}

  viewDetails(id:number){
     this.router.navigate([RoutePath.countries + '/' + RoutePath.countries_view + '/' + id]);
  }

   openPage(link:string){
    this.router.navigate([link])
  }

}
