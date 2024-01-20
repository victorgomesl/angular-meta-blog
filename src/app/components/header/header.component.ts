import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchText: string = '';
  isDarkMode: boolean = false;

  performSearch(): void {
    console.log('Searching for:', this.searchText);
    // Aqui você pode adicionar a lógica de busca
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
  }
}
