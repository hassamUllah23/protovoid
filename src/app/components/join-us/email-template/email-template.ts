import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-email-template',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './email-template.html',
})
export class EmailTemplate {
    @Input({ required: true }) jobTitle!: string;
    @Input() companyEmail = 'careers@protovoid.com';
    @Input() companyName = 'Protovoid';

    getEmailSubject(): string {
        return `Application for ${this.jobTitle} Position`;
    }

    getEmailBody(): string {
        return `Dear Hiring Team,

I am writing to express my interest in the ${this.jobTitle} position at ${this.companyName}, as advertised on your careers page.

[Brief introduction about yourself and your current role]

[Why you're interested in this position and ${this.companyName}]

[Key qualifications and relevant experience that match the job requirements]

[What you can bring to the team]

I have attached my resume for your review. I would welcome the opportunity to discuss how my skills and experience align with your team's needs.

Thank you for considering my application. I look forward to hearing from you.

Best regards,
[Your Name]
[Your Phone Number]
[Your LinkedIn Profile (optional)]`;
    }

    getMailtoLink(): string {
        const subject = encodeURIComponent(this.getEmailSubject());
        const body = encodeURIComponent(this.getEmailBody());
        return `mailto:${this.companyEmail}?subject=${subject}&body=${body}`;
    }

    copyEmailTemplate(): void {
        const template = `To: ${this.companyEmail}
Subject: ${this.getEmailSubject()}

${this.getEmailBody()}`;
        
        navigator.clipboard.writeText(template);
    }
}
