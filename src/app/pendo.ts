import { Injectable } from '@angular/core';
import { initialize } from '@pendo/web-sdk';

@Injectable({
  providedIn: 'root'
})
export class PendoService {
  private isInitialized = false;

  async initPendo(): Promise<void> {
    try {
      await initialize({
        publicAppId: 'd00363ea-4ba0-4bb0-80df-9dbe761c4b11', 
        env: 'io', 
        visitor: { id: 'LOCAL_ANON_USER' }, 
        account: {}  
      });
      this.isInitialized = true;
      console.log('Pendo initialized anonymously.');
    } catch (error) {
      console.error('Failed to initialize Pendo:', error);
    }
  }

  trackEvent(eventName: string, properties?: Record<string, any>): void {
    if (this.isInitialized) {
      (window as any).pendo?.track(eventName, properties);
      console.log(`Pendo Event Tracked: ${eventName}`, properties);
    } else {
      console.warn('Pendo not initialized yet. Event skipped:', eventName);
    }
  }

  trackNameEvent(colName: string, data : any){
    if(this.isInitialized){
      (window as any).pendo?.track(colName,data);
      console.log('track name',colName,data);
    } else{
      console.log('Pendo not initialized yet. Event skipped:',colName);
    }
  }
}
