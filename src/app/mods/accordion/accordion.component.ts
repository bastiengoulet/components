import { Component, Input } from '@angular/core';
import { AccordionItem } from '../interfaces/accordion-item';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];
  onpenedItemIndex: number = 0;

  onClick(index: number): void {
    if (index === this.onpenedItemIndex) {
      this.onpenedItemIndex = -1;
    } else {
      this.onpenedItemIndex = index;
    }
  }
}
