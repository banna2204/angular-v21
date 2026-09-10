declare module '@pendo/web-sdk' {
  export function initialize(options: any): Promise<any>;
  export function identify(options: any): void;
}

interface Window {
  pendo?: any;
}

declare const pendo: any;
