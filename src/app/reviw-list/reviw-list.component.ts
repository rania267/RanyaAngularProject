import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { CustomerReview } from '../model/customerReview';

@Component({
  selector: 'app-reviw-list',
  templateUrl: './reviw-list.component.html',
  styleUrls: ['./reviw-list.component.css']
})
export class ReviwListComponent implements OnInit {

  

  reviews: CustomerReview[] = [];

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewService.getReviews().subscribe(
      reviews => this.reviews = reviews,
      error => console.error(error)
    );
  }}