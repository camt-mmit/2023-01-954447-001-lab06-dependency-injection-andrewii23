import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core'; // Import OnChanges and SimpleChanges
import { CommonModule } from '@angular/common';
import { InputData } from '../types';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
})
export class DynamicInputComponent implements OnChanges {
  @Input({ required: true }) items!: InputData;

  @Output() readonly dataChange = new EventEmitter();

  isDisabled = false;

  constructor() {
    this.disabled();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.disabled();
    }
  }

  onChange(index: number, value: number): void {
    this.items[index].value = value;
    console.debug(this.items);
    this.dataChange.emit();
  }

  add(): void {
    this.items.push({ value: 0 });
    this.disabled();
    this.dataChange.emit();
  }

  delete(index: number): void {
    this.items.splice(index, 1);
    this.disabled();
    this.dataChange.emit();
  }

  getResult(): number {
    return this.items.reduce(
      (carry, currentValue) => carry + currentValue.value,
      0,
    );
  }

  disabled() {
    this.isDisabled = this.items?.length === 1;
  }
}
