import { Component } from '@angular/core';
import { HttpService } from '../services/http-service.service';
declare var og_load: any;

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  profiles: any[] = []
  location: string = '';

  showFrame: boolean = false;
 

  constructor(private service: HttpService){

  }

  ngOnInit(){
    this.getData(history.state.location)
    this.location = history.state.location
  }

  redirect(){
    og_load();
  }


  getData(location: string){
    this.service.getData(location).subscribe({
      next: val => {
       this.profiles = val
        
       setTimeout(() => {
        this.showFrame = true
      }, 3700);
       

      },
      error: err => {
        console.log(err);
      }
    })
  }


}
