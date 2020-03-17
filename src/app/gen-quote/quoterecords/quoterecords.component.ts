import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AiportService } from '../aiport.service';

@Component({
  selector: 'app-quoterecords',
  templateUrl: './quoterecords.component.html',
  styleUrls: ['./quoterecords.component.scss']
})
export class QuoterecordsComponent implements OnInit {
  formdata=[]
  constructor(private router: Router, private _airport:AiportService) {
    this._airport.formArrayData.subscribe(res=>{this.formdata=res})
   }

  ngOnInit() {
   
    console.log("array"+this.formdata)
  }
  formdataarray:any=[]
  elements: any = [
    {
      id: 1,
      first: 'Mark',
      last: 'Otto',
      handle: '@mdo',
      collapsed: false,
      masterDetail: [{ orderId: 1, orderDate: '24-07-1996', adress: '35 King George' },{ orderId: 1, orderDate: '24-07-1996', adress: '35 King George' }],
      
    },
    {
      id: 2,
      first: 'Jacob',
      last: 'Thornton',
      handle: '@fat',
      collapsed: false,
      masterDetail: [{ orderId: 2, orderDate: '04-01-1992', adress: 'Obere Str. 57' }],
    },
    {
      id: 3,
      first: 'Larry',
      last: 'the Bird',
      handle: '@twitter',
      collapsed: false,
      masterDetail: [{ orderId: 3, orderDate: '15-01-1994', adress: 'Kirchgasse 6' }],
    },
  ];

  headElements = ['ID', 'First-Name', 'Last-Name', 'Chater-Name'];
  masterHeadElements = ['Date','Time', 'Departure', 'Arrival','Distance','Timing','Pak-No.','Remarks','ETD Switch'];
 chargeTypes=['SR. NO.','Charge-type','Amount']

dammyobject:any={ id: 3,
  first: 'Larry',
  last: 'the Bird',
  handle: '@twitter'}


  

  submitRecords(){
    this.router.navigate(['/Records']);
  }

  submitPDF(){
    this.router.navigate(['/PDF-Quote']);
  
  }

  submitForm(){
    this.router.navigate(['/Quote-form']);
  }
  logpush(){
    // this.dammyobject.splice(3, 0, {'collapsed':false});
   
    // console.log(this.dammyobject)
    console.log(this.formdata)

  }
  
  
}
