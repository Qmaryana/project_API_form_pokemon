import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //import

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  pokemonList: any[] = [];  // הגדרנו מערך פוקימונים ריק
  nextLink: string | null = null; // משתנה שיעזור לנו לעבור דף מקבל קישור/מחרוזת
  prevLink: string | null = null;// משתנה שיעזור לנו לחזור דף מקבל קישור/מחרוזת

  constructor(private httpClient: HttpClient) { //  צד שלישי מביא לנו את המידע שאנחנו צריכים
    this.getPokemonList('https://pokeapi.co/api/v2/pokemon'); // המידע חוזר למערך של הפוקימונים
  }

  getPokemonList = (url: string) => {
    this.httpClient.get(url).subscribe((response: any) => { //מבצע בקשת GET לכתובת האתר 
      //url ומקבל את התגובה.
      //פונקציית גט מקבלת קישור ופונה לקישור הזה
      //פונקציית סאבסקרייב בתוך הסוגריים שלה חוזרת התשובה
      //התשובה נשמרת במשתנה שהגדרנו
      this.pokemonList = response.results; //שומר את רשימת הפוקימונים במערך
      this.nextLink = response.next; //שומר את הקישור לרשימת הפוקימונים הבאה 
      this.prevLink = response.previous; //שומר את הקישור לרשימת הפוקימונים הקודמת
    });
  }

  onNext = () => { //טעינת רשימת הפוקימונים הבאה.
    //קורא לפונקציה getPokemonList ומוסר לה את ה- this.nextLink כפרמטר.
    if (this.nextLink) {
      this.getPokemonList(this.nextLink); //תבצע את הבקשה ותעדכן את רשימת הפוקימונים 
    }
  }

  onPrev = () => { //טעינת רשימת הפוקימונים הקודמת.
    //ורא לפונקציה getPokemonList ומוסר לה את ה- this.prevLink כפרמטר.
    if (this.prevLink) {
      this.getPokemonList(this.prevLink); //תבצע את הבקשה ותעדכן את רשימת הפוקימונים
    }
  }
  //פונקציות onNext ו- onPrev מאפשרות ניווט בין רשימות פוקימונים בדף על ידי טעינת הרשימה הבאה או הקודמת
  //בהתבסס על המידע שקיבלנו מהשרת ב- getPokemonList.

  getPokemonId = (url: string) => { //url: מחרוזת המכילה את כתובת האתר של הפוקימון.
    const parts = url.split('/');
    return parts[parts.length - 2]; //לגשת לאיבר הלפני האחרון במערך
  }
}
//הפונקציה משתמשת בפונקציה split כדי לחלק את כתובת האתר 
// לפי הסמל /
//פעולה זו יוצרת מערך המכיל את כל החלקים של כתובת האתר