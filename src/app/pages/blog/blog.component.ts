import { Component } from '@angular/core';
import { blogList } from '../../core/const/blog';
import { BlogItem } from '../../core/typings/app.typings';
import { Router } from '@angular/router';
import { RoutePath } from '../../core/config';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogs:BlogItem[] = blogList;
 constructor(private router:Router){}
  viewDetails(id:number){
       this.router.navigate([RoutePath.blog + '/' + RoutePath.blog_view + '/' + id]);
    }
}
