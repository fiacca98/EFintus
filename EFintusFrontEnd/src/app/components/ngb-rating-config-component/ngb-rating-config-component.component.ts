import { Component, OnInit, Input } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngb-rating-config-component',
  templateUrl: './ngb-rating-config-component.component.html',
  providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers
})
export class NgbRatingConfigComponentComponent implements OnInit {
  @Input() inputRating: number;
  @Input() inputReadonly: boolean;



  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  
}
  ngOnInit() {
  }

}
