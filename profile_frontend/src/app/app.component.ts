import { Component } from '@angular/core';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileDashboardComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
