import { Component, Input } from '@angular/core';
import { immigrationServices } from '../../const/services';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { RoutePath } from '../../config';
import { ImmigrationService, ServiceView } from '../../typings/app.typings';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
   link = RoutePath;
    immigrationServices:ImmigrationService[] = immigrationServices;
    @Input() popular: boolean = false;
    constructor(
      private router:Router
    ) { }

    viewPage(i:number){
      this.router.navigate([this.link.services + '/' + this.link.services_view + '/' + i]);
    }
}
