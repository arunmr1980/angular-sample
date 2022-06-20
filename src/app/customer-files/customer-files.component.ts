import { Component, OnInit } from '@angular/core';

import { CustomerFilesService } from './customer-files.service'

@Component({
  selector: 'app-customer-files',
  templateUrl: './customer-files.component.html',
  styleUrls: ['./customer-files.component.css']
})
export class CustomerFilesComponent implements OnInit {

  customerFiles: any[] = [];

  constructor(private customerFilesService: CustomerFilesService) { }

  ngOnInit(): void {
    console.log("[CustomerFilesComponent] ngOnInit()")
    // this.getCustomerFiles('112')
  }


  getCustomerFiles(userID: string){
    this.customerFilesService.getCustomerFiles(userID).subscribe(customerFiles => {
      console.log('Received customer files')
      console.log(customerFiles)
      this.customerFiles = customerFiles
    });
  }

}
