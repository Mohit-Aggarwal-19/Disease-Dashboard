import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'disease-dashboard';

  isOpen = true;

  ngOnInit(){
    this.isOpen=true;
    timer(2000).pipe().subscribe(()=>{
      this.isOpen=false;
    }
    )
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
