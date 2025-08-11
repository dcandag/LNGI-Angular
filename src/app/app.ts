
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LngiComponent } from './lngi.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, LngiComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LNGI');
}
