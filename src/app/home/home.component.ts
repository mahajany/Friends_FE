import { Component, OnInit } from '@angular/core';
import { Episode } from '../../shared/episode';
import { EpisodeService } from '../../services/episode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  episode: Episode;
  firstShow: Episode;
  errMsg: string;

  constructor(private epService: EpisodeService) {
    this.firstShow = epService.getEpisodes()[0];
    var x: Episode[];
    var len=0;

    epService.getEpisodes()
      .subscribe((result) => {
        this.episode = result[0];
      });
    
  }
  ngOnInit() {
    this.epService.getEpisodes()
    .subscribe((result) => {
      this.episode = result.content[0];
    },(someError) =>{
      console.log("Error:", JSON.stringify(someError));
      console.log(Object.keys(someError));
      console.log(Object.values(someError));
      this.errMsg=<any> someError;

    });
  }
}
