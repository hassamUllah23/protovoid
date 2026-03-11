import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { NgIconsModule } from '@ng-icons/core';
import { Link } from '@shared/components/link/link';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconsModule, Link],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private themeService = inject(ThemeService);
  isDarkMode = this.themeService.isDarkMode;

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}