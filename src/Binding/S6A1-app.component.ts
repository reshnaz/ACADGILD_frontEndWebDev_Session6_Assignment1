import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'S6A1-app-root',
  templateUrl: './S6A1-app.component.html'
})
// This is our new component with variables "title" and "name".
export class S6A1Component {
  title : string;
  name : string;

  // Variables are assigned values inside ngOnInit() method below.
  ngOnInit(){
    this.title = `Session-6, Assignment-1`;
    this.name = `Binding`;
  }
}
