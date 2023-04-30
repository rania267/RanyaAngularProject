import { Component, OnInit } from '@angular/core';
import { CustomerReview } from '../model/customerReview';
import { ReviewService } from '../services/review.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviews: CustomerReview[];

  constructor(private reviewService: ReviewService) {}

  ngOnInit() {
    this.reviewService.getReviews()
      .subscribe(reviews => this.reviews = reviews);
  }
}

