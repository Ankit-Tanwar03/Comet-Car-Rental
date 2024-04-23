import Professor from "../assets/Testimonials/Professor.jpg"
import Berlin from "../assets/Testimonials/Berlin.webp"
import Tokyo from "../assets/Testimonials/Tokyo.jpg"
import Nairobi from "../assets/Testimonials/Nairobi.jpg"

export const testimonialData = {
    title: "Client's Testimonials",
    subtitle: "Reviewed by People",
    description: "Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.",
    cards: [{
        image: `${Professor}`,
        name: "Professor",
        review: "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."
    },{
        image: `${Berlin}`,
        name: "Berlin",
        review: "The car was in great condition and made our trip even better. Highly recommend for this car rental website!"
    },{
        image: `${Tokyo}`,
        name: "Tokyo",
        review: "I've been happy with the flexibility of being able to rent and/or cancel cars, whilst planning, which makes the transaction much easier!"
    },{
        image: `${Nairobi}`,
        name: "Nairobi",
        review: "Wonderful overall experience! We've been using Rentalcars for years now - everything was always very easy and fair price."
    }]
}