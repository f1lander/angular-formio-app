import { Component, OnInit,Input,ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

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
  //@Input() submission;
  private sub: any
  preDataForm: Object;
  form2Enable:boolean =true;
  constructor(private router: Router, private route: ActivatedRoute
  ) {
/*console.log("the submission included is");
console.log(submission);*/
  }
 
  
  ngOnInit() {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
        this.preDataForm = {data: params};
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
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
