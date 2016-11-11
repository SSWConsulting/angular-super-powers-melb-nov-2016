import { CompanyService } from './../company.service';
import { Company } from './../company.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  company = <Company>{};
  companyId = this.activatedRoute.snapshot.params['id'];
  isNewCompany = this.companyId === 'new';

  constructor(
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private router: Router) { }

  ngOnInit() {
    if (!this.isNewCompany) {
      this.getCompany();
    }
  }

  getCompany() {
    this.companyService.getCompany(this.companyId)
      .subscribe(company => this.company = company);
  }

  saveCompany() {
    if (this.isNewCompany) {
        // this.companyService.updateCompany(this.company)
        // .subscribe( _ => this.navigateToCompanyList());
    } else {
        this.companyService.updateCompany(this.company)
        .subscribe( ()   => this.navigateToCompanyList());
    }
  }

  navigateToCompanyList() {
    this.router.navigateByUrl('/company/list');
  }

}
