import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly rootURL = "http://localhost:23845/api";
  list: PaymentDetail[];
  constructor(private http: HttpClient) {}
  postPaymentDetail() {
    return this.http.post(this.rootURL + "/PaymentDetail",this.formData);
  }
  putPaymentDetail() {
    return this.http.put(this.rootURL + "/PaymentDetail/" + this.formData.PMId, this.formData);
  }
  deletePaymentDetail(pd) {
    return this.http.delete(this.rootURL + "/PaymentDetail/" + pd.PMId);
  }

  refreshList() {
    this.http
      .get(this.rootURL + "/PaymentDetail")
      .toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }
}
