import { Component } from '@angular/core';
import { getData, state$ } from "@app/utility";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  subscription!: Subscription;

  ngOnInit() : void {
    // get cached data from utility
    getData('/data').then((data: any) => {
      console.log('get angular api', data);
    })

    // get subject state from utility
    this.subscription = state$.subscribe((data: any) => {
      console.log('Angular utility subject data', data);
    });

    console.log('angular storage ', sessionStorage.getItem('utility_react'));
    localStorage.setItem('utility_react', 'Angular data');

  }

  ngOnDestroy() : void {
    state$.next({ data: "Set angular shared data in subject"});
    this.subscription.unsubscribe();
  }

}
