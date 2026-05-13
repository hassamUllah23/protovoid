import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobTag } from '@utils/interfaces';
import { Select } from '@shared';
import { SelectOption } from '@shared/components/select/select';

interface FilterOption {
    label: string;
    value: string;
}

@Component({
    selector: 'app-job-filter',
    standalone: true,
    imports: [CommonModule, FormsModule, Select],
    templateUrl: './job-filter.html',
})
export class JobFilter {
    @Input() activeFilter: string = 'all';
    @Input() activeLocation: string = 'all';
    @Input() locations: string[] = [];

    @Output() filterChange = new EventEmitter<string>();
    @Output() locationChange = new EventEmitter<string>();

    filterOptions: FilterOption[] = [
        { label: 'View all', value: 'all' },
        { label: 'Engineering', value: 'engineering' },
        { label: 'QA', value: 'qa' },
        { label: 'Design', value: 'design' },
        { label: 'HR', value: 'hr' },
        { label: 'Management', value: 'management' },
    ];

    onFilterClick(value: string): void {
        this.filterChange.emit(value);
    }

    get locationOptions(): SelectOption[] {
        return this.locations.map(l => ({ value: l, label: l }));
    }

    onLocationChange(event: Event): void {
        const target = event.target as HTMLSelectElement;
        this.locationChange.emit(target.value || 'all');
    }

    getFilterButtonClasses(value: string): string {
        const base = 'px-3 py-1.5 text-xs font-medium uppercase tracking-wide rounded transition-all duration-200 border';
        
        if (this.activeFilter === value) {
            return `${base} bg-secondary text-[color:var(--color-bg)] border-secondary`;
        }
        
        return `${base} bg-transparent text-tertiary border-tertiary/30 hover:border-tertiary hover:text-secondary`;
    }
}
