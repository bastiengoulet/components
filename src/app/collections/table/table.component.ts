import { Component, Input } from '@angular/core';
import { Header } from '../interfaces/header';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input('class') classNames: string = '';

  @Input() data: any[] = [];
  @Input() headers: Header[] = [];
}
