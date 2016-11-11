import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, ResponseOptions } from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Company} from  '../company/company.model';


@Injectable()
export class CompanyService {
  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api/';

  constructor(private http: Http) { }

  getCompanies() {
    return this.http.get(this.API_BASE + `company`)
      .map(data => data.json())
      .catch(this.errorHandler);
  }

  getCompany(companyId: number) {
    return this.http.get(this.API_BASE + `company/${companyId}`)
      .map(data => data.json())
      .catch(this.errorHandler);
  }

  deleteCompany(companyId: number) {
    return this.http.delete(this.API_BASE + `company/${companyId}`)
    .catch(this.errorHandler);
  }

  updateCompany(company: Company){
    let headers = new Headers({'content-type': 'application/json'});
    let options = new ResponseOptions({ headers: headers});

    return this.http.put(this.API_BASE + `company/${company.id}`, JSON.stringify(company), options)
    .map(data => data.json())
    .catch(this.errorHandler);

  }


  private errorHandler(error) {
    console.log('ERROR:', error);
    return Observable.throw(error);
  }

}




//Observable.of([
    //   { name: 'company 1', email: 'email 1', phone: 11111111 }
    // ]);