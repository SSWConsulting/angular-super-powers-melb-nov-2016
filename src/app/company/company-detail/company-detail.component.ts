import { CompanyService } from './../company.service';
import { Company } from './../company.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'fbc-company-detail',
    templateUrl: './company-detail.component.html',
    styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
    company = <Company>{};
    companyId = this.activatedRoute.snapshot.params['id'];

    constructor(
      private activatedRoute: ActivatedRoute,
      private companyService: CompanyService) { }

    ngOnInit() {
        this.getCompany();
    }

    getCompany() {
        this.companyService.getCompany(this.companyId)
          .subscribe(company => this.company = company);
    }

}
