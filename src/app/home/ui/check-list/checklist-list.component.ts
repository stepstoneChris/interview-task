import { CommonModule } from '@angular/common';
import { Component, input, output, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChecklistService } from 'src/app/shared/data-access/checklist.service';
import { Checklist } from 'src/app/shared/interfaces/checklist';

@Component({
  standalone: true,
  selector: 'app-checklist-list',
  templateUrl: './checklist-list.component.html',
  styleUrls: ['./checklist-list.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class ChecklistListComponent {
  checklistService = inject(ChecklistService);

  checklists = input.required<Checklist[]>();
  delete = output<string>();
  edit = output<Checklist>();

  onSearchUpdated(term: string) {
    this.checklistService.searchList(term);
  }

  get filteredChecklists() {
    return this.checklistService.filteredChecklists();
  }
}
