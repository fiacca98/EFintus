import { Component, OnInit } from '@angular/core';
import { Permessi } from 'src/app/beans/permessi';
import { PermessiService } from 'src/app/services/permessi.service';

@Component({
  selector: 'app-permessi',
  templateUrl: './permessi.component.html',
  styleUrls: ['./permessi.component.css']
})
export class PermessiComponent implements OnInit {
  private permessi:Permessi[]=[];
  constructor(private permessiServices:PermessiService) { 
    this.getPermessi();
  }
  ngOnInit() {
  }
  getPermessi(){
    this.permessiServices.getPermessi()
    .subscribe(permessi => this.permessi = permessi);
  }
}
