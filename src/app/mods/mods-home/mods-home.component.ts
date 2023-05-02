import { Component } from '@angular/core';
import { AccordionItem } from '../interfaces/accordion-item';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent {
  modalOpen: boolean = false;
  items: AccordionItem[] = [
    { title: 'Why is the sky blue?', content: 'The sky is blue because it is' },
    {
      title: 'What does an orange taste like?',
      content: 'An orange tastes like an orange',
    },
    { title: 'What color is that cat?', content: 'The cat is an orange color' },
  ];

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
