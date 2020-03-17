import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AiportService } from '../aiport.service';
import * as jsPDF from 'jspdf' ;
import * as html2pdf from 'html2pdf.js' ;

@Component({
  selector: 'app-pdf-quote',
  templateUrl: './pdf-quote.component.html',
  styleUrls: ['./pdf-quote.component.scss']
})
export class PdfQuoteComponent implements OnInit {
  
  Downloadpdf(){
    const options ={
      filename:'our_awsome-file.pdf',
      image:{ type:'jpeg'},
      html2canvas:{},
      jsPDF:{ orientation:"landscape"}
    };
    
    const Content:Element=document.getElementById('exportpdf')

    html2pdf()
    .form(Content)
    .set(options)
    .save()


    // return xepOnline.Formatter.Format('content',{render:'download'})
    }


//  @ViewChild('content') content:ElementRef; 

//   public Downloadpdf(){

//     let doc = new jsPDF();

//       let specialElementHandlers = {
//         '#editer': function(element,renderer ){
//           return true;
//         }
//     };
    
//     let content = this.content.nativeElement;
//     doc.fromHTML(content.innerHTML,15,15,{
//       'width':190,
//       'elementHandlers' : specialElementHandlers
//     });
//     doc.save('test.pdf');
  
//     }
formdata:any=[];

// getTotal() {
//   let total = 0;
//   for (var i = 0; i < this.formdata.address.length; i++) {
//        total += this.formdata.address[i].timetraval;
//          }
//   return total;
// }


  constructor(private router: Router,
    private _airport:AiportService) { 
      this._airport.formData.subscribe(res=>{this.formdata=res})
     


      setTimeout(function(){
        var msgTotal = this.formdata.charges.reduce(function(prev, cur) {
          return prev + cur.amount;
        }, 0);
        console.log(msgTotal)
      },3000);
     

      
    }

  ngOnInit() {
    console.log(this.formdata)
   
  }
 

  headElements = ['DATE', 'FROM', 'TO', 'ETD','APPPOX FLYING TIMING','REMARKS'];

  headcharge=['SR. NO.','CHARGES','NOTE','INR']

 

  submitRecords(){
    this.router.navigate(['/Records']);
  }

  submitPDF(){
    this.router.navigate(['/PDF-Quote']);
  }

  submitForm(){
    this.router.navigate(['/Quote-form']);
  }

  
  
  
}
