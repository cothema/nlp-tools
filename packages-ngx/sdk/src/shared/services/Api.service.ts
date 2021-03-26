import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IApiResponse } from "../../interfaces/IApiResponse";

@Injectable({
  providedIn: "root",
})
export class ApiService {

  /**
   * Set base URL before API usage:
   * ApiService.baseUrl = environment.apiUrl;
   */
  public baseUrl: string = "";

  public apiVersion: string = "1";

  constructor(
    private http: HttpClient,
  ) {
  }

  async post<T>(
    subPath: string,
    lang: string,
    request: any,
  ): Promise<IApiResponse<T>> {
    return this.http
      .post<IApiResponse<T>>(
        this.baseUrl + "/v" + this.apiVersion + "/" + lang + subPath,
        request,
      )
      .toPromise<IApiResponse<T>>();
  }

}
