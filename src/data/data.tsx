export type PopularSafariDataInterface = {
  id: number;
  title: string;
  short_description: string;
  full_description: string;
  category: string;
  classes?: string;
  pricing_pp?: string;
  currency?: string;
};

export const popularSafariData: PopularSafariDataInterface[] = [
  {
    id: 1,
    title: "Big 5 Safari",
    short_description:
      "The Big Five in Africa refers to five iconic large mammals.",
    full_description:
      "Experience the thrill of encountering Africa's iconic Big Five in their natural habitats. From the plains of the Serengeti to the Kruger National Park, every moment is filled with excitement.",
    category: "african-elephant",
    classes: "col-12 col-md-6",
    pricing_pp: "2,500",
    currency: "USD",
  },
  {
    id: 2,
    title: "Migration Safari",
    short_description: "An exclusive opportunity.",
    full_description:
      "Witness one of the greatest spectacles on Earth as millions of wildebeests, zebras, and gazelles embark on their annual migration across the Serengeti and Masai Mara ecosystems.",
    category: "wildebeasts",
    classes: "col-12 col-md-3",
    pricing_pp: "3,200",
    currency: "USD",
  },
  {
    id: 3,
    title: "Africa Luxury Safari",
    short_description: "Africa's finest accommodations.",
    full_description:
      "True luxury demands that your journey is tailored to your tastes, from residences in unique settings to personalized experiences.",
    category: "safari",
    classes: "col-12 col-md-3",
    pricing_pp: "5,500",
    currency: "USD",
  },
  {
    id: 4,
    title: "Africa Honeymoon",
    short_description: "Range from lavish tented camps to opulent lodges.",
    full_description:
      "From bucket list experiences to dreamy private islands, Africa was made for your unforgettable romance.",
    category: "safari-drive",
    classes: "col-12 col-md-3",
    pricing_pp: "15,540",
    currency: "USD",
  },
  {
    id: 5,
    title: "Adventure Travel",
    short_description: "Experiences across the continent's diverse landscapes.",
    full_description:
      "Experience the thrill of encountering Africa's iconic Big Five in their natural habitats. From the plains of the Serengeti to the Kruger National Park, every moment is filled with excitement.",
    category: "african-adventure",
    classes: "col-12 col-md-3",
    pricing_pp: "10,400",
    currency: "USD",
  },
  {
    id: 6,
    title: "Safari & Beach Holiday",
    short_description:
      "A safari and beach holiday offers the perfect blend of adventure and relaxation.",
    full_description:
      "Witness one of the greatest spectacles on Earth as millions of wildebeests, zebras, and gazelles embark on their annual migration across the Serengeti and Masai Mara ecosystems.",
    category: "safari-beach-holiday",
    classes: "col-12 col-md-6",
    pricing_pp: "5,600",
    currency: "USD",
  },
  {
    id: 7,
    title: "Gorilla Trekking",
    short_description: "These gentle giants are a captivating sight to behold.",
    full_description:
      "Trek through dense jungles to encounter majestic gorillas, a once-in-a-lifetime wildlife experience in their natural habitat.",
    category: "Gorilla forest",
    classes: "col-12 col-md-6",
    pricing_pp: "3,700",
    currency: "USD",
  },
  {
    id: 8,
    title: "All-Inclusive African Safaris",
    short_description: "",
    full_description:
      "Enjoy hassle-free adventures with accommodations, meals, and activities all included, immersing you fully in Africa’s natural wonders.",
    category: "african-safari",
    classes: "col-12 col-md-3",
    pricing_pp: "5,700",
    currency: "USD",
  },
  {
    id: 9,
    title: "Cape Town, Winelands & Kruger",
    short_description: "",
    full_description:
      "From bucket list experiences to dreamy private islands, Africa was made for your unforgettable romance.",
    category: "cape-town",
    classes: "col-12 col-md-3",
    pricing_pp: "4,300",
    currency: "USD",
  },
];
