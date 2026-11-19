import { Inject, Service } from '@angular/core';
import { Router } from '@angular/router';

@Service()
export class DomainService {

    activeRoute: string = Inject(Router).url;
    hideRequestCallBackForm: boolean = false;
    
    isHideRequestCallBackForm(): boolean {
       if (this.activeRoute === '/contact-us' || this.activeRoute === '/login') {
          this.hideRequestCallBackForm = false;
       } else {
          this.hideRequestCallBackForm = true;
       }
       return this.hideRequestCallBackForm;
    }

}
