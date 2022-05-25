import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fzb-fz-button',
  template: `
    <button class="fzb-fz-button">FZ library</button>
  `,
  styles: [
    `
    .fzb-fz-button {
      background-color: blue;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: in-line;
      font-size: 16px;
    }
    `
  ]
})
export class FzButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
