import { Component, OnInit } from '@angular/core';
import { IncomeTaxableService } from '../service/income-taxable.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-income-taxable',
  templateUrl: './income-taxable.component.html',
  styleUrls: ['./income-taxable.component.css']
})
export class IncomeTaxableComponent implements OnInit {
  taxOut: any;
  constructor(private service:IncomeTaxableService) {}

  ngOnInit(): void {}

  fetch(info){
    this.service.fetch(info).subscribe(data => { 
        console.log(data);
        this.taxOut = data;
      }
    )
  }
}
