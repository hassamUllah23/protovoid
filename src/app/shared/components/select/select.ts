import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'base-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex flex-col gap-1.5">
      @if (label) {
        <label class="text-xs font-medium uppercase tracking-wider text-secondary">
          {{ label }}@if (required) {<span class="text-primary">*</span>}
        </label>
      }
      <div class="relative">
        <select
          [disabled]="disabled"
          [value]="value"
          (change)="onSelectChange($event)"
          (blur)="onBlur()"
          class="w-full px-3 py-2.5 bg-transparent border border-tertiary/30 rounded text-secondary text-sm focus:outline-none focus:border-tertiary transition-colors disabled:opacity-50 disabled:cursor-not-allowed appearance-none cursor-pointer"
        >
          <option value="" class="bg-[color:var(--color-bg)] text-tertiary">{{ placeholder }}</option>
          @for (option of options; track option.value) {
            <option [value]="option.value" class="bg-[color:var(--color-bg)] text-secondary">{{ option.label }}</option>
          }
        </select>
        <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg class="w-4 h-4 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      @if (error) {
        <span class="text-xs text-primary">{{ error }}</span>
      }
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Select),
      multi: true
    }
  ]
})
export class Select implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = 'Select one...';
  @Input() options: SelectOption[] = [];
  @Input() required = false;
  @Input() disabled = false;
  @Input() error = '';
  @Input() value = '';

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelectChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
