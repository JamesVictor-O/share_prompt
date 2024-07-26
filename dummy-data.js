const DUMMY_EVENTS=[
    {
        id:"el",
        title: "Programming for everyone",
        discription: "It promotes the idea that programming skills are valuable and can empower people to solve problems, create innovations, and enhance their careers.",
        location: "Maple Street 25, 67890 Springfield",
        date:"2021-05-12",
        image:"image/coding.jpg",
        isFeatured: false
    },
    {
        id:"e2",
        title: "Networking for introverts",
        discription: "provides strategies and tips to help introverted individuals build meaningful professional connections in a comfortable and effective way. ",
        location: "Washinngton Street 25, 67890 MaryLand",
        date:"2021-05-12",
        image:"image/introverts.jpg",
        isFeatured: true
    },
    {
        id:"e3",
        title: "Networking for extroverts",
        discription: "provides strategies and tips to help introverted individuals build meaningful professional connections in a comfortable and effective way. ",
        location: "Gideion  Street 25, 67890 finLand",
        date:"2021-05-12",
        image:"image/networking.jpg",
        isFeatured: true
    },
]

export function getFeaturedEvents(){
    return DUMMY_EVENTS.filter((events)=> events.isFeatured)
}

export function getAllEvents(){
    return DUMMY_EVENTS
}

export function getFilteredEvents(datefilter){
     const {years, month}=datefilter;
}

export function getEventById(Id){
    return DUMMY_EVENTS.find((event)=> event.id=== Id)
}