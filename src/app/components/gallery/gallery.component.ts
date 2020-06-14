import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  imageObject: Array<object> = [{
    image: 'assets/img/BhoomiPujan.jpeg',
    thumbImage: 'assets/img/BhoomiPujan.jpeg',
    alt: 'Bhoomi Pujan',
    title: 'Bhoomi Pujan 1'
  }, {
    image: 'assets/img/BhoomiPujan2.jpeg',
    thumbImage: 'assets/img/BhoomiPujan2.jpeg',
    title: 'Bhoomi Pujan 2',
    alt: 'Bhoomi Pujan 2'
  }, {
    image: 'assets/img/BhoomiPujan3.jpeg',
    thumbImage: 'assets/img/BhoomiPujan3.jpeg',
    title: 'Bhoomi Pujan 3',
    alt: 'Bhoomi Pujan 3'
  }, {
    image: 'assets/img/BhoomiPujan4.jpeg',
    thumbImage: 'assets/img/BhoomiPujan4.jpeg',
    title: 'Bhoomi Pujan 4',
    alt: 'Bhoomi Pujan 4'
  }, {
    image: 'assets/img/BhoomiPujan5.jpeg',
    thumbImage: 'assets/img/BhoomiPujan5.jpeg',
    title: 'Bhoomi Pujan 5',
    alt: 'Bhoomi Pujan 5'
  }, {
    image: 'assets/img/LandForCatleFarmin.jpeg',
    thumbImage: 'assets/img/LandForCatleFarmin.jpeg',
    title: 'Projected Land for Animal Farming 1',
    alt: 'Projected Land for Animal Farming 1'
  }, {
    image: 'assets/img/LandForCatleFarmin.jpeg',
    thumbImage: 'assets/img/LandForCatleFarmin.jpeg',
    title: 'Projected Land for Animal Farming 2',
    alt: 'Projected Land for Animal Farming 2'
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
