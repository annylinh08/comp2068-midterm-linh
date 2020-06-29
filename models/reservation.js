// You need to define the schema for a reservation
// The fields you require are:
// associated user
// quantity of guests
// restaurant name
// date and time of reservation (you can do these as separate fields if you wish) 

const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema

({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    restaurant: {
        type: String,
        enum: ['Kelseys','Montanas','Outbacks','Harveys','Swiss Chalet'],
        default: 'Kelseys'
    },
    dateAndTime: {
        type: Date,
        required: true 
    },
    quantityOfGuests: {
        type: Number,
        required: true
    }
});
// Query Helpers
ReservationSchema.query.kelseys = function () {
    return this.where({
      restaurant: 'Kelseys'
    })
  };
  
  ReservationSchema.query.montana = function () {
    return this.where({
      restaurant: 'Montanas'
    })
  };

  ReservationSchema.query.outbacks = function () {
    return this.where({
      restaurant: 'Outbacks'
    })
  };
  
  ReservationSchema.query.swissChalet = function () {
    return this.where({
      restaurant: 'Swiss Chalet'
    })
  };

  ReservationSchema.query.harveys = function () {
    return this.where({
      restaurant: 'Harveys'
    })
  };

  module.exports = mongoose.model('Reservation', ReservationSchema);