import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';

import {ExportPage} from '../pages/export/export';
import {EntriesPage} from '../pages/entries/entries';
import {VehiclesPage} from '../pages/vehicles/vehicles';
import {CreateEntryPage} from '../pages/create-entry/create-entry';
import { EntriesService } from '../pages/entries/entries.service';

import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    ExportPage,
    EntriesPage,
    VehiclesPage,
    CreateEntryPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExportPage,
    EntriesPage,
    VehiclesPage,
    CreateEntryPage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,
    EntriesService
    ]
})
export class AppModule {}
