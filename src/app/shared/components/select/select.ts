import { Component, Input, forwardRef, signal } from '@angular/core';
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
  styles: [`
    :host { display: block; }

    .select-wrapper {
      border-radius: 0.375rem;
      transition: box-shadow 0.2s ease;
    }
    .select-wrapper.focused {
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 18%, transparent);
    }

    .chevron {
      transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .chevron.open {
      transform: rotate(180deg);
    }
  `],
  template: `
    <div class="flex flex-col gap-1.5">
      @if (label) {
        <label [class]="'text-xs font-medium uppercase tracking-wider transition-colors duration-200 ' + (focused() ? 'text-primary' : 'text-secondary')">
          {{ label }}@if (required) {<span class="text-primary ml-0.5">*</span>}
        </label>
      }
      <div [class]="'select-wrapper relative ' + (focused() ? 'focused' : '')">
        <select
          [disabled]="disabled"
          [value]="value"
          (focus)="onFocus()"
          (change)="onSelectChange($event)"
          (blur)="onBlur()"
          [class]="getSelectClasses()"
        >
          <option value="" class="bg-[color:var(--color-bg)] text-tertiary">{{ placeholder }}</option>
          @for (option of options; track option.value) {
            <option [value]="option.value" class="bg-[color:var(--color-bg)] text-secondary">{{ option.label }}</option>
          }
        </select>
        <div [class]="'chevron absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none ' + (focused() ? 'open' : '')">
          <svg [class]="'w-4 h-4 transition-colors duration-200 ' + (focused() ? 'text-primary' : 'text-tertiary')" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      @if (error) {
        <span class="text-xs text-primary mt-0.5">{{ error }}</span>
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

  focused = signal(false);

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  getSelectClasses(): string {
    const base = 'w-full px-3 py-2.5 bg-transparent border rounded text-sm focus:outline-none appearance-none cursor-pointer transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
    const borderClass = this.focused() ? 'border-primary/60' : 'border-tertiary/30 hover:border-tertiary/60';
    const textClass = this.value ? 'text-secondary' : 'text-tertiary';
    return `${base} ${borderClass} ${textClass}`;
  }

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

  onFocus(): void {
    this.focused.set(true);
  }

  onSelectChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  onBlur(): void {
    this.focused.set(false);
    this.onTouched();
  }
}
