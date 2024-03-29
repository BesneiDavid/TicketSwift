export const springUrl = "http://localhost:8083/api";

export const PAGE_SIZE = 2;

export const fakeData = [
  {
    eventId: 1,
    venue: {
      venueId: 1,
      location: "Aleea Stadionului 2, Cluj-Napoca",
      type: "Stadion",
      capacity: 1000,
      latitude: 46.7675,
      longitude: 23.5725,
    },
    eventTypeName: "Music",
    description: "Muzica Electronica si nu numai",
    name: "Untold",
    startDate: "2023-03-08",
    endDate: "2023-06-08",
    ticketCategories: [
      {
        ticketCategoryId: 1,
        description: "Standard",
        price: 800,
        access: "restricted",
        avaibleQuantity: 5000,
        discountPercentage: 5.0,
        sales: 760.0,
      },
      {
        ticketCategoryId: 5,
        description: "VIP",
        price: 1500,
        access: "full",
        avaibleQuantity: 700,
        discountPercentage: 0.0,
        sales: 1500.0,
      },
      {
        ticketCategoryId: 8,
        description: "Early Bird",
        price: 700,
        access: "full",
        avaibleQuantity: 5000,
        discountPercentage: 15.0,
        sales: 595.0,
      },
      {
        ticketCategoryId: 12,
        description: "Last Minute",
        price: 2000,
        access: "full",
        avaibleQuantity: 700,
        discountPercentage: 0.0,
        sales: 2000.0,
      },
      {
        ticketCategoryId: 15,
        description: "Family",
        price: 2000,
        access: "full",
        avaibleQuantity: 5000,
        discountPercentage: 5.0,
        sales: 1900.0,
      },
    ],
    urlImage: "https://viacluj.tv/wp-content/uploads/2022/08/untold-3.jpg",
  },
  {
    eventId: 2,
    venue: {
      venueId: 1,
      location: "Aleea Stadionului 2, Cluj-Napoca",
      type: "Stadion",
      capacity: 1000,
      latitude: 46.7675,
      longitude: 23.5725,
    },
    eventTypeName: "Music",
    description: "Muzica Electronica si nu numai",
    name: "Electric Castle",
    startDate: "1894-06-30",
    endDate: "1894-07-04",
    ticketCategories: [
      {
        ticketCategoryId: 2,
        description: "Standard",
        price: 700,
        access: "restricted",
        avaibleQuantity: 1000,
        discountPercentage: 0.0,
        sales: 700.0,
      },
      {
        ticketCategoryId: 6,
        description: "VIP",
        price: 1200,
        access: "full",
        avaibleQuantity: 500,
        discountPercentage: 7.0,
        sales: 1116.0,
      },
      {
        ticketCategoryId: 9,
        description: "Early Bird",
        price: 500,
        access: "full",
        avaibleQuantity: 1000,
        discountPercentage: 20.0,
        sales: 400.0,
      },
      {
        ticketCategoryId: 13,
        description: "Last Minute",
        price: 1500,
        access: "full",
        avaibleQuantity: 500,
        discountPercentage: 0.0,
        sales: 1500.0,
      },
      {
        ticketCategoryId: 16,
        description: "Family",
        price: 1500,
        access: "restricted",
        avaibleQuantity: 1000,
        discountPercentage: 0.0,
        sales: 1500.0,
      },
    ],
    urlImage:
      "https://www.interregeurope.eu/sites/default/files/styles/banner_image/public/good_practices/good_practice__5293__1620374651.png?itok=tPYd4yGe",
  },
  {
    eventId: 3,
    venue: {
      venueId: 2,
      location: "Bontida Castle, Cluj-Napoca",
      type: "Castle",
      capacity: 4000,
      latitude: 46.908861,
      longitude: 23.808139,
    },
    eventTypeName: "Sport",
    description: "Fotbal",
    name: "Meci de fotbal",
    startDate: "1894-06-30",
    endDate: "1894-06-30",
    ticketCategories: [
      {
        ticketCategoryId: 3,
        description: "Standard",
        price: 300,
        access: "restricted",
        avaibleQuantity: 200,
        discountPercentage: 22.0,
        sales: 234.0,
      },
      {
        ticketCategoryId: 7,
        description: "VIP",
        price: 600,
        access: "full",
        avaibleQuantity: 300,
        discountPercentage: 0.0,
        sales: 600.0,
      },
      {
        ticketCategoryId: 10,
        description: "Early Bird",
        price: 150,
        access: "restricted",
        avaibleQuantity: 200,
        discountPercentage: 10.0,
        sales: 135.0,
      },
      {
        ticketCategoryId: 14,
        description: "Last Minute",
        price: 1000,
        access: "restricted",
        avaibleQuantity: 300,
        discountPercentage: 0.0,
        sales: 1000.0,
      },
      {
        ticketCategoryId: 17,
        description: "Family",
        price: 1000,
        access: "full",
        avaibleQuantity: 200,
        discountPercentage: 22.0,
        sales: 780.0,
      },
    ],
    urlImage:
      "https://mediacdn.libertatea.ro/unsafe/960x539/smart/filters:format(webp):contrast(8):quality(75)/https://static4.libertatea.ro/wp-content/uploads/2022/12/shutterstock2201175331.jpg",
  },
  {
    eventId: 4,
    venue: {
      venueId: 3,
      location: "Central Park, Cluj-Napoca",
      type: "Park",
      capacity: 3000,
      latitude: 46.770194,
      longitude: 23.578278,
    },
    eventTypeName: "Gastronomy",
    description: "Festival de vin",
    name: "Wine Festival",
    startDate: "1894-06-18",
    endDate: "1894-06-21",
    ticketCategories: [
      {
        ticketCategoryId: 4,
        description: "Standard",
        price: 70,
        access: "restricted",
        avaibleQuantity: 400,
        discountPercentage: 10.0,
        sales: 63.0,
      },
      {
        ticketCategoryId: 11,
        description: "Early Bird",
        price: 50,
        access: "restricted",
        avaibleQuantity: 400,
        discountPercentage: 8.0,
        sales: 46.0,
      },
      {
        ticketCategoryId: 18,
        description: "Family",
        price: 500,
        access: "restricted",
        avaibleQuantity: 400,
        discountPercentage: 10.0,
        sales: 450.0,
      },
    ],
    urlImage:
      "https://vinul.ro/wp-content/uploads/2023/07/COVER_EVENT_WINEFEST_2023-752x440.png",
  },
  {
    eventId: 5,
    venue: {
      venueId: 5,
      location: "Sala Polivalenta BT Arena, Cluj-Napoca",
      type: "Stadion",
      capacity: 10000,
      latitude: 46.7675,
      longitude: 23.5725,
    },
    eventTypeName: "Music",
    description: "Concert",
    name: "Concert Aniversar de Craciun Stefan Banica",
    startDate: "2023-12-16",
    endDate: "2023-12-17",
    ticketCategories: [],
    urlImage:
      "https://static.iabilet.ro/img/auto_resized/db/event/01/52/40/00000236852-f35b-800x800-n-426db434.jpg",
  },
  {
    eventId: 6,
    venue: {
      venueId: 1,
      location: "Aleea Stadionului 2, Cluj-Napoca",
      type: "Stadion",
      capacity: 1000,
      latitude: 46.7675,
      longitude: 23.5725,
    },
    eventTypeName: "Dance",
    description: "The ultimate celebration of independence and good vibes",
    name: "F**k Me I`m Single",
    startDate: "2023-12-14",
    endDate: "2023-12-15",
    ticketCategories: [],
    urlImage:
      "https://static.iabilet.ro/img/auto_resized/db/event/01/69/40/00000247999-1378-800x800-n-cab429e2.jpg",
  },
  {
    eventId: 7,
    venue: {
      venueId: 6,
      location: "Sala Palatului, Bucuresti",
      type: "Sala de concerte",
      capacity: 20000,
      latitude: 44.4389,
      longitude: 26.0946,
    },
    eventTypeName: "Music",
    description:
      "Craciun Vienez cu Johann Strauss Ensemble si Russell McGregor",
    name: "Craciun Vienez",
    startDate: "2023-12-22",
    endDate: "2023-12-23",
    ticketCategories: [],
    urlImage:
      "https://static.iabilet.ro/img/auto_resized/db/event/01/3e/b0/00000205989-9bc3-800x800-n-8cfdd10a.jpg",
  },
  {
    eventId: 8,
    venue: {
      venueId: 7,
      location: "Sala Polivalenta, Bucuresti",
      type: "Stadion",
      capacity: 6000,
      latitude: 44.4053,
      longitude: 26.11,
    },
    eventTypeName: "Sport",
    description:
      "EHF Champions League, Runda9: CSM Bucuresti vs WHC Buducnost BEMAX",
    name: "EHF Champions League",
    startDate: "2024-01-07",
    endDate: "2024-01-08",
    ticketCategories: [],
    urlImage:
      "https://static.iabilet.ro/img/auto_resized/db/event/01/69/13/00000247840-a414-800x800-n-d091e0a2.png",
  },
  {
    eventId: 9,
    venue: {
      venueId: 8,
      location: "Casa de Cultura a Sindicatelor, Satu Mare",
      type: "Casa de cultura",
      capacity: 700,
      latitude: 47.79,
      longitude: 22.89,
    },
    eventTypeName: "Comedy",
    description: "Stand-Up Comedy cu Bordea, Cortea si Teodora Nedelcu",
    name: "A Doua Tinerete",
    startDate: "2023-12-14",
    endDate: "2023-12-15",
    ticketCategories: [],
    urlImage:
      "https://static.iabilet.ro/img/auto_resized/db/event/01/61/b4/00000241224-556f-800x800-n-1570c223.jpg",
  },
  {
    eventId: 10,
    venue: {
      venueId: 9,
      location: "Glaspalast Sindelfingen, Stuttgart",
      type: "Stadion",
      capacity: 12000,
      latitude: 48.7158,
      longitude: 8.9836,
    },
    eventTypeName: "Music",
    description: "Stuttgart: Concert Andra Traditional 2",
    name: "Concert Andra",
    startDate: "2024-04-06",
    endDate: "2024-04-07",
    ticketCategories: [],
    urlImage:
      "https://static.iabilet.ro/img/auto_resized/db/event/01/57/56/00000227946-ab41-800x800-n-a15e2aac.png",
  },
  {
    eventId: 11,
    venue: {
      venueId: 10,
      location: "AI GustoRestaurante, Zaragoza",
      type: "Restaurant",
      capacity: 2000,
      latitude: 41.65,
      longitude: -0.8833,
    },
    eventTypeName: "Comedy",
    description: "Zaragoza: Stand up comedy cu Doru iVanov",
    name: "One Man Show",
    startDate: "2024-02-17",
    endDate: "2024-02-18",
    ticketCategories: [],
    urlImage:
      "https://static.iabilet.ro/img/auto_resized/db/event/01/69/3d/00000247987-5e7b-800x800-n-ebe575dd.png",
  },
];

