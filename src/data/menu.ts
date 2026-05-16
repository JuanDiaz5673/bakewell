export interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: string;
  popular?: boolean;
  signature?: boolean;
  image?: string;
}

// Category-level fallback images — used when an item has no specific image.
// Photos are KK template leftovers; replace with Bakewell photography pre-launch.
export const categoryImages: Record<string, string> = {
  Mains: '/menu/chicken-tikka.jpg',
  'Sides & Snacks': '/menu/patties.jpg',
  'Fried Rice': '/menu/roast-lamb-fried-rice.jpg',
  'Chow Mein': '/menu/chicken-biryani.jpg',
  'Curry & Roti': '/menu/chicken-curry.jpg',
  'Soups & Veg': '/menu/haleem.jpg',
  Bakery: '/menu/puri.jpg',
  Sweets: '/menu/halwa-puri.jpg',
  Drinks: '/menu/mango-lassi.jpg',
};

// Cassava pone — Bakewell signature bake. Photo from Bakewell's Yelp listing.
export const heroImage = '/bakewell-hero.jpg';

export const categories = [
  'All',
  'Mains',
  'Sides & Snacks',
  'Fried Rice',
  'Chow Mein',
  'Curry & Roti',
  'Soups & Veg',
  'Bakery',
  'Sweets',
  'Drinks',
] as const;

/**
 * Menu data mirrored from Bakewell's live Uber Eats listing
 * (https://www.ubereats.com/store/bakewell/UepXkhlfXk6O8kVx22Fqxg).
 * Names, prices, and descriptions match the delivery menu;
 * `signature` / `popular` flags + image assignments are local additions.
 */
