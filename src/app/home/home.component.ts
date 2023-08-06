import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { HttpService } from '../services/http-service.service';
// import { BackendService } from 'src/services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  formGroup!: FormGroup;
  location!: string;
  actionForm!: FormGroup;

  profiles: any[] = []

  constructor(private formBuilder: FormBuilder, private router: Router, private service: HttpService){}

  ngOnInit(){
    this.init()
  }

  init() {
    this.actionForm = this.formBuilder.group({
      location: ['', Validators.required],
    });
  }

  submit(){
    if(this.actionForm.invalid){
      return
    }

    const location = this.actionForm.get('location')?.value
    
    this.getData(location);

    const navigationExtras: NavigationExtras = {
      state: {
        location: location
      }
    };
    

    // this.getData(location);

    this.router.navigate(['results'], navigationExtras);

    this.actionForm.reset()

  }


  getData(location: string){
    this.service.getData(location).subscribe({
      next: val => {
       this.profiles = val
       console.log(this.profiles)
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
