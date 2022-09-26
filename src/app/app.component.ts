import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'form';

  form: boolean = false
  usersData: any = []

  constructor(private fb: FormBuilder, private svc: ServiceService, private router: Router) {

  }
  ngOnInit(): void {

    this.svc.getData('users').subscribe((res: any) => {
      this.usersData = res
    })
  }
  formAction() {
    this.router.navigateByUrl('/user')
  }
  updateProduct(id: number) {
    this.router.navigate(['updateproduct/', id])
  }
  deleteProduct(ind: any, id: number) {
    this.svc.deleteData('users', id).subscribe((el) => {
      this.usersData.splice(ind, 1)
      console.log(el)

    })

  }


}

