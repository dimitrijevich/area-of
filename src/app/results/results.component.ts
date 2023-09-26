import { Component } from '@angular/core';
import { HttpService } from '../services/http-service.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
declare var _ET: any;

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [MessageService]
})
export class ResultsComponent {

  profiles: any[] = []
  location: string = '';

  showFrame: boolean = false;
 

  constructor(private service: HttpService,private messageService: MessageService,  private router: Router){

  }

  ngOnInit(){
    this.getData(history.state.location)
    this.location = history.state.location
  }

  redirect(){
    _ET();
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

        setTimeout(() => {
          this.showError("An error occurred. Please try again later or check back in a few moments.")
        }, 1500);
        
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 5000);
        
        
        console.log(err);
      }
    })
  }


  showError(msg: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: msg });
  }

}
