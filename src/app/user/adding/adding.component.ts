import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.scss']
})
export class AddingComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  profileForm = this.fb.group({
    firstName:['', Validators.required],
    lastName: ['', Validators.required],
    handle: ['', Validators.required],
    collapsed: ['false'],
    orderFrom :this.fb.group({
      orderid: ['', Validators.required],
      orderdate: ['', Validators.required],
      address: ['', Validators.required],
      
    })
   

  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
  }
}
