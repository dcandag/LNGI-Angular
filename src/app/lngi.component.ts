import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { interval, Subscription, BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap, startWith } from 'rxjs/operators';
import { SubscriptionLoggable } from 'rxjs/internal/testing/SubscriptionLoggable';

@Component({
  selector: 'app-lngi',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lngi.component.html',
  styleUrls: ['./lngi.component.css']
})
export class LngiComponent implements OnDestroy {
  private numberSubject = new BehaviorSubject<number>(0);
  number$ = this.numberSubject.asObservable();
  formattedNumber$ = this.number$.pipe(
    map(num => this.formatNumber(num))
  );

  pace = 1000; // milliseconds
  multiplier = 1; // increment multiplier
  subscription: Subscription | null = null;
  isRunning = false;

  paceOptions = [
    { label: 'Slow', value: 500 },
    { label: 'Medium', value: 200 },
    { label: 'Fast', value: 50 },
    { label: 'Lightning Fast', value: 3 } // Instant pace for testing
  ];

  multiplierOptions = [
    { label: '+1', value: 1 },
    { label: '+2', value: 2 },
    { label: '+5', value: 5 },
    { label: '+10', value: 10 },
    { label: '+50', value: 50 },
    { label: '+100', value: 100 },
    { label: '+1000', value: 1000 },
    { label: '+10000', value: 10000 },
    { label: '+100000', value: 100000 },
    { label: '+1000000', value: 1000000 },
    { label: '+10000000', value: 10000000 },
    { label: '+100000000', value: 100000000 }
  ];

  start() {
    if (this.subscription) return;
    this.isRunning = true;
    let currentNumber = this.numberSubject.value;
    this.subscription = interval(this.pace).subscribe(() => {
      currentNumber += this.multiplier;
      this.numberSubject.next(currentNumber);
    });
  }

  pause() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
      this.isRunning = false;
    }
  }

  reset() {
    this.pause();
    this.numberSubject.next(0);
  }

  changePace(newPace: number) {
    this.pace = newPace;
    if (this.subscription) {
      this.pause();
      this.start();
    }
  }

  changeMultiplier(newMultiplier: number) {
    this.multiplier = newMultiplier;
    // No need to restart the interval for multiplier changes
    // It will take effect on the next increment
  }

  formatNumber(num: number): string {
    // Always display raw numbers with comma formatting for readability
    return num.toLocaleString();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
