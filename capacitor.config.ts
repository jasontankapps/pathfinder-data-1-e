import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'net.jasontank.pfdata1e',
  appName: 'Pf Data 1e',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Keyboard: {
      resizeOnFullScreen: true
    },
  }
};

export default config;
