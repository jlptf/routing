import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentCanDeactivate } from './user-detail-guard';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit, ComponentCanDeactivate{

  done = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigate() {
    this.router.navigate(['/']);
  }

  canDeactivate(): Observable<boolean> | boolean{
    if (!this.done){
      return confirm("Do you want to leave");
    }
    return true;
  }
}
