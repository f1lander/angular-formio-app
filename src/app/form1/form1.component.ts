import { Component, OnInit,Input,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Form1Component implements OnInit {
  /*formsEnable: any[] = [
    { id: 1, enabled: true },
    { id: 1, enabled: false }
  ]*/
  @Input() submission;
  form2Enable:boolean =true;
  constructor(private router: Router//,submission
  ) {
/*console.log("the submission included is");
console.log(submission);*/
  }
 
  
  ngOnInit() {
  }

  
  submittingForm1(submission: any) {

    this.form2Enable = false;
    console.log(submission);
    this.router.navigate(['/secondForm']);
  /*  this.formsEnable[1].enabled = false;
    this.formsEnable[2].enabled = true;
    this.router.navigate(['/firstForm']);*/
  }
}
