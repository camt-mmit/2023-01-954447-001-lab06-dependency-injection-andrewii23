import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleDataService } from '../../example-data.service';
import { DynamicSectionComponent } from '../../dynamic-section/dynamic-section.component';
import { SectionData } from '../../types';

@Component({
  selector: 'app-example-input',
  standalone: true,
  imports: [CommonModule, DynamicSectionComponent],
  templateUrl: './example-input.component.html',
  styleUrls: ['./example-input.component.scss'],
})
export class ExampleInputComponent {
  protected readonly dataService = inject(ExampleDataService);

  protected data: SectionData | null = null;

  constructor() {
    (async () => {
      this.data = await this.dataService.getData();
      console.log(this.data);
    })();
  }

  async onDataChange(sectionData: SectionData): Promise<void> {
    await this.dataService.setData(sectionData);
  }
}
