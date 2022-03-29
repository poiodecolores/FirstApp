import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.css']
})
export class FormFirstComponent implements OnInit {

  status = "Form not submitted"
  defaultName = ""
  

  itemImageUrl = '../assets/cat2.webp'
  constructor() { }
  


  ngOnInit(): void {
  }

  onSendForm(){

    this.status = "Form has been send"
   
  }

  ondefaultForm(email:any){
    console.log(email);
    this.defaultName = 'Chucho'
  }

}
