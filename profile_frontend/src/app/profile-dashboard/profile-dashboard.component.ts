import { Component } from '@angular/core';
import { InfoCardComponent } from '../components/info-card/info-card.component';
import { FilterTabsComponent } from '../components/filter-tabs/filter-tabs.component';
import { PillLabelComponent } from '../components/pill-label/pill-label.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Mock profile table data and info card data for demo.
interface ProfileData {
  name: string;
  devices: number;
  type: 'Personal' | 'Business' | 'Guest';
  status: 'Active' | 'Suspended' | 'Pending';
  created: string;
}

@Component({
  selector: 'app-profile-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, InfoCardComponent, FilterTabsComponent, PillLabelComponent],
  templateUrl: './profile-dashboard.component.html',
  styleUrl: './profile-dashboard.component.css'
})
export class ProfileDashboardComponent {
  headerGradient = 'linear-gradient(90deg, #ff7eb3 0%, #65d6ff 100%)';

  infoCards = [
    { icon: 'person', label: 'Total Profiles', value: '238', badge: '+12 this week', badgeColor: '#42a5f5' },
    { icon: 'devices', label: 'Devices', value: '688', badge: undefined, badgeColor: '#ab47bc' },
    { icon: 'verified_user', label: 'Verified', value: '168', badge: undefined, badgeColor: '#66bb6a' },
    { icon: 'access_time', label: 'Pending', value: '14', badge: '+3', badgeColor: '#ffa726' }
  ];

  filterTabs = ['All', 'Personal', 'Business', 'Guest'];
  activeTabIdx = 0;
  searchValue = '';
  profiles: ProfileData[] = [
    {
      name: 'Alice Williams',
      devices: 3,
      type: 'Personal',
      status: 'Active',
      created: '2024-04-28'
    },
    {
      name: 'Beta Solutions',
      devices: 25,
      type: 'Business',
      status: 'Pending',
      created: '2024-04-19'
    },
    {
      name: 'Marc Doyle',
      devices: 2,
      type: 'Guest',
      status: 'Suspended',
      created: '2024-03-25'
    },
    {
      name: 'Harriet Osbourne',
      devices: 6,
      type: 'Personal',
      status: 'Active',
      created: '2024-02-18'
    }
  ];

  // Mapping status/type to colors
  getStatusColor(status: string) {
    if (status === 'Active') return '#65D6FF';
    if (status === 'Suspended') return '#EB5757';
    if (status === 'Pending') return '#FFC542';
    return '#D1D5DB';
  }

  getTypeColor(type: string) {
    if (type === 'Personal') return '#42a5f5';
    if (type === 'Business') return '#9b51e0';
    if (type === 'Guest') return '#56cc9d';
    return '#e0e7ff';
  }

  // Filtering by tab/type and search
  get filteredProfiles(): ProfileData[] {
    let filtered = this.profiles;
    if (this.activeTabIdx > 0) {
      const selectedType = this.filterTabs[this.activeTabIdx];
      filtered = filtered.filter(profile => profile.type === selectedType);
    }
    if (this.searchValue.trim()) {
      filtered = filtered.filter(profile => profile.name.toLowerCase().includes(this.searchValue.toLowerCase()));
    }
    return filtered;
  }

  setTab(idx: number) {
    this.activeTabIdx = idx;
  }
}
