import { Component, Input } from '@angular/core';

import { Track } from '../../../states/spotify/spotify.models';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent {
  @Input() track: Track;
}
