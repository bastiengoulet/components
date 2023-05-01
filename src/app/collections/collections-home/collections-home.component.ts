import { Component } from '@angular/core';
import { Header } from '../interfaces/header';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  data = [
    { name: 'James', age: 24, job: 'Designer' },
    { name: 'Jill', age: 26, job: 'Engineer' },
    { name: 'Elyse', age: 25, job: 'Engineer' },
  ];

  headers: Header[] = [
    { key: 'name', label: 'name' },
    { key: 'age', label: 'age' },
    { key: 'job', label: 'job' },
  ];
}
