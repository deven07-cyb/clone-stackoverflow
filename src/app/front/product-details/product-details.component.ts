import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productdata:undefined | any;
  constructor(private activeroute:ActivatedRoute,private route:QuestionService) {}
  ngOnInit(): void {
    let productId = this.activeroute.snapshot.paramMap.get('productId');
    console.log('productId:', productId);

    if (productId) {
      this.route.getProduct(productId).subscribe((res) => {
        this.productdata = res;
        console.log('productdata:', this.productdata);
      });
    } else {
      console.log('productId is null or undefined');
    }
  }
}
