// set up airbreak notifier to handle Angular application errors
// see https://angular.io/api/core/ErrorHandler

import { ErrorHandler } from '@angular/core';
import { Notifier } from '@airbrake/browser';
import { environment } from 'src/environments/environment';

export class AirbrakeErrorHandler implements ErrorHandler {
  airbrake: Notifier;

  constructor() {
    this.airbrake = new Notifier({
      projectId: parseInt(environment.airbrakeProjectId),
      projectKey: environment.airbrakeProjectKey,
      environment: 'production'
    });

    this.airbrake.addFilter((notice) => {
      if (notice.params.admin) {
        // ignore admin errors
        return null;
      }
      if (notice.errors[0].message.includes('HttpException')){
        notice.params.kind = 'Http'
      }
      // modify payload...
      notice.context.environment = 'development'
      notice.params.animal = '🐊'
      return notice;
    })
  }

  handleError(error: any): void {
    let message = error;
    let errorParams = {}
    console.warn('error from handleError', error)
    // handle case where error is an object instead of a string. We can then set per-notification params (as opposed to using addFilter above)
    if (error.msg) {
      message = error.msg
      errorParams = error
    }
    // add items to each notification. error must be a string, not an object
    let promise = this.airbrake.notify({
      error: message,
      params: errorParams,
      session: { session: 'some value'}
    });
    promise.then((notice) => {
      if (notice.id) {
        console.log('Airbrake notified of error. notice id', notice.id);
      }
    });
  }
}