import { Component, OnInit } from '@angular/core';
import { FormArray, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { AiportService } from '../aiport.service';

@Component({
  selector: 'app-pdf-forms',
  templateUrl: './pdf-forms.component.html',
  styleUrls: ['./pdf-forms.component.scss']
})
export class PdfFormsComponent implements OnInit {

  buttontime:boolean=false;
  buttondistance:boolean=false;
  timett:string;
  disttt:string;
  dataofform:string[];
  nestedForm: FormGroup;
  constructor(private _fb: FormBuilder,
    private router: Router,
    private _airport:AiportService) { 
    //   var msgTotal = this.nestedForm.value.charges.reduce(function(prev, cur) {
    //   return prev + cur.amount;
    // }, 0);
    
   
  
     }

  ngOnInit() {
    this.nestedForm = this._fb.group({
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, Validators.required],
      airName: [null, Validators.required],
      collapsed:[false],
      address: this._fb.array([this.addAddressGroup()]),
      charges: this._fb.array([this.addChargesgroup()])
    });
    this.dataport=this._airport.airport
    this.dataplane=this._airport.plane
    this.dataofform=this.nestedForm.value
   
  }

  addChargesgroup(){
    return this._fb.group({
      chargetype: [null, Validators.required],
      amount: [null],
     
    
    });
  }

// sumamout(){
//   this.total = this.nestedForm.value.charges.reduce((sum, item) => sum + item.amount, 0);
 
// }

total:number;




  stateCtrl = new FormControl();
  addAddressGroup() {
    return this._fb.group({
      addDate: [null, Validators.required],
      pakno: [null, Validators.required],
      depat: [null,this.stateCtrl],
      arrival: [null,this.stateCtrl],
      timetraval: [null,this.stateCtrl],
      distances: [null,this.stateCtrl],
      myControl: [null,this.stateCtrl],
      etd: [null, Validators.required],
      remarks: [null, Validators.required],
    });
  }
 
  dataport:any;
  dataplane:any;
  depvalue:string;
  arrvalue:string;
  timevalue:any;
  distancevalue:any;
  onSelect(event: TypeaheadMatch): void{
this.arrvalue = event.item;

this.matching();
this.buttontime=true;
this.buttondistance=true;

   }

    onSelectdep(event: TypeaheadMatch): void{
      
      this.depvalue = event.item;
     }


    setvaluedist(){
     this.data1.patchValue([
        { distances:this.distancevalue},
        ]);
      
    }

    setvaluetime(){
      
   this.data1.patchValue([
        { timetraval:this.timevalue},
        ]);
    }

    get data1(): FormArray {
      return this.nestedForm.get('address') as FormArray;
   } 

matching(){
let valueMaster = this.arrayofport.find((o => o.departure === this.depvalue)&&(o => o.arrival === this.arrvalue));
this.timevalue = valueMaster.time
this.distancevalue =valueMaster.distance
}
arrayofport:any =this._airport.airport
// getTotalCost() {
//   return this.nestedForm.value.address.map(t => t.timetraval).reduce((acc, value) => acc + value, 0);
// }
distance:any;

  addAddress() {
    this.addressArray.push(this.addAddressGroup());
  }
  removeAddress(index) {
    this.addressArray.removeAt(index);
  }

  addAmount() {
    this.chargeArray.push(this.addChargesgroup());
  }
  removeAmount(index) {
    this.chargeArray.removeAt(index);
  }
  get addressArray() {
    return <FormArray>this.nestedForm.get('address');
  }

  get chargeArray() {
    return <FormArray>this.nestedForm.get('charges');
  }
  get firstName() {
    return this.nestedForm.get('firstName');
  }

  get lastName() {
    return this.nestedForm.get('lastName');
  }

  get airName() {
    return this.nestedForm.get('airName');
  }
addDate: Date;
  submitHandler() {
  this._airport.formData.next(this.nestedForm.value)
  this.fromarraydata.push(this.nestedForm.value)
  this._airport.formArrayData.next(this.fromarraydata)
  // const dataof =this.nestedForm.value.charges
  // console.log(this.nestedForm.value.charges)
  // const total = this.nestedForm.value.charges.reduce((sum, item) => sum + item.amount, 0);
  //  
  
  }

submitRecords(){
    this.router.navigate(['/Records']);
  }

  submitPDF(){
    this.router.navigate(['/PDF-Quote']);
  }
    
arrival:string[]=[
  'Indira Gandhi International Airport, New Delhi DEL',
  'Chhatrapati Shivaji International Airport, Mumbai BOM',
  'Chennai International Airport, Chennai MAA',
  'Kempegowda International Airport, Bangalore BLR	',
  'Netaji Subhash Chandra Bose International Airport, Kolkata CCU',
  'Rajiv Gandhi International Airport, Hyderabad HYD',
  'Sardar Vallabhbhai Patel International Airport, Ahmedabad AMD'
]
departure:string[]=[
  'Indira Gandhi International Airport, New Delhi DEL',
  'Chhatrapati Shivaji International Airport, Mumbai BOM',
  'Chennai International Airport, Chennai MAA',
  'Kempegowda International Airport, Bangalore BLR	',
  'Netaji Subhash Chandra Bose International Airport, Kolkata CCU',
  'Rajiv Gandhi International Airport, Hyderabad HYD',
  'Sardar Vallabhbhai Patel International Airport, Ahmedabad AMD'
]

remark:string[]=[
'Ferry',
'With-Pak',
'Refueling'
]

charges:string[]=[
  'Flight-Cost',
'handling_cost_at_takeoff',
'landing_cost_at_arrival',
'crew accommodation_plan',
'watch_hour_cost',
'miscellaneous'
]
amount:string='$'
fromarraydata:any=[]
}


