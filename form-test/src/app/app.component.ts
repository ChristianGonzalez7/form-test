import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  popupVisibility = false;

  title = 'form-test';

  popup(){
    console.log("funciona");
      this.popupVisibility = !this.popupVisibility;
  }

}
