import { Component } from '@angular/core';
import { RoutePath } from '../../../core/config';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogItem } from '../../../core/typings/app.typings';
import { blogList } from '../../../core/const/blog';

@Component({
  selector: 'app-view-blog',
  standalone: true,
  imports: [],
  templateUrl: './view-blog.component.html',
  styleUrl: './view-blog.component.scss'
})
export class ViewBlogComponent {
 blogList:BlogItem[] = blogList;
 view?:BlogItem;
constructor(private route: ActivatedRoute,  private router:Router ) {
          const id:number | null = Number(this.route.snapshot.paramMap.get('id'));
          if(id == 0 || id) {
            let index  = this.blogList.findIndex((x,i) => i === id);
            this.view = this.blogList[index]
          }else{
            this.router.navigate([RoutePath.pageNot_found]);
          }
        }
  contactPage(){
    this.router.navigate([RoutePath.contact]);
    }
}
