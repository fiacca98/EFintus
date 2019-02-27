import { Component, OnInit } from '@angular/core';
import { Lavoratore } from 'src/app/beans/lavoratore';
import { LavoratoreService } from 'src/app/services/lavoratore.service';

@Component({
  selector: 'app-lavoratore',
  templateUrl: './lavoratore.component.html',
  styleUrls: ['./lavoratore.component.css']
})
export class LavoratoreComponent implements OnInit {
  private lavoratore:Lavoratore[]=[];
  constructor(private lavoratoreService: LavoratoreService) { 
    this.getLavoratore();
  }

  ngOnInit() {
  }
  getLavoratore(){
    this.lavoratoreService.getlavoratore()
    .subscribe(lavoratore => this.lavoratore = lavoratore);
  }
  
}
