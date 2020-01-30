import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: 'members.component.html',
  styleUrls: ['members.component.css']
})
export class MembersComponent implements OnInit {
  title = '';
   type = 'OrgChart';
   data = [
      [{v:'Mike', f:'Mike<div style="color:red; font-style:italic">President</div>'},
         '', 'The President'],
      [{v:'Jim', f:'Jim<div style="color:red; font-style:italic">Vice President</div>'},
         'Mike', 'VP'],
      ['Alice', 'Mike', ''],
      ['Bob', 'Jim', 'Bob Sponge'],
      ['Carol', 'Bob', 'sdfdsfs']
   ];
   columnNames = ["Name","Manager","Tooltip"];
   options = {   
      allowHtml: true
   };
   width = 550;
   height = 400;
  constructor() { }

  ngOnInit() {
  }

}
