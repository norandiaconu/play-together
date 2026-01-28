import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom, provideZoneChangeDetection } from '@angular/core';

bootstrapApplication(AppComponent, {
    providers: [provideZoneChangeDetection(),importProvidersFrom(BrowserModule)],
}).catch((err) => console.error(err));
