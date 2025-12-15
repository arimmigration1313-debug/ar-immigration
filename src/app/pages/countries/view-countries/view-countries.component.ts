import { Component } from '@angular/core';
import { CommonModule } from "../../../../../node_modules/@angular/common";
import { CountryView } from '../../../core/typings/app.typings';
import { RoutePath } from '../../../core/config';
import { countriesList } from '../../../core/const/countries';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-countries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-countries.component.html',
  styleUrl: './view-countries.component.scss'
})
export class ViewCountriesComponent {
    view?:CountryView;
    link = RoutePath;
    countries = countriesList;

    constructor(private route: ActivatedRoute,
          private router:Router
        ) {
          const id:number | null = Number(this.route.snapshot.paramMap.get('id'));
          if(id == 0 || id) {
            let index  = this.countries.findIndex((x,i) => i === id);
            this.view = this.countries[index].view;
          }else{
            this.router.navigate([RoutePath.pageNot_found]);
          }
         }

    changedTab(id:string){
      this.view?.visaTabs.forEach((tab:any) => {
        tab.active = (tab.id === id)? true : false;
      });
    }
    contactPage(){
    this.router.navigate([this.link.contact]);
    }
         
}
