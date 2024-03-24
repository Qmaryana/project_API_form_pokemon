import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuyComponent } from './buy/buy.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router'; // צריך לעשות import
import { HttpClientModule } from '@angular/common/http'; // import
import { FormsModule } from '@angular/forms'; // צריך לעשות import

const appRouting: Routes = [ // מערך של הדפים שלנו
  { path: '', component: HomeComponent },
  { path: 'Buy', component: BuyComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BuyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // import
    FormsModule, //שורה חשובה צריך להוסיף את זה כדי שה HTML יעבוד
    //עשינו לשורה הזאת import
    RouterModule.forRoot(appRouting) // Provide routes to RouterModule here העתקנו מהמצגת את זה
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
