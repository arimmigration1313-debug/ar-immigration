import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { ImmigrationService, ServiceView } from '../../../core/typings/app.typings';
import { immigrationServices } from '../../../core/const/services';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RoutePath } from '../../../core/config';
import {  CommonModule, DOCUMENT, isPlatformBrowser } from "../../../../../node_modules/@angular/common";
@Component({
  selector: 'app-view-service',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-service.component.html',
  styleUrl: './view-service.component.scss'
})
export class ViewServiceComponent {
  link = RoutePath;
 immigrationServices:ImmigrationService[] = immigrationServices;
    viewDetails?:ServiceView;
    constructor(private route: ActivatedRoute,
      private router:Router
    ) {
      const id:number | null = Number(this.route.snapshot.paramMap.get('id'));
      if(id == 0 || id) {
        let index  = immigrationServices.findIndex((x,i) => i === id);
        this.viewDetails = this.immigrationServices[index].view;
      }else{
        this.router.navigate([RoutePath.pageNot_found]);
      }
     }


     contactPage(){
      this.router.navigate([this.link.contact]);
     }
     
}