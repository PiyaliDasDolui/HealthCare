import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError, take} from 'rxjs/operators';

import { DoctorService } from './doctor.service';
import { Injectable } from '@angular/core';
import { DoctorResolved } from './doctorList';


@Injectable({
  providedIn: 'root'
})
export class DoctorDataResolver implements Resolve<DoctorResolved> {

  constructor(private doctorService: DoctorService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<DoctorResolved> {
            const code = route.paramMap.get('code');
            const a = this.doctorService.getDoctorByCode(code).pipe(
              take(1),
              map(doctors => ({doctors})),
              catchError(error => {
                const message = `Retrival error: ${error}`;
                console.error(message);
                return of({doctors: null, error: message});
              })
            );

            return a;
        }
  }
