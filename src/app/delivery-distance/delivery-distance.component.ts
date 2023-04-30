import { Component, OnInit } from '@angular/core';
import { DistanceService } from '../services/distance.service';
@Component({
  selector: 'app-delivery-distance',
  templateUrl: './delivery-distance.component.html',
  styleUrls: ['./delivery-distance.component.css']
})
export class DeliveryDistanceComponent implements OnInit {

  distance: number;

  constructor(private distanceService: DistanceService) { }

  ngOnInit() {
    this.distanceService.calculateDistance(2222.29, 419.42, 21.7749, 4191.422)
      .subscribe(distance => {
        this.distance = distance;
      });
  }
}
