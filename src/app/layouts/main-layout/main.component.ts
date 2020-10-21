import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  title = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.subs.add(
      this.route.data.subscribe((v) => {
        this.title = v.title;
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  back() {
    history.back();
  }
}
