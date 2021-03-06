import { INestjsBffConfigEnv } from '@nestjs-bff/backend/config/nestjs.config.env.interface';

export const NestjsConfigEnv: INestjsBffConfigEnv = {
  nodeEnv: 'dev',
  db: {
    mongo: {
      mongoConnectionUri: 'mongodb://localhost',
      options: {
        dbName: 'my-nestjs-bff-app',
      },
    },
  },
  http: {
    bffDomain: 'localhost',
    bffPort: 1337,
    get bffRootUrl() {
      return `http://${this.bffDomain}:${this.bffPort}`;
    },
    spaDomain: 'localhost',
    spaPort: 4200,
    get spaRootUrl() {
      return `http://${this.spaDomain}:${this.spaPort}`;
    },
  },
  social: {
    facebook: {
      clientID: 'your-secret-clientID-here', // your App ID
      clientSecret: 'your-client-secret-here', // your App Secret
    },
  },
};
