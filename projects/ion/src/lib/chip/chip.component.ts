import { Component, Input } from '@angular/core';

export type Size = 'sm' | 'md';
export interface IonChipProps {
  label: string;
  disabled?: boolean;
  selected?: boolean;
  size?: Size;
}

@Component({
  selector: 'ion-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent {
  @Input('label') label!: string;
  @Input('disabled') disabled? = false;
  @Input('selected') selected? = false;
  @Input('size') size?: Size = 'md';

  select() {
    this.selected = !this.selected;
  }
}
