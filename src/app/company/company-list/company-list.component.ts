import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';
import { Company } from './../company.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies$: Observable<Company[]>;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companies$ = this.companyService.getCompanies();
    // .subscribe(data => this.companies = data);
  }

  deleteCompany(companyId: number) {
    this.companyService.deleteCompany(companyId)
       .subscribe(() => this.getCompanies());
   }

}
