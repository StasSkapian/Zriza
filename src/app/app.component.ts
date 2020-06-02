import { Component } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from './response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient) { }

  getProjects(): any
  {
    return this.http.get<any>("api/record/Project", {
      headers: {
          "Authorization": '96236a7b-7758-49e1-8475-0b6020755707',
          "tokenId": "96236a7b-7758-49e1-8475-0b6020755707",
      }
    });
  }

  getTasks(): any
  {
    return this.http.get<any>("api/record/Task", {
      headers: {
          "Authorization": '96236a7b-7758-49e1-8475-0b6020755707',
          "tokenId": "96236a7b-7758-49e1-8475-0b6020755707",
      }
    });
  }



  clickMeProject()
  {
    this.getProjects().subscribe(
      res => {
        console.log(res);
      }
    );;
  }

  clickMeTask()
  {
    this.getTasks().subscribe(
      res => {
        console.log(res);
      }
    );;
  }






}