export const menuItems: MenuItem[] = [
  // ────── Mains ──────
  { name: 'Fried Chicken', description: 'Homemade fried chicken — crisp, juicy, and Bakewell’s signature plate', price: 10.00, category: 'Mains', popular: true, signature: true, image: '/menu/chicken-tikka.jpg' },
  { name: 'BBQ Chicken', description: 'Tender chicken smothered in a rich BBQ sauce', price: 12.00, category: 'Mains', popular: true, image: '/menu/butter-chicken.jpg' },
  { name: 'Jerk Chicken', description: 'Spicy Caribbean-inspired chicken with a smoky flavor', price: 12.00, category: 'Mains', popular: true, image: '/menu/chicken-tikka.jpg' },
  { name: 'Chicken In The Rough', description: 'Tender chicken pieces with a savory seasoning', price: 10.00, category: 'Mains', image: '/menu/chicken-tikka.jpg' },
  { name: 'Jerk Lamb', description: 'Tender lamb with a Caribbean-inspired jerk seasoning', price: 14.00, category: 'Mains', image: '/menu/lamb-kabab.jpg' },
  { name: 'Pepper Shrimp', description: 'Succulent shrimp infused with a spicy kick of pepper', price: 15.00, category: 'Mains', image: '/menu/goat-karahi.jpg' },
  { name: 'Fish and Chips', description: 'Crispy fried fish served with golden fries', price: 10.00, category: 'Mains', image: '/menu/patties.jpg' },
  { name: 'Fried Fish and Plantains', description: 'Pan-fried fish paired with sweet fried plantains', price: 10.00, category: 'Mains', image: '/menu/patties.jpg' },
  { name: 'Fish and Bread', description: 'Fresh fish served with crusty bread', price: 4.00, category: 'Mains', image: '/menu/patties.jpg' },

  // ────── Sides & Snacks ──────
  { name: 'Chicken Patties', description: 'Flaky pastry filled with seasoned chicken', price: 1.75, category: 'Sides & Snacks', image: '/menu/chicken-samosa.jpg' },
  { name: 'Beef Patties', description: 'Flaky pastry filled with spiced ground beef', price: 1.75, category: 'Sides & Snacks', image: '/menu/patties.jpg' },
  { name: 'Egg Ball', description: 'Boiled egg wrapped in seasoned cassava and fried golden', price: 2.00, category: 'Sides & Snacks', image: '/menu/vegetable-samosa.jpg' },
  { name: '2 Piece Cassava Ball', description: 'Fried cassava dumplings — crisp outside, soft inside', price: 1.00, category: 'Sides & Snacks', image: '/menu/vegetable-samosa.jpg' },
  { name: 'Fish Cake', description: 'Pan-fried fish cake seasoned Bakewell-style', price: 2.00, category: 'Sides & Snacks', image: '/menu/patties.jpg' },
  { name: 'Phoularie', description: 'Fried split-pea dough balls — served with tamarind on request', price: 2.00, category: 'Sides & Snacks', image: '/menu/vegetable-samosa.jpg' },
  { name: 'Chicken Burger', description: 'Bakewell chicken burger', price: 4.00, category: 'Sides & Snacks', image: '/menu/chicken-samosa.jpg' },
  { name: 'French Fries', description: 'Crisp, golden fries — straight from the fryer', price: 3.50, category: 'Sides & Snacks', image: '/menu/patties.jpg' },
  { name: 'Plantain Chips', description: 'Thinly sliced plantains, crispy and flavorful', price: 4.00, category: 'Sides & Snacks', image: '/menu/patties.jpg' },
  { name: 'Fried Peanuts', description: 'Crunchy peanuts, perfect for snacking', price: 4.00, category: 'Sides & Snacks', image: '/menu/patties.jpg' },
  { name: 'Fried Channa', description: 'Chickpeas in a crispy fried coating', price: 4.00, category: 'Sides & Snacks', image: '/menu/patties.jpg' },

  // ────── Fried Rice ──────
  { name: 'Chicken Fried Rice', description: 'Wok-tossed rice with seasoned chicken — a Bakewell favorite', price: 11.50, category: 'Fried Rice', popular: true, signature: true, image: '/menu/chicken-biryani.jpg' },
  { name: 'Lamb Fried Rice', description: 'House specialty — tender roast lamb folded into smoky, savory fried rice', price: 14.00, category: 'Fried Rice', popular: true, signature: true, image: '/menu/roast-lamb-fried-rice.jpg' },
  { name: 'BBQ Chicken Fried Rice', description: 'BBQ chicken layered into fragrant fried rice', price: 12.50, category: 'Fried Rice', image: '/menu/chicken-biryani.jpg' },
  { name: 'Jerk Chicken Fried Rice', description: 'Fried rice with jerk-seasoned chicken and mixed vegetables', price: 12.50, category: 'Fried Rice', image: '/menu/chicken-biryani.jpg' },
  { name: 'Boneless Chicken Fried Rice', description: 'Boneless chicken pieces tossed through seasoned rice', price: 12.00, category: 'Fried Rice', image: '/menu/chicken-biryani.jpg' },
  { name: 'Beef Fried Rice', description: 'Stir-fried beef with fragrant rice and vegetables', price: 14.00, category: 'Fried Rice', image: '/menu/goat-biryani.jpg' },
  { name: 'Shrimp Fried Rice', description: 'Savory stir-fried rice with tender shrimp', price: 14.00, category: 'Fried Rice', image: '/menu/goat-biryani.jpg' },
  { name: 'Pepper Shrimp Fried Rice', description: 'Spicy pepper shrimp folded into wok-tossed rice', price: 14.00, category: 'Fried Rice', image: '/menu/goat-biryani.jpg' },
  { name: 'House Special Fried Rice', description: 'The kitchen’s house combination — chicken, shrimp, lamb, and vegetables', price: 15.00, category: 'Fried Rice', popular: true, image: '/menu/mamdani-biryani.jpg' },
  { name: 'Vegetable Fried Rice', description: 'Mixed vegetables cooked with rice', price: 10.00, category: 'Fried Rice', image: '/menu/chicken-biryani.jpg' },
  { name: 'Plain Fried Rice', description: 'Plain wok-fried rice — perfect alongside any main', price: 7.00, category: 'Fried Rice', image: '/menu/chicken-biryani.jpg' },

  // ────── Chow Mein ──────
  { name: 'Chicken Chow Mein', description: 'Stir-fried noodles with chicken, cabbage, and carrots', price: 12.00, category: 'Chow Mein', popular: true, image: '/menu/chicken-biryani.jpg' },
  { name: 'BBQ Chicken Chow Mein', description: 'Smoky BBQ chicken tossed with chow mein noodles', price: 13.00, category: 'Chow Mein', image: '/menu/chicken-biryani.jpg' },
  { name: 'Jerk Chicken Chow Mein', description: 'Jerk-seasoned chicken with stir-fried noodles', price: 13.00, category: 'Chow Mein', image: '/menu/chicken-biryani.jpg' },
  { name: 'Boneless Chow Mein', description: 'Stir-fried noodles with a savory blend of ingredients', price: 13.00, category: 'Chow Mein', image: '/menu/chicken-biryani.jpg' },
  { name: 'Vegetable Chow Mein', description: 'Stir-fried noodles with mixed vegetables', price: 10.00, category: 'Chow Mein', image: '/menu/chicken-biryani.jpg' },
  { name: 'Beef Chow Mein', description: 'Stir-fried beef with noodles and vegetables', price: 15.00, category: 'Chow Mein', image: '/menu/goat-biryani.jpg' },
  { name: 'Shrimp Chow Mein', description: 'Wok-tossed noodles with plump shrimp and crisp vegetables', price: 15.00, category: 'Chow Mein', image: '/menu/goat-biryani.jpg' },
  { name: 'Pepper Shrimp Chow Mein', description: 'Stir-fried shrimp and vegetables served over noodles', price: 15.00, category: 'Chow Mein', image: '/menu/goat-biryani.jpg' },
  { name: 'House Special Singapore Noodles', description: 'Stir-fried noodles with a blend of Asian flavors', price: 16.00, category: 'Chow Mein', image: '/menu/chicken-biryani.jpg' },

  // ────── Curry & Roti ──────
  { name: 'Chicken Curry and 2 Dhal Puri', description: 'Bone-in chicken curry served with two dhal puri', price: 12.00, category: 'Curry & Roti', popular: true, image: '/menu/chicken-curry.jpg' },
  { name: 'Mutton Curry and 2 Dhal Puri', description: 'Slow-cooked mutton curry served with two dhal puri', price: 14.00, category: 'Curry & Roti', image: '/menu/goat-karahi.jpg' },
  { name: 'Beef Curry and 2 Dhal Puri', description: 'Tender beef curry served with two dhal puri', price: 14.00, category: 'Curry & Roti', image: '/menu/goat-karahi.jpg' },
  { name: 'Dhal Puri', description: 'Soft flatbread filled with seasoned ground split peas', price: 1.50, category: 'Curry & Roti', image: '/menu/puri.jpg' },
  { name: 'Oil Roti', description: 'Layered, flaky Caribbean oil roti', price: 2.00, category: 'Curry & Roti', image: '/menu/puri.jpg' },

  // ────── Soups & Veg ──────
  { name: 'Chicken Noodle Soup', description: 'Hearty chicken broth with noodles and vegetables', price: 7.00, category: 'Soups & Veg', image: '/menu/haleem.jpg' },
  { name: 'Vegetables Noodle Soup', description: 'Hearty soup made with a variety of vegetables and noodles', price: 7.00, category: 'Soups & Veg', image: '/menu/haleem.jpg' },
  { name: 'Mixed Chinese Vegetables', description: 'Stir-fried medley of Chinese vegetables with a crisp-tender bite', price: 10.00, category: 'Soups & Veg', image: '/menu/chicken-curry.jpg' },
  { name: 'Steamed Broccoli', description: 'Fresh and healthy green broccoli steamed to perfection', price: 10.00, category: 'Soups & Veg', image: '/menu/chicken-curry.jpg' },

  // ────── Bakery ──────
  { name: 'Tennis Roll', description: 'Soft, slightly sweet Guyanese bread roll — a Bakewell signature, baked fresh daily', price: 3.00, category: 'Bakery', popular: true, signature: true, image: '/menu/puri.jpg' },
  { name: 'Plait Bread', description: 'Braided loaf of soft, milky white bread, freshly baked', price: 3.00, category: 'Bakery', popular: true, image: '/menu/puri.jpg' },
  { name: 'Sliced Bread', description: 'Sliced bread, ideal for sandwiches and toast', price: 4.00, category: 'Bakery', image: '/menu/puri.jpg' },
  { name: 'Sweet Bread', description: 'Soft, sweet bread perfect for any meal', price: 4.00, category: 'Bakery', image: '/menu/puri.jpg' },
  { name: 'Whole Wheat', description: 'Hearty whole wheat bread with a soft crumb and nutty flavor', price: 4.00, category: 'Bakery', image: '/menu/puri.jpg' },
  { name: 'Butter Loaf', description: 'Rich, buttery bread in a classic loaf shape', price: 4.00, category: 'Bakery', image: '/menu/puri.jpg' },
  { name: 'Fruit Bun', description: 'Sweet bread filled with fruit', price: 1.50, category: 'Bakery', image: '/menu/puri.jpg' },
  { name: 'Cherry Bun', description: 'Sweet cherry-filled pastry', price: 1.50, category: 'Bakery', image: '/menu/puri.jpg' },

  // ────── Sweets ──────
  { name: 'Salara', description: 'Sweet coconut-and-cherry rolled bread — bright red inside, soft on the outside', price: 3.00, category: 'Sweets', popular: true, signature: true, image: '/menu/halwa-puri.jpg' },
  { name: 'Coconut Drops', description: 'Sweet coconut treats', price: 3.00, category: 'Sweets', image: '/menu/halwa-puri.jpg' },
  { name: 'Homemade Sponge Cake', description: 'Light, airy vanilla sponge — perfect with tea', price: 3.00, category: 'Sweets', image: '/menu/halwa-puri.jpg' },
  { name: 'Homemade Fruit Cake', description: 'Rich Caribbean fruit cake studded with currants and raisins', price: 3.00, category: 'Sweets', image: '/menu/halwa-puri.jpg' },
  { name: 'Sal Sev', description: 'Crispy, crunchy savory-sweet noodle snack', price: 4.00, category: 'Sweets', image: '/menu/halwa-puri.jpg' },
  { name: 'Mittai', description: 'Crispy fried sugar-glazed dough — a classic Guyanese sweet', price: 4.00, category: 'Sweets', image: '/menu/halwa-puri.jpg' },
  { name: 'Kurma', description: 'Crispy, sugar-glazed fried dough sticks', price: 4.00, category: 'Sweets', image: '/menu/halwa-puri.jpg' },
  { name: 'Baked Fudge', description: 'Rich, sweet, and indulgent treat', price: 4.00, category: 'Sweets', image: '/menu/halwa-puri.jpg' },

  // ────── Drinks ──────
  { name: 'Homemade Mauby', description: 'Traditional Caribbean drink brewed with mauby bark and spices', price: 4.50, category: 'Drinks', popular: true, image: '/menu/mango-lassi.jpg' },
  { name: 'Homemade Sorrel', description: 'Classic Caribbean hibiscus drink with ginger and clove', price: 4.50, category: 'Drinks', popular: true, image: '/menu/mango-lassi.jpg' },
  { name: 'Homemade Peanut Punch', description: 'Creamy and refreshing peanut-flavored punch', price: 5.00, category: 'Drinks', image: '/menu/mango-lassi.jpg' },
  { name: 'Coconut Water', description: 'Fresh, hydrating coconut water', price: 5.00, category: 'Drinks', image: '/menu/mango-lassi.jpg' },
  { name: 'Guyana Sodas', description: 'Fizzy sodas from Guyana — Tomboy, I-Cee and West Indian flavors', price: 4.00, category: 'Drinks', image: '/menu/mango-lassi.jpg' },
];

export const popularItems = menuItems.filter(item => item.popular);
