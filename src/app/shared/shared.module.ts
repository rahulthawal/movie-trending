import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YoutubeService } from './youtube/youtubeService';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [YoutubeService],
  exports: []
})
export class SharedModule {}
