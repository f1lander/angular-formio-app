import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
   form1Enable: boolean= true;
  submission;
   
    constructor(private router: Router){
     // this.form1Enable = true;
      //this.form2Enable = false;
    }

    submitForm(submission: any){

      const preData = { field1: submission.data.field1, field2: submission.data.field2 };
      this.submission;
      this.form1Enable = false;
     // this.form2Enable = !this.form2Enable;
      this.router.navigate(['/firstForm'], { queryParams: preData });
    }
    
}
