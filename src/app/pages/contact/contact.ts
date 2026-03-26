import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Text, Dot, Input as BaseInput, Textarea, Container } from '@shared';
import { Select, SelectOption } from '../../shared/components/select/select';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, Text, Dot, BaseInput, Select, Textarea, Container],
  templateUrl: './contact.html',
})
export class Contact {
  formData = signal({
    firstName: '',
    lastName: '',
    company: '',
    workEmail: '',
    source: '',
    message: ''
  });

  sourceOptions: SelectOption[] = [
    { value: 'search', label: 'Search Engine' },
    { value: 'social', label: 'Social Media' },
    { value: 'referral', label: 'Referral' },
    { value: 'blog', label: 'Blog / Article' },
    { value: 'event', label: 'Event / Conference' },
    { value: 'other', label: 'Other' }
  ];

  isSubmitting = signal(false);

  isFormValid(): boolean {
    const data = this.formData();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return (
      !!data.firstName &&
      !!data.lastName &&
      !!data.workEmail && emailRegex.test(data.workEmail) &&
      !!data.source &&
      !!data.message
    );
  }

  updateField(field: string, value: string) {
    this.formData.update(data => ({ ...data, [field]: value }));
  }

  onSubmit() {
    if (!this.isFormValid()) {
      return;
    }

    this.isSubmitting.set(true);
    
    setTimeout(() => {
      console.log('Form submitted:', this.formData());
      this.isSubmitting.set(false);
      this.formData.set({
        firstName: '',
        lastName: '',
        company: '',
        workEmail: '',
        source: '',
        message: ''
      });
    }, 1500);
  }
}
