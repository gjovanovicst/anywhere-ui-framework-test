import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'anywhere-ui-angular-test';
  // public selectedCities: number;
  public selectedCityLb: any;
  public selectedCity: any = {
    id: 1,
    name: 'New York',
    code: 'NY',
    countryCode: 'US',
    country: 'USA',
  };

  constructor() {
    setTimeout(() => {
      this.selectedCity = {
        id: 4,
        name: 'Istanbul',
        code: 'IST',
        countryCode: 'TR',
        country: 'Turkey',
      };
      this.selectedCityLb = {
        id: 4,
        name: 'Istanbul',
        code: 'IST',
        countryCode: 'TR',
        country: 'Turkey',
      };
    }, 3000);
  }

  public form = [
    { name: 'pepperoni', val: 'Pepperoni', isChecked: true },
    { name: 'sausage', val: 'Sausage', isChecked: false },
    { name: 'mushroom', val: 'Mushroom', isChecked: false },
  ];

  public cities = [
    {
      label: 'New York',
      value: {
        id: 1,
        name: 'New York',
        code: 'NY',
        countryCode: 'US',
        country: 'USA',
      },
    },
    {
      label: 'Rome',
      value: {
        id: 2,
        name: 'Rome',
        code: 'RM',
        countryCode: 'IT',
        country: 'Italy',
      },
    },
    {
      label: 'London',
      value: {
        id: 3,
        name: 'London',
        code: 'LDN',
        countryCode: 'GB',
        country: 'England',
      },
    },
    {
      label: 'Istanbul',
      value: {
        id: 4,
        name: 'Istanbul',
        code: 'IST',
        countryCode: 'TR',
        country: 'Turkey',
      },
    },
    {
      label: 'Paris',
      value: {
        id: 5,
        name: 'Paris',
        code: 'PRS',
        countryCode: 'FR',
        country: 'France',
      },
    },
    {
      label: 'Belgrade',
      value: {
        id: 6,
        name: 'Belgrade',
        code: 'BGD',
        countryCode: 'RS',
        country: 'Serbia',
      },
    },
    {
      label: 'Tokyo',
      value: {
        id: 7,
        name: 'Tokyo',
        code: 'TOK',
        countryCode: 'JP',
        country: 'Japan',
      },
    },
    {
      label: 'Madrid',
      value: {
        id: 8,
        name: 'Madrid',
        code: 'MAD',
        countryCode: 'ES',
        country: 'Spain',
      },
    },
  ];
  // public citiesLb = [...this.cities];

  checkEvent(val: any) {
    console.log(val);
  }

  onSubmit(data: any) {
    console.log(data);
  }
}
