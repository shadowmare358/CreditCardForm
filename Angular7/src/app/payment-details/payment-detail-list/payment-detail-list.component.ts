import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  populateForm(pd:PaymentDetail){
    this.service.formData = Object.assign({},pd);
  }
  deleteItem(pd: PaymentDetail){
    this.service.deletePaymentDetail(pd).subscribe(
      res => {
        this.toastr.info("Deleted successfully!", "Payment Detail Deleted");
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
  }
}
