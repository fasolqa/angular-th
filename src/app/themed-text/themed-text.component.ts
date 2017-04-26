import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-themed-text',
  templateUrl: './themed-text.component.html',
  styleUrls: ['./themed-text.component.scss']
})
export class ThemedTextComponent implements OnInit {

  @HostBinding('class') @Input() palette = 'primary';

  constructor() { }

  ngOnInit() {
  }

}
