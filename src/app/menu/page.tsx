'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { menuItems, categories, categoryImages } from '@/data/menu';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    let items = menuItems;
    if (activeCategory !== 'All') {
      items = items.filter((i) => i.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q)
      );
    }
    return items;
  }, [activeCategory, searchQuery]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof menuItems>();
    filtered.forEach((item) => {
      const cat = item.category;
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(item);
    });
    return map;
  }, [filtered]);

  return (
    <>
      {/* Header */}
      <section className="bg-cream py-16 sm:py-24 grain relative overflow-hidden">
        {/* Botanical wash — palm frond top-left */}
        <svg
          aria-hidden="true"
          className="absolute -top-10 -left-10 w-72 h-72 text-maroon/[0.06] -rotate-12"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          <path d="M100 180 V20" />
          <path d="M100 160 Q60 150 30 130 M100 160 Q140 150 170 130" />
          <path d="M100 140 Q60 130 25 105 M100 140 Q140 130 175 105" />
          <path d="M100 120 Q60 110 28 80 M100 120 Q140 110 172 80" />
          <path d="M100 100 Q65 90 35 60 M100 100 Q135 90 165 60" />
          <path d="M100 80 Q70 70 45 40 M100 80 Q130 70 155 40" />
          <path d="M100 60 Q80 50 60 25 M100 60 Q120 50 140 25" />
        </svg>
        {/* Botanical wash — hibiscus bottom-right */}
        <svg
          aria-hidden="true"
          className="absolute -bottom-12 -right-12 w-80 h-80 text-crimson/[0.05] rotate-12"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          <circle cx="100" cy="100" r="6" />
          <path d="M100 100 Q70 60 80 20 Q100 50 100 100" />
          <path d="M100 100 Q130 60 120 20 Q100 50 100 100" />
          <path d="M100 100 Q60 100 30 70 Q70 90 100 100" />
          <path d="M100 100 Q140 100 170 70 Q130 90 100 100" />
          <path d="M100 100 Q90 140 110 180 Q100 150 100 100" />
          <path d="M100 100 V130" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="font-script text-2xl sm:text-3xl text-crimson mb-1">taste the best</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon-dark italic mb-2">
            Discover <span className="text-crimson not-italic">Menu</span>
          </h1>
          <div className="flex items-center justify-center gap-3 my-5 text-gold">
            <span className="h-px w-12 sm:w-20 bg-gold/60" />
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2c-1.5 3 1 5 1 7s-2.5 4-1 7c1.5-3-1-5-1-7s2.5-4 1-7z" />
              <circle cx="12" cy="12" r="1.5" />
            </svg>
            <span className="h-px w-12 sm:w-20 bg-gold/60" />
          </div>
          <p className="text-warm-gray max-w-xl mx-auto">
            From homemade fried chicken and vibrant fried rice to tennis rolls, cassava pone, and Caribbean pastries baked fresh every morning.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-gray-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search our menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-cream-dark rounded-lg text-charcoal placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all"
                aria-label="Search menu items"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 hide-scrollbar mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-crimson text-white shadow-md shadow-crimson/20'
                    : 'bg-white text-warm-gray border border-cream-dark hover:border-maroon/30 hover:text-maroon'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-warm-gray text-lg">No items found. Try a different search.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {Array.from(grouped.entries()).map(([category, items]) => (
                <div key={category}>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-maroon-dark whitespace-nowrap">
                      {category}
                    </h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
                    <span className="text-sm text-warm-gray-light">{items.length} items</span>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((item) => (
                      <div
                        key={item.name}
                        className="group flex gap-4 p-4 bg-white rounded-xl border border-cream-dark hover:shadow-md hover:border-maroon/10 transition-all"
                      >
                        {/* Item image */}
                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden relative bg-cream-dark">
                          <Image
                            src={item.image || categoryImages[item.category] || ''}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-charcoal group-hover:text-crimson transition-colors text-sm sm:text-base">
                              {item.name}
                            </h3>
                            <span className="font-bold text-crimson whitespace-nowrap text-sm sm:text-base">
                              ${item.price.toFixed(2)}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-warm-gray mt-1 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
                            {item.popular && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-gold-dark">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                Popular
                              </span>
                            )}
                            {item.signature && (
                              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-white bg-maroon-dark">
                                <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7L2 9.4h7.6z" />
                                </svg>
                                Signature
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
