import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from "./components/navigation/navigation";
import { Landing } from "./components/landing/landing";
import { TrustedBy } from "./components/trusted-by/trusted-by";
import { Cta } from "./components/cta/cta";
import { Footer } from "./components/footer/footer";
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Landing, TrustedBy, Cta, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private themeService = inject(ThemeService);
  protected readonly title = signal('protovoid');
}


