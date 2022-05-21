const onboarding_screens = [
    {
        id: 1,
        backgroundImage: require("../assets/images/background_01.png"),
        //bannerImage: require("../assets/images/favourite_food.png"),
        title: "Project Order Taker.V1",
        description: "We got it all for you"
    },
    // {
    //     id: 2,
    //     backgroundImage: require("../assets/images/background_02.png"),
    //     //bannerImage: require("../assets/images/hot_delivery.png"),
    //     title: "How to Create Credit Account",
    //     description: ""
    // },
    // {
    //     id: 3,
    //     backgroundImage: require("../assets/images/background_01.png"),
    //     //bannerImage: require("../assets/images/great_food.png"),
    //     title: "How to create order",
    //     description: ""
    // }
]

const screens = {
    home: "Sales",
    account: "My Account",
    menu: "Menu",
}

const bottom_tabs = [
    {
        id: 0,
        label: screens.menu,
    },
    {
        id: 1,
        label: screens.home,
    },
    {
        id: 2,
        label: screens.account,
    },
]

const delivery_time = [
    {
        id: 1,
        label: "10 Mins",
    },
    {
        id: 2,
        label: "20 Mins"
    },
    {
        id: 3,
        label: "30 Mins"
    }
]

const ratings = [
    {
        id: 1,
        label: 1,
    },
    {
        id: 2,
        label: 2,
    },
    {
        id: 3,
        label: 3,
    },
    {
        id: 4,
        label: 4,
    },
    {
        id: 5,
        label: 5,
    }
]

const tags = [
    {
        id: 1,
        label: "Burger"
    },
    {
        id: 2,
        label: "Fast Food"
    },
    {
        id: 3,
        label: "Pizza"
    },
    {
        id: 4,
        label: "Asian"
    },
    {
        id: 5,
        label: "Dessert"
    },
    {
        id: 6,
        label: "Breakfast"
    },
    {
        id: 7,
        label: "Vegetable"
    },
    {
        id: 8,
        label: "Taccos"
    }
]

const homeMenu = [
    {
        id: 0,
        name: "TODAY SALES"
    },
    {
        id: 1,
        name: "RECENT SALES"
    },
    {
        id: 2,
        name: "DRAFT",
        isExpress: true,
        isStandard: true
    }
    
]

const orders = [
    {
        id: 0,
        customerName: "Benjamin Hemmings",
        orderId: 420230,
        deliveryBy: "Lillian Fisher",
        TotalAmmount: 1000,
        status: 0,
        serviceTimeType: "standard"  ,
        bookedAt: "Mon, 23 June 2021",
        serviceDuration: "24 hours."
    },
    {
        id: 1,
        customerName: "Jason Statham",
        orderId: 230420,
        deliveryBy: "Lillian Fisher",
        TotalAmmount: 1000,
        status: 0,
        serviceTimeType: "express" ,
        bookedAt: "Mon, 23 June 2021",
        serviceDuration: "3 hours."
    },
    {
        id: 2,
        customerName: "Jeff Ly",
        orderId: 420230,
        deliveryBy: "Lillian Fisher",
        TotalAmmount: 1000,
        status: 1,
        serviceTimeType: "express" ,
        bookedAt: "Mon, 23 June 2021",
        serviceDuration: "3 hours."
    },
    {
        id: 3,
        customerName: "Jackie Chua",
        orderId: 420230,
        deliveryBy: "Lillian Fisher",
        TotalAmmount: 1100,
        status: 1,
        serviceTimeType: "standard",
        bookedAt: "Mon, 23 June 2021",
        serviceDuration: "24 hours."
    },
    {
        id: 4,
        customerName: "Jeborin Santiago",
        orderId: 421000,
        deliveryBy: "Lil Fisher",
        TotalAmmount: 2000,
        status: 2,
        serviceTimeType: "express",
        bookedAt: "Mon, 23 June 2021",
        serviceDuration: "3 Hrs."
    },
]

export default {
    homeMenu,
    onboarding_screens,
    screens,
    bottom_tabs,
    delivery_time,
    ratings,
    tags,
    orders
}