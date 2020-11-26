import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  dark: boolean = true;
  constructor() {
    const prefersColor = window.matchMedia('(prefers-color-scheme: dark)');
    this.dark = prefersColor.matches;
    this.toggleDarkMode();

    prefersColor.addEventListener(
      'change',
      mediaQuery => {
        this.dark = mediaQuery.matches;
        this.toggleDarkMode();
      }
    );
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark', this.dark);
  }

}
