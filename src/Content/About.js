import Logo from "../assets/Logo/Logo.png"
import Choice from "../assets/About/Choice.svg"
import Outlet from "../assets/About/Outlet.svg"
import Repair from "../assets/About/Repair.svg"

export const aboutContent = {
    title: "Our company was born out of love for cars, customer satisfaction is the measurement of our work",
    subtitle: "About Company",
    description: ["Comet Car Rental is a company with over 10 years of experience, whose motto from the very beginning is to meet the expectations of all customers.","Every day we prove that renting a car is an easy and cheap way to travel.","Our offer includes over 1500 cars at various price levels, from various market segments, from various brands, both passenger cars, and vans.","We follow up to date trends on an ongoing basis and maintain business relations with dealers of leading brands. We want our clients to always have access to the best cars.","Comet Car Rental is renowned for the highest standard of customer service, thanks to which we have a large number of regular customers and constantly gain new ones.","We rent cars all over country, and our agencies are located in domestic airports and most large cities.","Car rental with us includes:",["no deposit","no mileage limit","availability 24h / 365 days","mostly one-year/two-year-old cars","and above all, preferential prices for everyone."],"We invite you to familiarize yourself with the details of our offer on our 24-hour hotline (123)-456-789"],
    cards: [{
        image:`${Choice}`,
        num:"20",
        head:"Car Types"
    },{
        image:`${Outlet}`,
        num:"85",
        head:"Rental Outlets"
    },{
        image:`${Repair}`,
        num:"75",
        head:"Repair Shops"
    }]
}