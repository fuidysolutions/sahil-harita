// OTOMATİK ÜRETİLDİ — kaynak: docs/research/ALGE-QR-Dokuman-1-Mekan-Detay.md
// Yeniden üretmek için: node scripts/build-venues-from-research.mjs
// "Bilinmiyor" / "(demo önerisi)" / "teyit edilmeli" ifadeleri araştırma dokümanından
// bilinçli olarak korunmuştur (Sprint 1 kuralı).
export const venues = [
  {
    "id": "mado",
    "order": 1,
    "name": "Mado",
    "normalizedName": "mado",
    "category": "Kafe & Tatlı",
    "subcategory": "Dondurma / Kahvaltı",
    "concept": "Geleneksel Türk tatlı-kahvaltı zinciri",
    "priceLevel": "Orta-Üst",
    "zoneId": "zone-01-west-start",
    "focusType": "kafe",
    "mapFocusPoint": {
      "x": 0,
      "y": 0.5
    },
    "card": {
      "short": "Maraş dondurması ve geleneksel tatlının adresi.",
      "detail": "Keçi sütlü Maraş dondurması, künefe ve serpme kahvaltı sunar. Deniz kenarında gün boyu oturulabilecek geniş bir mekan.",
      "features": [
        "Dondurma",
        "Kahvaltı",
        "Tatlı"
      ],
      "featuredProduct": "Kesme Maraş dondurması",
      "campaign": "Serpme kahvaltıda çay sınırsız",
      "promo": "Maraş dondurması burada, denizin yanında."
    },
    "menu": {
      "categories": [
        "Dondurma",
        "tatlılar",
        "kahvaltı",
        "ana yemek",
        "kahveler"
      ],
      "topItems": [
        "kesme dondurma",
        "künefe",
        "serpme kahvaltı",
        "baklava",
        "Türk kahvesi"
      ],
      "sections": [
        {
          "id": "mado-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "mado-item-1",
              "name": "kesme dondurma",
              "keywords": [
                "dondurma"
              ]
            },
            {
              "id": "mado-item-2",
              "name": "künefe",
              "keywords": [
                "künefe"
              ]
            },
            {
              "id": "mado-item-3",
              "name": "serpme kahvaltı",
              "keywords": [
                "kahvaltı"
              ]
            },
            {
              "id": "mado-item-4",
              "name": "baklava",
              "keywords": [
                "baklava"
              ]
            },
            {
              "id": "mado-item-5",
              "name": "Türk kahvesi",
              "keywords": [
                "türk kahvesi"
              ]
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "mado",
        "dondurma",
        "maraş dondurması",
        "künefe",
        "kahvaltı",
        "tatlı",
        "baklava",
        "türk kahvesi"
      ],
      "filterTags": [
        "tatlı",
        "kahvaltı",
        "dondurma",
        "aile"
      ],
      "whyChoose": "Garantili klasik; tatlı ve kahvaltı bir arada."
    },
    "directions": {
      "query": "Mado Beach Park Konyaaltı"
    },
    "digital": {
      "website": "mado.com.tr",
      "instagram": "@madoturkiye",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "irish-pub",
    "order": 2,
    "name": "Irish Pub",
    "normalizedName": "irish pub",
    "category": "Bar / Pub",
    "subcategory": "İçki & canlı müzik",
    "concept": "İrlanda tarzı pub (olası marka: The James Joyce — not: yazım teyit edilmeli)",
    "priceLevel": "Orta-Üst",
    "zoneId": "zone-01-west-start",
    "focusType": "mekan",
    "mapFocusPoint": {
      "x": 0.0217,
      "y": 0.5
    },
    "card": {
      "short": "Beach Park'ın canlı müzikli İrlanda pub'ı.",
      "detail": "Geniş bira seçkisi ve pub atıştırmalıkları sunar. Akşamları canlı müzik ve maç yayını ile hareketli.",
      "features": [
        "Canlı müzik",
        "Bira çeşitleri",
        "Maç yayını"
      ],
      "featuredProduct": "Fıçı bira seçkisi",
      "campaign": "Happy hour 17:00–19:00 (demo önerisi)",
      "promo": "Gün batımında soğuk bira, canlı müzik."
    },
    "menu": {
      "categories": [
        "Biralar",
        "kokteyller",
        "pub atıştırmalıkları",
        "burgerler"
      ],
      "topItems": [
        "fıçı bira",
        "fish & chips",
        "kokteyl",
        "burger",
        "çıtır tavuk"
      ],
      "sections": [
        {
          "id": "irish-pub-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "irish-pub-item-1",
              "name": "fıçı bira",
              "keywords": [
                "bira"
              ]
            },
            {
              "id": "irish-pub-item-2",
              "name": "fish & chips",
              "keywords": [
                "fish and chips"
              ]
            },
            {
              "id": "irish-pub-item-3",
              "name": "kokteyl",
              "keywords": [
                "kokteyl"
              ]
            },
            {
              "id": "irish-pub-item-4",
              "name": "burger",
              "keywords": []
            },
            {
              "id": "irish-pub-item-5",
              "name": "çıtır tavuk",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "irish pub",
        "bira",
        "pub",
        "kokteyl",
        "gece hayatı",
        "canlı müzik",
        "fish and chips"
      ],
      "filterTags": [
        "bar",
        "gece",
        "canlı müzik"
      ],
      "whyChoose": "Akşam eğlencesi ve içki için bölgedeki ana adres."
    },
    "directions": {
      "query": "Irish Pub Beach Park Konyaaltı"
    },
    "digital": {
      "website": "Bilinmiyor",
      "instagram": "Bilinmiyor",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": true
    },
    "notes": "Konsept notu: olası marka: The James Joyce — not: yazım teyit edilmeli."
  },
  {
    "id": "the-beaver-cafe",
    "order": 3,
    "name": "The Beaver Cafe",
    "normalizedName": "the beaver cafe",
    "category": "Kafe",
    "subcategory": "Butik kahve",
    "concept": "Deniz manzaralı butik kahve dükkanı",
    "priceLevel": "Orta",
    "zoneId": "zone-01-west-start",
    "focusType": "kafe",
    "mapFocusPoint": {
      "x": 0.0435,
      "y": 0.5
    },
    "card": {
      "short": "Deniz manzaralı samimi butik kahveci.",
      "detail": "Üçüncü dalga kahve ve ev yapımı tatlılar sunar. Sahil yürüyüşünde mola için ideal.",
      "features": [
        "Specialty kahve",
        "Manzara",
        "Tatlı"
      ],
      "featuredProduct": "Flat white",
      "campaign": "2. kahve %50 (demo önerisi)",
      "promo": "Deniz manzarasına karşı iyi kahve."
    },
    "menu": {
      "categories": [
        "Espresso bazlı kahveler",
        "filtre kahve",
        "soğuk içecekler",
        "tatlılar"
      ],
      "topItems": [
        "flat white",
        "filtre kahve",
        "latte",
        "cheesecake",
        "limonata"
      ],
      "sections": [
        {
          "id": "the-beaver-cafe-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "the-beaver-cafe-item-1",
              "name": "flat white",
              "keywords": []
            },
            {
              "id": "the-beaver-cafe-item-2",
              "name": "filtre kahve",
              "keywords": [
                "kahve",
                "filtre kahve"
              ]
            },
            {
              "id": "the-beaver-cafe-item-3",
              "name": "latte",
              "keywords": [
                "latte"
              ]
            },
            {
              "id": "the-beaver-cafe-item-4",
              "name": "cheesecake",
              "keywords": [
                "cheesecake"
              ]
            },
            {
              "id": "the-beaver-cafe-item-5",
              "name": "limonata",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "beaver",
        "kahve",
        "filtre kahve",
        "latte",
        "tatlı",
        "cheesecake",
        "soğuk kahve"
      ],
      "filterTags": [
        "kafe",
        "kahve",
        "manzara"
      ],
      "whyChoose": "Kalabalık zincirlerden kaçıp sakin köşede iyi kahve."
    },
    "directions": {
      "query": "The Beaver Cafe Konyaaltı Antalya"
    },
    "digital": {
      "website": "Bilinmiyor",
      "instagram": "Bilinmiyor",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "big-bubble-tea",
    "order": 4,
    "name": "Big Bubble Tea",
    "normalizedName": "big bubble tea",
    "category": "İçecek",
    "subcategory": "Bubble tea",
    "concept": "Bubble tea & soğuk içecek zinciri (Elitel Group)",
    "priceLevel": "Orta",
    "zoneId": "zone-01-west-start",
    "focusType": "kafe",
    "mapFocusPoint": {
      "x": 0.0652,
      "y": 0.5
    },
    "card": {
      "short": "Renkli bubble tea ve buzlu içecek durağı.",
      "detail": "Tapyokalı sütlü çaylar ve meyveli soğuk içecekler sunar. Plaj dönüşü serinlemek için birebir.",
      "features": [
        "Bubble tea",
        "Soğuk içecek",
        "Paket servis"
      ],
      "featuredProduct": "Taro bubble tea",
      "campaign": "İkincisi yarı fiyat (demo önerisi)",
      "promo": "Tapyoka molası: serin, tatlı, renkli."
    },
    "menu": {
      "categories": [
        "Sütlü bubble tea",
        "meyveli çaylar",
        "smoothie",
        "milkshake"
      ],
      "topItems": [
        "taro bubble tea",
        "mango çayı",
        "çilekli smoothie",
        "matcha latte",
        "milkshake"
      ],
      "sections": [
        {
          "id": "big-bubble-tea-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "big-bubble-tea-item-1",
              "name": "taro bubble tea",
              "keywords": [
                "bubble tea"
              ]
            },
            {
              "id": "big-bubble-tea-item-2",
              "name": "mango çayı",
              "keywords": [
                "çay"
              ]
            },
            {
              "id": "big-bubble-tea-item-3",
              "name": "çilekli smoothie",
              "keywords": [
                "smoothie"
              ]
            },
            {
              "id": "big-bubble-tea-item-4",
              "name": "matcha latte",
              "keywords": []
            },
            {
              "id": "big-bubble-tea-item-5",
              "name": "milkshake",
              "keywords": [
                "milkshake"
              ]
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "bubble tea",
        "big bubble",
        "soğuk içecek",
        "smoothie",
        "milkshake",
        "çay"
      ],
      "filterTags": [
        "içecek",
        "tatlı",
        "gençlik"
      ],
      "whyChoose": "Bölgedeki tek dedike bubble tea noktası."
    },
    "directions": {
      "query": "Big Bubble Tea Beach Park Antalya"
    },
    "digital": {
      "website": "Bilinmiyor",
      "instagram": "@bigbubbletea (teyit edilmeli)",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": true
    },
    "notes": ""
  },
  {
    "id": "magnolia-shop-coffee",
    "order": 5,
    "name": "Magnolia Shop Coffee",
    "normalizedName": "magnolia shop coffee",
    "category": "Kafe",
    "subcategory": "Butik kahve & dükkan",
    "concept": "Kahve + küçük tasarım/hediyelik dükkan karması (doğrulanamadı, konsept varsayımı)",
    "priceLevel": "Orta",
    "zoneId": "zone-01-west-start",
    "focusType": "kafe",
    "mapFocusPoint": {
      "x": 0.087,
      "y": 0.5
    },
    "card": {
      "short": "Kahve ve küçük hediyelik köşesi bir arada.",
      "detail": "Specialty kahvenin yanında hediyelik ve tasarım ürünleri bulunur. Sahil keşfinde kısa mola noktası.",
      "features": [
        "Kahve",
        "Hediyelik",
        "Tatlı"
      ],
      "featuredProduct": "Iced latte",
      "campaign": "Kahve + kurabiye menüsü (demo önerisi)",
      "promo": "Kahveni al, vitrine göz at."
    },
    "menu": {
      "categories": [
        "Kahveler",
        "soğuk içecekler",
        "atıştırmalık"
      ],
      "topItems": [
        "latte",
        "iced americano",
        "filtre kahve",
        "kurabiye",
        "brownie"
      ],
      "sections": [
        {
          "id": "magnolia-shop-coffee-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "magnolia-shop-coffee-item-1",
              "name": "latte",
              "keywords": [
                "latte"
              ]
            },
            {
              "id": "magnolia-shop-coffee-item-2",
              "name": "iced americano",
              "keywords": [
                "iced kahve"
              ]
            },
            {
              "id": "magnolia-shop-coffee-item-3",
              "name": "filtre kahve",
              "keywords": [
                "kahve"
              ]
            },
            {
              "id": "magnolia-shop-coffee-item-4",
              "name": "kurabiye",
              "keywords": []
            },
            {
              "id": "magnolia-shop-coffee-item-5",
              "name": "brownie",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "magnolia",
        "kahve",
        "latte",
        "hediyelik",
        "iced kahve",
        "tatlı"
      ],
      "filterTags": [
        "kafe",
        "kahve",
        "alışveriş"
      ],
      "whyChoose": "Kahve molası + küçük alışveriş tek noktada."
    },
    "directions": {
      "query": "Magnolia Coffee Beach Park Antalya"
    },
    "digital": {
      "website": "Bilinmiyor",
      "instagram": "Bilinmiyor",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": true,
      "needsVerification": true
    },
    "notes": "Doküman işareti: Demo önerisi. Konsept notu: doğrulanamadı, konsept varsayımı."
  },
  {
    "id": "danilos-pizza",
    "order": 6,
    "name": "Danilos Pizza",
    "normalizedName": "danilos pizza",
    "category": "Restoran",
    "subcategory": "İtalyan / pizza",
    "concept": "İtalyan pizzeria (Beach Park, Sahilpark Yaşam Merkezi no:7)",
    "priceLevel": "Orta-Üst",
    "zoneId": "zone-01-west-start",
    "focusType": "restoran",
    "mapFocusPoint": {
      "x": 0.1087,
      "y": 0.5
    },
    "card": {
      "short": "Beach Park'ın İtalyan pizzacısı.",
      "detail": "İnce hamur İtalyan pizzaları ve makarna çeşitleri sunar. Deniz kenarında akşam yemeği için popüler.",
      "features": [
        "Pizza",
        "Makarna",
        "Aile dostu"
      ],
      "featuredProduct": "Margherita pizza",
      "campaign": "Öğlen pizza + içecek menüsü (demo önerisi)",
      "promo": "İtalyan fırınından denize sıfır pizza."
    },
    "menu": {
      "categories": [
        "Pizzalar",
        "makarnalar",
        "salatalar",
        "tatlılar"
      ],
      "topItems": [
        "margherita",
        "quattro formaggi",
        "penne arrabiata",
        "sezar salata",
        "tiramisu"
      ],
      "sections": [
        {
          "id": "danilos-pizza-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "danilos-pizza-item-1",
              "name": "margherita",
              "keywords": []
            },
            {
              "id": "danilos-pizza-item-2",
              "name": "quattro formaggi",
              "keywords": []
            },
            {
              "id": "danilos-pizza-item-3",
              "name": "penne arrabiata",
              "keywords": []
            },
            {
              "id": "danilos-pizza-item-4",
              "name": "sezar salata",
              "keywords": [
                "salata"
              ]
            },
            {
              "id": "danilos-pizza-item-5",
              "name": "tiramisu",
              "keywords": [
                "tiramisu"
              ]
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "danilos",
        "pizza",
        "makarna",
        "italyan",
        "salata",
        "tiramisu"
      ],
      "filterTags": [
        "restoran",
        "pizza",
        "akşam yemeği"
      ],
      "whyChoose": "Bölgedeki en bilinen gerçek pizzeria."
    },
    "directions": {
      "query": "Danilos Pizza Sahilpark Konyaaltı"
    },
    "digital": {
      "website": "Bilinmiyor",
      "instagram": "@danilospizza (teyit edilmeli)",
      "phone": "0242 504 73 73",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": true
    },
    "notes": ""
  },
  {
    "id": "dospresso",
    "order": 7,
    "name": "Dospresso",
    "normalizedName": "dospresso",
    "category": "Kafe",
    "subcategory": "Kahve zinciri",
    "concept": "Antalya kökenli kahve zinciri (2011)",
    "priceLevel": "Orta",
    "zoneId": "zone-01-west-start",
    "focusType": "kafe",
    "mapFocusPoint": {
      "x": 0.1304,
      "y": 0.5
    },
    "card": {
      "short": "Antalya'nın kendi kahve zinciri.",
      "detail": "Espresso bazlı içecekler ve dondurmalı soğuk kahveler sunar. Hızlı servis, paket dostu.",
      "features": [
        "Kahve",
        "Soğuk içecek",
        "Paket servis"
      ],
      "featuredProduct": "Iced caramel latte",
      "campaign": "Mobil uygulamaya özel 10. kahve hediye (demo önerisi)",
      "promo": "Antalya'nın kahvesi: Dospresso."
    },
    "menu": {
      "categories": [
        "Sıcak kahveler",
        "soğuk kahveler",
        "frozen",
        "atıştırmalık"
      ],
      "topItems": [
        "iced latte",
        "caramel macchiato",
        "frozen",
        "americano",
        "cookie"
      ],
      "sections": [
        {
          "id": "dospresso-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "dospresso-item-1",
              "name": "iced latte",
              "keywords": [
                "iced latte"
              ]
            },
            {
              "id": "dospresso-item-2",
              "name": "caramel macchiato",
              "keywords": []
            },
            {
              "id": "dospresso-item-3",
              "name": "frozen",
              "keywords": [
                "frozen"
              ]
            },
            {
              "id": "dospresso-item-4",
              "name": "americano",
              "keywords": [
                "americano"
              ]
            },
            {
              "id": "dospresso-item-5",
              "name": "cookie",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "dospresso",
        "kahve",
        "iced latte",
        "frozen",
        "americano",
        "soğuk kahve"
      ],
      "filterTags": [
        "kafe",
        "kahve",
        "hızlı"
      ],
      "whyChoose": "Yerel zincir, hızlı ve uygun kahve."
    },
    "directions": {
      "query": "Dospresso Beach Park Antalya"
    },
    "digital": {
      "website": "dospresso.com",
      "instagram": "@dospresso",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "roberts-coffee",
    "order": 8,
    "name": "Robert's",
    "normalizedName": "roberts",
    "category": "Kafe",
    "subcategory": "Kahve & gelato",
    "concept": "Fin kökenli kahve zinciri (1992 Helsinki; Türkiye'de 2006'dan beri)",
    "priceLevel": "Orta-Üst",
    "zoneId": "zone-01-west-start",
    "focusType": "kafe",
    "mapFocusPoint": {
      "x": 0.1522,
      "y": 0.5
    },
    "card": {
      "short": "İskandinav kahve kültürü + el yapımı gelato.",
      "detail": "Fin kökenli zincir; kahvenin yanında günlük üretim gelato sunar. Deniz kenarında dondurma-kahve ikilisi için ideal.",
      "features": [
        "Kahve",
        "Gelato",
        "Tatlı"
      ],
      "featuredProduct": "El yapımı gelato",
      "campaign": "Kahve + gelato menüsü (demo önerisi)",
      "promo": "Helsinki'den Konyaaltı'na: kahve ve gelato."
    },
    "menu": {
      "categories": [
        "Kahveler",
        "gelato",
        "tatlılar",
        "sandviçler"
      ],
      "topItems": [
        "gelato",
        "latte",
        "filtre kahve",
        "cheesecake",
        "panini"
      ],
      "sections": [
        {
          "id": "roberts-coffee-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "roberts-coffee-item-1",
              "name": "gelato",
              "keywords": [
                "gelato"
              ]
            },
            {
              "id": "roberts-coffee-item-2",
              "name": "latte",
              "keywords": [
                "latte"
              ]
            },
            {
              "id": "roberts-coffee-item-3",
              "name": "filtre kahve",
              "keywords": [
                "kahve",
                "filtre kahve"
              ]
            },
            {
              "id": "roberts-coffee-item-4",
              "name": "cheesecake",
              "keywords": []
            },
            {
              "id": "roberts-coffee-item-5",
              "name": "panini",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "roberts",
        "robert's coffee",
        "gelato",
        "dondurma",
        "kahve",
        "latte",
        "filtre kahve",
        "tatlı"
      ],
      "filterTags": [
        "kafe",
        "kahve",
        "dondurma"
      ],
      "whyChoose": "Gerçek gelato + nitelikli kahve aynı yerde."
    },
    "directions": {
      "query": "Robert's Coffee Beach Park Antalya"
    },
    "digital": {
      "website": "robertscoffee.com",
      "instagram": "@robertscoffeeturkiye",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "bragi",
    "order": 9,
    "name": "Bragi",
    "normalizedName": "bragi",
    "category": "Restoran",
    "subcategory": "Brasserie / gastropub",
    "concept": "Burger-steak ağırlıklı gastropub",
    "priceLevel": "Orta-Üst",
    "zoneId": "zone-01-west-start",
    "focusType": "restoran",
    "mapFocusPoint": {
      "x": 0.1739,
      "y": 0.5
    },
    "card": {
      "short": "Burger ve steak odaklı gastropub.",
      "detail": "Özel Bragi Burger ve et menüleriyle bilinir. Akşam yemeği ve içki için kaliteli seçenek.",
      "features": [
        "Burger",
        "Steak",
        "İçki"
      ],
      "featuredProduct": "Bragi Burger",
      "campaign": "Hafta içi öğlen burger menüsü (demo önerisi)",
      "promo": "Et işini ciddiye alanlara."
    },
    "menu": {
      "categories": [
        "Burgerler",
        "steakler",
        "başlangıçlar",
        "kokteyller"
      ],
      "topItems": [
        "bragi burger",
        "antrikot",
        "çıtır tavuk",
        "patates",
        "kokteyl"
      ],
      "sections": [
        {
          "id": "bragi-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "bragi-item-1",
              "name": "bragi burger",
              "keywords": [
                "burger"
              ]
            },
            {
              "id": "bragi-item-2",
              "name": "antrikot",
              "keywords": []
            },
            {
              "id": "bragi-item-3",
              "name": "çıtır tavuk",
              "keywords": []
            },
            {
              "id": "bragi-item-4",
              "name": "patates",
              "keywords": []
            },
            {
              "id": "bragi-item-5",
              "name": "kokteyl",
              "keywords": [
                "kokteyl"
              ]
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "bragi",
        "burger",
        "steak",
        "et",
        "kokteyl",
        "akşam yemeği"
      ],
      "filterTags": [
        "restoran",
        "burger",
        "akşam"
      ],
      "whyChoose": "Fast food değil, oturup yenecek premium burger."
    },
    "directions": {
      "query": "Bragi Brasserie Konyaaltı Antalya"
    },
    "digital": {
      "website": "Bilinmiyor",
      "instagram": "@bragibrasserie (teyit edilmeli)",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": true
    },
    "notes": ""
  },
  {
    "id": "tezgah-burger",
    "order": 10,
    "name": "Tezgah Burger",
    "normalizedName": "tezgah burger",
    "category": "Restoran",
    "subcategory": "Burger",
    "concept": "Antalya kökenli smash/craft burger markası",
    "priceLevel": "Orta",
    "zoneId": "zone-02-west-mid",
    "focusType": "restoran",
    "mapFocusPoint": {
      "x": 0.1957,
      "y": 0.5
    },
    "card": {
      "short": "Antalya'nın kendi craft burgercisi.",
      "detail": "Brioche ekmek ve churros patatesiyle öne çıkar. Kaburgalı ve çıtır tavuk burger çeşitleri bulunur.",
      "features": [
        "Burger",
        "Churros patates",
        "Paket servis"
      ],
      "featuredProduct": "Kaburgalı burger",
      "campaign": "Burger + churros patates + içecek menü (demo önerisi)",
      "promo": "Brioche ekmek, churros patates, tam tezgah işi."
    },
    "menu": {
      "categories": [
        "Burgerler",
        "tavuk burger",
        "yan ürünler",
        "içecekler"
      ],
      "topItems": [
        "kaburgalı burger",
        "cheeseburger",
        "çıtır tavuk burger",
        "churros patates",
        "milkshake"
      ],
      "sections": [
        {
          "id": "tezgah-burger-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "tezgah-burger-item-1",
              "name": "kaburgalı burger",
              "keywords": [
                "burger"
              ]
            },
            {
              "id": "tezgah-burger-item-2",
              "name": "cheeseburger",
              "keywords": [
                "burger",
                "cheeseburger"
              ]
            },
            {
              "id": "tezgah-burger-item-3",
              "name": "çıtır tavuk burger",
              "keywords": [
                "burger",
                "tavuk burger"
              ]
            },
            {
              "id": "tezgah-burger-item-4",
              "name": "churros patates",
              "keywords": [
                "patates"
              ]
            },
            {
              "id": "tezgah-burger-item-5",
              "name": "milkshake",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "tezgah",
        "burger",
        "hamburger",
        "tavuk burger",
        "cheeseburger",
        "patates"
      ],
      "filterTags": [
        "burger",
        "fast-food",
        "yerel"
      ],
      "whyChoose": "Zincir değil, yerel craft burger deneyimi."
    },
    "directions": {
      "query": "Tezgah Burger Beach Park Antalya"
    },
    "digital": {
      "website": "Bilinmiyor",
      "instagram": "@tezgahburger",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "colombia-coffee",
    "order": 11,
    "name": "Colombia",
    "normalizedName": "colombia",
    "category": "Kafe",
    "subcategory": "Kahve",
    "concept": "Kahve odaklı kafe (Colombia Coffee)",
    "priceLevel": "Orta",
    "zoneId": "zone-02-west-mid",
    "focusType": "kafe",
    "mapFocusPoint": {
      "x": 0.2174,
      "y": 0.5
    },
    "card": {
      "short": "Güney Amerika esintili kahve durağı.",
      "detail": "Espresso bazlı ve demleme kahveler sunar. Sahil hattında hızlı kahve molası noktası.",
      "features": [
        "Kahve",
        "Soğuk kahve",
        "Atıştırmalık"
      ],
      "featuredProduct": "Colombia origin filtre kahve",
      "campaign": "Sabah 11'e kadar filtre kahve indirimli (demo önerisi)",
      "promo": "Kolombiya çekirdeği, Akdeniz manzarası."
    },
    "menu": {
      "categories": [
        "Filtre kahveler",
        "espresso bazlı",
        "soğuk içecekler",
        "tatlılar"
      ],
      "topItems": [
        "filtre kahve",
        "latte",
        "iced americano",
        "brownie",
        "cheesecake"
      ],
      "sections": [
        {
          "id": "colombia-coffee-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "colombia-coffee-item-1",
              "name": "filtre kahve",
              "keywords": [
                "kahve",
                "filtre kahve"
              ]
            },
            {
              "id": "colombia-coffee-item-2",
              "name": "latte",
              "keywords": [
                "latte"
              ]
            },
            {
              "id": "colombia-coffee-item-3",
              "name": "iced americano",
              "keywords": [
                "iced kahve"
              ]
            },
            {
              "id": "colombia-coffee-item-4",
              "name": "brownie",
              "keywords": []
            },
            {
              "id": "colombia-coffee-item-5",
              "name": "cheesecake",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "colombia",
        "kahve",
        "filtre kahve",
        "latte",
        "iced kahve",
        "tatlı"
      ],
      "filterTags": [
        "kafe",
        "kahve"
      ],
      "whyChoose": "Origin kahve arayanlar için."
    },
    "directions": {
      "query": "Colombia Coffee Beach Park Antalya"
    },
    "digital": {
      "website": "Bilinmiyor",
      "instagram": "Bilinmiyor",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "yemen-kahvesi",
    "order": 12,
    "name": "Yemen Kahvesi",
    "normalizedName": "yemen kahvesi",
    "category": "Kafe",
    "subcategory": "Türk kahvesi & nargile",
    "concept": "Geleneksel kahve evi (Türk kahvesi, waffle, nargile)",
    "priceLevel": "Orta",
    "zoneId": "zone-02-west-mid",
    "focusType": "kafe",
    "mapFocusPoint": {
      "x": 0.2391,
      "y": 0.5
    },
    "card": {
      "short": "Közde Türk kahvesi ve nargile keyfi.",
      "detail": "Geleneksel Türk kahvesi çeşitleri, waffle ve nargile sunar. Akşam oturmaları için rahat mekan.",
      "features": [
        "Türk kahvesi",
        "Nargile",
        "Waffle"
      ],
      "featuredProduct": "Közde Türk kahvesi",
      "campaign": "Kahve yanı lokum ikramı (demo önerisi)",
      "promo": "Kırk yıl hatırı olan kahve burada."
    },
    "menu": {
      "categories": [
        "Türk kahveleri",
        "dünya kahveleri",
        "waffle",
        "nargile",
        "soğuk içecekler"
      ],
      "topItems": [
        "közde Türk kahvesi",
        "dibek kahvesi",
        "damla sakızlı kahve",
        "waffle",
        "nargile"
      ],
      "sections": [
        {
          "id": "yemen-kahvesi-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "yemen-kahvesi-item-1",
              "name": "közde Türk kahvesi",
              "keywords": [
                "türk kahvesi",
                "kahve"
              ]
            },
            {
              "id": "yemen-kahvesi-item-2",
              "name": "dibek kahvesi",
              "keywords": [
                "kahve",
                "dibek"
              ]
            },
            {
              "id": "yemen-kahvesi-item-3",
              "name": "damla sakızlı kahve",
              "keywords": [
                "kahve"
              ]
            },
            {
              "id": "yemen-kahvesi-item-4",
              "name": "waffle",
              "keywords": [
                "waffle"
              ]
            },
            {
              "id": "yemen-kahvesi-item-5",
              "name": "nargile",
              "keywords": [
                "nargile"
              ]
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "yemen",
        "türk kahvesi",
        "nargile",
        "waffle",
        "dibek kahvesi",
        "kahve",
        "dibek"
      ],
      "filterTags": [
        "kafe",
        "nargile",
        "geleneksel"
      ],
      "whyChoose": "Geleneksel kahve + nargile kombinasyonu."
    },
    "directions": {
      "query": "Yemen Kahvesi Beach Park Antalya"
    },
    "digital": {
      "website": "Bilinmiyor",
      "instagram": "Bilinmiyor",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "bahane-lounge",
    "order": 13,
    "name": "Bahane Lounge",
    "normalizedName": "bahane lounge",
    "category": "Lounge",
    "subcategory": "Nargile & içecek",
    "concept": "Nargile lounge / oturma mekanı",
    "priceLevel": "Orta",
    "zoneId": "zone-02-west-mid",
    "focusType": "mekan",
    "mapFocusPoint": {
      "x": 0.2609,
      "y": 0.5
    },
    "card": {
      "short": "Nargile ve soğuk içecekle uzun oturmalık lounge.",
      "detail": "Nargile çeşitleri, sıcak-soğuk içecekler ve atıştırmalıklar sunar. Akşam saatlerinde rahat oturma alanı.",
      "features": [
        "Nargile",
        "İçecek",
        "Akşam oturması"
      ],
      "featuredProduct": "Meyveli nargile",
      "campaign": "Nargile + çay menüsü (demo önerisi)",
      "promo": "Bahane sende, mekan bizde."
    },
    "menu": {
      "categories": [
        "Nargile",
        "sıcak içecekler",
        "soğuk içecekler",
        "atıştırmalık"
      ],
      "topItems": [
        "meyveli nargile",
        "çay",
        "türk kahvesi",
        "limonata",
        "çerez tabağı"
      ],
      "sections": [
        {
          "id": "bahane-lounge-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "bahane-lounge-item-1",
              "name": "meyveli nargile",
              "keywords": [
                "nargile"
              ]
            },
            {
              "id": "bahane-lounge-item-2",
              "name": "çay",
              "keywords": [
                "çay"
              ]
            },
            {
              "id": "bahane-lounge-item-3",
              "name": "türk kahvesi",
              "keywords": []
            },
            {
              "id": "bahane-lounge-item-4",
              "name": "limonata",
              "keywords": []
            },
            {
              "id": "bahane-lounge-item-5",
              "name": "çerez tabağı",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "bahane",
        "nargile",
        "lounge",
        "çay",
        "içecek"
      ],
      "filterTags": [
        "nargile",
        "lounge",
        "gece"
      ],
      "whyChoose": "Uzun oturmalık, sohbet odaklı mekan."
    },
    "directions": {
      "query": "Bahane Lounge Beach Park Antalya"
    },
    "digital": {
      "website": "Bilinmiyor",
      "instagram": "Bilinmiyor",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": true,
      "needsVerification": false
    },
    "notes": "Doküman işareti: Menü demo önerisi."
  },
  {
    "id": "espressolab",
    "order": 14,
    "name": "Espressolab",
    "normalizedName": "espressolab",
    "category": "Kafe",
    "subcategory": "Kahve zinciri",
    "concept": "Türkiye'nin en büyük kahve zincirlerinden (338+ şube)",
    "priceLevel": "Orta",
    "zoneId": "zone-02-west-mid",
    "focusType": "kafe",
    "mapFocusPoint": {
      "x": 0.2826,
      "y": 0.5
    },
    "card": {
      "short": "\"Topraktan fincana\" konseptli kahve zinciri.",
      "detail": "Filtre kahveden iri boy soğuk içeceklere geniş menü. Hızlı servis ve çalışmaya uygun oturma alanı.",
      "features": [
        "Filtre kahve",
        "Soğuk kahve",
        "Çalışma alanı"
      ],
      "featuredProduct": "İzmir bombası",
      "campaign": "Mobil uygulamada puan biriktir (gerçek sadakat programı)",
      "promo": "Büyük boy kahve, büyük boy keyif."
    },
    "menu": {
      "categories": [
        "Espresso bazlı",
        "filtre kahve",
        "soğuk içecekler",
        "tatlı & atıştırmalık"
      ],
      "topItems": [
        "filtre kahve",
        "latte",
        "iced americano",
        "izmir bombası",
        "cookie"
      ],
      "sections": [
        {
          "id": "espressolab-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "espressolab-item-1",
              "name": "filtre kahve",
              "keywords": [
                "kahve",
                "filtre kahve"
              ]
            },
            {
              "id": "espressolab-item-2",
              "name": "latte",
              "keywords": [
                "latte"
              ]
            },
            {
              "id": "espressolab-item-3",
              "name": "iced americano",
              "keywords": [
                "iced americano"
              ]
            },
            {
              "id": "espressolab-item-4",
              "name": "izmir bombası",
              "keywords": [
                "izmir bombası"
              ]
            },
            {
              "id": "espressolab-item-5",
              "name": "cookie",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "espressolab",
        "kahve",
        "filtre kahve",
        "latte",
        "iced",
        "iced americano",
        "izmir bombası"
      ],
      "filterTags": [
        "kafe",
        "kahve",
        "çalışma"
      ],
      "whyChoose": "Bilinen zincir, bol oturma alanı, hızlı servis."
    },
    "directions": {
      "query": "Espressolab Beach Park Antalya"
    },
    "digital": {
      "website": "espressolab.com",
      "instagram": "@espressolab",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "maydonoz-doner",
    "order": 15,
    "name": "Maydonoz Döner",
    "normalizedName": "maydonoz doner",
    "category": "Restoran",
    "subcategory": "Döner",
    "concept": "Hızlı büyüyen döner zinciri",
    "priceLevel": "Ucuz",
    "zoneId": "zone-02-west-mid",
    "focusType": "fast-food",
    "mapFocusPoint": {
      "x": 0.3043,
      "y": 0.5
    },
    "card": {
      "short": "Uygun fiyatlı döner zinciri.",
      "detail": "Tavuk ve et döneri ekmek arası, dürüm ve porsiyon olarak sunar. Hızlı ve ekonomik öğün noktası.",
      "features": [
        "Döner",
        "Hızlı servis",
        "Ekonomik"
      ],
      "featuredProduct": "Et döner dürüm",
      "campaign": "Dürüm + ayran menü fiyatı",
      "promo": "Maydonozsuz döner olmaz."
    },
    "menu": {
      "categories": [
        "Et döner",
        "tavuk döner",
        "dürümler",
        "porsiyonlar",
        "içecekler"
      ],
      "topItems": [
        "et dürüm",
        "tavuk dürüm",
        "porsiyon döner",
        "pilav üstü döner",
        "ayran"
      ],
      "sections": [
        {
          "id": "maydonoz-doner-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "maydonoz-doner-item-1",
              "name": "et dürüm",
              "keywords": [
                "dürüm",
                "et döner"
              ]
            },
            {
              "id": "maydonoz-doner-item-2",
              "name": "tavuk dürüm",
              "keywords": [
                "dürüm",
                "tavuk döner"
              ]
            },
            {
              "id": "maydonoz-doner-item-3",
              "name": "porsiyon döner",
              "keywords": [
                "döner"
              ]
            },
            {
              "id": "maydonoz-doner-item-4",
              "name": "pilav üstü döner",
              "keywords": [
                "döner"
              ]
            },
            {
              "id": "maydonoz-doner-item-5",
              "name": "ayran",
              "keywords": [
                "ayran"
              ]
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "maydonoz",
        "döner",
        "dürüm",
        "tavuk döner",
        "et döner",
        "ayran"
      ],
      "filterTags": [
        "fast-food",
        "döner",
        "ekonomik"
      ],
      "whyChoose": "Hızlı, doyurucu ve uygun fiyatlı."
    },
    "directions": {
      "query": "Maydonoz Döner Beach Park Antalya"
    },
    "digital": {
      "website": "maydonozdoner.com",
      "instagram": "@maydonozdoner",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "hamlet-market-01",
    "order": 16,
    "name": "Hamlet Market (1. nokta)",
    "normalizedName": "hamlet market 1 nokta",
    "category": "Market",
    "subcategory": "Mini market / büfe",
    "concept": "Plaj hattı mini marketi (not: listede iki kez geçiyor; aynı markanın iki şubesi olarak modellendi; sahada \"Hamlet Beach\" adlı beach club da mevcut — müşteriyle teyit edilmeli)",
    "priceLevel": "Ucuz",
    "zoneId": "zone-02-west-mid",
    "focusType": "market",
    "mapFocusPoint": {
      "x": 0.3261,
      "y": 0.5
    },
    "card": {
      "short": "Plaj ihtiyaçları için hızlı market.",
      "detail": "İçecek, atıştırmalık ve plaj ürünleri satar. Güneş kremi ve su gibi acil ihtiyaçlar için en yakın nokta.",
      "features": [
        "İçecek",
        "Atıştırmalık",
        "Plaj ürünleri"
      ],
      "featuredProduct": "Soğuk içecek dolabı",
      "campaign": "Su + atıştırmalık ikilisi (demo önerisi)",
      "promo": "Plajda ne lazımsa, iki adım ötede."
    },
    "menu": {
      "categories": [
        "İçecekler",
        "atıştırmalıklar",
        "dondurma",
        "plaj ürünleri",
        "temel gıda"
      ],
      "topItems": [
        "su",
        "soğuk içecek",
        "dondurma",
        "cips",
        "güneş kremi"
      ],
      "sections": [
        {
          "id": "hamlet-market-01-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "hamlet-market-01-item-1",
              "name": "su",
              "keywords": [
                "su"
              ]
            },
            {
              "id": "hamlet-market-01-item-2",
              "name": "soğuk içecek",
              "keywords": [
                "içecek"
              ]
            },
            {
              "id": "hamlet-market-01-item-3",
              "name": "dondurma",
              "keywords": [
                "dondurma"
              ]
            },
            {
              "id": "hamlet-market-01-item-4",
              "name": "cips",
              "keywords": []
            },
            {
              "id": "hamlet-market-01-item-5",
              "name": "güneş kremi",
              "keywords": [
                "güneş kremi"
              ]
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "hamlet",
        "market",
        "su",
        "içecek",
        "güneş kremi",
        "dondurma",
        "atıştırmalık"
      ],
      "filterTags": [
        "market",
        "hızlı ihtiyaç"
      ],
      "whyChoose": "En yakın hızlı ihtiyaç noktası."
    },
    "directions": {
      "query": "Hamlet Market Beach Park Antalya"
    },
    "digital": {
      "website": "Bilinmiyor",
      "instagram": "Bilinmiyor",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": true,
      "needsVerification": true
    },
    "notes": "Doküman işareti: Demo önerisi. Doküman normalize `hamlet-market-1`; Sprint 1 ID standardı gereği `hamlet-market-01` kullanıldı. Konsept notu: not: listede iki kez geçiyor; aynı markanın iki şubesi olarak modellendi; sahada \"Hamlet Beach\" adlı beach club da mevcut — müşteriyle teyit edilmeli."
  },
  {
    "id": "doyuyo",
    "order": 17,
    "name": "Doyuyo",
    "normalizedName": "doyuyo",
    "category": "Restoran",
    "subcategory": "Fast food / tost",
    "concept": "Tost ve hızlı atıştırma zinciri",
    "priceLevel": "Ucuz",
    "zoneId": "zone-02-west-mid",
    "focusType": "fast-food",
    "mapFocusPoint": {
      "x": 0.3478,
      "y": 0.5
    },
    "card": {
      "short": "Bol malzemeli tost ve hızlı atıştırma.",
      "detail": "Ayvalık tostu ve sandviç çeşitleriyle hızlı öğün sunar. Plaj arası pratik atıştırma için ideal.",
      "features": [
        "Tost",
        "Hızlı servis",
        "Paket servis"
      ],
      "featuredProduct": "Ayvalık tostu",
      "campaign": "Tost + ayran menü (demo önerisi)",
      "promo": "Adı üstünde: doyuyo."
    },
    "menu": {
      "categories": [
        "Tostlar",
        "sandviçler",
        "patates",
        "içecekler"
      ],
      "topItems": [
        "ayvalık tostu",
        "karışık tost",
        "kumru",
        "patates",
        "ayran"
      ],
      "sections": [
        {
          "id": "doyuyo-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "doyuyo-item-1",
              "name": "ayvalık tostu",
              "keywords": [
                "tost",
                "ayvalık tostu"
              ]
            },
            {
              "id": "doyuyo-item-2",
              "name": "karışık tost",
              "keywords": [
                "tost"
              ]
            },
            {
              "id": "doyuyo-item-3",
              "name": "kumru",
              "keywords": [
                "kumru"
              ]
            },
            {
              "id": "doyuyo-item-4",
              "name": "patates",
              "keywords": []
            },
            {
              "id": "doyuyo-item-5",
              "name": "ayran",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "doyuyo",
        "tost",
        "ayvalık tostu",
        "sandviç",
        "kumru",
        "atıştırma"
      ],
      "filterTags": [
        "fast-food",
        "tost",
        "ekonomik"
      ],
      "whyChoose": "Hızlı ve doyurucu plaj atıştırması."
    },
    "directions": {
      "query": "Doyuyo Beach Park Antalya"
    },
    "digital": {
      "website": "Bilinmiyor",
      "instagram": "@doyuyo (teyit edilmeli)",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": true
    },
    "notes": ""
  },
  {
    "id": "hd-iskender",
    "order": 18,
    "name": "HD İskender",
    "normalizedName": "hd iskender",
    "category": "Restoran",
    "subcategory": "İskender / döner",
    "concept": "İskender odaklı zincir (1995'ten beri)",
    "priceLevel": "Orta",
    "zoneId": "zone-02-west-mid",
    "focusType": "restoran",
    "mapFocusPoint": {
      "x": 0.3696,
      "y": 0.5
    },
    "card": {
      "short": "Tereyağlı klasik iskenderin zincir adresi.",
      "detail": "İskender, döner ve pide çeşitleri sunar. Oturarak sıcak öğün için güvenilir seçenek.",
      "features": [
        "İskender",
        "Döner",
        "Aile dostu"
      ],
      "featuredProduct": "Klasik iskender",
      "campaign": "İskender + ayran + irmik tatlısı menü",
      "promo": "Tereyağı sosuyla gerçek iskender."
    },
    "menu": {
      "categories": [
        "İskender çeşitleri",
        "döner",
        "pideler",
        "tatlılar",
        "içecekler"
      ],
      "topItems": [
        "klasik iskender",
        "kaşarlı iskender",
        "et döner",
        "pide",
        "künefe"
      ],
      "sections": [
        {
          "id": "hd-iskender-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "hd-iskender-item-1",
              "name": "klasik iskender",
              "keywords": [
                "iskender"
              ]
            },
            {
              "id": "hd-iskender-item-2",
              "name": "kaşarlı iskender",
              "keywords": [
                "iskender"
              ]
            },
            {
              "id": "hd-iskender-item-3",
              "name": "et döner",
              "keywords": [
                "döner",
                "et"
              ]
            },
            {
              "id": "hd-iskender-item-4",
              "name": "pide",
              "keywords": [
                "pide"
              ]
            },
            {
              "id": "hd-iskender-item-5",
              "name": "künefe",
              "keywords": [
                "künefe"
              ]
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "hd iskender",
        "iskender",
        "döner",
        "pide",
        "et",
        "künefe"
      ],
      "filterTags": [
        "restoran",
        "döner",
        "geleneksel"
      ],
      "whyChoose": "Sıcak, doyurucu, klasik Türk öğünü."
    },
    "directions": {
      "query": "HD İskender Beach Park Antalya"
    },
    "digital": {
      "website": "hdiskender.com",
      "instagram": "@hdiskender",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "tavuk-dunyasi",
    "order": 19,
    "name": "Tavuk Dünyası",
    "normalizedName": "tavuk dunyasi",
    "category": "Restoran",
    "subcategory": "Tavuk",
    "concept": "Tavuk odaklı casual dining zinciri",
    "priceLevel": "Orta",
    "zoneId": "zone-03-center",
    "focusType": "restoran",
    "mapFocusPoint": {
      "x": 0.3913,
      "y": 0.5
    },
    "card": {
      "short": "Marine tavuğun zincir uzmanı.",
      "detail": "Izgara ve soslu tavuk çeşitleriyle geniş menü sunar. Aileler için oturmalı, hızlı servisli restoran.",
      "features": [
        "Tavuk",
        "Izgara",
        "Aile dostu"
      ],
      "featuredProduct": "Tavuk Dünyası Special",
      "campaign": "Öğlen menüleri (tavuk + pilav + içecek)",
      "promo": "Tavuğun her hali burada."
    },
    "menu": {
      "categories": [
        "Izgara tavuk",
        "soslu tavuklar",
        "dürümler",
        "salatalar",
        "tatlılar"
      ],
      "topItems": [
        "special tavuk",
        "köri soslu tavuk",
        "tavuk dürüm",
        "sezar salata",
        "sufle"
      ],
      "sections": [
        {
          "id": "tavuk-dunyasi-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "tavuk-dunyasi-item-1",
              "name": "special tavuk",
              "keywords": [
                "tavuk"
              ]
            },
            {
              "id": "tavuk-dunyasi-item-2",
              "name": "köri soslu tavuk",
              "keywords": [
                "tavuk"
              ]
            },
            {
              "id": "tavuk-dunyasi-item-3",
              "name": "tavuk dürüm",
              "keywords": [
                "tavuk",
                "ızgara tavuk",
                "dürüm"
              ]
            },
            {
              "id": "tavuk-dunyasi-item-4",
              "name": "sezar salata",
              "keywords": [
                "salata"
              ]
            },
            {
              "id": "tavuk-dunyasi-item-5",
              "name": "sufle",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "tavuk dünyası",
        "tavuk",
        "ızgara",
        "dürüm",
        "ızgara tavuk",
        "salata",
        "pilav"
      ],
      "filterTags": [
        "restoran",
        "tavuk",
        "aile"
      ],
      "whyChoose": "Standart kalite, geniş tavuk menüsü."
    },
    "directions": {
      "query": "Tavuk Dünyası Beach Park Antalya"
    },
    "digital": {
      "website": "tavukdunyasi.com",
      "instagram": "@tavukdunyasi",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "okuz-burger",
    "order": 20,
    "name": "Öküz",
    "normalizedName": "okuz",
    "category": "Restoran",
    "subcategory": "Burger",
    "concept": "Et/burger odaklı yerel marka (olası tam ad: Öküz Burger — teyit edilmeli)",
    "priceLevel": "Orta",
    "zoneId": "zone-03-center",
    "focusType": "restoran",
    "mapFocusPoint": {
      "x": 0.413,
      "y": 0.5
    },
    "card": {
      "short": "Et ağırlıklı iddialı yerel burgerci.",
      "detail": "Yüksek gramajlı et burgerleriyle bilinir. Doyurucu ve yoğun lezzet arayanlara.",
      "features": [
        "Burger",
        "Et",
        "Doyurucu"
      ],
      "featuredProduct": "Öküz Burger (double)",
      "campaign": "Double burger + patates menü (demo önerisi)",
      "promo": "Adam gibi et, adı gibi Öküz."
    },
    "menu": {
      "categories": [
        "Burgerler",
        "et menüleri",
        "yan ürünler",
        "içecekler"
      ],
      "topItems": [
        "öküz burger",
        "double cheeseburger",
        "kasap köfte burger",
        "patates",
        "limonata"
      ],
      "sections": [
        {
          "id": "okuz-burger-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "okuz-burger-item-1",
              "name": "öküz burger",
              "keywords": [
                "burger"
              ]
            },
            {
              "id": "okuz-burger-item-2",
              "name": "double cheeseburger",
              "keywords": [
                "burger",
                "double burger"
              ]
            },
            {
              "id": "okuz-burger-item-3",
              "name": "kasap köfte burger",
              "keywords": [
                "burger",
                "köfte"
              ]
            },
            {
              "id": "okuz-burger-item-4",
              "name": "patates",
              "keywords": [
                "patates"
              ]
            },
            {
              "id": "okuz-burger-item-5",
              "name": "limonata",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "öküz",
        "burger",
        "et burger",
        "double",
        "köfte",
        "double burger",
        "patates"
      ],
      "filterTags": [
        "burger",
        "et",
        "yerel"
      ],
      "whyChoose": "Yüksek gramaj, yerel iddialı burger."
    },
    "directions": {
      "query": "Öküz Burger Beach Park Antalya"
    },
    "digital": {
      "website": "Bilinmiyor",
      "instagram": "Bilinmiyor",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": true
    },
    "notes": "Konsept notu: olası tam ad: Öküz Burger — teyit edilmeli."
  },
  {
    "id": "galata-cikolatacisi",
    "order": 21,
    "name": "Galata Çikolatacısı",
    "normalizedName": "galata cikolatacisi",
    "category": "Kafe & Mağaza",
    "subcategory": "Çikolata & tatlı",
    "concept": "Butik çikolata zinciri",
    "priceLevel": "Orta-Üst",
    "zoneId": "zone-03-center",
    "focusType": "kafe",
    "mapFocusPoint": {
      "x": 0.4348,
      "y": 0.5
    },
    "card": {
      "short": "El yapımı çikolata ve çikolatalı tatlılar.",
      "detail": "Tablet çikolatadan sıcak çikolataya geniş seçki sunar. Hediyelik çikolata için de uygun.",
      "features": [
        "Çikolata",
        "Tatlı",
        "Hediyelik"
      ],
      "featuredProduct": "El yapımı tablet çikolata",
      "campaign": "3 al 2 öde tablet kampanyası (demo önerisi)",
      "promo": "Çikolata burada ciddi iştir."
    },
    "menu": {
      "categories": [
        "Çikolatalar",
        "sıcak içecekler",
        "dondurma",
        "tatlılar"
      ],
      "topItems": [
        "tablet çikolata",
        "sıcak çikolata",
        "çikolatalı dondurma",
        "truf",
        "brownie"
      ],
      "sections": [
        {
          "id": "galata-cikolatacisi-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "galata-cikolatacisi-item-1",
              "name": "tablet çikolata",
              "keywords": [
                "çikolata"
              ]
            },
            {
              "id": "galata-cikolatacisi-item-2",
              "name": "sıcak çikolata",
              "keywords": [
                "çikolata",
                "sıcak çikolata"
              ]
            },
            {
              "id": "galata-cikolatacisi-item-3",
              "name": "çikolatalı dondurma",
              "keywords": [
                "çikolata",
                "dondurma"
              ]
            },
            {
              "id": "galata-cikolatacisi-item-4",
              "name": "truf",
              "keywords": []
            },
            {
              "id": "galata-cikolatacisi-item-5",
              "name": "brownie",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "galata",
        "çikolata",
        "sıcak çikolata",
        "tatlı",
        "hediyelik",
        "dondurma"
      ],
      "filterTags": [
        "tatlı",
        "çikolata",
        "hediyelik"
      ],
      "whyChoose": "Hem tatlı molası hem hediyelik alışveriş."
    },
    "directions": {
      "query": "Galata Çikolatacısı Beach Park Antalya"
    },
    "digital": {
      "website": "galatacikolatacisi.com",
      "instagram": "@galatacikolatacisi",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "watsons",
    "order": 22,
    "name": "Watsons",
    "normalizedName": "watsons",
    "category": "Mağaza",
    "subcategory": "Kozmetik & kişisel bakım",
    "concept": "Uluslararası sağlık-güzellik perakende zinciri (AS Watson Group)",
    "priceLevel": "Orta",
    "zoneId": "zone-03-center",
    "focusType": "mağaza",
    "mapFocusPoint": {
      "x": 0.4565,
      "y": 0.5
    },
    "card": {
      "short": "Kozmetik ve kişisel bakım marketi.",
      "detail": "Güneş kremi, makyaj, cilt bakımı ve kişisel bakım ürünleri satar. Plaj öncesi eksikler için ideal.",
      "features": [
        "Kozmetik",
        "Güneş ürünleri",
        "Kişisel bakım"
      ],
      "featuredProduct": "Güneş bakım ürünleri",
      "campaign": "Sezonluk güneş ürünleri indirimi",
      "promo": "Plaj öncesi son durak: güneş kremi."
    },
    "menu": {
      "categories": [
        "Cilt bakımı",
        "makyaj",
        "güneş ürünleri",
        "kişisel bakım",
        "vitamin"
      ],
      "topItems": [
        "güneş kremi",
        "nemlendirici",
        "şampuan",
        "makyaj ürünleri",
        "after-sun"
      ],
      "sections": [
        {
          "id": "watsons-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "watsons-item-1",
              "name": "güneş kremi",
              "keywords": [
                "güneş kremi"
              ]
            },
            {
              "id": "watsons-item-2",
              "name": "nemlendirici",
              "keywords": []
            },
            {
              "id": "watsons-item-3",
              "name": "şampuan",
              "keywords": [
                "şampuan"
              ]
            },
            {
              "id": "watsons-item-4",
              "name": "makyaj ürünleri",
              "keywords": [
                "makyaj"
              ]
            },
            {
              "id": "watsons-item-5",
              "name": "after-sun",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "watsons",
        "kozmetik",
        "güneş kremi",
        "makyaj",
        "şampuan",
        "cilt bakımı"
      ],
      "filterTags": [
        "mağaza",
        "kozmetik",
        "alışveriş"
      ],
      "whyChoose": "Plaj/bakım ihtiyaçlarının tamamı tek mağazada."
    },
    "directions": {
      "query": "Watsons Beach Park Antalya"
    },
    "digital": {
      "website": "watsons.com.tr",
      "instagram": "@watsonsturkiye",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "decathlon",
    "order": 23,
    "name": "Decathlon",
    "normalizedName": "decathlon",
    "category": "Mağaza",
    "subcategory": "Spor ürünleri",
    "concept": "Dünyanın en büyük spor perakendecisi (1.900+ mağaza)",
    "priceLevel": "Orta",
    "zoneId": "zone-03-center",
    "focusType": "mağaza",
    "mapFocusPoint": {
      "x": 0.4783,
      "y": 0.5
    },
    "card": {
      "short": "Her spor için ekipman ve giyim.",
      "detail": "Yüzme, koşu, kamp ve plaj sporları dahil geniş ürün gamı sunar. Uygun fiyatlı kendi markalarıyla bilinir.",
      "features": [
        "Spor giyim",
        "Plaj & yüzme",
        "Ekipman"
      ],
      "featuredProduct": "Yüzme ve plaj ekipmanları",
      "campaign": "Sezon ürünlerinde indirim dönemleri",
      "promo": "Denize girmeden önce eksiğini tamamla."
    },
    "menu": {
      "categories": [
        "Yüzme",
        "fitness",
        "koşu",
        "kamp",
        "bisiklet",
        "plaj sporları"
      ],
      "topItems": [
        "deniz gözlüğü",
        "mayo",
        "şnorkel set",
        "plaj raketi",
        "spor ayakkabı"
      ],
      "sections": [
        {
          "id": "decathlon-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "decathlon-item-1",
              "name": "deniz gözlüğü",
              "keywords": [
                "deniz gözlüğü"
              ]
            },
            {
              "id": "decathlon-item-2",
              "name": "mayo",
              "keywords": [
                "mayo"
              ]
            },
            {
              "id": "decathlon-item-3",
              "name": "şnorkel set",
              "keywords": [
                "şnorkel"
              ]
            },
            {
              "id": "decathlon-item-4",
              "name": "plaj raketi",
              "keywords": []
            },
            {
              "id": "decathlon-item-5",
              "name": "spor ayakkabı",
              "keywords": [
                "spor",
                "spor ayakkabı"
              ]
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "decathlon",
        "spor",
        "mayo",
        "şnorkel",
        "deniz gözlüğü",
        "spor ayakkabı",
        "kamp"
      ],
      "filterTags": [
        "mağaza",
        "spor",
        "alışveriş"
      ],
      "whyChoose": "Plaj/spor ekipmanında en geniş ve uygun seçenek."
    },
    "directions": {
      "query": "Decathlon Beach Park Antalya"
    },
    "digital": {
      "website": "decathlon.com.tr",
      "instagram": "@decathlonturkiye",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "pidem",
    "order": 24,
    "name": "Pidem",
    "normalizedName": "pidem",
    "category": "Restoran",
    "subcategory": "Pide & lahmacun",
    "concept": "Pide zinciri (2010, Eskişehir kökenli)",
    "priceLevel": "Orta",
    "zoneId": "zone-03-center",
    "focusType": "restoran",
    "mapFocusPoint": {
      "x": 0.5,
      "y": 0.5
    },
    "card": {
      "short": "Taş fırından pide ve lahmacun zinciri.",
      "detail": "Kıymalı, kaşarlı ve kuşbaşılı pide çeşitleri sunar. Hızlı oturmalı veya paket Türk fast food'u.",
      "features": [
        "Pide",
        "Lahmacun",
        "Paket servis"
      ],
      "featuredProduct": "Kuşbaşılı kaşarlı pide",
      "campaign": "Pide + ayran + salata menü",
      "promo": "Taş fırından sıcak pide."
    },
    "menu": {
      "categories": [
        "Pideler",
        "lahmacun",
        "salatalar",
        "tatlılar",
        "içecekler"
      ],
      "topItems": [
        "kuşbaşılı pide",
        "kıymalı pide",
        "kaşarlı pide",
        "lahmacun",
        "künefe"
      ],
      "sections": [
        {
          "id": "pidem-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "pidem-item-1",
              "name": "kuşbaşılı pide",
              "keywords": [
                "pide"
              ]
            },
            {
              "id": "pidem-item-2",
              "name": "kıymalı pide",
              "keywords": [
                "pide",
                "kıymalı"
              ]
            },
            {
              "id": "pidem-item-3",
              "name": "kaşarlı pide",
              "keywords": [
                "pide",
                "kaşarlı"
              ]
            },
            {
              "id": "pidem-item-4",
              "name": "lahmacun",
              "keywords": [
                "lahmacun"
              ]
            },
            {
              "id": "pidem-item-5",
              "name": "künefe",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "pidem",
        "pide",
        "lahmacun",
        "kıymalı",
        "kaşarlı",
        "fırın"
      ],
      "filterTags": [
        "restoran",
        "pide",
        "geleneksel"
      ],
      "whyChoose": "Hızlı ve doyurucu Türk klasiği."
    },
    "directions": {
      "query": "Pidem Beach Park Antalya"
    },
    "digital": {
      "website": "pidem.co",
      "instagram": "@pidem",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "starbucks",
    "order": 25,
    "name": "Starbucks",
    "normalizedName": "starbucks",
    "category": "Kafe",
    "subcategory": "Kahve zinciri",
    "concept": "Global kahve zinciri",
    "priceLevel": "Orta-Üst",
    "zoneId": "zone-03-center",
    "focusType": "kafe",
    "mapFocusPoint": {
      "x": 0.5217,
      "y": 0.5
    },
    "card": {
      "short": "Dünyanın en bilinen kahve zinciri.",
      "detail": "Espresso bazlı içecekler, frappuccino ve atıştırmalıklar sunar. Deniz manzaralı oturma alanıyla popüler buluşma noktası.",
      "features": [
        "Kahve",
        "Frappuccino",
        "Çalışma alanı"
      ],
      "featuredProduct": "Caramel frappuccino",
      "campaign": "Starbucks Rewards yıldız programı (gerçek sadakat programı)",
      "promo": "Deniz kenarında klasik Starbucks molası."
    },
    "menu": {
      "categories": [
        "Espresso bazlı",
        "filtre kahve",
        "frappuccino",
        "çaylar",
        "tatlı & sandviç"
      ],
      "topItems": [
        "latte",
        "caramel frappuccino",
        "cold brew",
        "americano",
        "cheesecake"
      ],
      "sections": [
        {
          "id": "starbucks-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "starbucks-item-1",
              "name": "latte",
              "keywords": [
                "latte"
              ]
            },
            {
              "id": "starbucks-item-2",
              "name": "caramel frappuccino",
              "keywords": [
                "frappuccino"
              ]
            },
            {
              "id": "starbucks-item-3",
              "name": "cold brew",
              "keywords": [
                "cold brew"
              ]
            },
            {
              "id": "starbucks-item-4",
              "name": "americano",
              "keywords": []
            },
            {
              "id": "starbucks-item-5",
              "name": "cheesecake",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "starbucks",
        "kahve",
        "latte",
        "frappuccino",
        "cold brew",
        "filtre kahve"
      ],
      "filterTags": [
        "kafe",
        "kahve",
        "çalışma"
      ],
      "whyChoose": "Tanıdık marka, garantili standart."
    },
    "directions": {
      "query": "Starbucks Beach Park Antalya"
    },
    "digital": {
      "website": "starbucks.com.tr",
      "instagram": "@starbucksturkiye",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "gloria-jeans",
    "order": 26,
    "name": "Gloria Jeans",
    "normalizedName": "gloria jeans",
    "category": "Kafe",
    "subcategory": "Kahve zinciri",
    "concept": "Avustralya kökenli global kahve zinciri",
    "priceLevel": "Orta",
    "zoneId": "zone-03-center",
    "focusType": "kafe",
    "mapFocusPoint": {
      "x": 0.5435,
      "y": 0.5
    },
    "card": {
      "short": "Aromalı kahve çeşitleriyle bilinen zincir.",
      "detail": "Espresso bazlı içecekler ve buzlu chiller serisi sunar. Tatlı eşlikçili kahve molası için uygun.",
      "features": [
        "Kahve",
        "Chiller",
        "Tatlı"
      ],
      "featuredProduct": "Çikolatalı chiller",
      "campaign": "Kahve + cookie ikilisi (demo önerisi)",
      "promo": "Buz gibi chiller, sıcacık kahve."
    },
    "menu": {
      "categories": [
        "Espresso bazlı",
        "chiller",
        "filtre kahve",
        "çaylar",
        "tatlılar"
      ],
      "topItems": [
        "latte",
        "chiller",
        "filtre kahve",
        "mocha",
        "cheesecake"
      ],
      "sections": [
        {
          "id": "gloria-jeans-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "gloria-jeans-item-1",
              "name": "latte",
              "keywords": [
                "latte"
              ]
            },
            {
              "id": "gloria-jeans-item-2",
              "name": "chiller",
              "keywords": [
                "chiller"
              ]
            },
            {
              "id": "gloria-jeans-item-3",
              "name": "filtre kahve",
              "keywords": [
                "kahve"
              ]
            },
            {
              "id": "gloria-jeans-item-4",
              "name": "mocha",
              "keywords": [
                "mocha"
              ]
            },
            {
              "id": "gloria-jeans-item-5",
              "name": "cheesecake",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "gloria jeans",
        "kahve",
        "chiller",
        "latte",
        "soğuk kahve",
        "mocha"
      ],
      "filterTags": [
        "kafe",
        "kahve"
      ],
      "whyChoose": "Aromalı ve soğuk kahve çeşitliliği."
    },
    "directions": {
      "query": "Gloria Jean's Beach Park Antalya"
    },
    "digital": {
      "website": "gloriajeans.com.tr",
      "instagram": "@gloriajeanscoffeestr",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "green-salads",
    "order": 27,
    "name": "Green Salads",
    "normalizedName": "green salads",
    "category": "Restoran",
    "subcategory": "Salata & sağlıklı",
    "concept": "Salata odaklı zincir (2008; uzun tabak konseptinin öncüsü)",
    "priceLevel": "Orta-Üst",
    "zoneId": "zone-03-center",
    "focusType": "restoran",
    "mapFocusPoint": {
      "x": 0.5652,
      "y": 0.5
    },
    "card": {
      "short": "Sağlıklı salata ve fit menü zinciri.",
      "detail": "Uzun tabak salataları, wrap ve protein bowlları sunar. Hafif ve sağlıklı öğün arayanlara.",
      "features": [
        "Salata",
        "Sağlıklı",
        "Fit menü"
      ],
      "featuredProduct": "Tavuklu uzun tabak salata",
      "campaign": "Salata + taze sıkım içecek menüsü (demo önerisi)",
      "promo": "Plaj formunu koruyan öğün."
    },
    "menu": {
      "categories": [
        "Salatalar",
        "bowllar",
        "wrapler",
        "taze içecekler",
        "tatlılar"
      ],
      "topItems": [
        "tavuklu salata",
        "ton balıklı salata",
        "protein bowl",
        "wrap",
        "taze portakal suyu"
      ],
      "sections": [
        {
          "id": "green-salads-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "green-salads-item-1",
              "name": "tavuklu salata",
              "keywords": [
                "salata"
              ]
            },
            {
              "id": "green-salads-item-2",
              "name": "ton balıklı salata",
              "keywords": [
                "salata"
              ]
            },
            {
              "id": "green-salads-item-3",
              "name": "protein bowl",
              "keywords": [
                "bowl"
              ]
            },
            {
              "id": "green-salads-item-4",
              "name": "wrap",
              "keywords": [
                "wrap"
              ]
            },
            {
              "id": "green-salads-item-5",
              "name": "taze portakal suyu",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "green salads",
        "salata",
        "sağlıklı",
        "fit",
        "bowl",
        "wrap",
        "diyet"
      ],
      "filterTags": [
        "restoran",
        "sağlıklı",
        "hafif"
      ],
      "whyChoose": "Bölgedeki ana sağlıklı/hafif yemek seçeneği."
    },
    "directions": {
      "query": "Green Salads Beach Park Antalya"
    },
    "digital": {
      "website": "greensalads.com.tr",
      "instagram": "@greensalads",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "la-rocca-cafe-bistro",
    "order": 28,
    "name": "La Rocca Cafe & Bistro",
    "normalizedName": "la rocca cafe bistro",
    "category": "Restoran",
    "subcategory": "Cafe & bistro",
    "concept": "Odun fırını pizza + steak + etkinlik geceleri",
    "priceLevel": "Orta-Üst",
    "zoneId": "zone-03-center",
    "focusType": "restoran",
    "mapFocusPoint": {
      "x": 0.587,
      "y": 0.5
    },
    "card": {
      "short": "Odun fırını pizza ve steak bistrosu.",
      "detail": "Pizza, steak ve kahvaltıyı tek çatıda sunar. Latin geceleri gibi etkinlikleriyle de bilinir.",
      "features": [
        "Pizza",
        "Steak",
        "Kahvaltı"
      ],
      "featuredProduct": "Odun fırını pizza",
      "campaign": "Hafta sonu serpme kahvaltı (demo önerisi)",
      "promo": "Sabah kahvaltı, akşam Latin gecesi."
    },
    "menu": {
      "categories": [
        "Pizzalar",
        "steakler",
        "kahvaltı",
        "makarnalar",
        "kokteyller"
      ],
      "topItems": [
        "odun fırını pizza",
        "antrikot",
        "serpme kahvaltı",
        "makarna",
        "kokteyl"
      ],
      "sections": [
        {
          "id": "la-rocca-cafe-bistro-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "la-rocca-cafe-bistro-item-1",
              "name": "odun fırını pizza",
              "keywords": [
                "pizza"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-item-2",
              "name": "antrikot",
              "keywords": []
            },
            {
              "id": "la-rocca-cafe-bistro-item-3",
              "name": "serpme kahvaltı",
              "keywords": [
                "kahvaltı"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-item-4",
              "name": "makarna",
              "keywords": [
                "makarna"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-item-5",
              "name": "kokteyl",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "la rocca",
        "pizza",
        "steak",
        "kahvaltı",
        "bistro",
        "makarna",
        "akşam yemeği"
      ],
      "filterTags": [
        "restoran",
        "pizza",
        "etkinlik"
      ],
      "whyChoose": "Gün boyu tek mekan: kahvaltıdan akşam etkinliğine."
    },
    "directions": {
      "query": "La Rocca Cafe & Bistro Beach Park Antalya"
    },
    "digital": {
      "website": "Bilinmiyor",
      "instagram": "@laroccaantalya (teyit edilmeli)",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": true
    },
    "notes": "Doküman normalize `la-rocca`; Sprint 1 ID standardı gereği `la-rocca-cafe-bistro` kullanıldı."
  },
  {
    "id": "coffees",
    "order": 29,
    "name": "Coffee's",
    "normalizedName": "coffees",
    "category": "Kafe",
    "subcategory": "Kahve",
    "concept": "Laptop dostu yerel kafe",
    "priceLevel": "Orta",
    "zoneId": "zone-04-east-mid",
    "focusType": "kafe",
    "mapFocusPoint": {
      "x": 0.6087,
      "y": 0.5
    },
    "card": {
      "short": "Sakin, çalışmaya uygun kahve mekanı.",
      "detail": "Espresso bazlı kahveler ve atıştırmalıklar sunar. Prizli masaları ve sakin ortamıyla laptop dostudur.",
      "features": [
        "Kahve",
        "Çalışma alanı",
        "Wifi"
      ],
      "featuredProduct": "Filtre kahve",
      "campaign": "Filtre kahvede ücretsiz tazeleme (demo önerisi)",
      "promo": "Laptopunu kap, kahven bizden sorulur."
    },
    "menu": {
      "categories": [
        "Kahveler",
        "soğuk içecekler",
        "atıştırmalıklar"
      ],
      "topItems": [
        "filtre kahve",
        "latte",
        "iced americano",
        "sandviç",
        "cookie"
      ],
      "sections": [
        {
          "id": "coffees-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "coffees-item-1",
              "name": "filtre kahve",
              "keywords": [
                "kahve",
                "filtre kahve"
              ]
            },
            {
              "id": "coffees-item-2",
              "name": "latte",
              "keywords": [
                "latte"
              ]
            },
            {
              "id": "coffees-item-3",
              "name": "iced americano",
              "keywords": []
            },
            {
              "id": "coffees-item-4",
              "name": "sandviç",
              "keywords": []
            },
            {
              "id": "coffees-item-5",
              "name": "cookie",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "coffees",
        "kahve",
        "filtre kahve",
        "çalışma",
        "latte",
        "wifi"
      ],
      "filterTags": [
        "kafe",
        "kahve",
        "çalışma"
      ],
      "whyChoose": "Sessiz, çalışılabilir ortam."
    },
    "directions": {
      "query": "Coffee's Beach Park Antalya"
    },
    "digital": {
      "website": "Bilinmiyor",
      "instagram": "Bilinmiyor",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "mackbear",
    "order": 30,
    "name": "Mackbear",
    "normalizedName": "mackbear",
    "category": "Kafe",
    "subcategory": "Kahve zinciri",
    "concept": "Hızlı büyüyen Türk kahve zinciri",
    "priceLevel": "Orta",
    "zoneId": "zone-04-east-mid",
    "focusType": "kafe",
    "mapFocusPoint": {
      "x": 0.6304,
      "y": 0.5
    },
    "card": {
      "short": "Ayı maskotlu Türk kahve zinciri.",
      "detail": "Espresso bazlı ve aromalı kahveler sunar. Bardak tasarımları ve soğuk içecekleriyle gençlerin tercihi.",
      "features": [
        "Kahve",
        "Soğuk içecek",
        "Paket servis"
      ],
      "featuredProduct": "Mackbear latte",
      "campaign": "Uygulama üzerinden sadakat puanı (demo önerisi)",
      "promo": "Ayı kadar güçlü kahve."
    },
    "menu": {
      "categories": [
        "Espresso bazlı",
        "soğuk kahveler",
        "frozen",
        "tatlılar"
      ],
      "topItems": [
        "latte",
        "iced mocha",
        "frozen",
        "americano",
        "san sebastian"
      ],
      "sections": [
        {
          "id": "mackbear-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "mackbear-item-1",
              "name": "latte",
              "keywords": [
                "latte"
              ]
            },
            {
              "id": "mackbear-item-2",
              "name": "iced mocha",
              "keywords": [
                "iced mocha"
              ]
            },
            {
              "id": "mackbear-item-3",
              "name": "frozen",
              "keywords": [
                "frozen"
              ]
            },
            {
              "id": "mackbear-item-4",
              "name": "americano",
              "keywords": []
            },
            {
              "id": "mackbear-item-5",
              "name": "san sebastian",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "mackbear",
        "kahve",
        "latte",
        "frozen",
        "iced mocha",
        "tatlı"
      ],
      "filterTags": [
        "kafe",
        "kahve"
      ],
      "whyChoose": "Genç, trend kahve zinciri deneyimi."
    },
    "directions": {
      "query": "Mackbear Coffee Beach Park Antalya"
    },
    "digital": {
      "website": "mackbear.com.tr",
      "instagram": "@mackbearcoffee",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "yotto",
    "order": 31,
    "name": "Yotto",
    "normalizedName": "yotto",
    "category": "Restoran",
    "subcategory": "Sushi & wok",
    "concept": "Sushi ve uzakdoğu mutfağı zinciri (not: kahve değil, sushi & wok markası)",
    "priceLevel": "Orta-Üst",
    "zoneId": "zone-04-east-mid",
    "focusType": "restoran",
    "mapFocusPoint": {
      "x": 0.6522,
      "y": 0.5
    },
    "card": {
      "short": "Sushi ve wok'un zincir adresi.",
      "detail": "Taze sushi setleri ve wok noodle çeşitleri sunar. Uzakdoğu mutfağı arayanlar için bölgedeki ana seçenek.",
      "features": [
        "Sushi",
        "Wok",
        "Paket servis"
      ],
      "featuredProduct": "Sushi set",
      "campaign": "Öğlen sushi set menüsü (demo önerisi)",
      "promo": "Akdeniz'de uzakdoğu molası."
    },
    "menu": {
      "categories": [
        "Sushi",
        "wok",
        "noodle",
        "başlangıçlar",
        "içecekler"
      ],
      "topItems": [
        "california roll",
        "somonlu sushi set",
        "tavuklu wok",
        "noodle",
        "gyoza"
      ],
      "sections": [
        {
          "id": "yotto-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "yotto-item-1",
              "name": "california roll",
              "keywords": []
            },
            {
              "id": "yotto-item-2",
              "name": "somonlu sushi set",
              "keywords": [
                "sushi"
              ]
            },
            {
              "id": "yotto-item-3",
              "name": "tavuklu wok",
              "keywords": [
                "wok"
              ]
            },
            {
              "id": "yotto-item-4",
              "name": "noodle",
              "keywords": [
                "noodle"
              ]
            },
            {
              "id": "yotto-item-5",
              "name": "gyoza",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "yotto",
        "sushi",
        "wok",
        "noodle",
        "japon",
        "uzakdoğu",
        "asya"
      ],
      "filterTags": [
        "restoran",
        "sushi",
        "asya"
      ],
      "whyChoose": "Bölgedeki tek dedike sushi & wok noktası."
    },
    "directions": {
      "query": "Yotto Beach Park Antalya"
    },
    "digital": {
      "website": "yotto.com.tr",
      "instagram": "@yottosushi",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": "Konsept notu: not: kahve değil, sushi & wok markası."
  },
  {
    "id": "ozsut",
    "order": 32,
    "name": "Özsüt",
    "normalizedName": "ozsut",
    "category": "Kafe & Tatlı",
    "subcategory": "Tatlı / kahvaltı",
    "concept": "1938 İzmir kökenli tatlı-kahvaltı zinciri",
    "priceLevel": "Orta-Üst",
    "zoneId": "zone-04-east-mid",
    "focusType": "kafe",
    "mapFocusPoint": {
      "x": 0.6739,
      "y": 0.5
    },
    "card": {
      "short": "Sütlü tatlının köklü zincir markası.",
      "detail": "Günlük sütle üretilen kazandibi ve cheesecake'leriyle bilinir. Kahvaltı ve dondurma da sunar.",
      "features": [
        "Sütlü tatlı",
        "Kahvaltı",
        "Dondurma"
      ],
      "featuredProduct": "Kazandibi",
      "campaign": "Tatlı + kahve ikilisi (demo önerisi)",
      "promo": "1938'den beri sütün en tatlı hali."
    },
    "menu": {
      "categories": [
        "Sütlü tatlılar",
        "cheesecake",
        "dondurma",
        "kahvaltı",
        "kahveler"
      ],
      "topItems": [
        "kazandibi",
        "cheesecake",
        "profiterol",
        "dondurma",
        "serpme kahvaltı"
      ],
      "sections": [
        {
          "id": "ozsut-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "ozsut-item-1",
              "name": "kazandibi",
              "keywords": [
                "kazandibi"
              ]
            },
            {
              "id": "ozsut-item-2",
              "name": "cheesecake",
              "keywords": [
                "cheesecake"
              ]
            },
            {
              "id": "ozsut-item-3",
              "name": "profiterol",
              "keywords": [
                "profiterol"
              ]
            },
            {
              "id": "ozsut-item-4",
              "name": "dondurma",
              "keywords": [
                "dondurma"
              ]
            },
            {
              "id": "ozsut-item-5",
              "name": "serpme kahvaltı",
              "keywords": [
                "kahvaltı"
              ]
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "özsüt",
        "tatlı",
        "kazandibi",
        "cheesecake",
        "kahvaltı",
        "dondurma",
        "profiterol"
      ],
      "filterTags": [
        "tatlı",
        "kahvaltı",
        "kafe"
      ],
      "whyChoose": "Köklü marka, garantili sütlü tatlı."
    },
    "directions": {
      "query": "Özsüt Beach Park Antalya"
    },
    "digital": {
      "website": "ozsut.com.tr",
      "instagram": "@ozsut",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "varuna-gezgin",
    "order": 33,
    "name": "Varuna",
    "normalizedName": "varuna",
    "category": "Kafe & Restoran",
    "subcategory": "Gezgin temalı kafe",
    "concept": "Varuna Gezgin — seyahat temalı kafe-restoran (Antalya ana şube Kaleiçi; Beach Park noktası teyit edilmeli)",
    "priceLevel": "Orta-Üst",
    "zoneId": "zone-04-east-mid",
    "focusType": "restoran",
    "mapFocusPoint": {
      "x": 0.6957,
      "y": 0.5
    },
    "card": {
      "short": "Dünya mutfağından seyahat temalı kafe.",
      "detail": "Dünya kahveleri, kokteyller ve uluslararası menü sunar. Gezgin dekorasyonuyla fotoğraflık bir mekan.",
      "features": [
        "Dünya mutfağı",
        "Kahve",
        "Kokteyl"
      ],
      "featuredProduct": "Dünya kahveleri seçkisi",
      "campaign": "Günün gezgin menüsü (demo önerisi)",
      "promo": "Oturduğun yerden dünya turu."
    },
    "menu": {
      "categories": [
        "Kahveler",
        "dünya mutfağı",
        "burgerler",
        "kokteyller",
        "tatlılar"
      ],
      "topItems": [
        "dünya kahveleri",
        "burger",
        "makarna",
        "kokteyl",
        "waffle"
      ],
      "sections": [
        {
          "id": "varuna-gezgin-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "varuna-gezgin-item-1",
              "name": "dünya kahveleri",
              "keywords": [
                "kahve",
                "dünya mutfağı"
              ]
            },
            {
              "id": "varuna-gezgin-item-2",
              "name": "burger",
              "keywords": [
                "burger"
              ]
            },
            {
              "id": "varuna-gezgin-item-3",
              "name": "makarna",
              "keywords": []
            },
            {
              "id": "varuna-gezgin-item-4",
              "name": "kokteyl",
              "keywords": [
                "kokteyl"
              ]
            },
            {
              "id": "varuna-gezgin-item-5",
              "name": "waffle",
              "keywords": [
                "waffle"
              ]
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "varuna",
        "gezgin",
        "kahve",
        "kokteyl",
        "dünya mutfağı",
        "burger",
        "waffle"
      ],
      "filterTags": [
        "kafe",
        "restoran",
        "tematik"
      ],
      "whyChoose": "Tematik dekor + geniş menü deneyimi."
    },
    "directions": {
      "query": "Varuna Gezgin Beach Park Antalya"
    },
    "digital": {
      "website": "varunagezgin.com",
      "instagram": "@varunagezgin",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": true
    },
    "notes": "Konsept notu: Antalya ana şube Kaleiçi; Beach Park noktası teyit edilmeli."
  },
  {
    "id": "bereket-doner",
    "order": 34,
    "name": "Bereket Döner",
    "normalizedName": "bereket doner",
    "category": "Restoran",
    "subcategory": "Döner",
    "concept": "Ekonomik döner zinciri",
    "priceLevel": "Ucuz",
    "zoneId": "zone-04-east-mid",
    "focusType": "fast-food",
    "mapFocusPoint": {
      "x": 0.7174,
      "y": 0.5
    },
    "card": {
      "short": "Hızlı ve ekonomik döner zinciri.",
      "detail": "Tavuk ve et döneri ekmek arası ve dürüm olarak sunar. Hızlı, doyurucu öğünün en uygun adresi.",
      "features": [
        "Döner",
        "Ekonomik",
        "Hızlı servis"
      ],
      "featuredProduct": "Tavuk döner dürüm",
      "campaign": "Dürüm + içecek kampanya fiyatı",
      "promo": "Bereketli döner, cebe dost fiyat."
    },
    "menu": {
      "categories": [
        "Tavuk döner",
        "et döner",
        "dürümler",
        "menüler",
        "içecekler"
      ],
      "topItems": [
        "tavuk dürüm",
        "et dürüm",
        "ekmek arası döner",
        "menü",
        "ayran"
      ],
      "sections": [
        {
          "id": "bereket-doner-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "bereket-doner-item-1",
              "name": "tavuk dürüm",
              "keywords": [
                "dürüm",
                "tavuk döner"
              ]
            },
            {
              "id": "bereket-doner-item-2",
              "name": "et dürüm",
              "keywords": [
                "dürüm"
              ]
            },
            {
              "id": "bereket-doner-item-3",
              "name": "ekmek arası döner",
              "keywords": [
                "döner"
              ]
            },
            {
              "id": "bereket-doner-item-4",
              "name": "menü",
              "keywords": []
            },
            {
              "id": "bereket-doner-item-5",
              "name": "ayran",
              "keywords": [
                "ayran"
              ]
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "bereket",
        "döner",
        "dürüm",
        "tavuk döner",
        "ucuz",
        "ayran"
      ],
      "filterTags": [
        "fast-food",
        "döner",
        "ekonomik"
      ],
      "whyChoose": "En hızlı ve en ekonomik döner."
    },
    "directions": {
      "query": "Bereket Döner Beach Park Antalya"
    },
    "digital": {
      "website": "bereketdoner.com.tr",
      "instagram": "@bereketdoner",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "coffee-di-toee",
    "order": 35,
    "name": "Coffee Di Toee",
    "normalizedName": "coffee di toee",
    "category": "Kafe",
    "subcategory": "Specialty kahve",
    "concept": "İtalyan tarzı specialty kahve dükkanı (yazım \"Coffee Di Toeé\" olabilir — not edildi)",
    "priceLevel": "Orta",
    "zoneId": "zone-04-east-mid",
    "focusType": "kafe",
    "mapFocusPoint": {
      "x": 0.7391,
      "y": 0.5
    },
    "card": {
      "short": "İtalyan usulü specialty kahveci.",
      "detail": "İtalyan espresso geleneğiyle specialty kahveler sunar. Küçük ama nitelikli bir kahve durağı.",
      "features": [
        "Espresso",
        "Specialty",
        "Tatlı"
      ],
      "featuredProduct": "İtalyan espresso",
      "campaign": "Espresso + mini tatlı ikilisi (demo önerisi)",
      "promo": "İtalyan usulü kısa ve sert."
    },
    "menu": {
      "categories": [
        "Espresso bazlı",
        "filtre kahve",
        "soğuk kahveler",
        "tatlılar"
      ],
      "topItems": [
        "espresso",
        "cappuccino",
        "latte",
        "tiramisu",
        "cookie"
      ],
      "sections": [
        {
          "id": "coffee-di-toee-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "coffee-di-toee-item-1",
              "name": "espresso",
              "keywords": [
                "espresso"
              ]
            },
            {
              "id": "coffee-di-toee-item-2",
              "name": "cappuccino",
              "keywords": [
                "cappuccino"
              ]
            },
            {
              "id": "coffee-di-toee-item-3",
              "name": "latte",
              "keywords": [
                "latte"
              ]
            },
            {
              "id": "coffee-di-toee-item-4",
              "name": "tiramisu",
              "keywords": [
                "tiramisu"
              ]
            },
            {
              "id": "coffee-di-toee-item-5",
              "name": "cookie",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "di toee",
        "kahve",
        "espresso",
        "cappuccino",
        "latte",
        "tiramisu"
      ],
      "filterTags": [
        "kafe",
        "kahve"
      ],
      "whyChoose": "İtalyan tarzı espresso deneyimi."
    },
    "directions": {
      "query": "Coffee Di Toee Beach Park Antalya"
    },
    "digital": {
      "website": "Bilinmiyor",
      "instagram": "Bilinmiyor",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": "Konsept notu: yazım \"Coffee Di Toeé\" olabilir — not edildi."
  },
  {
    "id": "bex-coffee",
    "order": 36,
    "name": "Bex",
    "normalizedName": "bex",
    "category": "Kafe",
    "subcategory": "Kahve",
    "concept": "Bex Coffee — modern kahve dükkanı",
    "priceLevel": "Orta",
    "zoneId": "zone-04-east-mid",
    "focusType": "kafe",
    "mapFocusPoint": {
      "x": 0.7609,
      "y": 0.5
    },
    "card": {
      "short": "Modern ve hızlı kahve durağı.",
      "detail": "Espresso bazlı ve soğuk kahveler sunar. Sahil yürüyüşünde al-git kahve için pratik nokta.",
      "features": [
        "Kahve",
        "Al-git",
        "Soğuk içecek"
      ],
      "featuredProduct": "Iced latte",
      "campaign": "Sabah saatlerinde kahve indirimi (demo önerisi)",
      "promo": "Kahveni al, sahile devam."
    },
    "menu": {
      "categories": [
        "Kahveler",
        "soğuk içecekler",
        "atıştırmalıklar"
      ],
      "topItems": [
        "iced latte",
        "americano",
        "filtre kahve",
        "limonata",
        "cookie"
      ],
      "sections": [
        {
          "id": "bex-coffee-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "bex-coffee-item-1",
              "name": "iced latte",
              "keywords": [
                "iced latte"
              ]
            },
            {
              "id": "bex-coffee-item-2",
              "name": "americano",
              "keywords": [
                "americano"
              ]
            },
            {
              "id": "bex-coffee-item-3",
              "name": "filtre kahve",
              "keywords": [
                "kahve"
              ]
            },
            {
              "id": "bex-coffee-item-4",
              "name": "limonata",
              "keywords": []
            },
            {
              "id": "bex-coffee-item-5",
              "name": "cookie",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "bex",
        "kahve",
        "iced latte",
        "americano",
        "soğuk kahve"
      ],
      "filterTags": [
        "kafe",
        "kahve",
        "hızlı"
      ],
      "whyChoose": "Hızlı al-git kahve."
    },
    "directions": {
      "query": "Bex Coffee Beach Park Antalya"
    },
    "digital": {
      "website": "Bilinmiyor",
      "instagram": "Bilinmiyor",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "mcdonalds",
    "order": 37,
    "name": "McDonald's",
    "normalizedName": "mcdonalds",
    "category": "Restoran",
    "subcategory": "Fast food",
    "concept": "Global fast food zinciri",
    "priceLevel": "Ucuz",
    "zoneId": "zone-04-east-mid",
    "focusType": "fast-food",
    "mapFocusPoint": {
      "x": 0.7826,
      "y": 0.5
    },
    "card": {
      "short": "Dünyanın en bilinen fast food zinciri.",
      "detail": "Burger menüleri, nugget ve dondurma sunar. Hızlı ve tanıdık öğün için garanti nokta.",
      "features": [
        "Burger",
        "Hızlı servis",
        "Çocuk dostu"
      ],
      "featuredProduct": "Big Mac",
      "campaign": "Dönemsel menü kampanyaları",
      "promo": "Klasik Big Mac, deniz kenarında."
    },
    "menu": {
      "categories": [
        "Burger menüleri",
        "tavuk ürünleri",
        "patates",
        "tatlı & dondurma",
        "kahvaltı"
      ],
      "topItems": [
        "big mac",
        "mcchicken",
        "nugget",
        "patates",
        "mcflurry"
      ],
      "sections": [
        {
          "id": "mcdonalds-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "mcdonalds-item-1",
              "name": "big mac",
              "keywords": [
                "big mac"
              ]
            },
            {
              "id": "mcdonalds-item-2",
              "name": "mcchicken",
              "keywords": []
            },
            {
              "id": "mcdonalds-item-3",
              "name": "nugget",
              "keywords": [
                "nugget"
              ]
            },
            {
              "id": "mcdonalds-item-4",
              "name": "patates",
              "keywords": [
                "patates"
              ]
            },
            {
              "id": "mcdonalds-item-5",
              "name": "mcflurry",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "mcdonalds",
        "burger",
        "big mac",
        "nugget",
        "patates",
        "dondurma",
        "fast food"
      ],
      "filterTags": [
        "fast-food",
        "burger",
        "çocuk"
      ],
      "whyChoose": "Hızlı, tanıdık, çocuklu aileler için garanti."
    },
    "directions": {
      "query": "McDonald's Beach Park Antalya"
    },
    "digital": {
      "website": "mcdonalds.com.tr",
      "instagram": "@mcdonaldsturkiye",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "durumle",
    "order": 38,
    "name": "Dürümlé",
    "normalizedName": "durumle",
    "category": "Restoran",
    "subcategory": "Dürüm",
    "concept": "Modern dürüm zinciri",
    "priceLevel": "Orta",
    "zoneId": "zone-04-east-mid",
    "focusType": "fast-food",
    "mapFocusPoint": {
      "x": 0.8043,
      "y": 0.5
    },
    "card": {
      "short": "Dürümün modern zincir hali.",
      "detail": "Et ve tavuk dürüm çeşitlerini modern sunumla servis eder. Hızlı ama nitelikli dürüm arayanlara.",
      "features": [
        "Dürüm",
        "Hızlı servis",
        "Paket servis"
      ],
      "featuredProduct": "Kaşarlı et dürüm",
      "campaign": "Dürüm + ayran + patates menü (demo önerisi)",
      "promo": "Dürümün lüks hali: Dürümlé."
    },
    "menu": {
      "categories": [
        "Et dürümler",
        "tavuk dürümler",
        "yan ürünler",
        "içecekler"
      ],
      "topItems": [
        "kaşarlı et dürüm",
        "tavuk dürüm",
        "zurna dürüm",
        "patates",
        "ayran"
      ],
      "sections": [
        {
          "id": "durumle-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "durumle-item-1",
              "name": "kaşarlı et dürüm",
              "keywords": [
                "dürüm",
                "et dürüm"
              ]
            },
            {
              "id": "durumle-item-2",
              "name": "tavuk dürüm",
              "keywords": [
                "dürüm",
                "tavuk dürüm"
              ]
            },
            {
              "id": "durumle-item-3",
              "name": "zurna dürüm",
              "keywords": [
                "dürüm"
              ]
            },
            {
              "id": "durumle-item-4",
              "name": "patates",
              "keywords": []
            },
            {
              "id": "durumle-item-5",
              "name": "ayran",
              "keywords": [
                "ayran"
              ]
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "dürümle",
        "dürüm",
        "et dürüm",
        "tavuk dürüm",
        "döner",
        "ayran"
      ],
      "filterTags": [
        "fast-food",
        "dürüm"
      ],
      "whyChoose": "Nitelikli malzemeyle modern dürüm."
    },
    "directions": {
      "query": "Dürümlé Beach Park Antalya"
    },
    "digital": {
      "website": "durumle.com.tr",
      "instagram": "@durumle",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "burger-king",
    "order": 39,
    "name": "Burger King",
    "normalizedName": "burger king",
    "category": "Restoran",
    "subcategory": "Fast food",
    "concept": "Global fast food zinciri",
    "priceLevel": "Ucuz",
    "zoneId": "zone-05-east-end",
    "focusType": "fast-food",
    "mapFocusPoint": {
      "x": 0.8261,
      "y": 0.5
    },
    "card": {
      "short": "Alevde ızgara burgerin global zinciri.",
      "detail": "Whopper başta olmak üzere ızgara burger menüleri sunar. Hızlı ve doyurucu fast food seçeneği.",
      "features": [
        "Burger",
        "Izgara",
        "Hızlı servis"
      ],
      "featuredProduct": "Whopper",
      "campaign": "King Fırsat menüleri (gerçek kampanya konsepti)",
      "promo": "Alevde ızgara fark yaratır."
    },
    "menu": {
      "categories": [
        "Burger menüleri",
        "tavuk ürünleri",
        "patates & yan ürünler",
        "tatlılar"
      ],
      "topItems": [
        "whopper",
        "king chicken",
        "nugget",
        "patates",
        "sundae"
      ],
      "sections": [
        {
          "id": "burger-king-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "burger-king-item-1",
              "name": "whopper",
              "keywords": [
                "whopper"
              ]
            },
            {
              "id": "burger-king-item-2",
              "name": "king chicken",
              "keywords": []
            },
            {
              "id": "burger-king-item-3",
              "name": "nugget",
              "keywords": [
                "nugget"
              ]
            },
            {
              "id": "burger-king-item-4",
              "name": "patates",
              "keywords": [
                "patates"
              ]
            },
            {
              "id": "burger-king-item-5",
              "name": "sundae",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "burger king",
        "burger",
        "whopper",
        "nugget",
        "ızgara",
        "patates",
        "fast food"
      ],
      "filterTags": [
        "fast-food",
        "burger"
      ],
      "whyChoose": "Izgara burger ve kampanyalı menüler."
    },
    "directions": {
      "query": "Burger King Beach Park Antalya"
    },
    "digital": {
      "website": "burgerking.com.tr",
      "instagram": "@burgerkingtr",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "subway",
    "order": 40,
    "name": "Subway",
    "normalizedName": "subway",
    "category": "Restoran",
    "subcategory": "Sandviç",
    "concept": "Global sandviç zinciri",
    "priceLevel": "Ucuz",
    "zoneId": "zone-05-east-end",
    "focusType": "fast-food",
    "mapFocusPoint": {
      "x": 0.8478,
      "y": 0.5
    },
    "card": {
      "short": "Kişiselleştirilebilir taze sandviç zinciri.",
      "detail": "Malzemesini kendin seçtiğin sandviç ve salatalar sunar. Hafif ve hızlı öğün alternatifi.",
      "features": [
        "Sandviç",
        "Salata",
        "Hafif öğün"
      ],
      "featuredProduct": "Tavuklu sub sandviç",
      "campaign": "Günün subu kampanyası (gerçek kampanya konsepti)",
      "promo": "Sandviçini kendin tasarla."
    },
    "menu": {
      "categories": [
        "Sub sandviçler",
        "salatalar",
        "wrapler",
        "cookieler",
        "içecekler"
      ],
      "topItems": [
        "tavuklu sub",
        "ton balıklı sub",
        "köfteli sub",
        "salata",
        "cookie"
      ],
      "sections": [
        {
          "id": "subway-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "subway-item-1",
              "name": "tavuklu sub",
              "keywords": [
                "sub"
              ]
            },
            {
              "id": "subway-item-2",
              "name": "ton balıklı sub",
              "keywords": [
                "sub"
              ]
            },
            {
              "id": "subway-item-3",
              "name": "köfteli sub",
              "keywords": [
                "sub"
              ]
            },
            {
              "id": "subway-item-4",
              "name": "salata",
              "keywords": [
                "salata"
              ]
            },
            {
              "id": "subway-item-5",
              "name": "cookie",
              "keywords": [
                "cookie"
              ]
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "subway",
        "sandviç",
        "sub",
        "salata",
        "wrap",
        "hafif",
        "cookie"
      ],
      "filterTags": [
        "fast-food",
        "sandviç",
        "hafif"
      ],
      "whyChoose": "Fast food içinde hafif ve özelleştirilebilir seçenek."
    },
    "directions": {
      "query": "Subway Beach Park Antalya"
    },
    "digital": {
      "website": "subway.com.tr",
      "instagram": "@subwayturkiye",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "arbys",
    "order": 41,
    "name": "Arby's",
    "normalizedName": "arbys",
    "category": "Restoran",
    "subcategory": "Fast food",
    "concept": "Roast beef odaklı fast food zinciri",
    "priceLevel": "Orta",
    "zoneId": "zone-05-east-end",
    "focusType": "fast-food",
    "mapFocusPoint": {
      "x": 0.8696,
      "y": 0.5
    },
    "card": {
      "short": "Roast beef sandviçin zincir adresi.",
      "detail": "İnce dilim rosto et sandviçleriyle bilinir. Klasik burger dışında fast food arayanlara.",
      "features": [
        "Roast beef",
        "Sandviç",
        "Hızlı servis"
      ],
      "featuredProduct": "Roast beef sandviç",
      "campaign": "Menü yükseltme kampanyası (demo önerisi)",
      "promo": "Burger değil, roast beef."
    },
    "menu": {
      "categories": [
        "Roast beef sandviçler",
        "tavuk ürünleri",
        "patates",
        "içecekler"
      ],
      "topItems": [
        "klasik roast beef",
        "çıtır tavuk sandviç",
        "curly fries",
        "milkshake",
        "nugget"
      ],
      "sections": [
        {
          "id": "arbys-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "arbys-item-1",
              "name": "klasik roast beef",
              "keywords": [
                "roast beef"
              ]
            },
            {
              "id": "arbys-item-2",
              "name": "çıtır tavuk sandviç",
              "keywords": [
                "sandviç"
              ]
            },
            {
              "id": "arbys-item-3",
              "name": "curly fries",
              "keywords": []
            },
            {
              "id": "arbys-item-4",
              "name": "milkshake",
              "keywords": [
                "milkshake"
              ]
            },
            {
              "id": "arbys-item-5",
              "name": "nugget",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "arbys",
        "roast beef",
        "sandviç",
        "fast food",
        "patates",
        "milkshake"
      ],
      "filterTags": [
        "fast-food",
        "sandviç"
      ],
      "whyChoose": "Burger dışı fast food alternatifi."
    },
    "directions": {
      "query": "Arby's Beach Park Antalya"
    },
    "digital": {
      "website": "arbys.com.tr",
      "instagram": "@arbysturkiye",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "popeyes",
    "order": 42,
    "name": "Popeyes",
    "normalizedName": "popeyes",
    "category": "Restoran",
    "subcategory": "Tavuk fast food",
    "concept": "Louisiana tarzı çıtır tavuk zinciri",
    "priceLevel": "Orta",
    "zoneId": "zone-05-east-end",
    "focusType": "fast-food",
    "mapFocusPoint": {
      "x": 0.8913,
      "y": 0.5
    },
    "card": {
      "short": "Louisiana usulü çıtır tavuk zinciri.",
      "detail": "Baharatlı çıtır tavuk ve tavuk burger sunar. Acılı seçenekleriyle öne çıkar.",
      "features": [
        "Çıtır tavuk",
        "Acılı seçenek",
        "Hızlı servis"
      ],
      "featuredProduct": "Çıtır tavuk menü",
      "campaign": "Sepet menü kampanyaları",
      "promo": "Louisiana baharatıyla çıtır çıtır."
    },
    "menu": {
      "categories": [
        "Çıtır tavuklar",
        "tavuk burgerler",
        "sepet menüler",
        "yan ürünler"
      ],
      "topItems": [
        "çıtır tavuk",
        "tavuk burger",
        "kanat",
        "biscuit",
        "patates"
      ],
      "sections": [
        {
          "id": "popeyes-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "popeyes-item-1",
              "name": "çıtır tavuk",
              "keywords": [
                "tavuk",
                "çıtır tavuk"
              ]
            },
            {
              "id": "popeyes-item-2",
              "name": "tavuk burger",
              "keywords": [
                "tavuk",
                "çıtır tavuk",
                "tavuk burger"
              ]
            },
            {
              "id": "popeyes-item-3",
              "name": "kanat",
              "keywords": [
                "kanat"
              ]
            },
            {
              "id": "popeyes-item-4",
              "name": "biscuit",
              "keywords": []
            },
            {
              "id": "popeyes-item-5",
              "name": "patates",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "popeyes",
        "tavuk",
        "çıtır tavuk",
        "kanat",
        "tavuk burger",
        "acılı"
      ],
      "filterTags": [
        "fast-food",
        "tavuk"
      ],
      "whyChoose": "Baharatlı çıtır tavukta iddialı zincir."
    },
    "directions": {
      "query": "Popeyes Beach Park Antalya"
    },
    "digital": {
      "website": "popeyes.com.tr",
      "instagram": "@popeyesturkiye",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "kfc",
    "order": 43,
    "name": "KFC",
    "normalizedName": "kfc",
    "category": "Restoran",
    "subcategory": "Tavuk fast food",
    "concept": "Global çıtır tavuk zinciri",
    "priceLevel": "Orta",
    "zoneId": "zone-05-east-end",
    "focusType": "fast-food",
    "mapFocusPoint": {
      "x": 0.913,
      "y": 0.5
    },
    "card": {
      "short": "Orijinal çıtır tavuğun global zinciri.",
      "detail": "Kova menüler, tavuk burger ve kanat çeşitleri sunar. Kalabalık gruplar için paylaşımlık menüler ideal.",
      "features": [
        "Çıtır tavuk",
        "Kova menü",
        "Grup dostu"
      ],
      "featuredProduct": "Kova menü",
      "campaign": "Çarşamba kova kampanyası (gerçek kampanya konsepti)",
      "promo": "Kova senin, plaj bizim."
    },
    "menu": {
      "categories": [
        "Kova menüler",
        "burgerler",
        "kanatlar",
        "yan ürünler",
        "tatlılar"
      ],
      "topItems": [
        "kova menü",
        "zinger burger",
        "kanat",
        "çıtır tavuk",
        "patates"
      ],
      "sections": [
        {
          "id": "kfc-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "kfc-item-1",
              "name": "kova menü",
              "keywords": [
                "kova"
              ]
            },
            {
              "id": "kfc-item-2",
              "name": "zinger burger",
              "keywords": [
                "zinger"
              ]
            },
            {
              "id": "kfc-item-3",
              "name": "kanat",
              "keywords": [
                "kanat"
              ]
            },
            {
              "id": "kfc-item-4",
              "name": "çıtır tavuk",
              "keywords": [
                "tavuk",
                "çıtır tavuk"
              ]
            },
            {
              "id": "kfc-item-5",
              "name": "patates",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "kfc",
        "tavuk",
        "kova",
        "kanat",
        "zinger",
        "çıtır tavuk"
      ],
      "filterTags": [
        "fast-food",
        "tavuk",
        "grup"
      ],
      "whyChoose": "Grupça paylaşımlık tavuk menüleri."
    },
    "directions": {
      "query": "KFC Beach Park Antalya"
    },
    "digital": {
      "website": "kfc.com.tr",
      "instagram": "@kfcturkiye",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "hmbrgr",
    "order": 44,
    "name": "HMBRGR",
    "normalizedName": "hmbrgr",
    "category": "Restoran",
    "subcategory": "Burger",
    "concept": "Gourmet burger zinciri",
    "priceLevel": "Orta-Üst",
    "zoneId": "zone-05-east-end",
    "focusType": "restoran",
    "mapFocusPoint": {
      "x": 0.9348,
      "y": 0.5
    },
    "card": {
      "short": "Gourmet burgerin sessiz harfli markası.",
      "detail": "Dry-aged et ve özel soslu gourmet burgerler sunar. Fast food üstü burger deneyimi arayanlara.",
      "features": [
        "Gourmet burger",
        "Özel soslar",
        "Craft"
      ],
      "featuredProduct": "Signature HMBRGR",
      "campaign": "Burger + craft limonata menü (demo önerisi)",
      "promo": "Sesli harfe gerek yok, lezzet konuşuyor."
    },
    "menu": {
      "categories": [
        "Gourmet burgerler",
        "tavuk burgerler",
        "yan ürünler",
        "milkshake"
      ],
      "topItems": [
        "signature burger",
        "trüflü burger",
        "çıtır tavuk burger",
        "parmesan patates",
        "milkshake"
      ],
      "sections": [
        {
          "id": "hmbrgr-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "hmbrgr-item-1",
              "name": "signature burger",
              "keywords": [
                "burger"
              ]
            },
            {
              "id": "hmbrgr-item-2",
              "name": "trüflü burger",
              "keywords": [
                "burger",
                "trüf"
              ]
            },
            {
              "id": "hmbrgr-item-3",
              "name": "çıtır tavuk burger",
              "keywords": [
                "burger"
              ]
            },
            {
              "id": "hmbrgr-item-4",
              "name": "parmesan patates",
              "keywords": [
                "patates"
              ]
            },
            {
              "id": "hmbrgr-item-5",
              "name": "milkshake",
              "keywords": [
                "milkshake"
              ]
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "hmbrgr",
        "burger",
        "gourmet",
        "trüflü burger",
        "gourmet burger",
        "trüf",
        "milkshake",
        "patates"
      ],
      "filterTags": [
        "burger",
        "restoran",
        "premium"
      ],
      "whyChoose": "Premium burger deneyimi."
    },
    "directions": {
      "query": "HMBRGR Beach Park Antalya"
    },
    "digital": {
      "website": "hmbrgr.com.tr",
      "instagram": "@hmbrgr",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": false
    },
    "notes": ""
  },
  {
    "id": "hamlet-market-02",
    "order": 45,
    "name": "Hamlet Market (2. nokta)",
    "normalizedName": "hamlet market 2 nokta",
    "category": "Market",
    "subcategory": "Mini market / büfe",
    "concept": "Aynı markanın hattın sağ ucuna yakın ikinci şubesi (not: liste sıra 16 ile aynı marka; iki ayrı harita noktası olarak modellendi)",
    "priceLevel": "Ucuz",
    "zoneId": "zone-05-east-end",
    "focusType": "market",
    "mapFocusPoint": {
      "x": 0.9565,
      "y": 0.5
    },
    "card": {
      "short": "Hattın doğu ucundaki ikinci Hamlet Market.",
      "detail": "İçecek, atıştırmalık ve plaj ihtiyaçları satar. Shakespeare tarafında kalanlar için en yakın market.",
      "features": [
        "İçecek",
        "Atıştırmalık",
        "Plaj ürünleri"
      ],
      "featuredProduct": "Soğuk içecek dolabı",
      "campaign": "Su + atıştırmalık ikilisi (demo önerisi)",
      "promo": "Sağ uçtakilerin marketi."
    },
    "menu": {
      "categories": [
        "İçecekler",
        "atıştırmalıklar",
        "dondurma",
        "plaj ürünleri",
        "temel gıda"
      ],
      "topItems": [
        "su",
        "soğuk içecek",
        "dondurma",
        "cips",
        "güneş kremi"
      ],
      "sections": [
        {
          "id": "hamlet-market-02-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "hamlet-market-02-item-1",
              "name": "su",
              "keywords": [
                "su"
              ]
            },
            {
              "id": "hamlet-market-02-item-2",
              "name": "soğuk içecek",
              "keywords": [
                "içecek"
              ]
            },
            {
              "id": "hamlet-market-02-item-3",
              "name": "dondurma",
              "keywords": [
                "dondurma"
              ]
            },
            {
              "id": "hamlet-market-02-item-4",
              "name": "cips",
              "keywords": []
            },
            {
              "id": "hamlet-market-02-item-5",
              "name": "güneş kremi",
              "keywords": [
                "güneş kremi"
              ]
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "hamlet",
        "market",
        "su",
        "içecek",
        "dondurma",
        "güneş kremi",
        "atıştırmalık"
      ],
      "filterTags": [
        "market",
        "hızlı ihtiyaç"
      ],
      "whyChoose": "Hattın sağ ucundaki en yakın market."
    },
    "directions": {
      "query": "Hamlet Market Shakespeare yanı Beach Park"
    },
    "digital": {
      "website": "Bilinmiyor",
      "instagram": "Bilinmiyor",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": true,
      "needsVerification": false
    },
    "notes": "Doküman işareti: Demo önerisi. Doküman normalize `hamlet-market-2`; Sprint 1 ID standardı gereği `hamlet-market-02` kullanıldı. Konsept notu: not: liste sıra 16 ile aynı marka; iki ayrı harita noktası olarak modellendi."
  },
  {
    "id": "paninaro",
    "order": 46,
    "name": "Paninaro",
    "normalizedName": "paninaro",
    "category": "Restoran",
    "subcategory": "Panini & sandviç",
    "concept": "Pizza hamuru ekmekle panini konsepti",
    "priceLevel": "Orta",
    "zoneId": "zone-05-east-end",
    "focusType": "fast-food",
    "mapFocusPoint": {
      "x": 0.9783,
      "y": 0.5
    },
    "card": {
      "short": "Pizza hamurundan ekmekle yapılan panini.",
      "detail": "Özel hamur ekmeğiyle sıcak panini çeşitleri sunar. Hızlı ama farklı bir sandviç deneyimi.",
      "features": [
        "Panini",
        "Sıcak sandviç",
        "Paket servis"
      ],
      "featuredProduct": "Klasik İtalyan panini",
      "campaign": "Panini + içecek menü (demo önerisi)",
      "promo": "Pizza hamuru, panini keyfi."
    },
    "menu": {
      "categories": [
        "Paniniler",
        "salatalar",
        "içecekler",
        "tatlılar"
      ],
      "topItems": [
        "kaşarlı panini",
        "tavuklu panini",
        "İtalyan sucuklu panini",
        "salata",
        "limonata"
      ],
      "sections": [
        {
          "id": "paninaro-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "paninaro-item-1",
              "name": "kaşarlı panini",
              "keywords": [
                "panini"
              ]
            },
            {
              "id": "paninaro-item-2",
              "name": "tavuklu panini",
              "keywords": [
                "panini"
              ]
            },
            {
              "id": "paninaro-item-3",
              "name": "İtalyan sucuklu panini",
              "keywords": [
                "panini",
                "italyan"
              ]
            },
            {
              "id": "paninaro-item-4",
              "name": "salata",
              "keywords": []
            },
            {
              "id": "paninaro-item-5",
              "name": "limonata",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "paninaro",
        "panini",
        "sandviç",
        "sıcak sandviç",
        "italyan"
      ],
      "filterTags": [
        "fast-food",
        "sandviç"
      ],
      "whyChoose": "Sandviçin İtalyan yorumu."
    },
    "directions": {
      "query": "Paninaro Beach Park Antalya"
    },
    "digital": {
      "website": "Bilinmiyor",
      "instagram": "@paninaro (teyit edilmeli)",
      "phone": "Bilinmiyor",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": true
    },
    "notes": ""
  },
  {
    "id": "shakespeare",
    "order": 47,
    "name": "Shakespeare",
    "normalizedName": "shakespeare",
    "category": "Kafe & Bistro",
    "subcategory": "Kahvaltı & bistro",
    "concept": "Shakespeare Coffee & Bistro — 2001'den beri, Antalya'nın ilk bistrolarından",
    "priceLevel": "Orta-Üst",
    "zoneId": "zone-05-east-end",
    "focusType": "kafe",
    "mapFocusPoint": {
      "x": 1,
      "y": 0.5
    },
    "card": {
      "short": "Antalya'nın köklü kahvaltı ve bistro markası.",
      "detail": "Serpme kahvaltıdan burgere geniş bistro menüsü sunar. Hattın sağ ucunda gün boyu oturulan klasik mekan.",
      "features": [
        "Kahvaltı",
        "Bistro",
        "Kahve"
      ],
      "featuredProduct": "Serpme kahvaltı",
      "campaign": "Hafta içi kahvaltı menüsü (demo önerisi)",
      "promo": "2001'den beri sahnede: Shakespeare."
    },
    "menu": {
      "categories": [
        "Kahvaltılar",
        "kahveler",
        "burgerler",
        "makarnalar",
        "tatlılar",
        "bowllar"
      ],
      "topItems": [
        "serpme kahvaltı",
        "shakespeare tost",
        "granola bowl",
        "burger",
        "latte"
      ],
      "sections": [
        {
          "id": "shakespeare-one-cikanlar",
          "title": "Öne Çıkanlar",
          "items": [
            {
              "id": "shakespeare-item-1",
              "name": "serpme kahvaltı",
              "keywords": [
                "kahvaltı",
                "serpme kahvaltı"
              ]
            },
            {
              "id": "shakespeare-item-2",
              "name": "shakespeare tost",
              "keywords": [
                "tost"
              ]
            },
            {
              "id": "shakespeare-item-3",
              "name": "granola bowl",
              "keywords": [
                "bowl"
              ]
            },
            {
              "id": "shakespeare-item-4",
              "name": "burger",
              "keywords": []
            },
            {
              "id": "shakespeare-item-5",
              "name": "latte",
              "keywords": []
            }
          ]
        }
      ]
    },
    "search": {
      "keywords": [
        "shakespeare",
        "kahvaltı",
        "tost",
        "bistro",
        "kahve",
        "serpme kahvaltı",
        "bowl"
      ],
      "filterTags": [
        "kafe",
        "kahvaltı",
        "bistro"
      ],
      "whyChoose": "Köklü marka, geniş gün boyu menü."
    },
    "directions": {
      "query": "Shakespeare Coffee & Bistro Beach Park Antalya"
    },
    "digital": {
      "website": "shakespearebistro.com (teyit edilmeli)",
      "instagram": "@shakespearecoffeebistro",
      "phone": "0242 230 22 70",
      "menuUrl": "Bilinmiyor"
    },
    "flags": {
      "demoSuggestion": false,
      "needsVerification": true
    },
    "notes": ""
  }
];
