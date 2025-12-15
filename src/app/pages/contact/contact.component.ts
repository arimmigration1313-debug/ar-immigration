import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  form!:FormGroup;
  sub:boolean = false;
  isLoading:boolean = false;
  constructor(private fb:FormBuilder){

  }
  contactCards = [
  {
    title: "Call Us",
    subtitle: "Speak directly with our team",
    icon: "fas fa-phone",
    bgColor: "linear-gradient(135deg, var(--primary-color), var(--primary-light))",
    link: "tel:+917303242789",
    delay: 0
  },
  {
    title: "WhatsApp",
    subtitle: "Chat with us instantly",
    icon: "fab fa-whatsapp",
    bgColor: "#25D366",
    link: "https://wa.me/7303242789",
    delay: 100,
    target: "_blank"
  },
  {
    title: "Email",
    subtitle: "Send us an email",
    icon: "fas fa-envelope",
    bgColor: "linear-gradient(135deg, var(--secondary-color), var(--secondary-dark))",
    link: "mailto:arimmigration1313@gmail.com",
    delay: 200
  }

  ];
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
