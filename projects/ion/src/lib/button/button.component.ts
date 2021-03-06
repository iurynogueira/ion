/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, Output, EventEmitter } from '@angular/core';

type Type = 'primary' | 'secondary' | 'ghost' | 'dashed';
type Size = 'sm' | 'md' | 'lg' | 'xl';
export interface IonButtonProps {
  label?: string;
  type?: Type;
  size?: Size;
  expand?: boolean;
  danger?: boolean;
  disabled?: boolean;
  loading?: boolean;
  ionOnClick?: EventEmitter<any>;
}
@Component({
  selector: 'ion-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label?: string;
  @Input() type?: Type = 'primary';
  @Input() size?: Size = 'md';
  @Input() expand? = false;
  @Input() danger? = false;
  @Input() disabled? = false;
  @Input() loading? = false;
  @Output() ionOnClick? = new EventEmitter();

  handleClick() {
    if (!this.loading) {
      this.ionOnClick.emit();
    }
  }
}
