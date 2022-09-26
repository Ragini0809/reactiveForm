import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  createForm!: FormGroup
  id: number = 0
  actionName: string = '';
  form:boolean=true

  constructor(private fb: FormBuilder, private svc: ServiceService, private activate: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activate.snapshot.params['id']
    console.log(this.id)

    this.createForm = this.fb.group({
      id: [],
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      company: [''],
      genderControl: [''],
      dob: [''],
      password: [''],
      confirmPassword: ['']
    })
    if (this.id) {
      this.actionName = 'update'
      this.svc.getDataId('users', this.id).subscribe((el: any) => {
        this.createForm.setValue(el)
      })
    }
    else {
      this.actionName = 'create'
    }
  }

  onSubmit() {

    if (this.actionName == 'create')
      this.svc.postdata('users', this.createForm.value).subscribe((value: any) => {
        console.log(value)
        this.form=false
       })
    else {
      this.form=false
       this.svc.updateData('users', this.createForm.value).subscribe((value) => {
       console.log(value)})
    }
  }
  
}
