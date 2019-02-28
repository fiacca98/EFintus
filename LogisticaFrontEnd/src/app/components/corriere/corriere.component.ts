import { Component, OnInit } from '@angular/core';
import { Corriere } from 'src/app/beans/corriere';
import { CorriereService } from 'src/app/services/corriere.service';

@Component({
  selector: 'app-corriere',
  templateUrl: './corriere.component.html',
  styleUrls: ['./corriere.component.css']
})
export class CorriereComponent implements OnInit {
  private corriere:Corriere[]=[];

  constructor(private corriereService:CorriereService) { 
    this.getCorriere();
  }

  ngOnInit() {
  }
  getCorriere(){
    this.corriereService.getCorriere()
    .subscribe(corriere => this.corriere = corriere["responseList"]);
  }
}
