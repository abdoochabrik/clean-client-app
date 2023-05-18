import { Component } from '@angular/core';

export class TodoNotFoundError extends Error {}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library';

  /**
   * @throws TodoNotFoundErro
   */
  public hello():void{

  }
 }
