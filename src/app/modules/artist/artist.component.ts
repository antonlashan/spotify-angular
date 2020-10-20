import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtistComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  artistId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.subs.add(
      this.route.paramMap.subscribe((params) => {
        this.artistId = params.get('id');
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
