import { Injectable } from '@nestjs/common';
import { Vendor } from './vendor.dto';
import { Review } from './review.dto';

const vendorReviews = {
  1: [{
    id: 1,
    text: 'Excellent service',
    rating: 4.5
  }, {
    id: 2,
    text: 'Did not provide good communication etc',
    rating: 2
  }, {
    id: 3,
    text: 'Highly recommended',
    rating: 5
  }],
  2: [{
    id: 4,
    text: 'Just horrible',
    rating: 1,
  }, {
    id: 5,
    text: 'Wish I could give a negative rating',
    rating: 1
  }]
}

@Injectable()
export class AppService {
  getPayload(vendorId: number): Vendor {
    const reviews = vendorReviews[vendorId] || [];
    const totalRating = reviews.reduce((acc: number, r: Review) => {
      acc += r.rating
      return acc
    }, 0)

    return {
      id: vendorId,
      reviews,
      totalRating: reviews.length !== 0 ? totalRating / reviews.length : 0
    }
  }
}
