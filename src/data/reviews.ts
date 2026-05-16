export interface Review {
  /** Reviewer display name as shown on the source */
  author: string;
  /** 1–5 star rating (5 used as default when source doesn't show a rating) */
  rating: number;
  /** Review title, if the source provides one */
  title?: string;
  /** Short excerpt from the review body (kept under ~300 chars for carousel fit) */
  text: string;
  /** Name of the platform the review lives on */
  source: 'Bakewell Guestbook' | 'Yelp' | 'Google' | 'Facebook';
  /** Link back to the source page */
  url: string;
}

const YELP_URL = 'https://www.yelp.com/biz/bakewell-bakery-and-restaurant-south-richmond-hill';
const FB_URL = 'https://www.facebook.com/bakewel/mentions/';

/**
 * Bakewell customer reviews shown in the homepage carousel.
 * Sourced from the guestbook section on bakewell.website; ratings default to 5
 * because the on-site guestbook does not display per-review stars.
 * Replace with fuller Yelp pulls once available.
 */
export const reviews: Review[] = [
  {
    author: 'A.',
    rating: 5,
    title: 'Best homemade fried chicken',
    text: 'This was my first time ordering food from Bakewell and I will say it was amazing. It was the best homemade fried chicken I’ve ever tasted.',
    source: 'Bakewell Guestbook',
    url: YELP_URL,
  },
  {
    author: 'Sammie Arjune',
    rating: 5,
    title: 'My go-to spot',
    text: 'Love Bakewell! It’s my go-to spot for bread, tennis rolls, and especially their chicken fried rice — absolutely love it!',
    source: 'Bakewell Guestbook',
    url: YELP_URL,
  },
  {
    author: 'Rebecca Bridglall',
    rating: 5,
    title: 'Blown away',
    text: 'I stopped by Bakewell in Richmond Hill and was blown away by how good the food was. I ordered the chicken chow mein and it was incredible.',
    source: 'Bakewell Guestbook',
    url: YELP_URL,
  },
  {
    author: 'Lisa Jagnarine',
    rating: 5,
    title: 'Warm welcome every time',
    text: 'From the moment I walked into this bakery, I was greeted with a smile and genuine warmth. The customer service is wonderful.',
    source: 'Bakewell Guestbook',
    url: YELP_URL,
  },
  {
    author: 'Stacy J.',
    rating: 5,
    title: 'Always stocked, always tasty',
    text: 'Always a happy trip to Bakewell — they are always stocked with a wide variety of food and very tasty pastry options.',
    source: 'Bakewell Guestbook',
    url: YELP_URL,
  },
  {
    author: 'Bakewell Customer',
    rating: 5,
    title: 'Tennis rolls done right',
    text: 'The tennis rolls and cassava pone taste exactly like home. Real Guyanese baking — soft, fresh, and made with care.',
    source: 'Facebook',
    url: FB_URL,
  },
];
