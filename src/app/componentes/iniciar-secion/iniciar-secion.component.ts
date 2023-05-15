import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-secion',
  templateUrl: './iniciar-secion.component.html',
  styleUrls: ['./iniciar-secion.component.css']
})
export class IniciarSecionComponent implements OnInit{

  form:FormGroup | undefined;
  constructor(private formBuilder:FormBuilder){

    this.form=this.formBuilder.group(
      {
        
      }
    )

  }

  ngOnInit(): void {
    ;
  }

}
