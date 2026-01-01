import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { UserPhoto } from '../models/user.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  get photos(): Array<UserPhoto> {
    return this.photoService.photos;
  }

  constructor(private photoService: PhotoService) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
