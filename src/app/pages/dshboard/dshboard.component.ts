import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Params, Router } from '@angular/router';
@Component({
  selector: 'app-dshboard',
  templateUrl: './dshboard.component.html',
  styleUrls: ['./dshboard.component.scss']
})
export class DshboardComponent implements OnInit {
  constructor(private router: Router,) { }

  ngOnInit(): void {
   
  }
  employelist(){
    this.router.navigate(['/employe-list'])
  }
  createemploye(){
    this.router.navigate(['/create-employe'])
  }
  settings(){
    this.router.navigate(['/dashboard'])
  }
}
