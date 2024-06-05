import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  error:string='';
  success:string='';
  
  constructor(private api:AuthService, private router:Router) { }

  ngOnInit(): void {
  }


  auth(){
    this.error = '';
    this.api.createAccount(this.form.value).subscribe((res:any)=>{
      console.log(res);

      this.success=res.message;
      
      

    },(err)=>{
      this.error = err.message+'';
    })
  }
}
