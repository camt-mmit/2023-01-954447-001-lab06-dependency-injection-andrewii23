import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicInputComponent } from '../dynamic-input/dynamic-input.component';
import { SectionData, InputData, ItemData } from '../types'; // Make sure you import the correct types

@Component({
  selector: 'app-dynamic-section',
  standalone: true,
  imports: [CommonModule, DynamicInputComponent],
  templateUrl: './dynamic-section.component.html',
  styleUrls: ['./dynamic-section.component.scss'],
})
export class DynamicSectionComponent implements OnChanges {
  @Input({ required: true }) items!: SectionData;

  @Output() dataChange = new EventEmitter<SectionData>();

  isDisabled = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.disabled();
    }
  }
  onDataChange(): void {
    this.dataChange.emit(this.items);
  }
  addSec(): void {
    this.items.push([{ value: 0 }]);
    this.disabled();
    this.dataChange.emit(this.items);
  }

  deleteSec(index: number): void {
    this.items.splice(index, 1);
    this.disabled();
    this.dataChange.emit(this.items);
  }

  disabled() {
    this.isDisabled = this.items?.length === 1;
  }
}
