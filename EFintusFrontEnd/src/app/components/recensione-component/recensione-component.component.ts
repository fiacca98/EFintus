import { CategoryBean } from 'src/app/bean/CategoryBean';
import { HttpServiceService } from './../../services/http-service/http-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recensione-component',
  templateUrl: './recensione-component.component.html',
  styleUrls: ['./recensione-component.component.css']
})
export class RecensioneComponentComponent implements OnInit {

categories: CategoryBean[];

  constructor(
    private httpClient: HttpClient,
    private httpService: HttpServiceService
  ) { }

  ngOnInit() {
    this.getHeroes()
  }


  getHeroes(): void {
    this.httpService.getCategories()
    .subscribe(categories => this.categories = categories);
  }

}
