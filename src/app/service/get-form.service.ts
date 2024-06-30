import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { Form } from "../models/form.model";
import { environment } from "../environments/environment.prod";

@Injectable({
  providedIn: "root",
})

export class GetFormService {
  constructor(private httpClient: HttpClient) {}

  getForm(): Observable<Form> {
    return this.httpClient
      .get<Form>(environment.apiUrl)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return this.handleServerError(error);
        })
      );
  }
  private handleServerError(error: HttpErrorResponse): Observable<never> {
    console.error(
      `Código de status ${error.status}, ` +
      `Erro: ${error.error}`
    );

    return throwError(
      "Ocorreu um erro ao processar a requisição. Por favor, tente novamente mais tarde."
    );
  }
}

