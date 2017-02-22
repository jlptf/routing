import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit, OnDestroy {

  private ssParams: Subscription;
  private ssQueryParams: Subscription;
  private ssFragParams: Subscription;

  id: string;
  qParams: string;
  fParams: string;
  constructor(private router: Router, private activedRoute: ActivatedRoute) {
    // this.id = activedRoute.snapshot.params['id'];
    this.ssParams = activedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );

    this.ssQueryParams = activedRoute.queryParams.subscribe(
      (queryParam: any) => this.qParams = queryParam['analysis']
    );

    this.ssFragParams = activedRoute.fragment.subscribe(
      (frag: any) => this.fParams
    )
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    //important to prevent memory leak
    this.ssParams.unsubscribe();
    this.ssQueryParams.unsubscribe();
    this.ssFragParams.unsubscribe();
  }

  onNavigate() {
    this.router.navigate(['/'], { queryParams: { 'analysis': 100 }, fragment: 'section1', preserveQueryParams:true});
  }

}
