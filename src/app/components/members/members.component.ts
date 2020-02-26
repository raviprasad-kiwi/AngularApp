import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: 'members.component.html',
  styleUrls: ['members.component.css']
})
export class MembersComponent implements OnInit {
   title;
   type;
   data;
   columnNames;
   options;
   width;
   height;
   items;
  constructor() {
     this.onPageLoad();
     console.log('this.onPageLoad()');
   }
  ngOnInit() { }

  onPageLoad() {
   this.title = 'Bedu Members';
   this.type = 'OrgChart';
   this.data = [
      // tslint:disable-next-line:max-line-length
      [{v: 'Hari Kapruwan', f: 'Hari Kapruwan<div style="color:red; font-style:italic">President</div><small>Address: Bijni D.Dun</small>'}, '', 'The President'],
      [{v: 'Ravi Prasad', f: 'Ravi Prasad<div style="color:red; font-style:italic;">Vice-President</div>'}, 'Hari Kapruwan', 'VP'],
      // tslint:disable-next-line:max-line-length
      [{v: 'Rameshwar Prasad', f: 'Rameshwar Prasad<div style="color:red; font-style:italic;">Vice-President</div>'}, 'Hari Kapruwan', 'VP'],
      ['Member2', 'Hari Kapruwan', ''],
      ['Member3', 'Ravi Prasad', 'Bob Sponge'],
      ['Member4', 'Rameshwar Prasad', ''],
      ['Member5', 'Member2', 'Bob Sponge'],
      ['Member6', 'Member4', 'Unknow'],
      ['Member7', 'Member5', 'Bob Sponge'],
      ['Member8', 'Member6', 'New Member'],
   ];
   this.columnNames = ['Name', 'Manager', 'Tooltip'];
   this.options = {
      allowHtml: true
   };
   this.width = 5500;
   this.height = 4000;
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewChecked() {

     const spanElements = document.getElementsByClassName('google-visualization-orgchart-node')as HTMLCollectionOf<HTMLElement>;

      // tslint:disable-next-line:prefer-for-of
     for (let i = 0; i < spanElements.length; i++) {
         spanElements[i].style.border = '0px';
         spanElements[i].style.width = '150px';
      }
}

}
