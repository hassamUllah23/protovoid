import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from "./components/navigation/navigation";
import { Landing } from "./components/landing/landing";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Landing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('protovoid');
}
