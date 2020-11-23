import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { PartnersService } from '../../services/partners.service';
import { of } from 'rxjs';

@Injectable()
export class PartnersEffects {

    constructor(private actions$: Actions, private partnersService: PartnersService){}

    loadPartners$ = createEffect(() => this.actions$.pipe(
            ofType( actions.loadPartners ),
            mergeMap(
                () => this.partnersService.getPartners()
                    .pipe(
                        map( partners => actions.loadPartnersSuccess({ partners: partners }) ),
                        catchError( err => of(actions.loadPartnersError({ payload: err })) )
                    )
            )
        )
    );

}