import { KeycloakOptions, KeycloakService } from 'keycloak-angular';
// import { environment } from '../../environments/environment';

export function initializer(keycloak: KeycloakService, clientId: string): () => Promise<boolean> {

    const options: KeycloakOptions = {
      config: {
        url: 'http://localhost:8080', //environment.keycloakURL,
        realm: 'MYREALM', //environment.keycloakRealm,
        clientId,
      },
      initOptions: {
        //onLoad: 'check-sso',
        onLoad: 'login-required',
        checkLoginIframe: false
      },
    }

    return () => keycloak.init(options);
}