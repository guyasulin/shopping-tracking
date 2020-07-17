import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError,  Subject, of } from 'rxjs';
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
		const headers = new HttpHeaders({ 'Content-Type': 'application/javascript' , 'Access-Control-Allow-Origin': '*' })
		return this.http.get<Currency>(this.currencyUrl, {headers})
			.pipe(
				catchError((err) => {
					return throwError(err);
				})
			)
			.subscribe((data: Currency) => {
				this.updatedCurrency$.next(data.rates);
			});
	}

	handleError(error: HttpErrorResponse) {
		let errorMessage = 'Unknown error!';
		if (error.error instanceof ErrorEvent) {
			// Client-side errors
			errorMessage = `Error: ${error.error.message}`;
		} else {
			// Server-side errors
			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		// window.alert(errorMessage);
		return throwError(errorMessage);
	}
}
