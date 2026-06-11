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
          "id": "mado-sec-1",
          "title": "Dondurma",
          "items": [
            {
              "id": "mado-sec-1-item-1",
              "name": "Kesme Dondurma",
              "description": "Keçi sütlü Maraş usulü.",
              "tags": [
                "dondurma"
              ]
            },
            {
              "id": "mado-sec-1-item-2",
              "name": "Külahta İki Top",
              "description": "Günün çeşitleri.",
              "tags": [
                "dondurma"
              ]
            },
            {
              "id": "mado-sec-1-item-3",
              "name": "Çikolatalı Dondurma",
              "description": "Belçika çikolatalı.",
              "tags": [
                "dondurma"
              ]
            },
            {
              "id": "mado-sec-1-item-4",
              "name": "Meyveli Sorbe",
              "description": "Süt içermez.",
              "tags": [
                "dondurma"
              ]
            }
          ]
        },
        {
          "id": "mado-sec-2",
          "title": "Tatlılar",
          "items": [
            {
              "id": "mado-sec-2-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "mado-sec-2-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "mado-sec-2-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "mado-sec-2-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "mado-sec-2-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            }
          ]
        },
        {
          "id": "mado-sec-3",
          "title": "Kahvaltı",
          "items": [
            {
              "id": "mado-sec-3-item-1",
              "name": "Serpme Kahvaltı",
              "description": "Zengin köy kahvaltısı, sınırsız çay.",
              "tags": [
                "kahvalti"
              ]
            },
            {
              "id": "mado-sec-3-item-2",
              "name": "Menemen",
              "description": "Bol domatesli.",
              "tags": [
                "kahvalti"
              ]
            },
            {
              "id": "mado-sec-3-item-3",
              "name": "Avokado Tost",
              "description": "Ekşi maya üstü avokado.",
              "tags": [
                "kahvalti"
              ]
            },
            {
              "id": "mado-sec-3-item-4",
              "name": "Omlet Çeşitleri",
              "description": "Sade, kaşarlı, mantarlı.",
              "tags": [
                "kahvalti"
              ]
            },
            {
              "id": "mado-sec-3-item-5",
              "name": "Simit Tabağı",
              "description": "Simit, beyaz peynir, domates.",
              "tags": [
                "kahvalti"
              ]
            }
          ]
        },
        {
          "id": "mado-sec-4",
          "title": "Ana Yemek",
          "items": [
            {
              "id": "mado-sec-4-item-1",
              "name": "Izgara Köfte",
              "description": "El yapımı.",
              "tags": [
                "ana yemek"
              ]
            },
            {
              "id": "mado-sec-4-item-2",
              "name": "Antrikot",
              "description": "Tereyağlı.",
              "tags": [
                "ana yemek"
              ]
            },
            {
              "id": "mado-sec-4-item-3",
              "name": "Tavuk Şiş",
              "description": "Marine edilmiş.",
              "tags": [
                "ana yemek"
              ]
            },
            {
              "id": "mado-sec-4-item-4",
              "name": "Günün Yemeği",
              "description": "Şefin önerisi.",
              "tags": [
                "ana yemek"
              ]
            }
          ]
        },
        {
          "id": "mado-sec-5",
          "title": "Kahveler",
          "items": [
            {
              "id": "mado-sec-5-item-1",
              "name": "Türk Kahvesi",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "mado-sec-5-item-2",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "mado-sec-5-item-3",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "mado-sec-5-item-4",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "mado-sec-5-item-5",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "mado-sec-5-item-6",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "kahveler"
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
          "id": "irish-pub-sec-1",
          "title": "Biralar",
          "items": [
            {
              "id": "irish-pub-sec-1-item-1",
              "name": "Fıçı Bira",
              "description": "Soğuk, taze fıçı.",
              "tags": [
                "biralar"
              ]
            },
            {
              "id": "irish-pub-sec-1-item-2",
              "name": "Yerli Şişe Bira",
              "description": "Klasik seçki.",
              "tags": [
                "biralar"
              ]
            },
            {
              "id": "irish-pub-sec-1-item-3",
              "name": "İthal Bira",
              "description": "Dönemsel ithal etiketler.",
              "tags": [
                "biralar"
              ]
            },
            {
              "id": "irish-pub-sec-1-item-4",
              "name": "Alkolsüz Bira",
              "description": "Alkolsüz alternatif.",
              "tags": [
                "biralar"
              ]
            }
          ]
        },
        {
          "id": "irish-pub-sec-2",
          "title": "Kokteyller",
          "items": [
            {
              "id": "irish-pub-sec-2-item-1",
              "name": "Kokteyl",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "kokteyller"
              ]
            },
            {
              "id": "irish-pub-sec-2-item-2",
              "name": "Mojito",
              "description": "Nane ve lime ile.",
              "tags": [
                "kokteyller"
              ]
            },
            {
              "id": "irish-pub-sec-2-item-3",
              "name": "Aperol Spritz",
              "description": "Gün batımı klasiği.",
              "tags": [
                "kokteyller"
              ]
            },
            {
              "id": "irish-pub-sec-2-item-4",
              "name": "Gin Tonic",
              "description": "Aromatik bitkilerle.",
              "tags": [
                "kokteyller"
              ]
            },
            {
              "id": "irish-pub-sec-2-item-5",
              "name": "Margarita",
              "description": "Tuz kenarlı klasik.",
              "tags": [
                "kokteyller"
              ]
            }
          ]
        },
        {
          "id": "irish-pub-sec-3",
          "title": "Pub Atıştırmalıkları",
          "items": [
            {
              "id": "irish-pub-sec-3-item-1",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "pub atistirmaliklari"
              ]
            },
            {
              "id": "irish-pub-sec-3-item-2",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "pub atistirmaliklari"
              ]
            },
            {
              "id": "irish-pub-sec-3-item-3",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "pub atistirmaliklari"
              ]
            },
            {
              "id": "irish-pub-sec-3-item-4",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "pub atistirmaliklari"
              ]
            }
          ]
        },
        {
          "id": "irish-pub-sec-4",
          "title": "Burgerler",
          "items": [
            {
              "id": "irish-pub-sec-4-item-1",
              "name": "Burger",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "irish-pub-sec-4-item-2",
              "name": "Cheeseburger",
              "description": "Cheddar'lı klasik.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "irish-pub-sec-4-item-3",
              "name": "Double Burger",
              "description": "Çift köfte, yoğun lezzet.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "irish-pub-sec-4-item-4",
              "name": "Tavuk Burger",
              "description": "Çıtır tavuklu.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "irish-pub-sec-4-item-5",
              "name": "House Burger",
              "description": "Mekanın imza burgeri.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "irish-pub-sec-4-item-6",
              "name": "Mini Burger Tabağı",
              "description": "Üçlü tadım seti.",
              "tags": [
                "burgerler"
              ]
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
          "id": "the-beaver-cafe-sec-1",
          "title": "Espresso Bazlı Kahveler",
          "items": [
            {
              "id": "the-beaver-cafe-sec-1-item-1",
              "name": "Filtre Kahve",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "espresso bazli kahveler"
              ]
            },
            {
              "id": "the-beaver-cafe-sec-1-item-2",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "espresso bazli kahveler"
              ]
            },
            {
              "id": "the-beaver-cafe-sec-1-item-3",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "espresso bazli kahveler"
              ]
            },
            {
              "id": "the-beaver-cafe-sec-1-item-4",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "espresso bazli kahveler"
              ]
            },
            {
              "id": "the-beaver-cafe-sec-1-item-5",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "espresso bazli kahveler"
              ]
            },
            {
              "id": "the-beaver-cafe-sec-1-item-6",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "espresso bazli kahveler"
              ]
            }
          ]
        },
        {
          "id": "the-beaver-cafe-sec-2",
          "title": "Filtre Kahve",
          "items": [
            {
              "id": "the-beaver-cafe-sec-2-item-1",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "the-beaver-cafe-sec-2-item-2",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "the-beaver-cafe-sec-2-item-3",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "the-beaver-cafe-sec-2-item-4",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "the-beaver-cafe-sec-2-item-5",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "filtre kahve"
              ]
            }
          ]
        },
        {
          "id": "the-beaver-cafe-sec-3",
          "title": "Soğuk İçecekler",
          "items": [
            {
              "id": "the-beaver-cafe-sec-3-item-1",
              "name": "Iced Latte",
              "description": "Buz üstüne süt ve espresso.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "the-beaver-cafe-sec-3-item-2",
              "name": "Iced Americano",
              "description": "Buzlu sade kahve.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "the-beaver-cafe-sec-3-item-3",
              "name": "Cold Brew",
              "description": "12 saat soğuk demleme.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "the-beaver-cafe-sec-3-item-4",
              "name": "Frozen",
              "description": "Meyveli buz karışımı.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "the-beaver-cafe-sec-3-item-5",
              "name": "Iced Mocha",
              "description": "Çikolatalı soğuk kahve.",
              "tags": [
                "soguk icecekler"
              ]
            }
          ]
        },
        {
          "id": "the-beaver-cafe-sec-4",
          "title": "Tatlılar",
          "items": [
            {
              "id": "the-beaver-cafe-sec-4-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "the-beaver-cafe-sec-4-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "the-beaver-cafe-sec-4-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "the-beaver-cafe-sec-4-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "the-beaver-cafe-sec-4-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
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
          "id": "big-bubble-tea-sec-1",
          "title": "Sütlü Bubble Tea",
          "items": [
            {
              "id": "big-bubble-tea-sec-1-item-1",
              "name": "Taro Bubble Tea",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "sutlu bubble tea"
              ]
            },
            {
              "id": "big-bubble-tea-sec-1-item-2",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "sutlu bubble tea"
              ]
            },
            {
              "id": "big-bubble-tea-sec-1-item-3",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "sutlu bubble tea"
              ]
            },
            {
              "id": "big-bubble-tea-sec-1-item-4",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "sutlu bubble tea"
              ]
            },
            {
              "id": "big-bubble-tea-sec-1-item-5",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "sutlu bubble tea"
              ]
            },
            {
              "id": "big-bubble-tea-sec-1-item-6",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "sutlu bubble tea"
              ]
            }
          ]
        },
        {
          "id": "big-bubble-tea-sec-2",
          "title": "Meyveli Çaylar",
          "items": [
            {
              "id": "big-bubble-tea-sec-2-item-1",
              "name": "Çay",
              "description": "Demleme.",
              "tags": [
                "meyveli caylar"
              ]
            },
            {
              "id": "big-bubble-tea-sec-2-item-2",
              "name": "Bitki Çayı",
              "description": "Ihlamur, adaçayı, kuşburnu.",
              "tags": [
                "meyveli caylar"
              ]
            },
            {
              "id": "big-bubble-tea-sec-2-item-3",
              "name": "Türk Kahvesi",
              "description": "Közde.",
              "tags": [
                "meyveli caylar"
              ]
            },
            {
              "id": "big-bubble-tea-sec-2-item-4",
              "name": "Sahlep",
              "description": "Tarçınlı.",
              "tags": [
                "meyveli caylar"
              ]
            }
          ]
        },
        {
          "id": "big-bubble-tea-sec-3",
          "title": "Smoothie",
          "items": [
            {
              "id": "big-bubble-tea-sec-3-item-1",
              "name": "Mango Çayı",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "smoothie"
              ]
            },
            {
              "id": "big-bubble-tea-sec-3-item-2",
              "name": "Çilekli Smoothie",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "smoothie"
              ]
            },
            {
              "id": "big-bubble-tea-sec-3-item-3",
              "name": "Matcha Latte",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "smoothie"
              ]
            },
            {
              "id": "big-bubble-tea-sec-3-item-4",
              "name": "Milkshake",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "smoothie"
              ]
            }
          ]
        },
        {
          "id": "big-bubble-tea-sec-4",
          "title": "Milkshake",
          "items": [
            {
              "id": "big-bubble-tea-sec-4-item-1",
              "name": "Günün Önerisi",
              "description": "Sorunuz.",
              "tags": [
                "milkshake"
              ]
            },
            {
              "id": "big-bubble-tea-sec-4-item-2",
              "name": "Mevsim Seçkisi",
              "description": "Dönemsel.",
              "tags": [
                "milkshake"
              ]
            },
            {
              "id": "big-bubble-tea-sec-4-item-3",
              "name": "Paylaşımlık Tabak",
              "description": "2-3 kişilik.",
              "tags": [
                "milkshake"
              ]
            },
            {
              "id": "big-bubble-tea-sec-4-item-4",
              "name": "Ev Yapımı Limonata",
              "description": "Naneli.",
              "tags": [
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
          "id": "magnolia-shop-coffee-sec-1",
          "title": "Kahveler",
          "items": [
            {
              "id": "magnolia-shop-coffee-sec-1-item-1",
              "name": "Filtre Kahve",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "magnolia-shop-coffee-sec-1-item-2",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "magnolia-shop-coffee-sec-1-item-3",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "magnolia-shop-coffee-sec-1-item-4",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "magnolia-shop-coffee-sec-1-item-5",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "magnolia-shop-coffee-sec-1-item-6",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "kahveler"
              ]
            }
          ]
        },
        {
          "id": "magnolia-shop-coffee-sec-2",
          "title": "Soğuk İçecekler",
          "items": [
            {
              "id": "magnolia-shop-coffee-sec-2-item-1",
              "name": "Iced Latte",
              "description": "Buz üstüne süt ve espresso.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "magnolia-shop-coffee-sec-2-item-2",
              "name": "Iced Americano",
              "description": "Buzlu sade kahve.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "magnolia-shop-coffee-sec-2-item-3",
              "name": "Cold Brew",
              "description": "12 saat soğuk demleme.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "magnolia-shop-coffee-sec-2-item-4",
              "name": "Frozen",
              "description": "Meyveli buz karışımı.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "magnolia-shop-coffee-sec-2-item-5",
              "name": "Iced Mocha",
              "description": "Çikolatalı soğuk kahve.",
              "tags": [
                "soguk icecekler"
              ]
            }
          ]
        },
        {
          "id": "magnolia-shop-coffee-sec-3",
          "title": "Atıştırmalık",
          "items": [
            {
              "id": "magnolia-shop-coffee-sec-3-item-1",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "atistirmalik"
              ]
            },
            {
              "id": "magnolia-shop-coffee-sec-3-item-2",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "atistirmalik"
              ]
            },
            {
              "id": "magnolia-shop-coffee-sec-3-item-3",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "atistirmalik"
              ]
            },
            {
              "id": "magnolia-shop-coffee-sec-3-item-4",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "atistirmalik"
              ]
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
          "id": "danilos-pizza-sec-1",
          "title": "Pizzalar",
          "items": [
            {
              "id": "danilos-pizza-sec-1-item-1",
              "name": "Margherita",
              "description": "Domates, mozzarella, fesleğen.",
              "tags": [
                "pizzalar"
              ]
            },
            {
              "id": "danilos-pizza-sec-1-item-2",
              "name": "Quattro Formaggi",
              "description": "Dört peynirli.",
              "tags": [
                "pizzalar"
              ]
            },
            {
              "id": "danilos-pizza-sec-1-item-3",
              "name": "Sucuklu Pizza",
              "description": "Yerli dokunuş.",
              "tags": [
                "pizzalar"
              ]
            },
            {
              "id": "danilos-pizza-sec-1-item-4",
              "name": "Vejetaryen Pizza",
              "description": "Mevsim sebzeli.",
              "tags": [
                "pizzalar"
              ]
            }
          ]
        },
        {
          "id": "danilos-pizza-sec-2",
          "title": "Makarnalar",
          "items": [
            {
              "id": "danilos-pizza-sec-2-item-1",
              "name": "Penne Arrabiata",
              "description": "Acılı domates soslu.",
              "tags": [
                "makarnalar"
              ]
            },
            {
              "id": "danilos-pizza-sec-2-item-2",
              "name": "Fettuccine Alfredo",
              "description": "Kremalı.",
              "tags": [
                "makarnalar"
              ]
            },
            {
              "id": "danilos-pizza-sec-2-item-3",
              "name": "Bolonez",
              "description": "Kıymalı klasik.",
              "tags": [
                "makarnalar"
              ]
            },
            {
              "id": "danilos-pizza-sec-2-item-4",
              "name": "Pesto Makarna",
              "description": "Fesleğen soslu.",
              "tags": [
                "makarnalar"
              ]
            }
          ]
        },
        {
          "id": "danilos-pizza-sec-3",
          "title": "Salatalar",
          "items": [
            {
              "id": "danilos-pizza-sec-3-item-1",
              "name": "Sezar Salata",
              "description": "Izgara tavuklu.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "danilos-pizza-sec-3-item-2",
              "name": "Tavuklu Uzun Tabak",
              "description": "İmza salata.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "danilos-pizza-sec-3-item-3",
              "name": "Ton Balıklı Salata",
              "description": "Protein deposu.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "danilos-pizza-sec-3-item-4",
              "name": "Protein Bowl",
              "description": "Kinoa ve tavukla.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "danilos-pizza-sec-3-item-5",
              "name": "Wrap Çeşitleri",
              "description": "Tavuklu / sebzeli.",
              "tags": [
                "salatalar"
              ]
            }
          ]
        },
        {
          "id": "danilos-pizza-sec-4",
          "title": "Tatlılar",
          "items": [
            {
              "id": "danilos-pizza-sec-4-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "danilos-pizza-sec-4-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "danilos-pizza-sec-4-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "danilos-pizza-sec-4-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "danilos-pizza-sec-4-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatlilar"
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
          "id": "dospresso-sec-1",
          "title": "Sıcak Kahveler",
          "items": [
            {
              "id": "dospresso-sec-1-item-1",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "sicak kahveler"
              ]
            },
            {
              "id": "dospresso-sec-1-item-2",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "sicak kahveler"
              ]
            },
            {
              "id": "dospresso-sec-1-item-3",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "sicak kahveler"
              ]
            },
            {
              "id": "dospresso-sec-1-item-4",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "sicak kahveler"
              ]
            },
            {
              "id": "dospresso-sec-1-item-5",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "sicak kahveler"
              ]
            }
          ]
        },
        {
          "id": "dospresso-sec-2",
          "title": "Soğuk Kahveler",
          "items": [
            {
              "id": "dospresso-sec-2-item-1",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "soguk kahveler"
              ]
            },
            {
              "id": "dospresso-sec-2-item-2",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "soguk kahveler"
              ]
            },
            {
              "id": "dospresso-sec-2-item-3",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "soguk kahveler"
              ]
            },
            {
              "id": "dospresso-sec-2-item-4",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "soguk kahveler"
              ]
            },
            {
              "id": "dospresso-sec-2-item-5",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "soguk kahveler"
              ]
            }
          ]
        },
        {
          "id": "dospresso-sec-3",
          "title": "Frozen",
          "items": [
            {
              "id": "dospresso-sec-3-item-1",
              "name": "Iced Latte",
              "description": "Buz üstüne süt ve espresso.",
              "tags": [
                "frozen"
              ]
            },
            {
              "id": "dospresso-sec-3-item-2",
              "name": "Iced Americano",
              "description": "Buzlu sade kahve.",
              "tags": [
                "frozen"
              ]
            },
            {
              "id": "dospresso-sec-3-item-3",
              "name": "Cold Brew",
              "description": "12 saat soğuk demleme.",
              "tags": [
                "frozen"
              ]
            },
            {
              "id": "dospresso-sec-3-item-4",
              "name": "Frozen",
              "description": "Meyveli buz karışımı.",
              "tags": [
                "frozen"
              ]
            },
            {
              "id": "dospresso-sec-3-item-5",
              "name": "Iced Mocha",
              "description": "Çikolatalı soğuk kahve.",
              "tags": [
                "frozen"
              ]
            }
          ]
        },
        {
          "id": "dospresso-sec-4",
          "title": "Atıştırmalık",
          "items": [
            {
              "id": "dospresso-sec-4-item-1",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "atistirmalik"
              ]
            },
            {
              "id": "dospresso-sec-4-item-2",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "atistirmalik"
              ]
            },
            {
              "id": "dospresso-sec-4-item-3",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "atistirmalik"
              ]
            },
            {
              "id": "dospresso-sec-4-item-4",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "atistirmalik"
              ]
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
          "id": "roberts-coffee-sec-1",
          "title": "Kahveler",
          "items": [
            {
              "id": "roberts-coffee-sec-1-item-1",
              "name": "Filtre Kahve",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "roberts-coffee-sec-1-item-2",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "roberts-coffee-sec-1-item-3",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "roberts-coffee-sec-1-item-4",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "roberts-coffee-sec-1-item-5",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "roberts-coffee-sec-1-item-6",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "kahveler"
              ]
            }
          ]
        },
        {
          "id": "roberts-coffee-sec-2",
          "title": "Gelato",
          "items": [
            {
              "id": "roberts-coffee-sec-2-item-1",
              "name": "Gelato",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "gelato"
              ]
            },
            {
              "id": "roberts-coffee-sec-2-item-2",
              "name": "Kesme Dondurma",
              "description": "Keçi sütlü Maraş usulü.",
              "tags": [
                "gelato"
              ]
            },
            {
              "id": "roberts-coffee-sec-2-item-3",
              "name": "Külahta İki Top",
              "description": "Günün çeşitleri.",
              "tags": [
                "gelato"
              ]
            },
            {
              "id": "roberts-coffee-sec-2-item-4",
              "name": "Çikolatalı Dondurma",
              "description": "Belçika çikolatalı.",
              "tags": [
                "gelato"
              ]
            },
            {
              "id": "roberts-coffee-sec-2-item-5",
              "name": "Meyveli Sorbe",
              "description": "Süt içermez.",
              "tags": [
                "gelato"
              ]
            }
          ]
        },
        {
          "id": "roberts-coffee-sec-3",
          "title": "Tatlılar",
          "items": [
            {
              "id": "roberts-coffee-sec-3-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "roberts-coffee-sec-3-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "roberts-coffee-sec-3-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "roberts-coffee-sec-3-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "roberts-coffee-sec-3-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            }
          ]
        },
        {
          "id": "roberts-coffee-sec-4",
          "title": "Sandviçler",
          "items": [
            {
              "id": "roberts-coffee-sec-4-item-1",
              "name": "Tavuklu Sub",
              "description": "Taze malzemelerle.",
              "tags": [
                "sandvicler"
              ]
            },
            {
              "id": "roberts-coffee-sec-4-item-2",
              "name": "Ton Balıklı Sub",
              "description": "Hafif.",
              "tags": [
                "sandvicler"
              ]
            },
            {
              "id": "roberts-coffee-sec-4-item-3",
              "name": "Köfteli Sub",
              "description": "Marinara soslu.",
              "tags": [
                "sandvicler"
              ]
            },
            {
              "id": "roberts-coffee-sec-4-item-4",
              "name": "Sebzeli Sub",
              "description": "Vejetaryen.",
              "tags": [
                "sandvicler"
              ]
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
          "id": "bragi-sec-1",
          "title": "Burgerler",
          "items": [
            {
              "id": "bragi-sec-1-item-1",
              "name": "Bragi Burger",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "bragi-sec-1-item-2",
              "name": "Cheeseburger",
              "description": "Cheddar'lı klasik.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "bragi-sec-1-item-3",
              "name": "Double Burger",
              "description": "Çift köfte, yoğun lezzet.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "bragi-sec-1-item-4",
              "name": "Tavuk Burger",
              "description": "Çıtır tavuklu.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "bragi-sec-1-item-5",
              "name": "House Burger",
              "description": "Mekanın imza burgeri.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "bragi-sec-1-item-6",
              "name": "Mini Burger Tabağı",
              "description": "Üçlü tadım seti.",
              "tags": [
                "burgerler"
              ]
            }
          ]
        },
        {
          "id": "bragi-sec-2",
          "title": "Steakler",
          "items": [
            {
              "id": "bragi-sec-2-item-1",
              "name": "Antrikot",
              "description": "Dry-aged, ızgara.",
              "tags": [
                "steakler"
              ]
            },
            {
              "id": "bragi-sec-2-item-2",
              "name": "Bonfile",
              "description": "Tereyağında.",
              "tags": [
                "steakler"
              ]
            },
            {
              "id": "bragi-sec-2-item-3",
              "name": "T-Bone",
              "description": "Paylaşımlık.",
              "tags": [
                "steakler"
              ]
            },
            {
              "id": "bragi-sec-2-item-4",
              "name": "Kasap Köfte",
              "description": "Izgara, közlenmiş sebzeyle.",
              "tags": [
                "steakler"
              ]
            }
          ]
        },
        {
          "id": "bragi-sec-3",
          "title": "Başlangıçlar",
          "items": [
            {
              "id": "bragi-sec-3-item-1",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "baslangiclar"
              ]
            },
            {
              "id": "bragi-sec-3-item-2",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "baslangiclar"
              ]
            },
            {
              "id": "bragi-sec-3-item-3",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "baslangiclar"
              ]
            },
            {
              "id": "bragi-sec-3-item-4",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "baslangiclar"
              ]
            }
          ]
        },
        {
          "id": "bragi-sec-4",
          "title": "Kokteyller",
          "items": [
            {
              "id": "bragi-sec-4-item-1",
              "name": "Kokteyl",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "kokteyller"
              ]
            },
            {
              "id": "bragi-sec-4-item-2",
              "name": "Mojito",
              "description": "Nane ve lime ile.",
              "tags": [
                "kokteyller"
              ]
            },
            {
              "id": "bragi-sec-4-item-3",
              "name": "Aperol Spritz",
              "description": "Gün batımı klasiği.",
              "tags": [
                "kokteyller"
              ]
            },
            {
              "id": "bragi-sec-4-item-4",
              "name": "Gin Tonic",
              "description": "Aromatik bitkilerle.",
              "tags": [
                "kokteyller"
              ]
            },
            {
              "id": "bragi-sec-4-item-5",
              "name": "Margarita",
              "description": "Tuz kenarlı klasik.",
              "tags": [
                "kokteyller"
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
          "id": "tezgah-burger-sec-1",
          "title": "Burgerler",
          "items": [
            {
              "id": "tezgah-burger-sec-1-item-1",
              "name": "Çıtır Tavuk Burger",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "tezgah-burger-sec-1-item-2",
              "name": "Kaburgalı Burger",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "tezgah-burger-sec-1-item-3",
              "name": "Cheeseburger",
              "description": "Cheddar'lı klasik.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "tezgah-burger-sec-1-item-4",
              "name": "Double Burger",
              "description": "Çift köfte, yoğun lezzet.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "tezgah-burger-sec-1-item-5",
              "name": "Tavuk Burger",
              "description": "Çıtır tavuklu.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "tezgah-burger-sec-1-item-6",
              "name": "House Burger",
              "description": "Mekanın imza burgeri.",
              "tags": [
                "burgerler"
              ]
            }
          ]
        },
        {
          "id": "tezgah-burger-sec-2",
          "title": "Tavuk Burger",
          "items": [
            {
              "id": "tezgah-burger-sec-2-item-1",
              "name": "Cheeseburger",
              "description": "Cheddar'lı klasik.",
              "tags": [
                "tavuk burger"
              ]
            },
            {
              "id": "tezgah-burger-sec-2-item-2",
              "name": "Double Burger",
              "description": "Çift köfte, yoğun lezzet.",
              "tags": [
                "tavuk burger"
              ]
            },
            {
              "id": "tezgah-burger-sec-2-item-3",
              "name": "Tavuk Burger",
              "description": "Çıtır tavuklu.",
              "tags": [
                "tavuk burger"
              ]
            },
            {
              "id": "tezgah-burger-sec-2-item-4",
              "name": "House Burger",
              "description": "Mekanın imza burgeri.",
              "tags": [
                "tavuk burger"
              ]
            },
            {
              "id": "tezgah-burger-sec-2-item-5",
              "name": "Mini Burger Tabağı",
              "description": "Üçlü tadım seti.",
              "tags": [
                "tavuk burger"
              ]
            }
          ]
        },
        {
          "id": "tezgah-burger-sec-3",
          "title": "Yan Ürünler",
          "items": [
            {
              "id": "tezgah-burger-sec-3-item-1",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "yan urunler"
              ]
            },
            {
              "id": "tezgah-burger-sec-3-item-2",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "yan urunler"
              ]
            },
            {
              "id": "tezgah-burger-sec-3-item-3",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "yan urunler"
              ]
            },
            {
              "id": "tezgah-burger-sec-3-item-4",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "yan urunler"
              ]
            }
          ]
        },
        {
          "id": "tezgah-burger-sec-4",
          "title": "İçecekler",
          "items": [
            {
              "id": "tezgah-burger-sec-4-item-1",
              "name": "Ayran",
              "description": "Yayık ayranı.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "tezgah-burger-sec-4-item-2",
              "name": "Limonata",
              "description": "Ev yapımı, naneli.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "tezgah-burger-sec-4-item-3",
              "name": "Buzlu Çay",
              "description": "Şeftali / limon.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "tezgah-burger-sec-4-item-4",
              "name": "Taze Portakal Suyu",
              "description": "Günlük sıkım.",
              "tags": [
                "icecekler"
              ]
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
          "id": "colombia-coffee-sec-1",
          "title": "Filtre Kahveler",
          "items": [
            {
              "id": "colombia-coffee-sec-1-item-1",
              "name": "Filtre Kahve",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "filtre kahveler"
              ]
            },
            {
              "id": "colombia-coffee-sec-1-item-2",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "filtre kahveler"
              ]
            },
            {
              "id": "colombia-coffee-sec-1-item-3",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "filtre kahveler"
              ]
            },
            {
              "id": "colombia-coffee-sec-1-item-4",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "filtre kahveler"
              ]
            },
            {
              "id": "colombia-coffee-sec-1-item-5",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "filtre kahveler"
              ]
            },
            {
              "id": "colombia-coffee-sec-1-item-6",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "filtre kahveler"
              ]
            }
          ]
        },
        {
          "id": "colombia-coffee-sec-2",
          "title": "Espresso Bazlı",
          "items": [
            {
              "id": "colombia-coffee-sec-2-item-1",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "colombia-coffee-sec-2-item-2",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "colombia-coffee-sec-2-item-3",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "colombia-coffee-sec-2-item-4",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "colombia-coffee-sec-2-item-5",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "espresso bazli"
              ]
            }
          ]
        },
        {
          "id": "colombia-coffee-sec-3",
          "title": "Soğuk İçecekler",
          "items": [
            {
              "id": "colombia-coffee-sec-3-item-1",
              "name": "Iced Latte",
              "description": "Buz üstüne süt ve espresso.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "colombia-coffee-sec-3-item-2",
              "name": "Iced Americano",
              "description": "Buzlu sade kahve.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "colombia-coffee-sec-3-item-3",
              "name": "Cold Brew",
              "description": "12 saat soğuk demleme.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "colombia-coffee-sec-3-item-4",
              "name": "Frozen",
              "description": "Meyveli buz karışımı.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "colombia-coffee-sec-3-item-5",
              "name": "Iced Mocha",
              "description": "Çikolatalı soğuk kahve.",
              "tags": [
                "soguk icecekler"
              ]
            }
          ]
        },
        {
          "id": "colombia-coffee-sec-4",
          "title": "Tatlılar",
          "items": [
            {
              "id": "colombia-coffee-sec-4-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "colombia-coffee-sec-4-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "colombia-coffee-sec-4-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "colombia-coffee-sec-4-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "colombia-coffee-sec-4-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
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
          "id": "yemen-kahvesi-sec-1",
          "title": "Türk Kahveleri",
          "items": [
            {
              "id": "yemen-kahvesi-sec-1-item-1",
              "name": "Damla Sakızlı Kahve",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "turk kahveleri"
              ]
            },
            {
              "id": "yemen-kahvesi-sec-1-item-2",
              "name": "Dibek Kahvesi",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "turk kahveleri"
              ]
            },
            {
              "id": "yemen-kahvesi-sec-1-item-3",
              "name": "Közde Türk Kahvesi",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "turk kahveleri"
              ]
            },
            {
              "id": "yemen-kahvesi-sec-1-item-4",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "turk kahveleri"
              ]
            },
            {
              "id": "yemen-kahvesi-sec-1-item-5",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "turk kahveleri"
              ]
            },
            {
              "id": "yemen-kahvesi-sec-1-item-6",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "turk kahveleri"
              ]
            }
          ]
        },
        {
          "id": "yemen-kahvesi-sec-2",
          "title": "Dünya Kahveleri",
          "items": [
            {
              "id": "yemen-kahvesi-sec-2-item-1",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "dunya kahveleri"
              ]
            },
            {
              "id": "yemen-kahvesi-sec-2-item-2",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "dunya kahveleri"
              ]
            },
            {
              "id": "yemen-kahvesi-sec-2-item-3",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "dunya kahveleri"
              ]
            },
            {
              "id": "yemen-kahvesi-sec-2-item-4",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "dunya kahveleri"
              ]
            },
            {
              "id": "yemen-kahvesi-sec-2-item-5",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "dunya kahveleri"
              ]
            }
          ]
        },
        {
          "id": "yemen-kahvesi-sec-3",
          "title": "Waffle",
          "items": [
            {
              "id": "yemen-kahvesi-sec-3-item-1",
              "name": "Waffle",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "waffle"
              ]
            },
            {
              "id": "yemen-kahvesi-sec-3-item-2",
              "name": "Nargile",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "waffle"
              ]
            },
            {
              "id": "yemen-kahvesi-sec-3-item-3",
              "name": "Günün Önerisi",
              "description": "Sorunuz.",
              "tags": [
                "waffle"
              ]
            },
            {
              "id": "yemen-kahvesi-sec-3-item-4",
              "name": "Mevsim Seçkisi",
              "description": "Dönemsel.",
              "tags": [
                "waffle"
              ]
            }
          ]
        },
        {
          "id": "yemen-kahvesi-sec-4",
          "title": "Nargile",
          "items": [
            {
              "id": "yemen-kahvesi-sec-4-item-1",
              "name": "Meyveli Nargile",
              "description": "Günün harmanı.",
              "tags": [
                "nargile"
              ]
            },
            {
              "id": "yemen-kahvesi-sec-4-item-2",
              "name": "Nane Nargile",
              "description": "Ferahlatıcı.",
              "tags": [
                "nargile"
              ]
            },
            {
              "id": "yemen-kahvesi-sec-4-item-3",
              "name": "Çift Elma",
              "description": "Klasik.",
              "tags": [
                "nargile"
              ]
            },
            {
              "id": "yemen-kahvesi-sec-4-item-4",
              "name": "Kavun Nargile",
              "description": "Yazlık seçim.",
              "tags": [
                "nargile"
              ]
            }
          ]
        },
        {
          "id": "yemen-kahvesi-sec-5",
          "title": "Soğuk İçecekler",
          "items": [
            {
              "id": "yemen-kahvesi-sec-5-item-1",
              "name": "Iced Latte",
              "description": "Buz üstüne süt ve espresso.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "yemen-kahvesi-sec-5-item-2",
              "name": "Iced Americano",
              "description": "Buzlu sade kahve.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "yemen-kahvesi-sec-5-item-3",
              "name": "Cold Brew",
              "description": "12 saat soğuk demleme.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "yemen-kahvesi-sec-5-item-4",
              "name": "Frozen",
              "description": "Meyveli buz karışımı.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "yemen-kahvesi-sec-5-item-5",
              "name": "Iced Mocha",
              "description": "Çikolatalı soğuk kahve.",
              "tags": [
                "soguk icecekler"
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
          "id": "bahane-lounge-sec-1",
          "title": "Nargile",
          "items": [
            {
              "id": "bahane-lounge-sec-1-item-1",
              "name": "Meyveli Nargile",
              "description": "Günün harmanı.",
              "tags": [
                "nargile"
              ]
            },
            {
              "id": "bahane-lounge-sec-1-item-2",
              "name": "Nane Nargile",
              "description": "Ferahlatıcı.",
              "tags": [
                "nargile"
              ]
            },
            {
              "id": "bahane-lounge-sec-1-item-3",
              "name": "Çift Elma",
              "description": "Klasik.",
              "tags": [
                "nargile"
              ]
            },
            {
              "id": "bahane-lounge-sec-1-item-4",
              "name": "Kavun Nargile",
              "description": "Yazlık seçim.",
              "tags": [
                "nargile"
              ]
            }
          ]
        },
        {
          "id": "bahane-lounge-sec-2",
          "title": "Sıcak İçecekler",
          "items": [
            {
              "id": "bahane-lounge-sec-2-item-1",
              "name": "Ayran",
              "description": "Yayık ayranı.",
              "tags": [
                "sicak icecekler"
              ]
            },
            {
              "id": "bahane-lounge-sec-2-item-2",
              "name": "Limonata",
              "description": "Ev yapımı, naneli.",
              "tags": [
                "sicak icecekler"
              ]
            },
            {
              "id": "bahane-lounge-sec-2-item-3",
              "name": "Buzlu Çay",
              "description": "Şeftali / limon.",
              "tags": [
                "sicak icecekler"
              ]
            },
            {
              "id": "bahane-lounge-sec-2-item-4",
              "name": "Taze Portakal Suyu",
              "description": "Günlük sıkım.",
              "tags": [
                "sicak icecekler"
              ]
            }
          ]
        },
        {
          "id": "bahane-lounge-sec-3",
          "title": "Soğuk İçecekler",
          "items": [
            {
              "id": "bahane-lounge-sec-3-item-1",
              "name": "Iced Latte",
              "description": "Buz üstüne süt ve espresso.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "bahane-lounge-sec-3-item-2",
              "name": "Iced Americano",
              "description": "Buzlu sade kahve.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "bahane-lounge-sec-3-item-3",
              "name": "Cold Brew",
              "description": "12 saat soğuk demleme.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "bahane-lounge-sec-3-item-4",
              "name": "Frozen",
              "description": "Meyveli buz karışımı.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "bahane-lounge-sec-3-item-5",
              "name": "Iced Mocha",
              "description": "Çikolatalı soğuk kahve.",
              "tags": [
                "soguk icecekler"
              ]
            }
          ]
        },
        {
          "id": "bahane-lounge-sec-4",
          "title": "Atıştırmalık",
          "items": [
            {
              "id": "bahane-lounge-sec-4-item-1",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "atistirmalik"
              ]
            },
            {
              "id": "bahane-lounge-sec-4-item-2",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "atistirmalik"
              ]
            },
            {
              "id": "bahane-lounge-sec-4-item-3",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "atistirmalik"
              ]
            },
            {
              "id": "bahane-lounge-sec-4-item-4",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "atistirmalik"
              ]
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
          "id": "espressolab-sec-1",
          "title": "Espresso Bazlı",
          "items": [
            {
              "id": "espressolab-sec-1-item-1",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "espressolab-sec-1-item-2",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "espressolab-sec-1-item-3",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "espressolab-sec-1-item-4",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "espressolab-sec-1-item-5",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "espresso bazli"
              ]
            }
          ]
        },
        {
          "id": "espressolab-sec-2",
          "title": "Filtre Kahve",
          "items": [
            {
              "id": "espressolab-sec-2-item-1",
              "name": "Filtre Kahve",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "espressolab-sec-2-item-2",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "espressolab-sec-2-item-3",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "espressolab-sec-2-item-4",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "espressolab-sec-2-item-5",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "espressolab-sec-2-item-6",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "filtre kahve"
              ]
            }
          ]
        },
        {
          "id": "espressolab-sec-3",
          "title": "Soğuk İçecekler",
          "items": [
            {
              "id": "espressolab-sec-3-item-1",
              "name": "Iced Latte",
              "description": "Buz üstüne süt ve espresso.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "espressolab-sec-3-item-2",
              "name": "Iced Americano",
              "description": "Buzlu sade kahve.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "espressolab-sec-3-item-3",
              "name": "Cold Brew",
              "description": "12 saat soğuk demleme.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "espressolab-sec-3-item-4",
              "name": "Frozen",
              "description": "Meyveli buz karışımı.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "espressolab-sec-3-item-5",
              "name": "Iced Mocha",
              "description": "Çikolatalı soğuk kahve.",
              "tags": [
                "soguk icecekler"
              ]
            }
          ]
        },
        {
          "id": "espressolab-sec-4",
          "title": "Tatlı & Atıştırmalık",
          "items": [
            {
              "id": "espressolab-sec-4-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatli atistirmalik"
              ]
            },
            {
              "id": "espressolab-sec-4-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatli atistirmalik"
              ]
            },
            {
              "id": "espressolab-sec-4-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatli atistirmalik"
              ]
            },
            {
              "id": "espressolab-sec-4-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatli atistirmalik"
              ]
            },
            {
              "id": "espressolab-sec-4-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatli atistirmalik"
              ]
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
          "id": "maydonoz-doner-sec-1",
          "title": "Et Döner",
          "items": [
            {
              "id": "maydonoz-doner-sec-1-item-1",
              "name": "Et Dürüm",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "et doner"
              ]
            },
            {
              "id": "maydonoz-doner-sec-1-item-2",
              "name": "Et Döner Dürüm",
              "description": "Lavaşta közlenmiş et döner.",
              "tags": [
                "et doner"
              ]
            },
            {
              "id": "maydonoz-doner-sec-1-item-3",
              "name": "Tavuk Döner Dürüm",
              "description": "Bol malzemeli.",
              "tags": [
                "et doner"
              ]
            },
            {
              "id": "maydonoz-doner-sec-1-item-4",
              "name": "Porsiyon Döner",
              "description": "Pilav ve közlenmiş biberle.",
              "tags": [
                "et doner"
              ]
            },
            {
              "id": "maydonoz-doner-sec-1-item-5",
              "name": "Pilav Üstü Döner",
              "description": "Doyurucu klasik.",
              "tags": [
                "et doner"
              ]
            },
            {
              "id": "maydonoz-doner-sec-1-item-6",
              "name": "Zurna Dürüm",
              "description": "Büyük boy.",
              "tags": [
                "et doner"
              ]
            }
          ]
        },
        {
          "id": "maydonoz-doner-sec-2",
          "title": "Tavuk Döner",
          "items": [
            {
              "id": "maydonoz-doner-sec-2-item-1",
              "name": "Tavuk Dürüm",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "tavuk doner"
              ]
            },
            {
              "id": "maydonoz-doner-sec-2-item-2",
              "name": "Et Döner Dürüm",
              "description": "Lavaşta közlenmiş et döner.",
              "tags": [
                "tavuk doner"
              ]
            },
            {
              "id": "maydonoz-doner-sec-2-item-3",
              "name": "Tavuk Döner Dürüm",
              "description": "Bol malzemeli.",
              "tags": [
                "tavuk doner"
              ]
            },
            {
              "id": "maydonoz-doner-sec-2-item-4",
              "name": "Porsiyon Döner",
              "description": "Pilav ve közlenmiş biberle.",
              "tags": [
                "tavuk doner"
              ]
            },
            {
              "id": "maydonoz-doner-sec-2-item-5",
              "name": "Pilav Üstü Döner",
              "description": "Doyurucu klasik.",
              "tags": [
                "tavuk doner"
              ]
            },
            {
              "id": "maydonoz-doner-sec-2-item-6",
              "name": "Zurna Dürüm",
              "description": "Büyük boy.",
              "tags": [
                "tavuk doner"
              ]
            }
          ]
        },
        {
          "id": "maydonoz-doner-sec-3",
          "title": "Dürümler",
          "items": [
            {
              "id": "maydonoz-doner-sec-3-item-1",
              "name": "Et Döner Dürüm",
              "description": "Lavaşta közlenmiş et döner.",
              "tags": [
                "durumler"
              ]
            },
            {
              "id": "maydonoz-doner-sec-3-item-2",
              "name": "Tavuk Döner Dürüm",
              "description": "Bol malzemeli.",
              "tags": [
                "durumler"
              ]
            },
            {
              "id": "maydonoz-doner-sec-3-item-3",
              "name": "Porsiyon Döner",
              "description": "Pilav ve közlenmiş biberle.",
              "tags": [
                "durumler"
              ]
            },
            {
              "id": "maydonoz-doner-sec-3-item-4",
              "name": "Pilav Üstü Döner",
              "description": "Doyurucu klasik.",
              "tags": [
                "durumler"
              ]
            },
            {
              "id": "maydonoz-doner-sec-3-item-5",
              "name": "Zurna Dürüm",
              "description": "Büyük boy.",
              "tags": [
                "durumler"
              ]
            }
          ]
        },
        {
          "id": "maydonoz-doner-sec-4",
          "title": "Porsiyonlar",
          "items": [
            {
              "id": "maydonoz-doner-sec-4-item-1",
              "name": "Porsiyon Döner",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "porsiyonlar"
              ]
            },
            {
              "id": "maydonoz-doner-sec-4-item-2",
              "name": "Izgara Köfte",
              "description": "El yapımı.",
              "tags": [
                "porsiyonlar"
              ]
            },
            {
              "id": "maydonoz-doner-sec-4-item-3",
              "name": "Antrikot",
              "description": "Tereyağlı.",
              "tags": [
                "porsiyonlar"
              ]
            },
            {
              "id": "maydonoz-doner-sec-4-item-4",
              "name": "Tavuk Şiş",
              "description": "Marine edilmiş.",
              "tags": [
                "porsiyonlar"
              ]
            },
            {
              "id": "maydonoz-doner-sec-4-item-5",
              "name": "Günün Yemeği",
              "description": "Şefin önerisi.",
              "tags": [
                "porsiyonlar"
              ]
            }
          ]
        },
        {
          "id": "maydonoz-doner-sec-5",
          "title": "İçecekler",
          "items": [
            {
              "id": "maydonoz-doner-sec-5-item-1",
              "name": "Ayran",
              "description": "Yayık ayranı.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "maydonoz-doner-sec-5-item-2",
              "name": "Limonata",
              "description": "Ev yapımı, naneli.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "maydonoz-doner-sec-5-item-3",
              "name": "Buzlu Çay",
              "description": "Şeftali / limon.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "maydonoz-doner-sec-5-item-4",
              "name": "Taze Portakal Suyu",
              "description": "Günlük sıkım.",
              "tags": [
                "icecekler"
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
          "id": "hamlet-market-01-sec-1",
          "title": "İçecekler",
          "items": [
            {
              "id": "hamlet-market-01-sec-1-item-1",
              "name": "Soğuk İçecek",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "hamlet-market-01-sec-1-item-2",
              "name": "Ayran",
              "description": "Yayık ayranı.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "hamlet-market-01-sec-1-item-3",
              "name": "Limonata",
              "description": "Ev yapımı, naneli.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "hamlet-market-01-sec-1-item-4",
              "name": "Buzlu Çay",
              "description": "Şeftali / limon.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "hamlet-market-01-sec-1-item-5",
              "name": "Taze Portakal Suyu",
              "description": "Günlük sıkım.",
              "tags": [
                "icecekler"
              ]
            }
          ]
        },
        {
          "id": "hamlet-market-01-sec-2",
          "title": "Atıştırmalıklar",
          "items": [
            {
              "id": "hamlet-market-01-sec-2-item-1",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "atistirmaliklar"
              ]
            },
            {
              "id": "hamlet-market-01-sec-2-item-2",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "atistirmaliklar"
              ]
            },
            {
              "id": "hamlet-market-01-sec-2-item-3",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "atistirmaliklar"
              ]
            },
            {
              "id": "hamlet-market-01-sec-2-item-4",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "atistirmaliklar"
              ]
            }
          ]
        },
        {
          "id": "hamlet-market-01-sec-3",
          "title": "Dondurma",
          "items": [
            {
              "id": "hamlet-market-01-sec-3-item-1",
              "name": "Dondurma",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "dondurma"
              ]
            },
            {
              "id": "hamlet-market-01-sec-3-item-2",
              "name": "Kesme Dondurma",
              "description": "Keçi sütlü Maraş usulü.",
              "tags": [
                "dondurma"
              ]
            },
            {
              "id": "hamlet-market-01-sec-3-item-3",
              "name": "Külahta İki Top",
              "description": "Günün çeşitleri.",
              "tags": [
                "dondurma"
              ]
            },
            {
              "id": "hamlet-market-01-sec-3-item-4",
              "name": "Çikolatalı Dondurma",
              "description": "Belçika çikolatalı.",
              "tags": [
                "dondurma"
              ]
            },
            {
              "id": "hamlet-market-01-sec-3-item-5",
              "name": "Meyveli Sorbe",
              "description": "Süt içermez.",
              "tags": [
                "dondurma"
              ]
            }
          ]
        },
        {
          "id": "hamlet-market-01-sec-4",
          "title": "Plaj Ürünleri",
          "items": [
            {
              "id": "hamlet-market-01-sec-4-item-1",
              "name": "Güneş Kremi",
              "description": "SPF 30/50.",
              "tags": [
                "plaj urunleri"
              ]
            },
            {
              "id": "hamlet-market-01-sec-4-item-2",
              "name": "After-Sun",
              "description": "Güneş sonrası bakım.",
              "tags": [
                "plaj urunleri"
              ]
            },
            {
              "id": "hamlet-market-01-sec-4-item-3",
              "name": "Plaj Topu",
              "description": "Şişme.",
              "tags": [
                "plaj urunleri"
              ]
            },
            {
              "id": "hamlet-market-01-sec-4-item-4",
              "name": "Terlik",
              "description": "Çeşitli numaralar.",
              "tags": [
                "plaj urunleri"
              ]
            }
          ]
        },
        {
          "id": "hamlet-market-01-sec-5",
          "title": "Temel Gıda",
          "items": [
            {
              "id": "hamlet-market-01-sec-5-item-1",
              "name": "Ekmek",
              "description": "Günlük.",
              "tags": [
                "temel gida"
              ]
            },
            {
              "id": "hamlet-market-01-sec-5-item-2",
              "name": "Süt",
              "description": "Soğuk dolap.",
              "tags": [
                "temel gida"
              ]
            },
            {
              "id": "hamlet-market-01-sec-5-item-3",
              "name": "Yumurta",
              "description": "10'lu.",
              "tags": [
                "temel gida"
              ]
            },
            {
              "id": "hamlet-market-01-sec-5-item-4",
              "name": "Konserve",
              "description": "Çeşitli.",
              "tags": [
                "temel gida"
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
          "id": "doyuyo-sec-1",
          "title": "Tostlar",
          "items": [
            {
              "id": "doyuyo-sec-1-item-1",
              "name": "Ayvalık Tostu",
              "description": "Bol malzemeli.",
              "tags": [
                "tostlar"
              ]
            },
            {
              "id": "doyuyo-sec-1-item-2",
              "name": "Karışık Tost",
              "description": "Kaşar ve sucuklu.",
              "tags": [
                "tostlar"
              ]
            },
            {
              "id": "doyuyo-sec-1-item-3",
              "name": "Kaşarlı Tost",
              "description": "Klasik.",
              "tags": [
                "tostlar"
              ]
            },
            {
              "id": "doyuyo-sec-1-item-4",
              "name": "Kumru",
              "description": "İzmir usulü.",
              "tags": [
                "tostlar"
              ]
            }
          ]
        },
        {
          "id": "doyuyo-sec-2",
          "title": "Sandviçler",
          "items": [
            {
              "id": "doyuyo-sec-2-item-1",
              "name": "Tavuklu Sub",
              "description": "Taze malzemelerle.",
              "tags": [
                "sandvicler"
              ]
            },
            {
              "id": "doyuyo-sec-2-item-2",
              "name": "Ton Balıklı Sub",
              "description": "Hafif.",
              "tags": [
                "sandvicler"
              ]
            },
            {
              "id": "doyuyo-sec-2-item-3",
              "name": "Köfteli Sub",
              "description": "Marinara soslu.",
              "tags": [
                "sandvicler"
              ]
            },
            {
              "id": "doyuyo-sec-2-item-4",
              "name": "Sebzeli Sub",
              "description": "Vejetaryen.",
              "tags": [
                "sandvicler"
              ]
            }
          ]
        },
        {
          "id": "doyuyo-sec-3",
          "title": "Patates",
          "items": [
            {
              "id": "doyuyo-sec-3-item-1",
              "name": "Patates",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "patates"
              ]
            },
            {
              "id": "doyuyo-sec-3-item-2",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "patates"
              ]
            },
            {
              "id": "doyuyo-sec-3-item-3",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "patates"
              ]
            },
            {
              "id": "doyuyo-sec-3-item-4",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "patates"
              ]
            },
            {
              "id": "doyuyo-sec-3-item-5",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "patates"
              ]
            }
          ]
        },
        {
          "id": "doyuyo-sec-4",
          "title": "İçecekler",
          "items": [
            {
              "id": "doyuyo-sec-4-item-1",
              "name": "Ayran",
              "description": "Yayık ayranı.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "doyuyo-sec-4-item-2",
              "name": "Limonata",
              "description": "Ev yapımı, naneli.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "doyuyo-sec-4-item-3",
              "name": "Buzlu Çay",
              "description": "Şeftali / limon.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "doyuyo-sec-4-item-4",
              "name": "Taze Portakal Suyu",
              "description": "Günlük sıkım.",
              "tags": [
                "icecekler"
              ]
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
          "id": "hd-iskender-sec-1",
          "title": "İskender Çeşitleri",
          "items": [
            {
              "id": "hd-iskender-sec-1-item-1",
              "name": "Klasik İskender",
              "description": "Tereyağı sosuyla.",
              "tags": [
                "iskender cesitleri"
              ]
            },
            {
              "id": "hd-iskender-sec-1-item-2",
              "name": "Kaşarlı İskender",
              "description": "Bol kaşarlı.",
              "tags": [
                "iskender cesitleri"
              ]
            },
            {
              "id": "hd-iskender-sec-1-item-3",
              "name": "Yoğurtlu Et",
              "description": "Közlenmiş biberle.",
              "tags": [
                "iskender cesitleri"
              ]
            },
            {
              "id": "hd-iskender-sec-1-item-4",
              "name": "Porsiyon Et Döner",
              "description": "Sade servis.",
              "tags": [
                "iskender cesitleri"
              ]
            }
          ]
        },
        {
          "id": "hd-iskender-sec-2",
          "title": "Döner",
          "items": [
            {
              "id": "hd-iskender-sec-2-item-1",
              "name": "Et Döner",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "doner"
              ]
            },
            {
              "id": "hd-iskender-sec-2-item-2",
              "name": "Et Döner Dürüm",
              "description": "Lavaşta közlenmiş et döner.",
              "tags": [
                "doner"
              ]
            },
            {
              "id": "hd-iskender-sec-2-item-3",
              "name": "Tavuk Döner Dürüm",
              "description": "Bol malzemeli.",
              "tags": [
                "doner"
              ]
            },
            {
              "id": "hd-iskender-sec-2-item-4",
              "name": "Porsiyon Döner",
              "description": "Pilav ve közlenmiş biberle.",
              "tags": [
                "doner"
              ]
            },
            {
              "id": "hd-iskender-sec-2-item-5",
              "name": "Pilav Üstü Döner",
              "description": "Doyurucu klasik.",
              "tags": [
                "doner"
              ]
            },
            {
              "id": "hd-iskender-sec-2-item-6",
              "name": "Zurna Dürüm",
              "description": "Büyük boy.",
              "tags": [
                "doner"
              ]
            }
          ]
        },
        {
          "id": "hd-iskender-sec-3",
          "title": "Pideler",
          "items": [
            {
              "id": "hd-iskender-sec-3-item-1",
              "name": "Kıymalı Pide",
              "description": "Taş fırından.",
              "tags": [
                "pideler"
              ]
            },
            {
              "id": "hd-iskender-sec-3-item-2",
              "name": "Kuşbaşılı Kaşarlı Pide",
              "description": "Bol malzemeli.",
              "tags": [
                "pideler"
              ]
            },
            {
              "id": "hd-iskender-sec-3-item-3",
              "name": "Kaşarlı Pide",
              "description": "Tereyağlı.",
              "tags": [
                "pideler"
              ]
            },
            {
              "id": "hd-iskender-sec-3-item-4",
              "name": "Lahmacun",
              "description": "İnce hamur, acılı/acısız.",
              "tags": [
                "pideler"
              ]
            }
          ]
        },
        {
          "id": "hd-iskender-sec-4",
          "title": "Tatlılar",
          "items": [
            {
              "id": "hd-iskender-sec-4-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "hd-iskender-sec-4-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "hd-iskender-sec-4-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "hd-iskender-sec-4-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "hd-iskender-sec-4-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            }
          ]
        },
        {
          "id": "hd-iskender-sec-5",
          "title": "İçecekler",
          "items": [
            {
              "id": "hd-iskender-sec-5-item-1",
              "name": "Ayran",
              "description": "Yayık ayranı.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "hd-iskender-sec-5-item-2",
              "name": "Limonata",
              "description": "Ev yapımı, naneli.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "hd-iskender-sec-5-item-3",
              "name": "Buzlu Çay",
              "description": "Şeftali / limon.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "hd-iskender-sec-5-item-4",
              "name": "Taze Portakal Suyu",
              "description": "Günlük sıkım.",
              "tags": [
                "icecekler"
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
          "id": "tavuk-dunyasi-sec-1",
          "title": "Izgara Tavuk",
          "items": [
            {
              "id": "tavuk-dunyasi-sec-1-item-1",
              "name": "Tavuk Dürüm",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "izgara tavuk"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-1-item-2",
              "name": "Köri Soslu Tavuk",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "izgara tavuk"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-1-item-3",
              "name": "Special Tavuk",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "izgara tavuk"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-1-item-4",
              "name": "Izgara Köfte",
              "description": "El yapımı.",
              "tags": [
                "izgara tavuk"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-1-item-5",
              "name": "Antrikot",
              "description": "Tereyağlı.",
              "tags": [
                "izgara tavuk"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-1-item-6",
              "name": "Tavuk Şiş",
              "description": "Marine edilmiş.",
              "tags": [
                "izgara tavuk"
              ]
            }
          ]
        },
        {
          "id": "tavuk-dunyasi-sec-2",
          "title": "Soslu Tavuklar",
          "items": [
            {
              "id": "tavuk-dunyasi-sec-2-item-1",
              "name": "Çıtır Tavuk",
              "description": "Baharatlı kaplama.",
              "tags": [
                "soslu tavuklar"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-2-item-2",
              "name": "Izgara Tavuk",
              "description": "Marine edilmiş.",
              "tags": [
                "soslu tavuklar"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-2-item-3",
              "name": "Kanat",
              "description": "Acılı soslu.",
              "tags": [
                "soslu tavuklar"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-2-item-4",
              "name": "Köri Soslu Tavuk",
              "description": "Pilav eşliğinde.",
              "tags": [
                "soslu tavuklar"
              ]
            }
          ]
        },
        {
          "id": "tavuk-dunyasi-sec-3",
          "title": "Dürümler",
          "items": [
            {
              "id": "tavuk-dunyasi-sec-3-item-1",
              "name": "Et Döner Dürüm",
              "description": "Lavaşta közlenmiş et döner.",
              "tags": [
                "durumler"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-3-item-2",
              "name": "Tavuk Döner Dürüm",
              "description": "Bol malzemeli.",
              "tags": [
                "durumler"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-3-item-3",
              "name": "Porsiyon Döner",
              "description": "Pilav ve közlenmiş biberle.",
              "tags": [
                "durumler"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-3-item-4",
              "name": "Pilav Üstü Döner",
              "description": "Doyurucu klasik.",
              "tags": [
                "durumler"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-3-item-5",
              "name": "Zurna Dürüm",
              "description": "Büyük boy.",
              "tags": [
                "durumler"
              ]
            }
          ]
        },
        {
          "id": "tavuk-dunyasi-sec-4",
          "title": "Salatalar",
          "items": [
            {
              "id": "tavuk-dunyasi-sec-4-item-1",
              "name": "Sezar Salata",
              "description": "Izgara tavuklu.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-4-item-2",
              "name": "Tavuklu Uzun Tabak",
              "description": "İmza salata.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-4-item-3",
              "name": "Ton Balıklı Salata",
              "description": "Protein deposu.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-4-item-4",
              "name": "Protein Bowl",
              "description": "Kinoa ve tavukla.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-4-item-5",
              "name": "Wrap Çeşitleri",
              "description": "Tavuklu / sebzeli.",
              "tags": [
                "salatalar"
              ]
            }
          ]
        },
        {
          "id": "tavuk-dunyasi-sec-5",
          "title": "Tatlılar",
          "items": [
            {
              "id": "tavuk-dunyasi-sec-5-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-5-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-5-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-5-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "tavuk-dunyasi-sec-5-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
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
          "id": "okuz-burger-sec-1",
          "title": "Burgerler",
          "items": [
            {
              "id": "okuz-burger-sec-1-item-1",
              "name": "Kasap Köfte Burger",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "okuz-burger-sec-1-item-2",
              "name": "Double Cheeseburger",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "okuz-burger-sec-1-item-3",
              "name": "Öküz Burger",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "okuz-burger-sec-1-item-4",
              "name": "Cheeseburger",
              "description": "Cheddar'lı klasik.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "okuz-burger-sec-1-item-5",
              "name": "Double Burger",
              "description": "Çift köfte, yoğun lezzet.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "okuz-burger-sec-1-item-6",
              "name": "Tavuk Burger",
              "description": "Çıtır tavuklu.",
              "tags": [
                "burgerler"
              ]
            }
          ]
        },
        {
          "id": "okuz-burger-sec-2",
          "title": "Et Menüleri",
          "items": [
            {
              "id": "okuz-burger-sec-2-item-1",
              "name": "Antrikot",
              "description": "Dry-aged, ızgara.",
              "tags": [
                "et menuleri"
              ]
            },
            {
              "id": "okuz-burger-sec-2-item-2",
              "name": "Bonfile",
              "description": "Tereyağında.",
              "tags": [
                "et menuleri"
              ]
            },
            {
              "id": "okuz-burger-sec-2-item-3",
              "name": "T-Bone",
              "description": "Paylaşımlık.",
              "tags": [
                "et menuleri"
              ]
            },
            {
              "id": "okuz-burger-sec-2-item-4",
              "name": "Kasap Köfte",
              "description": "Izgara, közlenmiş sebzeyle.",
              "tags": [
                "et menuleri"
              ]
            }
          ]
        },
        {
          "id": "okuz-burger-sec-3",
          "title": "Yan Ürünler",
          "items": [
            {
              "id": "okuz-burger-sec-3-item-1",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "yan urunler"
              ]
            },
            {
              "id": "okuz-burger-sec-3-item-2",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "yan urunler"
              ]
            },
            {
              "id": "okuz-burger-sec-3-item-3",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "yan urunler"
              ]
            },
            {
              "id": "okuz-burger-sec-3-item-4",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "yan urunler"
              ]
            }
          ]
        },
        {
          "id": "okuz-burger-sec-4",
          "title": "İçecekler",
          "items": [
            {
              "id": "okuz-burger-sec-4-item-1",
              "name": "Ayran",
              "description": "Yayık ayranı.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "okuz-burger-sec-4-item-2",
              "name": "Limonata",
              "description": "Ev yapımı, naneli.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "okuz-burger-sec-4-item-3",
              "name": "Buzlu Çay",
              "description": "Şeftali / limon.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "okuz-burger-sec-4-item-4",
              "name": "Taze Portakal Suyu",
              "description": "Günlük sıkım.",
              "tags": [
                "icecekler"
              ]
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
          "id": "galata-cikolatacisi-sec-1",
          "title": "Çikolatalar",
          "items": [
            {
              "id": "galata-cikolatacisi-sec-1-item-1",
              "name": "Tablet Çikolata",
              "description": "El yapımı.",
              "tags": [
                "cikolatalar"
              ]
            },
            {
              "id": "galata-cikolatacisi-sec-1-item-2",
              "name": "Truf Kutusu",
              "description": "Karışık.",
              "tags": [
                "cikolatalar"
              ]
            },
            {
              "id": "galata-cikolatacisi-sec-1-item-3",
              "name": "Sıcak Çikolata",
              "description": "Yoğun, gerçek çikolatayla.",
              "tags": [
                "cikolatalar"
              ]
            },
            {
              "id": "galata-cikolatacisi-sec-1-item-4",
              "name": "Çikolatalı Dondurma",
              "description": "Günlük üretim.",
              "tags": [
                "cikolatalar"
              ]
            }
          ]
        },
        {
          "id": "galata-cikolatacisi-sec-2",
          "title": "Sıcak İçecekler",
          "items": [
            {
              "id": "galata-cikolatacisi-sec-2-item-1",
              "name": "Sıcak Çikolata",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "sicak icecekler"
              ]
            },
            {
              "id": "galata-cikolatacisi-sec-2-item-2",
              "name": "Ayran",
              "description": "Yayık ayranı.",
              "tags": [
                "sicak icecekler"
              ]
            },
            {
              "id": "galata-cikolatacisi-sec-2-item-3",
              "name": "Limonata",
              "description": "Ev yapımı, naneli.",
              "tags": [
                "sicak icecekler"
              ]
            },
            {
              "id": "galata-cikolatacisi-sec-2-item-4",
              "name": "Buzlu Çay",
              "description": "Şeftali / limon.",
              "tags": [
                "sicak icecekler"
              ]
            },
            {
              "id": "galata-cikolatacisi-sec-2-item-5",
              "name": "Taze Portakal Suyu",
              "description": "Günlük sıkım.",
              "tags": [
                "sicak icecekler"
              ]
            }
          ]
        },
        {
          "id": "galata-cikolatacisi-sec-3",
          "title": "Dondurma",
          "items": [
            {
              "id": "galata-cikolatacisi-sec-3-item-1",
              "name": "Kesme Dondurma",
              "description": "Keçi sütlü Maraş usulü.",
              "tags": [
                "dondurma"
              ]
            },
            {
              "id": "galata-cikolatacisi-sec-3-item-2",
              "name": "Külahta İki Top",
              "description": "Günün çeşitleri.",
              "tags": [
                "dondurma"
              ]
            },
            {
              "id": "galata-cikolatacisi-sec-3-item-3",
              "name": "Çikolatalı Dondurma",
              "description": "Belçika çikolatalı.",
              "tags": [
                "dondurma"
              ]
            },
            {
              "id": "galata-cikolatacisi-sec-3-item-4",
              "name": "Meyveli Sorbe",
              "description": "Süt içermez.",
              "tags": [
                "dondurma"
              ]
            }
          ]
        },
        {
          "id": "galata-cikolatacisi-sec-4",
          "title": "Tatlılar",
          "items": [
            {
              "id": "galata-cikolatacisi-sec-4-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "galata-cikolatacisi-sec-4-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "galata-cikolatacisi-sec-4-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "galata-cikolatacisi-sec-4-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "galata-cikolatacisi-sec-4-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
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
          "id": "watsons-sec-1",
          "title": "Cilt Bakımı",
          "items": [
            {
              "id": "watsons-sec-1-item-1",
              "name": "Nemlendirici",
              "description": "Yüz ve vücut.",
              "tags": [
                "cilt bakimi"
              ]
            },
            {
              "id": "watsons-sec-1-item-2",
              "name": "Yüz Temizleme Jeli",
              "description": "Tüm cilt tipleri.",
              "tags": [
                "cilt bakimi"
              ]
            },
            {
              "id": "watsons-sec-1-item-3",
              "name": "Maske Çeşitleri",
              "description": "Kağıt / kil.",
              "tags": [
                "cilt bakimi"
              ]
            },
            {
              "id": "watsons-sec-1-item-4",
              "name": "Serum",
              "description": "C vitaminli.",
              "tags": [
                "cilt bakimi"
              ]
            }
          ]
        },
        {
          "id": "watsons-sec-2",
          "title": "Makyaj",
          "items": [
            {
              "id": "watsons-sec-2-item-1",
              "name": "Makyaj Ürünleri",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "makyaj"
              ]
            },
            {
              "id": "watsons-sec-2-item-2",
              "name": "Maskara",
              "description": "Suya dayanıklı.",
              "tags": [
                "makyaj"
              ]
            },
            {
              "id": "watsons-sec-2-item-3",
              "name": "Ruj",
              "description": "Yaz tonları.",
              "tags": [
                "makyaj"
              ]
            },
            {
              "id": "watsons-sec-2-item-4",
              "name": "Fondöten",
              "description": "Hafif dokulu.",
              "tags": [
                "makyaj"
              ]
            },
            {
              "id": "watsons-sec-2-item-5",
              "name": "BB Krem",
              "description": "SPF'li.",
              "tags": [
                "makyaj"
              ]
            }
          ]
        },
        {
          "id": "watsons-sec-3",
          "title": "Güneş Ürünleri",
          "items": [
            {
              "id": "watsons-sec-3-item-1",
              "name": "Güneş Kremi",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "gunes urunleri"
              ]
            },
            {
              "id": "watsons-sec-3-item-2",
              "name": "Güneş Kremi SPF50",
              "description": "Yüksek koruma.",
              "tags": [
                "gunes urunleri"
              ]
            },
            {
              "id": "watsons-sec-3-item-3",
              "name": "Güneş Spreyi",
              "description": "Pratik uygulama.",
              "tags": [
                "gunes urunleri"
              ]
            },
            {
              "id": "watsons-sec-3-item-4",
              "name": "After-Sun Losyon",
              "description": "Yatıştırıcı.",
              "tags": [
                "gunes urunleri"
              ]
            },
            {
              "id": "watsons-sec-3-item-5",
              "name": "Bronzlaştırıcı Yağ",
              "description": "SPF'li seçenekler.",
              "tags": [
                "gunes urunleri"
              ]
            }
          ]
        },
        {
          "id": "watsons-sec-4",
          "title": "Kişisel Bakım",
          "items": [
            {
              "id": "watsons-sec-4-item-1",
              "name": "Şampuan",
              "description": "Çeşitli tipler.",
              "tags": [
                "kisisel bakim"
              ]
            },
            {
              "id": "watsons-sec-4-item-2",
              "name": "Duş Jeli",
              "description": "Ferahlatıcı.",
              "tags": [
                "kisisel bakim"
              ]
            },
            {
              "id": "watsons-sec-4-item-3",
              "name": "Diş Macunu",
              "description": "Seyahat boyu mevcut.",
              "tags": [
                "kisisel bakim"
              ]
            },
            {
              "id": "watsons-sec-4-item-4",
              "name": "Deodorant",
              "description": "Çeşitli.",
              "tags": [
                "kisisel bakim"
              ]
            }
          ]
        },
        {
          "id": "watsons-sec-5",
          "title": "Vitamin",
          "items": [
            {
              "id": "watsons-sec-5-item-1",
              "name": "Multivitamin",
              "description": "Günlük destek.",
              "tags": [
                "vitamin"
              ]
            },
            {
              "id": "watsons-sec-5-item-2",
              "name": "C Vitamini",
              "description": "Efervesan.",
              "tags": [
                "vitamin"
              ]
            },
            {
              "id": "watsons-sec-5-item-3",
              "name": "Magnezyum",
              "description": "Tablet.",
              "tags": [
                "vitamin"
              ]
            },
            {
              "id": "watsons-sec-5-item-4",
              "name": "Güneş Sonrası Elektrolit",
              "description": "Toz içecek.",
              "tags": [
                "vitamin"
              ]
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
          "id": "decathlon-sec-1",
          "title": "Yüzme",
          "items": [
            {
              "id": "decathlon-sec-1-item-1",
              "name": "Deniz Gözlüğü",
              "description": "Buğu önleyicili.",
              "tags": [
                "yuzme"
              ]
            },
            {
              "id": "decathlon-sec-1-item-2",
              "name": "Mayo",
              "description": "Kadın / erkek / çocuk.",
              "tags": [
                "yuzme"
              ]
            },
            {
              "id": "decathlon-sec-1-item-3",
              "name": "Bone",
              "description": "Silikon.",
              "tags": [
                "yuzme"
              ]
            },
            {
              "id": "decathlon-sec-1-item-4",
              "name": "Şnorkel Set",
              "description": "Maske + şnorkel.",
              "tags": [
                "yuzme"
              ]
            }
          ]
        },
        {
          "id": "decathlon-sec-2",
          "title": "Fitness",
          "items": [
            {
              "id": "decathlon-sec-2-item-1",
              "name": "Koşu Ayakkabısı",
              "description": "Hafif taban.",
              "tags": [
                "fitness"
              ]
            },
            {
              "id": "decathlon-sec-2-item-2",
              "name": "Spor Tişört",
              "description": "Nefes alan kumaş.",
              "tags": [
                "fitness"
              ]
            },
            {
              "id": "decathlon-sec-2-item-3",
              "name": "Tayt",
              "description": "Esnek.",
              "tags": [
                "fitness"
              ]
            },
            {
              "id": "decathlon-sec-2-item-4",
              "name": "Yoga Matı",
              "description": "Kaymaz.",
              "tags": [
                "fitness"
              ]
            }
          ]
        },
        {
          "id": "decathlon-sec-3",
          "title": "Koşu",
          "items": [
            {
              "id": "decathlon-sec-3-item-1",
              "name": "Koşu Ayakkabısı",
              "description": "Hafif taban.",
              "tags": [
                "kosu"
              ]
            },
            {
              "id": "decathlon-sec-3-item-2",
              "name": "Spor Tişört",
              "description": "Nefes alan kumaş.",
              "tags": [
                "kosu"
              ]
            },
            {
              "id": "decathlon-sec-3-item-3",
              "name": "Tayt",
              "description": "Esnek.",
              "tags": [
                "kosu"
              ]
            },
            {
              "id": "decathlon-sec-3-item-4",
              "name": "Yoga Matı",
              "description": "Kaymaz.",
              "tags": [
                "kosu"
              ]
            }
          ]
        },
        {
          "id": "decathlon-sec-4",
          "title": "Kamp",
          "items": [
            {
              "id": "decathlon-sec-4-item-1",
              "name": "Çadır",
              "description": "2-4 kişilik.",
              "tags": [
                "kamp"
              ]
            },
            {
              "id": "decathlon-sec-4-item-2",
              "name": "Kamp Sandalyesi",
              "description": "Katlanır.",
              "tags": [
                "kamp"
              ]
            },
            {
              "id": "decathlon-sec-4-item-3",
              "name": "Termos",
              "description": "Paslanmaz.",
              "tags": [
                "kamp"
              ]
            },
            {
              "id": "decathlon-sec-4-item-4",
              "name": "El Feneri",
              "description": "Şarjlı.",
              "tags": [
                "kamp"
              ]
            }
          ]
        },
        {
          "id": "decathlon-sec-5",
          "title": "Bisiklet",
          "items": [
            {
              "id": "decathlon-sec-5-item-1",
              "name": "Şehir Bisikleti",
              "description": "Konfor odaklı.",
              "tags": [
                "bisiklet"
              ]
            },
            {
              "id": "decathlon-sec-5-item-2",
              "name": "Kask",
              "description": "Ayarlanabilir.",
              "tags": [
                "bisiklet"
              ]
            },
            {
              "id": "decathlon-sec-5-item-3",
              "name": "Bisiklet Işığı",
              "description": "USB şarjlı.",
              "tags": [
                "bisiklet"
              ]
            },
            {
              "id": "decathlon-sec-5-item-4",
              "name": "Matara",
              "description": "750 ml.",
              "tags": [
                "bisiklet"
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
          "id": "pidem-sec-1",
          "title": "Pideler",
          "items": [
            {
              "id": "pidem-sec-1-item-1",
              "name": "Kıymalı Pide",
              "description": "Taş fırından.",
              "tags": [
                "pideler"
              ]
            },
            {
              "id": "pidem-sec-1-item-2",
              "name": "Kuşbaşılı Kaşarlı Pide",
              "description": "Bol malzemeli.",
              "tags": [
                "pideler"
              ]
            },
            {
              "id": "pidem-sec-1-item-3",
              "name": "Kaşarlı Pide",
              "description": "Tereyağlı.",
              "tags": [
                "pideler"
              ]
            },
            {
              "id": "pidem-sec-1-item-4",
              "name": "Lahmacun",
              "description": "İnce hamur, acılı/acısız.",
              "tags": [
                "pideler"
              ]
            }
          ]
        },
        {
          "id": "pidem-sec-2",
          "title": "Lahmacun",
          "items": [
            {
              "id": "pidem-sec-2-item-1",
              "name": "Kıymalı Pide",
              "description": "Taş fırından.",
              "tags": [
                "lahmacun"
              ]
            },
            {
              "id": "pidem-sec-2-item-2",
              "name": "Kuşbaşılı Kaşarlı Pide",
              "description": "Bol malzemeli.",
              "tags": [
                "lahmacun"
              ]
            },
            {
              "id": "pidem-sec-2-item-3",
              "name": "Kaşarlı Pide",
              "description": "Tereyağlı.",
              "tags": [
                "lahmacun"
              ]
            },
            {
              "id": "pidem-sec-2-item-4",
              "name": "Lahmacun",
              "description": "İnce hamur, acılı/acısız.",
              "tags": [
                "lahmacun"
              ]
            }
          ]
        },
        {
          "id": "pidem-sec-3",
          "title": "Salatalar",
          "items": [
            {
              "id": "pidem-sec-3-item-1",
              "name": "Sezar Salata",
              "description": "Izgara tavuklu.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "pidem-sec-3-item-2",
              "name": "Tavuklu Uzun Tabak",
              "description": "İmza salata.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "pidem-sec-3-item-3",
              "name": "Ton Balıklı Salata",
              "description": "Protein deposu.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "pidem-sec-3-item-4",
              "name": "Protein Bowl",
              "description": "Kinoa ve tavukla.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "pidem-sec-3-item-5",
              "name": "Wrap Çeşitleri",
              "description": "Tavuklu / sebzeli.",
              "tags": [
                "salatalar"
              ]
            }
          ]
        },
        {
          "id": "pidem-sec-4",
          "title": "Tatlılar",
          "items": [
            {
              "id": "pidem-sec-4-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "pidem-sec-4-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "pidem-sec-4-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "pidem-sec-4-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "pidem-sec-4-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            }
          ]
        },
        {
          "id": "pidem-sec-5",
          "title": "İçecekler",
          "items": [
            {
              "id": "pidem-sec-5-item-1",
              "name": "Ayran",
              "description": "Yayık ayranı.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "pidem-sec-5-item-2",
              "name": "Limonata",
              "description": "Ev yapımı, naneli.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "pidem-sec-5-item-3",
              "name": "Buzlu Çay",
              "description": "Şeftali / limon.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "pidem-sec-5-item-4",
              "name": "Taze Portakal Suyu",
              "description": "Günlük sıkım.",
              "tags": [
                "icecekler"
              ]
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
          "id": "starbucks-sec-1",
          "title": "Espresso Bazlı",
          "items": [
            {
              "id": "starbucks-sec-1-item-1",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "starbucks-sec-1-item-2",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "starbucks-sec-1-item-3",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "starbucks-sec-1-item-4",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "starbucks-sec-1-item-5",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "espresso bazli"
              ]
            }
          ]
        },
        {
          "id": "starbucks-sec-2",
          "title": "Filtre Kahve",
          "items": [
            {
              "id": "starbucks-sec-2-item-1",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "starbucks-sec-2-item-2",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "starbucks-sec-2-item-3",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "starbucks-sec-2-item-4",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "starbucks-sec-2-item-5",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "filtre kahve"
              ]
            }
          ]
        },
        {
          "id": "starbucks-sec-3",
          "title": "Frappuccino",
          "items": [
            {
              "id": "starbucks-sec-3-item-1",
              "name": "Caramel Frappuccino",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "frappuccino"
              ]
            },
            {
              "id": "starbucks-sec-3-item-2",
              "name": "Iced Latte",
              "description": "Buz üstüne süt ve espresso.",
              "tags": [
                "frappuccino"
              ]
            },
            {
              "id": "starbucks-sec-3-item-3",
              "name": "Iced Americano",
              "description": "Buzlu sade kahve.",
              "tags": [
                "frappuccino"
              ]
            },
            {
              "id": "starbucks-sec-3-item-4",
              "name": "Cold Brew",
              "description": "12 saat soğuk demleme.",
              "tags": [
                "frappuccino"
              ]
            },
            {
              "id": "starbucks-sec-3-item-5",
              "name": "Frozen",
              "description": "Meyveli buz karışımı.",
              "tags": [
                "frappuccino"
              ]
            },
            {
              "id": "starbucks-sec-3-item-6",
              "name": "Iced Mocha",
              "description": "Çikolatalı soğuk kahve.",
              "tags": [
                "frappuccino"
              ]
            }
          ]
        },
        {
          "id": "starbucks-sec-4",
          "title": "Çaylar",
          "items": [
            {
              "id": "starbucks-sec-4-item-1",
              "name": "Çay",
              "description": "Demleme.",
              "tags": [
                "caylar"
              ]
            },
            {
              "id": "starbucks-sec-4-item-2",
              "name": "Bitki Çayı",
              "description": "Ihlamur, adaçayı, kuşburnu.",
              "tags": [
                "caylar"
              ]
            },
            {
              "id": "starbucks-sec-4-item-3",
              "name": "Türk Kahvesi",
              "description": "Közde.",
              "tags": [
                "caylar"
              ]
            },
            {
              "id": "starbucks-sec-4-item-4",
              "name": "Sahlep",
              "description": "Tarçınlı.",
              "tags": [
                "caylar"
              ]
            }
          ]
        },
        {
          "id": "starbucks-sec-5",
          "title": "Tatlı & Sandviç",
          "items": [
            {
              "id": "starbucks-sec-5-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatli sandvic"
              ]
            },
            {
              "id": "starbucks-sec-5-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatli sandvic"
              ]
            },
            {
              "id": "starbucks-sec-5-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatli sandvic"
              ]
            },
            {
              "id": "starbucks-sec-5-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatli sandvic"
              ]
            },
            {
              "id": "starbucks-sec-5-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatli sandvic"
              ]
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
          "id": "gloria-jeans-sec-1",
          "title": "Espresso Bazlı",
          "items": [
            {
              "id": "gloria-jeans-sec-1-item-1",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "gloria-jeans-sec-1-item-2",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "gloria-jeans-sec-1-item-3",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "gloria-jeans-sec-1-item-4",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "gloria-jeans-sec-1-item-5",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "espresso bazli"
              ]
            }
          ]
        },
        {
          "id": "gloria-jeans-sec-2",
          "title": "Chiller",
          "items": [
            {
              "id": "gloria-jeans-sec-2-item-1",
              "name": "Chiller",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "chiller"
              ]
            },
            {
              "id": "gloria-jeans-sec-2-item-2",
              "name": "Iced Latte",
              "description": "Buz üstüne süt ve espresso.",
              "tags": [
                "chiller"
              ]
            },
            {
              "id": "gloria-jeans-sec-2-item-3",
              "name": "Iced Americano",
              "description": "Buzlu sade kahve.",
              "tags": [
                "chiller"
              ]
            },
            {
              "id": "gloria-jeans-sec-2-item-4",
              "name": "Cold Brew",
              "description": "12 saat soğuk demleme.",
              "tags": [
                "chiller"
              ]
            },
            {
              "id": "gloria-jeans-sec-2-item-5",
              "name": "Frozen",
              "description": "Meyveli buz karışımı.",
              "tags": [
                "chiller"
              ]
            },
            {
              "id": "gloria-jeans-sec-2-item-6",
              "name": "Iced Mocha",
              "description": "Çikolatalı soğuk kahve.",
              "tags": [
                "chiller"
              ]
            }
          ]
        },
        {
          "id": "gloria-jeans-sec-3",
          "title": "Filtre Kahve",
          "items": [
            {
              "id": "gloria-jeans-sec-3-item-1",
              "name": "Filtre Kahve",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "gloria-jeans-sec-3-item-2",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "gloria-jeans-sec-3-item-3",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "gloria-jeans-sec-3-item-4",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "gloria-jeans-sec-3-item-5",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "gloria-jeans-sec-3-item-6",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "filtre kahve"
              ]
            }
          ]
        },
        {
          "id": "gloria-jeans-sec-4",
          "title": "Çaylar",
          "items": [
            {
              "id": "gloria-jeans-sec-4-item-1",
              "name": "Çay",
              "description": "Demleme.",
              "tags": [
                "caylar"
              ]
            },
            {
              "id": "gloria-jeans-sec-4-item-2",
              "name": "Bitki Çayı",
              "description": "Ihlamur, adaçayı, kuşburnu.",
              "tags": [
                "caylar"
              ]
            },
            {
              "id": "gloria-jeans-sec-4-item-3",
              "name": "Türk Kahvesi",
              "description": "Közde.",
              "tags": [
                "caylar"
              ]
            },
            {
              "id": "gloria-jeans-sec-4-item-4",
              "name": "Sahlep",
              "description": "Tarçınlı.",
              "tags": [
                "caylar"
              ]
            }
          ]
        },
        {
          "id": "gloria-jeans-sec-5",
          "title": "Tatlılar",
          "items": [
            {
              "id": "gloria-jeans-sec-5-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "gloria-jeans-sec-5-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "gloria-jeans-sec-5-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "gloria-jeans-sec-5-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "gloria-jeans-sec-5-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
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
          "id": "green-salads-sec-1",
          "title": "Salatalar",
          "items": [
            {
              "id": "green-salads-sec-1-item-1",
              "name": "Tavuklu Salata",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "green-salads-sec-1-item-2",
              "name": "Sezar Salata",
              "description": "Izgara tavuklu.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "green-salads-sec-1-item-3",
              "name": "Tavuklu Uzun Tabak",
              "description": "İmza salata.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "green-salads-sec-1-item-4",
              "name": "Ton Balıklı Salata",
              "description": "Protein deposu.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "green-salads-sec-1-item-5",
              "name": "Protein Bowl",
              "description": "Kinoa ve tavukla.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "green-salads-sec-1-item-6",
              "name": "Wrap Çeşitleri",
              "description": "Tavuklu / sebzeli.",
              "tags": [
                "salatalar"
              ]
            }
          ]
        },
        {
          "id": "green-salads-sec-2",
          "title": "Bowllar",
          "items": [
            {
              "id": "green-salads-sec-2-item-1",
              "name": "Sezar Salata",
              "description": "Izgara tavuklu.",
              "tags": [
                "bowllar"
              ]
            },
            {
              "id": "green-salads-sec-2-item-2",
              "name": "Tavuklu Uzun Tabak",
              "description": "İmza salata.",
              "tags": [
                "bowllar"
              ]
            },
            {
              "id": "green-salads-sec-2-item-3",
              "name": "Ton Balıklı Salata",
              "description": "Protein deposu.",
              "tags": [
                "bowllar"
              ]
            },
            {
              "id": "green-salads-sec-2-item-4",
              "name": "Protein Bowl",
              "description": "Kinoa ve tavukla.",
              "tags": [
                "bowllar"
              ]
            },
            {
              "id": "green-salads-sec-2-item-5",
              "name": "Wrap Çeşitleri",
              "description": "Tavuklu / sebzeli.",
              "tags": [
                "bowllar"
              ]
            }
          ]
        },
        {
          "id": "green-salads-sec-3",
          "title": "Wrapler",
          "items": [
            {
              "id": "green-salads-sec-3-item-1",
              "name": "Sezar Salata",
              "description": "Izgara tavuklu.",
              "tags": [
                "wrapler"
              ]
            },
            {
              "id": "green-salads-sec-3-item-2",
              "name": "Tavuklu Uzun Tabak",
              "description": "İmza salata.",
              "tags": [
                "wrapler"
              ]
            },
            {
              "id": "green-salads-sec-3-item-3",
              "name": "Ton Balıklı Salata",
              "description": "Protein deposu.",
              "tags": [
                "wrapler"
              ]
            },
            {
              "id": "green-salads-sec-3-item-4",
              "name": "Protein Bowl",
              "description": "Kinoa ve tavukla.",
              "tags": [
                "wrapler"
              ]
            },
            {
              "id": "green-salads-sec-3-item-5",
              "name": "Wrap Çeşitleri",
              "description": "Tavuklu / sebzeli.",
              "tags": [
                "wrapler"
              ]
            }
          ]
        },
        {
          "id": "green-salads-sec-4",
          "title": "Taze İçecekler",
          "items": [
            {
              "id": "green-salads-sec-4-item-1",
              "name": "Ayran",
              "description": "Yayık ayranı.",
              "tags": [
                "taze icecekler"
              ]
            },
            {
              "id": "green-salads-sec-4-item-2",
              "name": "Limonata",
              "description": "Ev yapımı, naneli.",
              "tags": [
                "taze icecekler"
              ]
            },
            {
              "id": "green-salads-sec-4-item-3",
              "name": "Buzlu Çay",
              "description": "Şeftali / limon.",
              "tags": [
                "taze icecekler"
              ]
            },
            {
              "id": "green-salads-sec-4-item-4",
              "name": "Taze Portakal Suyu",
              "description": "Günlük sıkım.",
              "tags": [
                "taze icecekler"
              ]
            }
          ]
        },
        {
          "id": "green-salads-sec-5",
          "title": "Tatlılar",
          "items": [
            {
              "id": "green-salads-sec-5-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "green-salads-sec-5-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "green-salads-sec-5-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "green-salads-sec-5-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "green-salads-sec-5-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
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
          "id": "la-rocca-cafe-bistro-sec-1",
          "title": "Pizzalar",
          "items": [
            {
              "id": "la-rocca-cafe-bistro-sec-1-item-1",
              "name": "Odun Fırını Pizza",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "pizzalar"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-sec-1-item-2",
              "name": "Margherita",
              "description": "Domates, mozzarella, fesleğen.",
              "tags": [
                "pizzalar"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-sec-1-item-3",
              "name": "Quattro Formaggi",
              "description": "Dört peynirli.",
              "tags": [
                "pizzalar"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-sec-1-item-4",
              "name": "Sucuklu Pizza",
              "description": "Yerli dokunuş.",
              "tags": [
                "pizzalar"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-sec-1-item-5",
              "name": "Vejetaryen Pizza",
              "description": "Mevsim sebzeli.",
              "tags": [
                "pizzalar"
              ]
            }
          ]
        },
        {
          "id": "la-rocca-cafe-bistro-sec-2",
          "title": "Steakler",
          "items": [
            {
              "id": "la-rocca-cafe-bistro-sec-2-item-1",
              "name": "Antrikot",
              "description": "Dry-aged, ızgara.",
              "tags": [
                "steakler"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-sec-2-item-2",
              "name": "Bonfile",
              "description": "Tereyağında.",
              "tags": [
                "steakler"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-sec-2-item-3",
              "name": "T-Bone",
              "description": "Paylaşımlık.",
              "tags": [
                "steakler"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-sec-2-item-4",
              "name": "Kasap Köfte",
              "description": "Izgara, közlenmiş sebzeyle.",
              "tags": [
                "steakler"
              ]
            }
          ]
        },
        {
          "id": "la-rocca-cafe-bistro-sec-3",
          "title": "Kahvaltı",
          "items": [
            {
              "id": "la-rocca-cafe-bistro-sec-3-item-1",
              "name": "Serpme Kahvaltı",
              "description": "Zengin köy kahvaltısı, sınırsız çay.",
              "tags": [
                "kahvalti"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-sec-3-item-2",
              "name": "Menemen",
              "description": "Bol domatesli.",
              "tags": [
                "kahvalti"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-sec-3-item-3",
              "name": "Avokado Tost",
              "description": "Ekşi maya üstü avokado.",
              "tags": [
                "kahvalti"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-sec-3-item-4",
              "name": "Omlet Çeşitleri",
              "description": "Sade, kaşarlı, mantarlı.",
              "tags": [
                "kahvalti"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-sec-3-item-5",
              "name": "Simit Tabağı",
              "description": "Simit, beyaz peynir, domates.",
              "tags": [
                "kahvalti"
              ]
            }
          ]
        },
        {
          "id": "la-rocca-cafe-bistro-sec-4",
          "title": "Makarnalar",
          "items": [
            {
              "id": "la-rocca-cafe-bistro-sec-4-item-1",
              "name": "Makarna",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "makarnalar"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-sec-4-item-2",
              "name": "Penne Arrabiata",
              "description": "Acılı domates soslu.",
              "tags": [
                "makarnalar"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-sec-4-item-3",
              "name": "Fettuccine Alfredo",
              "description": "Kremalı.",
              "tags": [
                "makarnalar"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-sec-4-item-4",
              "name": "Bolonez",
              "description": "Kıymalı klasik.",
              "tags": [
                "makarnalar"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-sec-4-item-5",
              "name": "Pesto Makarna",
              "description": "Fesleğen soslu.",
              "tags": [
                "makarnalar"
              ]
            }
          ]
        },
        {
          "id": "la-rocca-cafe-bistro-sec-5",
          "title": "Kokteyller",
          "items": [
            {
              "id": "la-rocca-cafe-bistro-sec-5-item-1",
              "name": "Kokteyl",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "kokteyller"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-sec-5-item-2",
              "name": "Mojito",
              "description": "Nane ve lime ile.",
              "tags": [
                "kokteyller"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-sec-5-item-3",
              "name": "Aperol Spritz",
              "description": "Gün batımı klasiği.",
              "tags": [
                "kokteyller"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-sec-5-item-4",
              "name": "Gin Tonic",
              "description": "Aromatik bitkilerle.",
              "tags": [
                "kokteyller"
              ]
            },
            {
              "id": "la-rocca-cafe-bistro-sec-5-item-5",
              "name": "Margarita",
              "description": "Tuz kenarlı klasik.",
              "tags": [
                "kokteyller"
              ]
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
          "id": "coffees-sec-1",
          "title": "Kahveler",
          "items": [
            {
              "id": "coffees-sec-1-item-1",
              "name": "Filtre Kahve",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "coffees-sec-1-item-2",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "coffees-sec-1-item-3",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "coffees-sec-1-item-4",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "coffees-sec-1-item-5",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "coffees-sec-1-item-6",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "kahveler"
              ]
            }
          ]
        },
        {
          "id": "coffees-sec-2",
          "title": "Soğuk İçecekler",
          "items": [
            {
              "id": "coffees-sec-2-item-1",
              "name": "Iced Latte",
              "description": "Buz üstüne süt ve espresso.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "coffees-sec-2-item-2",
              "name": "Iced Americano",
              "description": "Buzlu sade kahve.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "coffees-sec-2-item-3",
              "name": "Cold Brew",
              "description": "12 saat soğuk demleme.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "coffees-sec-2-item-4",
              "name": "Frozen",
              "description": "Meyveli buz karışımı.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "coffees-sec-2-item-5",
              "name": "Iced Mocha",
              "description": "Çikolatalı soğuk kahve.",
              "tags": [
                "soguk icecekler"
              ]
            }
          ]
        },
        {
          "id": "coffees-sec-3",
          "title": "Atıştırmalıklar",
          "items": [
            {
              "id": "coffees-sec-3-item-1",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "atistirmaliklar"
              ]
            },
            {
              "id": "coffees-sec-3-item-2",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "atistirmaliklar"
              ]
            },
            {
              "id": "coffees-sec-3-item-3",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "atistirmaliklar"
              ]
            },
            {
              "id": "coffees-sec-3-item-4",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "atistirmaliklar"
              ]
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
          "id": "mackbear-sec-1",
          "title": "Espresso Bazlı",
          "items": [
            {
              "id": "mackbear-sec-1-item-1",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "mackbear-sec-1-item-2",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "mackbear-sec-1-item-3",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "mackbear-sec-1-item-4",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "mackbear-sec-1-item-5",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "espresso bazli"
              ]
            }
          ]
        },
        {
          "id": "mackbear-sec-2",
          "title": "Soğuk Kahveler",
          "items": [
            {
              "id": "mackbear-sec-2-item-1",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "soguk kahveler"
              ]
            },
            {
              "id": "mackbear-sec-2-item-2",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "soguk kahveler"
              ]
            },
            {
              "id": "mackbear-sec-2-item-3",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "soguk kahveler"
              ]
            },
            {
              "id": "mackbear-sec-2-item-4",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "soguk kahveler"
              ]
            },
            {
              "id": "mackbear-sec-2-item-5",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "soguk kahveler"
              ]
            }
          ]
        },
        {
          "id": "mackbear-sec-3",
          "title": "Frozen",
          "items": [
            {
              "id": "mackbear-sec-3-item-1",
              "name": "Iced Latte",
              "description": "Buz üstüne süt ve espresso.",
              "tags": [
                "frozen"
              ]
            },
            {
              "id": "mackbear-sec-3-item-2",
              "name": "Iced Americano",
              "description": "Buzlu sade kahve.",
              "tags": [
                "frozen"
              ]
            },
            {
              "id": "mackbear-sec-3-item-3",
              "name": "Cold Brew",
              "description": "12 saat soğuk demleme.",
              "tags": [
                "frozen"
              ]
            },
            {
              "id": "mackbear-sec-3-item-4",
              "name": "Frozen",
              "description": "Meyveli buz karışımı.",
              "tags": [
                "frozen"
              ]
            },
            {
              "id": "mackbear-sec-3-item-5",
              "name": "Iced Mocha",
              "description": "Çikolatalı soğuk kahve.",
              "tags": [
                "frozen"
              ]
            }
          ]
        },
        {
          "id": "mackbear-sec-4",
          "title": "Tatlılar",
          "items": [
            {
              "id": "mackbear-sec-4-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "mackbear-sec-4-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "mackbear-sec-4-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "mackbear-sec-4-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "mackbear-sec-4-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
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
          "id": "yotto-sec-1",
          "title": "Sushi",
          "items": [
            {
              "id": "yotto-sec-1-item-1",
              "name": "California Roll",
              "description": "8'li roll.",
              "tags": [
                "sushi"
              ]
            },
            {
              "id": "yotto-sec-1-item-2",
              "name": "Somonlu Sushi Set",
              "description": "Günlük somonla.",
              "tags": [
                "sushi"
              ]
            },
            {
              "id": "yotto-sec-1-item-3",
              "name": "Nigiri Tabağı",
              "description": "Karışık seçki.",
              "tags": [
                "sushi"
              ]
            },
            {
              "id": "yotto-sec-1-item-4",
              "name": "Gyoza",
              "description": "Buharda, soya sosla.",
              "tags": [
                "sushi"
              ]
            }
          ]
        },
        {
          "id": "yotto-sec-2",
          "title": "Wok",
          "items": [
            {
              "id": "yotto-sec-2-item-1",
              "name": "Tavuklu Wok",
              "description": "Sebzeli, teriyaki soslu.",
              "tags": [
                "wok"
              ]
            },
            {
              "id": "yotto-sec-2-item-2",
              "name": "Sebzeli Noodle",
              "description": "Acı soslu seçenekli.",
              "tags": [
                "wok"
              ]
            },
            {
              "id": "yotto-sec-2-item-3",
              "name": "Dana Wok",
              "description": "Körili.",
              "tags": [
                "wok"
              ]
            },
            {
              "id": "yotto-sec-2-item-4",
              "name": "Pad Thai",
              "description": "Fıstıklı klasik.",
              "tags": [
                "wok"
              ]
            }
          ]
        },
        {
          "id": "yotto-sec-3",
          "title": "Noodle",
          "items": [
            {
              "id": "yotto-sec-3-item-1",
              "name": "Noodle",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "noodle"
              ]
            },
            {
              "id": "yotto-sec-3-item-2",
              "name": "Tavuklu Wok",
              "description": "Sebzeli, teriyaki soslu.",
              "tags": [
                "noodle"
              ]
            },
            {
              "id": "yotto-sec-3-item-3",
              "name": "Sebzeli Noodle",
              "description": "Acı soslu seçenekli.",
              "tags": [
                "noodle"
              ]
            },
            {
              "id": "yotto-sec-3-item-4",
              "name": "Dana Wok",
              "description": "Körili.",
              "tags": [
                "noodle"
              ]
            },
            {
              "id": "yotto-sec-3-item-5",
              "name": "Pad Thai",
              "description": "Fıstıklı klasik.",
              "tags": [
                "noodle"
              ]
            }
          ]
        },
        {
          "id": "yotto-sec-4",
          "title": "Başlangıçlar",
          "items": [
            {
              "id": "yotto-sec-4-item-1",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "baslangiclar"
              ]
            },
            {
              "id": "yotto-sec-4-item-2",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "baslangiclar"
              ]
            },
            {
              "id": "yotto-sec-4-item-3",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "baslangiclar"
              ]
            },
            {
              "id": "yotto-sec-4-item-4",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "baslangiclar"
              ]
            }
          ]
        },
        {
          "id": "yotto-sec-5",
          "title": "İçecekler",
          "items": [
            {
              "id": "yotto-sec-5-item-1",
              "name": "Ayran",
              "description": "Yayık ayranı.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "yotto-sec-5-item-2",
              "name": "Limonata",
              "description": "Ev yapımı, naneli.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "yotto-sec-5-item-3",
              "name": "Buzlu Çay",
              "description": "Şeftali / limon.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "yotto-sec-5-item-4",
              "name": "Taze Portakal Suyu",
              "description": "Günlük sıkım.",
              "tags": [
                "icecekler"
              ]
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
          "id": "ozsut-sec-1",
          "title": "Sütlü Tatlılar",
          "items": [
            {
              "id": "ozsut-sec-1-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "sutlu tatlilar"
              ]
            },
            {
              "id": "ozsut-sec-1-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "sutlu tatlilar"
              ]
            },
            {
              "id": "ozsut-sec-1-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "sutlu tatlilar"
              ]
            },
            {
              "id": "ozsut-sec-1-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "sutlu tatlilar"
              ]
            },
            {
              "id": "ozsut-sec-1-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "sutlu tatlilar"
              ]
            }
          ]
        },
        {
          "id": "ozsut-sec-2",
          "title": "Cheesecake",
          "items": [
            {
              "id": "ozsut-sec-2-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "cheesecake"
              ]
            },
            {
              "id": "ozsut-sec-2-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "cheesecake"
              ]
            },
            {
              "id": "ozsut-sec-2-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "cheesecake"
              ]
            },
            {
              "id": "ozsut-sec-2-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "cheesecake"
              ]
            },
            {
              "id": "ozsut-sec-2-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "cheesecake"
              ]
            }
          ]
        },
        {
          "id": "ozsut-sec-3",
          "title": "Dondurma",
          "items": [
            {
              "id": "ozsut-sec-3-item-1",
              "name": "Dondurma",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "dondurma"
              ]
            },
            {
              "id": "ozsut-sec-3-item-2",
              "name": "Kesme Dondurma",
              "description": "Keçi sütlü Maraş usulü.",
              "tags": [
                "dondurma"
              ]
            },
            {
              "id": "ozsut-sec-3-item-3",
              "name": "Külahta İki Top",
              "description": "Günün çeşitleri.",
              "tags": [
                "dondurma"
              ]
            },
            {
              "id": "ozsut-sec-3-item-4",
              "name": "Çikolatalı Dondurma",
              "description": "Belçika çikolatalı.",
              "tags": [
                "dondurma"
              ]
            },
            {
              "id": "ozsut-sec-3-item-5",
              "name": "Meyveli Sorbe",
              "description": "Süt içermez.",
              "tags": [
                "dondurma"
              ]
            }
          ]
        },
        {
          "id": "ozsut-sec-4",
          "title": "Kahvaltı",
          "items": [
            {
              "id": "ozsut-sec-4-item-1",
              "name": "Serpme Kahvaltı",
              "description": "Zengin köy kahvaltısı, sınırsız çay.",
              "tags": [
                "kahvalti"
              ]
            },
            {
              "id": "ozsut-sec-4-item-2",
              "name": "Menemen",
              "description": "Bol domatesli.",
              "tags": [
                "kahvalti"
              ]
            },
            {
              "id": "ozsut-sec-4-item-3",
              "name": "Avokado Tost",
              "description": "Ekşi maya üstü avokado.",
              "tags": [
                "kahvalti"
              ]
            },
            {
              "id": "ozsut-sec-4-item-4",
              "name": "Omlet Çeşitleri",
              "description": "Sade, kaşarlı, mantarlı.",
              "tags": [
                "kahvalti"
              ]
            },
            {
              "id": "ozsut-sec-4-item-5",
              "name": "Simit Tabağı",
              "description": "Simit, beyaz peynir, domates.",
              "tags": [
                "kahvalti"
              ]
            }
          ]
        },
        {
          "id": "ozsut-sec-5",
          "title": "Kahveler",
          "items": [
            {
              "id": "ozsut-sec-5-item-1",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "ozsut-sec-5-item-2",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "ozsut-sec-5-item-3",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "ozsut-sec-5-item-4",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "ozsut-sec-5-item-5",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "kahveler"
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
          "id": "varuna-gezgin-sec-1",
          "title": "Kahveler",
          "items": [
            {
              "id": "varuna-gezgin-sec-1-item-1",
              "name": "Dünya Kahveleri",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "varuna-gezgin-sec-1-item-2",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "varuna-gezgin-sec-1-item-3",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "varuna-gezgin-sec-1-item-4",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "varuna-gezgin-sec-1-item-5",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "varuna-gezgin-sec-1-item-6",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "kahveler"
              ]
            }
          ]
        },
        {
          "id": "varuna-gezgin-sec-2",
          "title": "Dünya Mutfağı",
          "items": [
            {
              "id": "varuna-gezgin-sec-2-item-1",
              "name": "Dünya Kahveleri Seçkisi",
              "description": "Origin çekirdekler.",
              "tags": [
                "dunya mutfagi"
              ]
            },
            {
              "id": "varuna-gezgin-sec-2-item-2",
              "name": "Meksika Tabağı",
              "description": "Fajita ve dip soslar.",
              "tags": [
                "dunya mutfagi"
              ]
            },
            {
              "id": "varuna-gezgin-sec-2-item-3",
              "name": "Asya Noodle",
              "description": "Sebzeli.",
              "tags": [
                "dunya mutfagi"
              ]
            },
            {
              "id": "varuna-gezgin-sec-2-item-4",
              "name": "Akdeniz Mezeleri",
              "description": "Paylaşımlık.",
              "tags": [
                "dunya mutfagi"
              ]
            }
          ]
        },
        {
          "id": "varuna-gezgin-sec-3",
          "title": "Burgerler",
          "items": [
            {
              "id": "varuna-gezgin-sec-3-item-1",
              "name": "Burger",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "varuna-gezgin-sec-3-item-2",
              "name": "Cheeseburger",
              "description": "Cheddar'lı klasik.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "varuna-gezgin-sec-3-item-3",
              "name": "Double Burger",
              "description": "Çift köfte, yoğun lezzet.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "varuna-gezgin-sec-3-item-4",
              "name": "Tavuk Burger",
              "description": "Çıtır tavuklu.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "varuna-gezgin-sec-3-item-5",
              "name": "House Burger",
              "description": "Mekanın imza burgeri.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "varuna-gezgin-sec-3-item-6",
              "name": "Mini Burger Tabağı",
              "description": "Üçlü tadım seti.",
              "tags": [
                "burgerler"
              ]
            }
          ]
        },
        {
          "id": "varuna-gezgin-sec-4",
          "title": "Kokteyller",
          "items": [
            {
              "id": "varuna-gezgin-sec-4-item-1",
              "name": "Kokteyl",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "kokteyller"
              ]
            },
            {
              "id": "varuna-gezgin-sec-4-item-2",
              "name": "Mojito",
              "description": "Nane ve lime ile.",
              "tags": [
                "kokteyller"
              ]
            },
            {
              "id": "varuna-gezgin-sec-4-item-3",
              "name": "Aperol Spritz",
              "description": "Gün batımı klasiği.",
              "tags": [
                "kokteyller"
              ]
            },
            {
              "id": "varuna-gezgin-sec-4-item-4",
              "name": "Gin Tonic",
              "description": "Aromatik bitkilerle.",
              "tags": [
                "kokteyller"
              ]
            },
            {
              "id": "varuna-gezgin-sec-4-item-5",
              "name": "Margarita",
              "description": "Tuz kenarlı klasik.",
              "tags": [
                "kokteyller"
              ]
            }
          ]
        },
        {
          "id": "varuna-gezgin-sec-5",
          "title": "Tatlılar",
          "items": [
            {
              "id": "varuna-gezgin-sec-5-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "varuna-gezgin-sec-5-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "varuna-gezgin-sec-5-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "varuna-gezgin-sec-5-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "varuna-gezgin-sec-5-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatlilar"
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
          "id": "bereket-doner-sec-1",
          "title": "Tavuk Döner",
          "items": [
            {
              "id": "bereket-doner-sec-1-item-1",
              "name": "Ekmek Arası Döner",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "tavuk doner"
              ]
            },
            {
              "id": "bereket-doner-sec-1-item-2",
              "name": "Tavuk Dürüm",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "tavuk doner"
              ]
            },
            {
              "id": "bereket-doner-sec-1-item-3",
              "name": "Et Döner Dürüm",
              "description": "Lavaşta közlenmiş et döner.",
              "tags": [
                "tavuk doner"
              ]
            },
            {
              "id": "bereket-doner-sec-1-item-4",
              "name": "Tavuk Döner Dürüm",
              "description": "Bol malzemeli.",
              "tags": [
                "tavuk doner"
              ]
            },
            {
              "id": "bereket-doner-sec-1-item-5",
              "name": "Porsiyon Döner",
              "description": "Pilav ve közlenmiş biberle.",
              "tags": [
                "tavuk doner"
              ]
            },
            {
              "id": "bereket-doner-sec-1-item-6",
              "name": "Pilav Üstü Döner",
              "description": "Doyurucu klasik.",
              "tags": [
                "tavuk doner"
              ]
            }
          ]
        },
        {
          "id": "bereket-doner-sec-2",
          "title": "Et Döner",
          "items": [
            {
              "id": "bereket-doner-sec-2-item-1",
              "name": "Et Dürüm",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "et doner"
              ]
            },
            {
              "id": "bereket-doner-sec-2-item-2",
              "name": "Et Döner Dürüm",
              "description": "Lavaşta közlenmiş et döner.",
              "tags": [
                "et doner"
              ]
            },
            {
              "id": "bereket-doner-sec-2-item-3",
              "name": "Tavuk Döner Dürüm",
              "description": "Bol malzemeli.",
              "tags": [
                "et doner"
              ]
            },
            {
              "id": "bereket-doner-sec-2-item-4",
              "name": "Porsiyon Döner",
              "description": "Pilav ve közlenmiş biberle.",
              "tags": [
                "et doner"
              ]
            },
            {
              "id": "bereket-doner-sec-2-item-5",
              "name": "Pilav Üstü Döner",
              "description": "Doyurucu klasik.",
              "tags": [
                "et doner"
              ]
            },
            {
              "id": "bereket-doner-sec-2-item-6",
              "name": "Zurna Dürüm",
              "description": "Büyük boy.",
              "tags": [
                "et doner"
              ]
            }
          ]
        },
        {
          "id": "bereket-doner-sec-3",
          "title": "Dürümler",
          "items": [
            {
              "id": "bereket-doner-sec-3-item-1",
              "name": "Et Döner Dürüm",
              "description": "Lavaşta közlenmiş et döner.",
              "tags": [
                "durumler"
              ]
            },
            {
              "id": "bereket-doner-sec-3-item-2",
              "name": "Tavuk Döner Dürüm",
              "description": "Bol malzemeli.",
              "tags": [
                "durumler"
              ]
            },
            {
              "id": "bereket-doner-sec-3-item-3",
              "name": "Porsiyon Döner",
              "description": "Pilav ve közlenmiş biberle.",
              "tags": [
                "durumler"
              ]
            },
            {
              "id": "bereket-doner-sec-3-item-4",
              "name": "Pilav Üstü Döner",
              "description": "Doyurucu klasik.",
              "tags": [
                "durumler"
              ]
            },
            {
              "id": "bereket-doner-sec-3-item-5",
              "name": "Zurna Dürüm",
              "description": "Büyük boy.",
              "tags": [
                "durumler"
              ]
            }
          ]
        },
        {
          "id": "bereket-doner-sec-4",
          "title": "Menüler",
          "items": [
            {
              "id": "bereket-doner-sec-4-item-1",
              "name": "Menü",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "menuler"
              ]
            },
            {
              "id": "bereket-doner-sec-4-item-2",
              "name": "Ayran",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "menuler"
              ]
            },
            {
              "id": "bereket-doner-sec-4-item-3",
              "name": "Günün Önerisi",
              "description": "Sorunuz.",
              "tags": [
                "menuler"
              ]
            },
            {
              "id": "bereket-doner-sec-4-item-4",
              "name": "Mevsim Seçkisi",
              "description": "Dönemsel.",
              "tags": [
                "menuler"
              ]
            }
          ]
        },
        {
          "id": "bereket-doner-sec-5",
          "title": "İçecekler",
          "items": [
            {
              "id": "bereket-doner-sec-5-item-1",
              "name": "Ayran",
              "description": "Yayık ayranı.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "bereket-doner-sec-5-item-2",
              "name": "Limonata",
              "description": "Ev yapımı, naneli.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "bereket-doner-sec-5-item-3",
              "name": "Buzlu Çay",
              "description": "Şeftali / limon.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "bereket-doner-sec-5-item-4",
              "name": "Taze Portakal Suyu",
              "description": "Günlük sıkım.",
              "tags": [
                "icecekler"
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
          "id": "coffee-di-toee-sec-1",
          "title": "Espresso Bazlı",
          "items": [
            {
              "id": "coffee-di-toee-sec-1-item-1",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "coffee-di-toee-sec-1-item-2",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "coffee-di-toee-sec-1-item-3",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "coffee-di-toee-sec-1-item-4",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "espresso bazli"
              ]
            },
            {
              "id": "coffee-di-toee-sec-1-item-5",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "espresso bazli"
              ]
            }
          ]
        },
        {
          "id": "coffee-di-toee-sec-2",
          "title": "Filtre Kahve",
          "items": [
            {
              "id": "coffee-di-toee-sec-2-item-1",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "coffee-di-toee-sec-2-item-2",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "coffee-di-toee-sec-2-item-3",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "coffee-di-toee-sec-2-item-4",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "filtre kahve"
              ]
            },
            {
              "id": "coffee-di-toee-sec-2-item-5",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "filtre kahve"
              ]
            }
          ]
        },
        {
          "id": "coffee-di-toee-sec-3",
          "title": "Soğuk Kahveler",
          "items": [
            {
              "id": "coffee-di-toee-sec-3-item-1",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "soguk kahveler"
              ]
            },
            {
              "id": "coffee-di-toee-sec-3-item-2",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "soguk kahveler"
              ]
            },
            {
              "id": "coffee-di-toee-sec-3-item-3",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "soguk kahveler"
              ]
            },
            {
              "id": "coffee-di-toee-sec-3-item-4",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "soguk kahveler"
              ]
            },
            {
              "id": "coffee-di-toee-sec-3-item-5",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "soguk kahveler"
              ]
            }
          ]
        },
        {
          "id": "coffee-di-toee-sec-4",
          "title": "Tatlılar",
          "items": [
            {
              "id": "coffee-di-toee-sec-4-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "coffee-di-toee-sec-4-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "coffee-di-toee-sec-4-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "coffee-di-toee-sec-4-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "coffee-di-toee-sec-4-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
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
          "id": "bex-coffee-sec-1",
          "title": "Kahveler",
          "items": [
            {
              "id": "bex-coffee-sec-1-item-1",
              "name": "Filtre Kahve",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "bex-coffee-sec-1-item-2",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "bex-coffee-sec-1-item-3",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "bex-coffee-sec-1-item-4",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "bex-coffee-sec-1-item-5",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "bex-coffee-sec-1-item-6",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "kahveler"
              ]
            }
          ]
        },
        {
          "id": "bex-coffee-sec-2",
          "title": "Soğuk İçecekler",
          "items": [
            {
              "id": "bex-coffee-sec-2-item-1",
              "name": "Iced Latte",
              "description": "Buz üstüne süt ve espresso.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "bex-coffee-sec-2-item-2",
              "name": "Iced Americano",
              "description": "Buzlu sade kahve.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "bex-coffee-sec-2-item-3",
              "name": "Cold Brew",
              "description": "12 saat soğuk demleme.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "bex-coffee-sec-2-item-4",
              "name": "Frozen",
              "description": "Meyveli buz karışımı.",
              "tags": [
                "soguk icecekler"
              ]
            },
            {
              "id": "bex-coffee-sec-2-item-5",
              "name": "Iced Mocha",
              "description": "Çikolatalı soğuk kahve.",
              "tags": [
                "soguk icecekler"
              ]
            }
          ]
        },
        {
          "id": "bex-coffee-sec-3",
          "title": "Atıştırmalıklar",
          "items": [
            {
              "id": "bex-coffee-sec-3-item-1",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "atistirmaliklar"
              ]
            },
            {
              "id": "bex-coffee-sec-3-item-2",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "atistirmaliklar"
              ]
            },
            {
              "id": "bex-coffee-sec-3-item-3",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "atistirmaliklar"
              ]
            },
            {
              "id": "bex-coffee-sec-3-item-4",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "atistirmaliklar"
              ]
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
          "id": "mcdonalds-sec-1",
          "title": "Burger Menüleri",
          "items": [
            {
              "id": "mcdonalds-sec-1-item-1",
              "name": "Cheeseburger",
              "description": "Cheddar'lı klasik.",
              "tags": [
                "burger menuleri"
              ]
            },
            {
              "id": "mcdonalds-sec-1-item-2",
              "name": "Double Burger",
              "description": "Çift köfte, yoğun lezzet.",
              "tags": [
                "burger menuleri"
              ]
            },
            {
              "id": "mcdonalds-sec-1-item-3",
              "name": "Tavuk Burger",
              "description": "Çıtır tavuklu.",
              "tags": [
                "burger menuleri"
              ]
            },
            {
              "id": "mcdonalds-sec-1-item-4",
              "name": "House Burger",
              "description": "Mekanın imza burgeri.",
              "tags": [
                "burger menuleri"
              ]
            },
            {
              "id": "mcdonalds-sec-1-item-5",
              "name": "Mini Burger Tabağı",
              "description": "Üçlü tadım seti.",
              "tags": [
                "burger menuleri"
              ]
            }
          ]
        },
        {
          "id": "mcdonalds-sec-2",
          "title": "Tavuk Ürünleri",
          "items": [
            {
              "id": "mcdonalds-sec-2-item-1",
              "name": "Çıtır Tavuk",
              "description": "Baharatlı kaplama.",
              "tags": [
                "tavuk urunleri"
              ]
            },
            {
              "id": "mcdonalds-sec-2-item-2",
              "name": "Izgara Tavuk",
              "description": "Marine edilmiş.",
              "tags": [
                "tavuk urunleri"
              ]
            },
            {
              "id": "mcdonalds-sec-2-item-3",
              "name": "Kanat",
              "description": "Acılı soslu.",
              "tags": [
                "tavuk urunleri"
              ]
            },
            {
              "id": "mcdonalds-sec-2-item-4",
              "name": "Köri Soslu Tavuk",
              "description": "Pilav eşliğinde.",
              "tags": [
                "tavuk urunleri"
              ]
            }
          ]
        },
        {
          "id": "mcdonalds-sec-3",
          "title": "Patates",
          "items": [
            {
              "id": "mcdonalds-sec-3-item-1",
              "name": "Patates",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "patates"
              ]
            },
            {
              "id": "mcdonalds-sec-3-item-2",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "patates"
              ]
            },
            {
              "id": "mcdonalds-sec-3-item-3",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "patates"
              ]
            },
            {
              "id": "mcdonalds-sec-3-item-4",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "patates"
              ]
            },
            {
              "id": "mcdonalds-sec-3-item-5",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "patates"
              ]
            }
          ]
        },
        {
          "id": "mcdonalds-sec-4",
          "title": "Tatlı & Dondurma",
          "items": [
            {
              "id": "mcdonalds-sec-4-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatli dondurma"
              ]
            },
            {
              "id": "mcdonalds-sec-4-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatli dondurma"
              ]
            },
            {
              "id": "mcdonalds-sec-4-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatli dondurma"
              ]
            },
            {
              "id": "mcdonalds-sec-4-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatli dondurma"
              ]
            },
            {
              "id": "mcdonalds-sec-4-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatli dondurma"
              ]
            }
          ]
        },
        {
          "id": "mcdonalds-sec-5",
          "title": "Kahvaltı",
          "items": [
            {
              "id": "mcdonalds-sec-5-item-1",
              "name": "Serpme Kahvaltı",
              "description": "Zengin köy kahvaltısı, sınırsız çay.",
              "tags": [
                "kahvalti"
              ]
            },
            {
              "id": "mcdonalds-sec-5-item-2",
              "name": "Menemen",
              "description": "Bol domatesli.",
              "tags": [
                "kahvalti"
              ]
            },
            {
              "id": "mcdonalds-sec-5-item-3",
              "name": "Avokado Tost",
              "description": "Ekşi maya üstü avokado.",
              "tags": [
                "kahvalti"
              ]
            },
            {
              "id": "mcdonalds-sec-5-item-4",
              "name": "Omlet Çeşitleri",
              "description": "Sade, kaşarlı, mantarlı.",
              "tags": [
                "kahvalti"
              ]
            },
            {
              "id": "mcdonalds-sec-5-item-5",
              "name": "Simit Tabağı",
              "description": "Simit, beyaz peynir, domates.",
              "tags": [
                "kahvalti"
              ]
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
          "id": "durumle-sec-1",
          "title": "Et Dürümler",
          "items": [
            {
              "id": "durumle-sec-1-item-1",
              "name": "Tavuk Dürüm",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "et durumler"
              ]
            },
            {
              "id": "durumle-sec-1-item-2",
              "name": "Kaşarlı Et Dürüm",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "et durumler"
              ]
            },
            {
              "id": "durumle-sec-1-item-3",
              "name": "Et Döner Dürüm",
              "description": "Lavaşta közlenmiş et döner.",
              "tags": [
                "et durumler"
              ]
            },
            {
              "id": "durumle-sec-1-item-4",
              "name": "Tavuk Döner Dürüm",
              "description": "Bol malzemeli.",
              "tags": [
                "et durumler"
              ]
            },
            {
              "id": "durumle-sec-1-item-5",
              "name": "Porsiyon Döner",
              "description": "Pilav ve közlenmiş biberle.",
              "tags": [
                "et durumler"
              ]
            },
            {
              "id": "durumle-sec-1-item-6",
              "name": "Pilav Üstü Döner",
              "description": "Doyurucu klasik.",
              "tags": [
                "et durumler"
              ]
            }
          ]
        },
        {
          "id": "durumle-sec-2",
          "title": "Tavuk Dürümler",
          "items": [
            {
              "id": "durumle-sec-2-item-1",
              "name": "Et Döner Dürüm",
              "description": "Lavaşta közlenmiş et döner.",
              "tags": [
                "tavuk durumler"
              ]
            },
            {
              "id": "durumle-sec-2-item-2",
              "name": "Tavuk Döner Dürüm",
              "description": "Bol malzemeli.",
              "tags": [
                "tavuk durumler"
              ]
            },
            {
              "id": "durumle-sec-2-item-3",
              "name": "Porsiyon Döner",
              "description": "Pilav ve közlenmiş biberle.",
              "tags": [
                "tavuk durumler"
              ]
            },
            {
              "id": "durumle-sec-2-item-4",
              "name": "Pilav Üstü Döner",
              "description": "Doyurucu klasik.",
              "tags": [
                "tavuk durumler"
              ]
            },
            {
              "id": "durumle-sec-2-item-5",
              "name": "Zurna Dürüm",
              "description": "Büyük boy.",
              "tags": [
                "tavuk durumler"
              ]
            }
          ]
        },
        {
          "id": "durumle-sec-3",
          "title": "Yan Ürünler",
          "items": [
            {
              "id": "durumle-sec-3-item-1",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "yan urunler"
              ]
            },
            {
              "id": "durumle-sec-3-item-2",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "yan urunler"
              ]
            },
            {
              "id": "durumle-sec-3-item-3",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "yan urunler"
              ]
            },
            {
              "id": "durumle-sec-3-item-4",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "yan urunler"
              ]
            }
          ]
        },
        {
          "id": "durumle-sec-4",
          "title": "İçecekler",
          "items": [
            {
              "id": "durumle-sec-4-item-1",
              "name": "Ayran",
              "description": "Yayık ayranı.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "durumle-sec-4-item-2",
              "name": "Limonata",
              "description": "Ev yapımı, naneli.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "durumle-sec-4-item-3",
              "name": "Buzlu Çay",
              "description": "Şeftali / limon.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "durumle-sec-4-item-4",
              "name": "Taze Portakal Suyu",
              "description": "Günlük sıkım.",
              "tags": [
                "icecekler"
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
          "id": "burger-king-sec-1",
          "title": "Burger Menüleri",
          "items": [
            {
              "id": "burger-king-sec-1-item-1",
              "name": "Cheeseburger",
              "description": "Cheddar'lı klasik.",
              "tags": [
                "burger menuleri"
              ]
            },
            {
              "id": "burger-king-sec-1-item-2",
              "name": "Double Burger",
              "description": "Çift köfte, yoğun lezzet.",
              "tags": [
                "burger menuleri"
              ]
            },
            {
              "id": "burger-king-sec-1-item-3",
              "name": "Tavuk Burger",
              "description": "Çıtır tavuklu.",
              "tags": [
                "burger menuleri"
              ]
            },
            {
              "id": "burger-king-sec-1-item-4",
              "name": "House Burger",
              "description": "Mekanın imza burgeri.",
              "tags": [
                "burger menuleri"
              ]
            },
            {
              "id": "burger-king-sec-1-item-5",
              "name": "Mini Burger Tabağı",
              "description": "Üçlü tadım seti.",
              "tags": [
                "burger menuleri"
              ]
            }
          ]
        },
        {
          "id": "burger-king-sec-2",
          "title": "Tavuk Ürünleri",
          "items": [
            {
              "id": "burger-king-sec-2-item-1",
              "name": "Çıtır Tavuk",
              "description": "Baharatlı kaplama.",
              "tags": [
                "tavuk urunleri"
              ]
            },
            {
              "id": "burger-king-sec-2-item-2",
              "name": "Izgara Tavuk",
              "description": "Marine edilmiş.",
              "tags": [
                "tavuk urunleri"
              ]
            },
            {
              "id": "burger-king-sec-2-item-3",
              "name": "Kanat",
              "description": "Acılı soslu.",
              "tags": [
                "tavuk urunleri"
              ]
            },
            {
              "id": "burger-king-sec-2-item-4",
              "name": "Köri Soslu Tavuk",
              "description": "Pilav eşliğinde.",
              "tags": [
                "tavuk urunleri"
              ]
            }
          ]
        },
        {
          "id": "burger-king-sec-3",
          "title": "Patates & Yan Ürünler",
          "items": [
            {
              "id": "burger-king-sec-3-item-1",
              "name": "Patates",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "patates yan urunler"
              ]
            },
            {
              "id": "burger-king-sec-3-item-2",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "patates yan urunler"
              ]
            },
            {
              "id": "burger-king-sec-3-item-3",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "patates yan urunler"
              ]
            },
            {
              "id": "burger-king-sec-3-item-4",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "patates yan urunler"
              ]
            },
            {
              "id": "burger-king-sec-3-item-5",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "patates yan urunler"
              ]
            }
          ]
        },
        {
          "id": "burger-king-sec-4",
          "title": "Tatlılar",
          "items": [
            {
              "id": "burger-king-sec-4-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "burger-king-sec-4-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "burger-king-sec-4-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "burger-king-sec-4-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "burger-king-sec-4-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
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
          "id": "subway-sec-1",
          "title": "Sub Sandviçler",
          "items": [
            {
              "id": "subway-sec-1-item-1",
              "name": "Tavuklu Sub",
              "description": "Taze malzemelerle.",
              "tags": [
                "sub sandvicler"
              ]
            },
            {
              "id": "subway-sec-1-item-2",
              "name": "Ton Balıklı Sub",
              "description": "Hafif.",
              "tags": [
                "sub sandvicler"
              ]
            },
            {
              "id": "subway-sec-1-item-3",
              "name": "Köfteli Sub",
              "description": "Marinara soslu.",
              "tags": [
                "sub sandvicler"
              ]
            },
            {
              "id": "subway-sec-1-item-4",
              "name": "Sebzeli Sub",
              "description": "Vejetaryen.",
              "tags": [
                "sub sandvicler"
              ]
            }
          ]
        },
        {
          "id": "subway-sec-2",
          "title": "Salatalar",
          "items": [
            {
              "id": "subway-sec-2-item-1",
              "name": "Salata",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "subway-sec-2-item-2",
              "name": "Sezar Salata",
              "description": "Izgara tavuklu.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "subway-sec-2-item-3",
              "name": "Tavuklu Uzun Tabak",
              "description": "İmza salata.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "subway-sec-2-item-4",
              "name": "Ton Balıklı Salata",
              "description": "Protein deposu.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "subway-sec-2-item-5",
              "name": "Protein Bowl",
              "description": "Kinoa ve tavukla.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "subway-sec-2-item-6",
              "name": "Wrap Çeşitleri",
              "description": "Tavuklu / sebzeli.",
              "tags": [
                "salatalar"
              ]
            }
          ]
        },
        {
          "id": "subway-sec-3",
          "title": "Wrapler",
          "items": [
            {
              "id": "subway-sec-3-item-1",
              "name": "Sezar Salata",
              "description": "Izgara tavuklu.",
              "tags": [
                "wrapler"
              ]
            },
            {
              "id": "subway-sec-3-item-2",
              "name": "Tavuklu Uzun Tabak",
              "description": "İmza salata.",
              "tags": [
                "wrapler"
              ]
            },
            {
              "id": "subway-sec-3-item-3",
              "name": "Ton Balıklı Salata",
              "description": "Protein deposu.",
              "tags": [
                "wrapler"
              ]
            },
            {
              "id": "subway-sec-3-item-4",
              "name": "Protein Bowl",
              "description": "Kinoa ve tavukla.",
              "tags": [
                "wrapler"
              ]
            },
            {
              "id": "subway-sec-3-item-5",
              "name": "Wrap Çeşitleri",
              "description": "Tavuklu / sebzeli.",
              "tags": [
                "wrapler"
              ]
            }
          ]
        },
        {
          "id": "subway-sec-4",
          "title": "Cookieler",
          "items": [
            {
              "id": "subway-sec-4-item-1",
              "name": "Tavuklu Sub",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "cookieler"
              ]
            },
            {
              "id": "subway-sec-4-item-2",
              "name": "Ton Balıklı Sub",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "cookieler"
              ]
            },
            {
              "id": "subway-sec-4-item-3",
              "name": "Köfteli Sub",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "cookieler"
              ]
            },
            {
              "id": "subway-sec-4-item-4",
              "name": "Cookie",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "cookieler"
              ]
            }
          ]
        },
        {
          "id": "subway-sec-5",
          "title": "İçecekler",
          "items": [
            {
              "id": "subway-sec-5-item-1",
              "name": "Ayran",
              "description": "Yayık ayranı.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "subway-sec-5-item-2",
              "name": "Limonata",
              "description": "Ev yapımı, naneli.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "subway-sec-5-item-3",
              "name": "Buzlu Çay",
              "description": "Şeftali / limon.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "subway-sec-5-item-4",
              "name": "Taze Portakal Suyu",
              "description": "Günlük sıkım.",
              "tags": [
                "icecekler"
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
          "id": "arbys-sec-1",
          "title": "Roast Beef Sandviçler",
          "items": [
            {
              "id": "arbys-sec-1-item-1",
              "name": "Çıtır Tavuk Sandviç",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "roast beef sandvicler"
              ]
            },
            {
              "id": "arbys-sec-1-item-2",
              "name": "Klasik Roast Beef",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "roast beef sandvicler"
              ]
            },
            {
              "id": "arbys-sec-1-item-3",
              "name": "Tavuklu Sub",
              "description": "Taze malzemelerle.",
              "tags": [
                "roast beef sandvicler"
              ]
            },
            {
              "id": "arbys-sec-1-item-4",
              "name": "Ton Balıklı Sub",
              "description": "Hafif.",
              "tags": [
                "roast beef sandvicler"
              ]
            },
            {
              "id": "arbys-sec-1-item-5",
              "name": "Köfteli Sub",
              "description": "Marinara soslu.",
              "tags": [
                "roast beef sandvicler"
              ]
            },
            {
              "id": "arbys-sec-1-item-6",
              "name": "Sebzeli Sub",
              "description": "Vejetaryen.",
              "tags": [
                "roast beef sandvicler"
              ]
            }
          ]
        },
        {
          "id": "arbys-sec-2",
          "title": "Tavuk Ürünleri",
          "items": [
            {
              "id": "arbys-sec-2-item-1",
              "name": "Çıtır Tavuk",
              "description": "Baharatlı kaplama.",
              "tags": [
                "tavuk urunleri"
              ]
            },
            {
              "id": "arbys-sec-2-item-2",
              "name": "Izgara Tavuk",
              "description": "Marine edilmiş.",
              "tags": [
                "tavuk urunleri"
              ]
            },
            {
              "id": "arbys-sec-2-item-3",
              "name": "Kanat",
              "description": "Acılı soslu.",
              "tags": [
                "tavuk urunleri"
              ]
            },
            {
              "id": "arbys-sec-2-item-4",
              "name": "Köri Soslu Tavuk",
              "description": "Pilav eşliğinde.",
              "tags": [
                "tavuk urunleri"
              ]
            }
          ]
        },
        {
          "id": "arbys-sec-3",
          "title": "Patates",
          "items": [
            {
              "id": "arbys-sec-3-item-1",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "patates"
              ]
            },
            {
              "id": "arbys-sec-3-item-2",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "patates"
              ]
            },
            {
              "id": "arbys-sec-3-item-3",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "patates"
              ]
            },
            {
              "id": "arbys-sec-3-item-4",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "patates"
              ]
            }
          ]
        },
        {
          "id": "arbys-sec-4",
          "title": "İçecekler",
          "items": [
            {
              "id": "arbys-sec-4-item-1",
              "name": "Ayran",
              "description": "Yayık ayranı.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "arbys-sec-4-item-2",
              "name": "Limonata",
              "description": "Ev yapımı, naneli.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "arbys-sec-4-item-3",
              "name": "Buzlu Çay",
              "description": "Şeftali / limon.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "arbys-sec-4-item-4",
              "name": "Taze Portakal Suyu",
              "description": "Günlük sıkım.",
              "tags": [
                "icecekler"
              ]
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
          "id": "popeyes-sec-1",
          "title": "Çıtır Tavuklar",
          "items": [
            {
              "id": "popeyes-sec-1-item-1",
              "name": "Tavuk Burger",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "citir tavuklar"
              ]
            },
            {
              "id": "popeyes-sec-1-item-2",
              "name": "Çıtır Tavuk",
              "description": "Baharatlı kaplama.",
              "tags": [
                "citir tavuklar"
              ]
            },
            {
              "id": "popeyes-sec-1-item-3",
              "name": "Izgara Tavuk",
              "description": "Marine edilmiş.",
              "tags": [
                "citir tavuklar"
              ]
            },
            {
              "id": "popeyes-sec-1-item-4",
              "name": "Kanat",
              "description": "Acılı soslu.",
              "tags": [
                "citir tavuklar"
              ]
            },
            {
              "id": "popeyes-sec-1-item-5",
              "name": "Köri Soslu Tavuk",
              "description": "Pilav eşliğinde.",
              "tags": [
                "citir tavuklar"
              ]
            }
          ]
        },
        {
          "id": "popeyes-sec-2",
          "title": "Tavuk Burgerler",
          "items": [
            {
              "id": "popeyes-sec-2-item-1",
              "name": "Çıtır Tavuk",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "tavuk burgerler"
              ]
            },
            {
              "id": "popeyes-sec-2-item-2",
              "name": "Cheeseburger",
              "description": "Cheddar'lı klasik.",
              "tags": [
                "tavuk burgerler"
              ]
            },
            {
              "id": "popeyes-sec-2-item-3",
              "name": "Double Burger",
              "description": "Çift köfte, yoğun lezzet.",
              "tags": [
                "tavuk burgerler"
              ]
            },
            {
              "id": "popeyes-sec-2-item-4",
              "name": "Tavuk Burger",
              "description": "Çıtır tavuklu.",
              "tags": [
                "tavuk burgerler"
              ]
            },
            {
              "id": "popeyes-sec-2-item-5",
              "name": "House Burger",
              "description": "Mekanın imza burgeri.",
              "tags": [
                "tavuk burgerler"
              ]
            },
            {
              "id": "popeyes-sec-2-item-6",
              "name": "Mini Burger Tabağı",
              "description": "Üçlü tadım seti.",
              "tags": [
                "tavuk burgerler"
              ]
            }
          ]
        },
        {
          "id": "popeyes-sec-3",
          "title": "Sepet Menüler",
          "items": [
            {
              "id": "popeyes-sec-3-item-1",
              "name": "Kova Menü",
              "description": "Paylaşımlık çıtır tavuk.",
              "tags": [
                "sepet menuler"
              ]
            },
            {
              "id": "popeyes-sec-3-item-2",
              "name": "Sepet Menü",
              "description": "Tavuk + patates.",
              "tags": [
                "sepet menuler"
              ]
            },
            {
              "id": "popeyes-sec-3-item-3",
              "name": "Zinger Menü",
              "description": "Acılı tavuk burger.",
              "tags": [
                "sepet menuler"
              ]
            },
            {
              "id": "popeyes-sec-3-item-4",
              "name": "Kanat Sepeti",
              "description": "Soslu kanatlar.",
              "tags": [
                "sepet menuler"
              ]
            }
          ]
        },
        {
          "id": "popeyes-sec-4",
          "title": "Yan Ürünler",
          "items": [
            {
              "id": "popeyes-sec-4-item-1",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "yan urunler"
              ]
            },
            {
              "id": "popeyes-sec-4-item-2",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "yan urunler"
              ]
            },
            {
              "id": "popeyes-sec-4-item-3",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "yan urunler"
              ]
            },
            {
              "id": "popeyes-sec-4-item-4",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "yan urunler"
              ]
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
          "id": "kfc-sec-1",
          "title": "Kova Menüler",
          "items": [
            {
              "id": "kfc-sec-1-item-1",
              "name": "Kova Menü",
              "description": "Paylaşımlık çıtır tavuk.",
              "tags": [
                "kova menuler"
              ]
            },
            {
              "id": "kfc-sec-1-item-2",
              "name": "Sepet Menü",
              "description": "Tavuk + patates.",
              "tags": [
                "kova menuler"
              ]
            },
            {
              "id": "kfc-sec-1-item-3",
              "name": "Zinger Menü",
              "description": "Acılı tavuk burger.",
              "tags": [
                "kova menuler"
              ]
            },
            {
              "id": "kfc-sec-1-item-4",
              "name": "Kanat Sepeti",
              "description": "Soslu kanatlar.",
              "tags": [
                "kova menuler"
              ]
            }
          ]
        },
        {
          "id": "kfc-sec-2",
          "title": "Burgerler",
          "items": [
            {
              "id": "kfc-sec-2-item-1",
              "name": "Zinger Burger",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "kfc-sec-2-item-2",
              "name": "Cheeseburger",
              "description": "Cheddar'lı klasik.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "kfc-sec-2-item-3",
              "name": "Double Burger",
              "description": "Çift köfte, yoğun lezzet.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "kfc-sec-2-item-4",
              "name": "Tavuk Burger",
              "description": "Çıtır tavuklu.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "kfc-sec-2-item-5",
              "name": "House Burger",
              "description": "Mekanın imza burgeri.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "kfc-sec-2-item-6",
              "name": "Mini Burger Tabağı",
              "description": "Üçlü tadım seti.",
              "tags": [
                "burgerler"
              ]
            }
          ]
        },
        {
          "id": "kfc-sec-3",
          "title": "Kanatlar",
          "items": [
            {
              "id": "kfc-sec-3-item-1",
              "name": "Kova Menü",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "kanatlar"
              ]
            },
            {
              "id": "kfc-sec-3-item-2",
              "name": "Kanat",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "kanatlar"
              ]
            },
            {
              "id": "kfc-sec-3-item-3",
              "name": "Çıtır Tavuk",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "kanatlar"
              ]
            },
            {
              "id": "kfc-sec-3-item-4",
              "name": "Patates",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "kanatlar"
              ]
            }
          ]
        },
        {
          "id": "kfc-sec-4",
          "title": "Yan Ürünler",
          "items": [
            {
              "id": "kfc-sec-4-item-1",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "yan urunler"
              ]
            },
            {
              "id": "kfc-sec-4-item-2",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "yan urunler"
              ]
            },
            {
              "id": "kfc-sec-4-item-3",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "yan urunler"
              ]
            },
            {
              "id": "kfc-sec-4-item-4",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "yan urunler"
              ]
            }
          ]
        },
        {
          "id": "kfc-sec-5",
          "title": "Tatlılar",
          "items": [
            {
              "id": "kfc-sec-5-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "kfc-sec-5-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "kfc-sec-5-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "kfc-sec-5-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "kfc-sec-5-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
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
          "id": "hmbrgr-sec-1",
          "title": "Gourmet Burgerler",
          "items": [
            {
              "id": "hmbrgr-sec-1-item-1",
              "name": "Çıtır Tavuk Burger",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "gourmet burgerler"
              ]
            },
            {
              "id": "hmbrgr-sec-1-item-2",
              "name": "Trüflü Burger",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "gourmet burgerler"
              ]
            },
            {
              "id": "hmbrgr-sec-1-item-3",
              "name": "Signature Burger",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "gourmet burgerler"
              ]
            },
            {
              "id": "hmbrgr-sec-1-item-4",
              "name": "Cheeseburger",
              "description": "Cheddar'lı klasik.",
              "tags": [
                "gourmet burgerler"
              ]
            },
            {
              "id": "hmbrgr-sec-1-item-5",
              "name": "Double Burger",
              "description": "Çift köfte, yoğun lezzet.",
              "tags": [
                "gourmet burgerler"
              ]
            },
            {
              "id": "hmbrgr-sec-1-item-6",
              "name": "Tavuk Burger",
              "description": "Çıtır tavuklu.",
              "tags": [
                "gourmet burgerler"
              ]
            }
          ]
        },
        {
          "id": "hmbrgr-sec-2",
          "title": "Tavuk Burgerler",
          "items": [
            {
              "id": "hmbrgr-sec-2-item-1",
              "name": "Cheeseburger",
              "description": "Cheddar'lı klasik.",
              "tags": [
                "tavuk burgerler"
              ]
            },
            {
              "id": "hmbrgr-sec-2-item-2",
              "name": "Double Burger",
              "description": "Çift köfte, yoğun lezzet.",
              "tags": [
                "tavuk burgerler"
              ]
            },
            {
              "id": "hmbrgr-sec-2-item-3",
              "name": "Tavuk Burger",
              "description": "Çıtır tavuklu.",
              "tags": [
                "tavuk burgerler"
              ]
            },
            {
              "id": "hmbrgr-sec-2-item-4",
              "name": "House Burger",
              "description": "Mekanın imza burgeri.",
              "tags": [
                "tavuk burgerler"
              ]
            },
            {
              "id": "hmbrgr-sec-2-item-5",
              "name": "Mini Burger Tabağı",
              "description": "Üçlü tadım seti.",
              "tags": [
                "tavuk burgerler"
              ]
            }
          ]
        },
        {
          "id": "hmbrgr-sec-3",
          "title": "Yan Ürünler",
          "items": [
            {
              "id": "hmbrgr-sec-3-item-1",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "yan urunler"
              ]
            },
            {
              "id": "hmbrgr-sec-3-item-2",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "yan urunler"
              ]
            },
            {
              "id": "hmbrgr-sec-3-item-3",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "yan urunler"
              ]
            },
            {
              "id": "hmbrgr-sec-3-item-4",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "yan urunler"
              ]
            }
          ]
        },
        {
          "id": "hmbrgr-sec-4",
          "title": "Milkshake",
          "items": [
            {
              "id": "hmbrgr-sec-4-item-1",
              "name": "Parmesan Patates",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "milkshake"
              ]
            },
            {
              "id": "hmbrgr-sec-4-item-2",
              "name": "Milkshake",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "milkshake"
              ]
            },
            {
              "id": "hmbrgr-sec-4-item-3",
              "name": "Günün Önerisi",
              "description": "Sorunuz.",
              "tags": [
                "milkshake"
              ]
            },
            {
              "id": "hmbrgr-sec-4-item-4",
              "name": "Mevsim Seçkisi",
              "description": "Dönemsel.",
              "tags": [
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
          "id": "hamlet-market-02-sec-1",
          "title": "İçecekler",
          "items": [
            {
              "id": "hamlet-market-02-sec-1-item-1",
              "name": "Soğuk İçecek",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "hamlet-market-02-sec-1-item-2",
              "name": "Ayran",
              "description": "Yayık ayranı.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "hamlet-market-02-sec-1-item-3",
              "name": "Limonata",
              "description": "Ev yapımı, naneli.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "hamlet-market-02-sec-1-item-4",
              "name": "Buzlu Çay",
              "description": "Şeftali / limon.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "hamlet-market-02-sec-1-item-5",
              "name": "Taze Portakal Suyu",
              "description": "Günlük sıkım.",
              "tags": [
                "icecekler"
              ]
            }
          ]
        },
        {
          "id": "hamlet-market-02-sec-2",
          "title": "Atıştırmalıklar",
          "items": [
            {
              "id": "hamlet-market-02-sec-2-item-1",
              "name": "Patates Kızartması",
              "description": "Çıtır, baharatlı.",
              "tags": [
                "atistirmaliklar"
              ]
            },
            {
              "id": "hamlet-market-02-sec-2-item-2",
              "name": "Çıtır Tavuk",
              "description": "Ballı hardal sosla.",
              "tags": [
                "atistirmaliklar"
              ]
            },
            {
              "id": "hamlet-market-02-sec-2-item-3",
              "name": "Soğan Halkası",
              "description": "Çıtır kaplamalı.",
              "tags": [
                "atistirmaliklar"
              ]
            },
            {
              "id": "hamlet-market-02-sec-2-item-4",
              "name": "Nachos",
              "description": "Cheddar soslu.",
              "tags": [
                "atistirmaliklar"
              ]
            }
          ]
        },
        {
          "id": "hamlet-market-02-sec-3",
          "title": "Dondurma",
          "items": [
            {
              "id": "hamlet-market-02-sec-3-item-1",
              "name": "Dondurma",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "dondurma"
              ]
            },
            {
              "id": "hamlet-market-02-sec-3-item-2",
              "name": "Kesme Dondurma",
              "description": "Keçi sütlü Maraş usulü.",
              "tags": [
                "dondurma"
              ]
            },
            {
              "id": "hamlet-market-02-sec-3-item-3",
              "name": "Külahta İki Top",
              "description": "Günün çeşitleri.",
              "tags": [
                "dondurma"
              ]
            },
            {
              "id": "hamlet-market-02-sec-3-item-4",
              "name": "Çikolatalı Dondurma",
              "description": "Belçika çikolatalı.",
              "tags": [
                "dondurma"
              ]
            },
            {
              "id": "hamlet-market-02-sec-3-item-5",
              "name": "Meyveli Sorbe",
              "description": "Süt içermez.",
              "tags": [
                "dondurma"
              ]
            }
          ]
        },
        {
          "id": "hamlet-market-02-sec-4",
          "title": "Plaj Ürünleri",
          "items": [
            {
              "id": "hamlet-market-02-sec-4-item-1",
              "name": "Güneş Kremi",
              "description": "SPF 30/50.",
              "tags": [
                "plaj urunleri"
              ]
            },
            {
              "id": "hamlet-market-02-sec-4-item-2",
              "name": "After-Sun",
              "description": "Güneş sonrası bakım.",
              "tags": [
                "plaj urunleri"
              ]
            },
            {
              "id": "hamlet-market-02-sec-4-item-3",
              "name": "Plaj Topu",
              "description": "Şişme.",
              "tags": [
                "plaj urunleri"
              ]
            },
            {
              "id": "hamlet-market-02-sec-4-item-4",
              "name": "Terlik",
              "description": "Çeşitli numaralar.",
              "tags": [
                "plaj urunleri"
              ]
            }
          ]
        },
        {
          "id": "hamlet-market-02-sec-5",
          "title": "Temel Gıda",
          "items": [
            {
              "id": "hamlet-market-02-sec-5-item-1",
              "name": "Ekmek",
              "description": "Günlük.",
              "tags": [
                "temel gida"
              ]
            },
            {
              "id": "hamlet-market-02-sec-5-item-2",
              "name": "Süt",
              "description": "Soğuk dolap.",
              "tags": [
                "temel gida"
              ]
            },
            {
              "id": "hamlet-market-02-sec-5-item-3",
              "name": "Yumurta",
              "description": "10'lu.",
              "tags": [
                "temel gida"
              ]
            },
            {
              "id": "hamlet-market-02-sec-5-item-4",
              "name": "Konserve",
              "description": "Çeşitli.",
              "tags": [
                "temel gida"
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
          "id": "paninaro-sec-1",
          "title": "Paniniler",
          "items": [
            {
              "id": "paninaro-sec-1-item-1",
              "name": "Kaşarlı Panini",
              "description": "Pizza hamuru ekmeğiyle.",
              "tags": [
                "paniniler"
              ]
            },
            {
              "id": "paninaro-sec-1-item-2",
              "name": "Tavuklu Panini",
              "description": "Pesto soslu.",
              "tags": [
                "paniniler"
              ]
            },
            {
              "id": "paninaro-sec-1-item-3",
              "name": "İtalyan Sucuklu Panini",
              "description": "Acılı.",
              "tags": [
                "paniniler"
              ]
            },
            {
              "id": "paninaro-sec-1-item-4",
              "name": "Vejetaryen Panini",
              "description": "Közlenmiş sebzeli.",
              "tags": [
                "paniniler"
              ]
            }
          ]
        },
        {
          "id": "paninaro-sec-2",
          "title": "Salatalar",
          "items": [
            {
              "id": "paninaro-sec-2-item-1",
              "name": "Salata",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "paninaro-sec-2-item-2",
              "name": "Sezar Salata",
              "description": "Izgara tavuklu.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "paninaro-sec-2-item-3",
              "name": "Tavuklu Uzun Tabak",
              "description": "İmza salata.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "paninaro-sec-2-item-4",
              "name": "Ton Balıklı Salata",
              "description": "Protein deposu.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "paninaro-sec-2-item-5",
              "name": "Protein Bowl",
              "description": "Kinoa ve tavukla.",
              "tags": [
                "salatalar"
              ]
            },
            {
              "id": "paninaro-sec-2-item-6",
              "name": "Wrap Çeşitleri",
              "description": "Tavuklu / sebzeli.",
              "tags": [
                "salatalar"
              ]
            }
          ]
        },
        {
          "id": "paninaro-sec-3",
          "title": "İçecekler",
          "items": [
            {
              "id": "paninaro-sec-3-item-1",
              "name": "Ayran",
              "description": "Yayık ayranı.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "paninaro-sec-3-item-2",
              "name": "Limonata",
              "description": "Ev yapımı, naneli.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "paninaro-sec-3-item-3",
              "name": "Buzlu Çay",
              "description": "Şeftali / limon.",
              "tags": [
                "icecekler"
              ]
            },
            {
              "id": "paninaro-sec-3-item-4",
              "name": "Taze Portakal Suyu",
              "description": "Günlük sıkım.",
              "tags": [
                "icecekler"
              ]
            }
          ]
        },
        {
          "id": "paninaro-sec-4",
          "title": "Tatlılar",
          "items": [
            {
              "id": "paninaro-sec-4-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "paninaro-sec-4-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "paninaro-sec-4-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "paninaro-sec-4-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "paninaro-sec-4-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
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
          "id": "shakespeare-sec-1",
          "title": "Kahvaltılar",
          "items": [
            {
              "id": "shakespeare-sec-1-item-1",
              "name": "Serpme Kahvaltı",
              "description": "Zengin köy kahvaltısı, sınırsız çay.",
              "tags": [
                "kahvaltilar"
              ]
            },
            {
              "id": "shakespeare-sec-1-item-2",
              "name": "Menemen",
              "description": "Bol domatesli.",
              "tags": [
                "kahvaltilar"
              ]
            },
            {
              "id": "shakespeare-sec-1-item-3",
              "name": "Avokado Tost",
              "description": "Ekşi maya üstü avokado.",
              "tags": [
                "kahvaltilar"
              ]
            },
            {
              "id": "shakespeare-sec-1-item-4",
              "name": "Omlet Çeşitleri",
              "description": "Sade, kaşarlı, mantarlı.",
              "tags": [
                "kahvaltilar"
              ]
            },
            {
              "id": "shakespeare-sec-1-item-5",
              "name": "Simit Tabağı",
              "description": "Simit, beyaz peynir, domates.",
              "tags": [
                "kahvaltilar"
              ]
            }
          ]
        },
        {
          "id": "shakespeare-sec-2",
          "title": "Kahveler",
          "items": [
            {
              "id": "shakespeare-sec-2-item-1",
              "name": "Espresso",
              "description": "Klasik yoğun espresso.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "shakespeare-sec-2-item-2",
              "name": "Americano",
              "description": "Espresso ve sıcak su.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "shakespeare-sec-2-item-3",
              "name": "Latte",
              "description": "Sütlü yumuşak kahve.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "shakespeare-sec-2-item-4",
              "name": "Flat White",
              "description": "Yoğun espresso, ince süt dokusu.",
              "tags": [
                "kahveler"
              ]
            },
            {
              "id": "shakespeare-sec-2-item-5",
              "name": "Cappuccino",
              "description": "Süt köpüklü klasik.",
              "tags": [
                "kahveler"
              ]
            }
          ]
        },
        {
          "id": "shakespeare-sec-3",
          "title": "Burgerler",
          "items": [
            {
              "id": "shakespeare-sec-3-item-1",
              "name": "Burger",
              "description": "Mekanın öne çıkanlarından.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "shakespeare-sec-3-item-2",
              "name": "Cheeseburger",
              "description": "Cheddar'lı klasik.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "shakespeare-sec-3-item-3",
              "name": "Double Burger",
              "description": "Çift köfte, yoğun lezzet.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "shakespeare-sec-3-item-4",
              "name": "Tavuk Burger",
              "description": "Çıtır tavuklu.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "shakespeare-sec-3-item-5",
              "name": "House Burger",
              "description": "Mekanın imza burgeri.",
              "tags": [
                "burgerler"
              ]
            },
            {
              "id": "shakespeare-sec-3-item-6",
              "name": "Mini Burger Tabağı",
              "description": "Üçlü tadım seti.",
              "tags": [
                "burgerler"
              ]
            }
          ]
        },
        {
          "id": "shakespeare-sec-4",
          "title": "Makarnalar",
          "items": [
            {
              "id": "shakespeare-sec-4-item-1",
              "name": "Penne Arrabiata",
              "description": "Acılı domates soslu.",
              "tags": [
                "makarnalar"
              ]
            },
            {
              "id": "shakespeare-sec-4-item-2",
              "name": "Fettuccine Alfredo",
              "description": "Kremalı.",
              "tags": [
                "makarnalar"
              ]
            },
            {
              "id": "shakespeare-sec-4-item-3",
              "name": "Bolonez",
              "description": "Kıymalı klasik.",
              "tags": [
                "makarnalar"
              ]
            },
            {
              "id": "shakespeare-sec-4-item-4",
              "name": "Pesto Makarna",
              "description": "Fesleğen soslu.",
              "tags": [
                "makarnalar"
              ]
            }
          ]
        },
        {
          "id": "shakespeare-sec-5",
          "title": "Tatlılar",
          "items": [
            {
              "id": "shakespeare-sec-5-item-1",
              "name": "San Sebastian",
              "description": "Akışkan merkezli yanık cheesecake.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "shakespeare-sec-5-item-2",
              "name": "Cheesecake",
              "description": "Günlük dilim.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "shakespeare-sec-5-item-3",
              "name": "Brownie",
              "description": "Sıcak servis, çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "shakespeare-sec-5-item-4",
              "name": "Tiramisu",
              "description": "Kahveli İtalyan klasiği.",
              "tags": [
                "tatlilar"
              ]
            },
            {
              "id": "shakespeare-sec-5-item-5",
              "name": "Profiterol",
              "description": "Çikolata soslu.",
              "tags": [
                "tatlilar"
              ]
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