export const locations = [
  {
    venueId: 1,
    location: "Aleea Stadionului 2, Cluj-Napoca",
    type: "Stadion",
    capacity: 1000,
    latitude: 46.7675,
    longitude: 23.5725,
  },
  {
    venueId: 2,
    location: "Bontida Castle, Cluj-Napoca",
    type: "Castle",
    capacity: 4000,
    latitude: 46.908861,
    longitude: 23.808139,
  },
  {
    venueId: 3,
    location: "Central Park, Cluj-Napoca",
    type: "Park",
    capacity: 3000,
    latitude: 46.770194,
    longitude: 23.578278,
  },
  {
    venueId: 4,
    location: "Sala Polivalenta BT Arena, Cluj-Napoca",
    type: "Stadion",
    capacity: 10000,
    latitude: 46.7675,
    longitude: 23.5725,
  },
];

export const orders = [
  {
    eventName: "Untold",
    urlImage: "https://viacluj.tv/wp-content/uploads/2022/08/untold-3.jpg",
    eventTypeName: "Music",
    numberOfTickets: 2,
    orderedAt: "1894-06-16T00:00:00",
    totalPrice: 1600,
    ticketCategoryDescription: "Standard",
  },
  {
    eventName: "Electric Castle",
    urlImage:
      "https://static.iabilet.ro/img/auto_resized/db/event/01/57/3a/00000248170-50af-506x716-bmm-2edee169.jpg",
    eventTypeName: "Music",
    numberOfTickets: 2,
    orderedAt: "1894-07-05T00:00:00",
    totalPrice: 3000,
    ticketCategoryDescription: "Early Bird",
  },
  {
    eventName: "Meci de fotbal",
    urlImage:
      "https://mediacdn.libertatea.ro/unsafe/960x539/smart/filters:format(webp):contrast(8):quality(75)/https://static4.libertatea.ro/wp-content/uploads/2022/12/shutterstock2201175331.jpg",
    eventTypeName: "Sport",
    numberOfTickets: 3,
    orderedAt: "1894-07-07T00:00:00",
    totalPrice: 2100,
    ticketCategoryDescription: "Standard",
  },
  {
    eventName: "Untold",
    urlImage: "https://viacluj.tv/wp-content/uploads/2022/08/untold-3.jpg",
    eventTypeName: "Music",
    numberOfTickets: 2,
    orderedAt: "1894-07-07T00:00:00",
    totalPrice: 1400,
    ticketCategoryDescription: "VIP",
  },
  {
    eventName: "Wine Festival",
    urlImage:
      "https://vinul.ro/wp-content/uploads/2023/07/COVER_EVENT_WINEFEST_2023-752x440.png",
    eventTypeName: "Gastronomy",
    numberOfTickets: 2,
    orderedAt: "1894-07-07T00:00:00",
    totalPrice: 2400,
    ticketCategoryDescription: "Early Bird",
  },
];
