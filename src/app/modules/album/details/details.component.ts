import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';

import { AlbumDetailState } from '../../../states/spotify/album-detail.state';
import { Album } from '../../../states/spotify/spotify.models';
import { GetAlbumDetail } from '../../../states/spotify/spotify.actions';

@Component({
  selector: 'app-album-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  @Select(AlbumDetailState.albumDetail) details$: Observable<Album>;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.subs.add(
      this.route.paramMap.subscribe((params) => {
        this.store.dispatch(new GetAlbumDetail(params.get('id')));
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
