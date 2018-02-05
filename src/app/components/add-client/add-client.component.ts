import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  form: FormGroup;
  disableBalance: boolean;

  constructor(
    private builder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.builder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.required],
      balance: [{value: 0,  disabled: true}],
    });
    this.disableBalance = true;
  }

  submit() {
    if (!this.form.valid) {
      console.log('not valid');
    }
  }

}
