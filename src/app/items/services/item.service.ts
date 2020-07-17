import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Subject, of } from 'rxjs';
import { Currency, Rates } from '../models/currency.model';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ItemService {
	currencyUrl = 'https://api.exchangeratesapi.io/latest?base=USD&symbols=USD,ILS';

	constructor(private http: HttpClient) {}

	updatedCurrency$ = new Subject<Rates>();

	getCurrencyData(): void {
		this.apiCall();
		setInterval(() => {
			this.apiCall();
		}, 10000);
	}

	apiCall() {
		return this.http.get<Currency>(this.currencyUrl).subscribe(
			(data: Currency) => {
				this.updatedCurrency$.next(data.rates);
			},
			(err) => {
				this.updatedCurrency$.error(err);
				return err;
			}
		);
	}
}
