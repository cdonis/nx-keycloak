import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { KeycloakService } from 'keycloak-angular';
import { AuthModule, initializer } from '@auth-lib/shared/auth';

function initializeKeyCloak(keycloak: KeycloakService): () => Promise<boolean> {
  return initializer(keycloak, "shell");
}

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    AuthModule,
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
