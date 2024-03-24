import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // הוספנו import

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {

  onSubmit = (form: NgForm) => { //לשורה הזאת צריך import
  }
  //כרגע הפונקציה לא עושה כלום אבל בעתיד יהיה אפשר להשתמש בה
}
