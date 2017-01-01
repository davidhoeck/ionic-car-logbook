import { Component } from '@angular/core';

import { EntriesPage } from '../entries/entries';
import { ExportPage } from '../export/export';
import { VehiclesPage } from '../vehicles/vehicles';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = EntriesPage;
  tab2Root: any = VehiclesPage;
  tab3Root: any = ExportPage;

  constructor() {

  }
}
