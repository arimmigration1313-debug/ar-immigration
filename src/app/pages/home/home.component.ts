import { Component, OnInit, } from '@angular/core';
import { homeSlides, steps, testimonialsList } from '../../core/const/home';
import { ServiceComponent } from '../../core/shaired/service/service.component';
import {Router } from '@angular/router';
import { RoutePath } from '../../core/config';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule, ServiceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit  {

form!:FormGroup;
sub:boolean = false;
isLoading:boolean = false;
  

link = RoutePath;
homeSlides = homeSlides;
testimonials = testimonialsList;
steps = steps;
constructor(private router:Router,private fb:FormBuilder) { } 
openPage(link:string){
  this.router.navigate([link])
}

ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    })
}

get fc() {
    return this.form.controls;
}

sendMessage(){
  this.sub = true;
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    this.sendMail(this.form.value)
}

sendMail(value:{name:string,email:string,phone:string,subject:string,message:string}){
  emailjs.send(
      "service_w2huyoi",
      "template_2j360qt",
      {
        name: value.name,
        email: value.email,
        phone: value.phone,
        subject: value.subject,
        message: value.message
      },
      "gPZo4Ey-SN-8_YUr8"
    )
    .then(() => {
      this.isLoading = false;
      alert("Message sent successfully!");
      this.form.reset();
      this.sub = false;
    }, (err:string) => {
      this.isLoading = false;
      alert("Failed to send!");
    });
  }
}
