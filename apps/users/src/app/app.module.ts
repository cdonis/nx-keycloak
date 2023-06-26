import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { KeycloakService } from 'keycloak-angular';
import { initializer } from '@auth-lib/shared/auth';

function initializeKeyCloak(keycloak: KeycloakService): () => Promise<boolean> {
  return initializer(keycloak, "users");
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./remote-entry/entry.module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [
    {
        provide: APP_INITIALIZER,
        useFactory: initializeKeyCloak,
        multi: true,
        deps: [KeycloakService]
    },
    KeycloakService  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
