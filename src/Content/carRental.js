import HeroCar from "../assets/Hero/Car1.png";
import HeroBG from "../assets/Hero/HomeBG1.png"
import AudiA1 from "../assets/Fleet/AudiA1.png"
import BMW320 from "../assets/Fleet/BMW320.png"
import Mercedez from "../assets/Fleet/Mercedez.png"
import ToyotaCamry from "../assets/Fleet/ToyotaCamry.png"
import VWGolf6 from "../assets/Fleet/VWGolf6.png"
import VWPassat from "../assets/Fleet/VWPassat.png"
import BannerCar from "../assets/WhyChooseUs/Cars.png"
import DownloadAppImage from "../assets/DownloadApp/Phone.webp"
import car from "../assets/Service/car.svg"
import customerservice from "../assets/Service/customerservice.svg"
import travel from "../assets/Service/travel.svg"
import drive from "../assets/WhyChooseUs/drive.svg"
import pricing from "../assets/WhyChooseUs/pricing.svg"
import charges from "../assets/WhyChooseUs/charges.svg"
import BgImage from "../assets/WhyChooseUs/BgImage.png"
import bgCar from "../assets/FAQ/bgCar.png"

export const hero = {
    title: "Save big with our car rental",
    subtitle: "Plan your trip now",
    description: "Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.",
    image: `${HeroCar}`,
    bgImage: `${HeroBG}`
}

export const services = {
    title: "Quick & easy car rental",
    subtitle: "Plan your trip now",
    cards: [{
        image:`${car}`,
        title:"Select Car",
        description:"We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs"
    },{
        image:`${customerservice}`,
        title:"Contact Operator",
        description:"Our knowledgeable and friendly operators are always ready to help with any questions or concerns"
    },{
        image:`${travel}`,
        title:"Let's Drive",
        description:"Whether you're hitting the open road, we've got you covered with our wide range of cars"
    }]
}

export const fleet = {
    title:"Our rental fleet",
    subtitle:"Choose from a variety of our amazing vehicles to rent for your next adventure or business trip.",
    carData: [{
        image:`${AudiA1}`,
        name: "Audi A1 S-Line",
        rent: "45",
        model: "Audi",
        mark: "A1",
        year: "2012",
        doors: "4",
        AC: "Yes",
        transmission: "Manual",
        fuel: "Gasoline",
        seater: "4",
        luggage: "2 Bags"
    },{
        image:`${VWGolf6}`,
        name: "Volkswagen Golf 6",
        rent: "37",
        model: "Volkswagen",
        mark: "Golf 6",
        year: "2008",
        doors: "4",
        AC: "Yes",
        transmission: "Manual",
        fuel: "Diesel",
        seater: "4",
        luggage: "2 Bags"
    },{
        image:`${ToyotaCamry}`,
        name: "Toyota Camry",
        rent: "30",
        model: "Toyota",
        mark: "Camry",
        year: "2006",
        doors: "4",
        AC: "Yes",
        transmission: "Manual",
        fuel: "Diesel",
        seater: "4",
        luggage: "2 Bags"
    },{
        image:`${BMW320}`,
        name: "BMW 320 Modern Line",
        rent: "50",
        model: "BMW",
        mark: "320 Modern Line",
        year: "2016",
        doors: "4",
        AC: "Yes",
        transmission: "Automatic",
        fuel: "Hybrid",
        seater: "4",
        luggage: "3 Bags"
    },{
        image:`${Mercedez}`,
        name: "Mercedez Benz GLK",
        rent: "55",
        model: "Mercedez",
        mark: "GLK",
        year: "2018",
        doors: "4",
        AC: "Yes",
        transmission: "Automatic",
        fuel: "Electric",
        seater: "7",
        luggage: "5 Bags"
    },{
        image:`${VWPassat}`,
        name: "Volkswagen Passat CC",
        rent: "25",
        model: "Volkswagen",
        mark: "Passat",
        year: "2008",
        doors: "4",
        AC: "Yes",
        transmission: "Manual",
        fuel: "Gasoline",
        seater: "4",
        luggage: "2 Bags"
    }]
}

export const locations = {
    cities: ["Warsaw", "Kraków", "Łódź", "Wrocław", "Poznań", "Gdańsk", "Szczecin", "Bydgoszcz", "Lublin", "Białystok", "Zakopane"]
}

export const whyChooseUs ={
    image: `${BannerCar}`,
    bgImage: `${BgImage}`,
    title: "Best valued deals you will ever find",
    subtitle: "Why Choose Us",
    description: "Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.",
    buttonTitle: "Find Details",
    cards: [{
        image:`${drive}`,
        title:"Cross Country Drive",
        description:"Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures."
    },{
        image:`${pricing}`,
        title:"All Inclusive Pricing",
        description:"Get everything you need in one convenient, transparent price with our all-inclusive pricing policy."
    },{
        image:`${charges}`,
        title:"No Hidden Charges",
        description:"Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing."
    }]
}

export const FAQs = {
    title:"Frequently Asked Questions",
    subtitle: "Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.",
    image:`${bgCar}`,
    cards: [{
        Q:"1. What is special about comparing rental car deals?",
        A:" Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies."
    },{
        Q:"2. How do I find the car rental deals?",
        A:"You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions."
    },{
        Q:"3. How do I find such low rental car prices?",
        A:"Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices."
    }]
}

export const downloadApp = {
    title:"Download our app to get most out of it",
    description:"Need a car to go across town? DRIVE smart Car Sharing is way better than a rental car. Book cars on demand by the minute, hour, day or week. Sign up, drive and return the vehicle — It’s simple.",
    image: `${DownloadAppImage}`
}

export const footerContent = {
    title: "CAR Rental",
    description: "We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.",
    phoneNo: "(123)-456-789",
    email:"carbooking@comet.com",
    heading1:"Business Center",
    heading2:"Legal Information",
    heading3:"WORKING HOURS",
    heading4:"SUBSCRIPTION",
    list1:["Corporate account", "Business solutions", "Tour operators", "Travel agents"],
    list2:["Damage Management Policy", "Deposit Policy", "Security and privacy policy", "Terms and conditions", "Important information"],
    list3:["Monday: 9:00AM - 9:00PM","Tuesday: 9:00AM - 9:00PM","Wednesday: 9:00AM - 9:00PM","Thursday: 9:00AM - 9:00PM","Friday: 9:00AM - 9:00PM","Saturday: 9:00AM - 7:00PM","Sunday: Closed"],
    list4:["Subscribe your Email address for latest news & updates."],

}