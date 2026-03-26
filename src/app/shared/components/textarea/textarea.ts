import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'base-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex flex-col gap-1.5">
      @if (label) {
        <label class="text-xs font-medium uppercase tracking-wider text-secondary">
          {{ label }}@if (required) {<span class="text-primary">*</span>}
        </label>
      }
      <textarea
        [placeholder]="placeholder"
        [disabled]="disabled"
        [value]="value"
        [rows]="rows"
        (input)="onInput($event)"
        (blur)="onBlur()"
        class="w-full px-3 py-2.5 bg-transparent border border-tertiary/30 rounded text-secondary text-sm leading-relaxed placeholder:text-tertiary/50 focus:outline-none focus:border-tertiary transition-colors disabled:opacity-50 disabled:cursor-not-allowed resize-none overflow-y-auto"
      ></textarea>
      @if (error) {
        <span class="text-xs text-primary">{{ error }}</span>
      }
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Textarea),
      multi: true
    }
  ]
})
export class Textarea implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() rows = 3;
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

  onInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
