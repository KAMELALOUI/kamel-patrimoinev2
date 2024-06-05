import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/api/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  list:any[] = [];

  constructor(private main:MainService) { }

  ngOnInit(): void {
    this.main.getArticlesList().toPromise().then((res:any)=>{
      this.list = res;
    })
  }

}
