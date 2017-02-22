import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  private ssQueryParams: Subscription;

  qParams: string;
  constructor(private router: Router, private activedRoute: ActivatedRoute) {
    this.ssQueryParams = activedRoute.queryParams.subscribe(
      (queryParam: any) => this.qParams = queryParam['analysis']
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    //import to prevent memory leak
    this.ssQueryParams.unsubscribe();
  }

}
