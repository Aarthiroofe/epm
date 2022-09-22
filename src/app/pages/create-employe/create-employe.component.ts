import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-employe',
  templateUrl: './create-employe.component.html',
  styleUrls: ['./create-employe.component.scss']
})
export class CreateEmployeComponent implements OnInit {

  createemployee: FormGroup;
  
  step = 0;

  constructor() {
    this.createemployee = new FormGroup({
      prefix: new FormControl({value:'',disabled:false}, [Validators.required]),
      password: new FormControl({value:'',disabled:false}, [Validators.required]),
      firstname: new FormControl({value:'',disabled:false}, [Validators.required]),
      middlename: new FormControl({value:'',disabled:false}, [Validators.required]),
      lastname: new FormControl({value:'',disabled:false}, [Validators.required]),
      employeecode: new FormControl({value:'',disabled:false}, [Validators.required]),
      dob: new FormControl({value:'',disabled:false}, [Validators.required]),
      gender: new FormControl({value:'',disabled:false}, [Validators.required]),
      bloodgroup: new FormControl({value:'',disabled:false}, [Validators.required]),
      nationality: new FormControl({value:'',disabled:false}, [Validators.required]),
      workemail: new FormControl({value:'',disabled:false}, [Validators.required]),
      phone: new FormControl({value:'',disabled:false}, [Validators.required]),
      skilltype: new FormControl({value:'',disabled:false}, [Validators.required]),

      doj: new FormControl({value:'',disabled:false}, [Validators.required]),
      retdate: new FormControl({value:'',disabled:false}, [Validators.required]),
      emptype: new FormControl({value:'',disabled:false}, [Validators.required]),
      empstatus: new FormControl({value:'',disabled:false}, [Validators.required]),

      company: new FormControl({value:'',disabled:false}, [Validators.required]),
      businessunit: new FormControl({value:'',disabled:false}, [Validators.required]),
      department: new FormControl({value:'',disabled:false}, [Validators.required]),
      subdepartment: new FormControl({value:'',disabled:false}, [Validators.required]),
      designation: new FormControl({value:'',disabled:false}, [Validators.required]),
      region: new FormControl({value:'',disabled:false}, [Validators.required]),
      branch: new FormControl({value:'',disabled:false}, [Validators.required]),
      subbranch: new FormControl({value:'',disabled:false}, [Validators.required]),
      grade: new FormControl({value:'',disabled:false}, [Validators.required]),
      level: new FormControl({value:'',disabled:false}, [Validators.required]),
      reportingmanager: new FormControl({value:'',disabled:false}, [Validators.required]),
      functionalmanager: new FormControl({value:'',disabled:false}, [Validators.required]),

    })
   }

  ngOnInit(): void {
  }
  dateChanged($event:any){
    console.log($event.target.value );
  }
  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
