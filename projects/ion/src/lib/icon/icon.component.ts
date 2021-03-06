import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { iconsPaths } from './svgs/icons';

export type SvgModule = typeof import('./svgs/icons');
export type IconType = keyof typeof iconsPaths;

export interface IonIconProps {
  type: IconType;
  size?: number;
  color?: string;
}

@Component({
  selector: 'ion-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IonIconComponent implements AfterViewInit {
  @Input() type: IconType;
  @Input() size = 24;
  @Input() color = '#282b33';

  @ViewChild('svg', { static: false }) svg: ElementRef;

  ngAfterViewInit() {
    this.svg.nativeElement.insertAdjacentHTML(
      'beforeend',
      iconsPaths[this.type]
    );
  }
}
