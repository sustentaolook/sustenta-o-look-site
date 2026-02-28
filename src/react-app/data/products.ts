export interface Product {
  id: number;
  name: string;
  code: string;
  price: number;
  description: string;
  images: string[];
  videoUrl?: string;
  category: "autorais" | "brecho";
  available: boolean;
}

// Produtos autorais - peças desenvolvidas pela marca
export const autoraisProducts: Product[] = [
  {
    id: 1,
    name: "Vestido Raízes",
    code: "AUT-001",
    price: 289.0,
    description:
      "Vestido midi em linho natural com detalhes bordados à mão. Peça autoral inspirada nas raízes e na conexão com a terra. Corte fluido e confortável, perfeito para o dia a dia com um toque de sofisticação. Produzido sob encomenda com carinho e atenção aos detalhes.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
      "https://images.unsplash.com/photo-1594938328870-9623159c8c99?w=800",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800",
    ],
    category: "autorais",
    available: true,
  },
  {
    id: 2,
    name: "Blusa Folhagem",
    code: "AUT-002",
    price: 159.0,
    description:
      "Blusa em algodão orgânico com estampa exclusiva desenvolvida pela direção criativa. Modelagem solta e confortável, com acabamento artesanal. Uma peça versátil que transita do casual ao elegante.",
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800",
    ],
    category: "autorais",
    available: true,
  },
  {
    id: 3,
    name: "Calça Fluxo",
    code: "AUT-003",
    price: 219.0,
    description:
      "Calça pantalona em viscose com cintura alta e cós elástico. Design minimalista com caimento impecável. Tingimento natural em tons terrosos. Conforto e elegância em uma única peça.",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800",
    ],
    category: "autorais",
    available: true,
  },
  {
    id: 4,
    name: "Kimono Horizonte",
    code: "AUT-004",
    price: 329.0,
    description:
      "Kimono longo em seda reciclada com padronagem exclusiva. Peça statement que eleva qualquer produção. Ideal para sobrepor looks básicos ou usar como terceira peça em ocasiões especiais.",
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    ],
    category: "autorais",
    available: true,
  },
  {
    id: 5,
    name: "Saia Maré",
    code: "AUT-005",
    price: 189.0,
    description:
      "Saia midi evasê em linho misto. Cintura marcada com pregas suaves que criam movimento. Fechamento lateral invisível. Uma peça atemporal para composições elegantes e conscientes.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800",
      "https://images.unsplash.com/photo-1592301933927-35b597393c0a?w=800",
    ],
    category: "autorais",
    available: true,
  },
  {
    id: 6,
    name: "Top Essência",
    code: "AUT-006",
    price: 129.0,
    description:
      "Top cropped em malha de algodão orgânico. Design minimalista com alças ajustáveis e acabamento delicado. Peça básica essencial com qualidade superior e produção ética.",
    images: [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800",
    ],
    category: "autorais",
    available: false,
  },
];

// Produtos do brechó - curadoria vintage e upcycling
export const brechoProducts: Product[] = [
  {
    id: 101,
    name: "Blazer Vintage Anos 80",
    code: "BRE-001",
    price: 149.0,
    description:
      "Blazer oversized original dos anos 80 em excelente estado. Ombreira estruturada e abotoamento duplo. Peça garimpada com cuidado para quem busca autenticidade e estilo único.",
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800",
    ],
    category: "brecho",
    available: true,
  },
  {
    id: 102,
    name: "Vestido Boho Upcycled",
    code: "BRE-002",
    price: 179.0,
    description:
      "Vestido longo transformado a partir de peças vintage. Patchwork de tecidos florais com acabamento artesanal. Cada peça é única e conta sua própria história.",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
    ],
    category: "brecho",
    available: true,
  },
  {
    id: 103,
    name: "Jaqueta Jeans Customizada",
    code: "BRE-003",
    price: 189.0,
    description:
      "Jaqueta jeans vintage customizada com bordados exclusivos feitos à mão. Peça única com intervenção artística. O denim conta a história do tempo e os bordados adicionam personalidade.",
    images: [
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800",
      "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=800",
    ],
    category: "brecho",
    available: true,
  },
  {
    id: 104,
    name: "Camisa Seda Vintage",
    code: "BRE-004",
    price: 119.0,
    description:
      "Camisa em seda pura com estampa geométrica dos anos 90. Estado impecável, peça de colecionador. Versatilidade para usar com calças de alfaiataria ou jeans.",
    images: [
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800",
    ],
    category: "brecho",
    available: true,
  },
  {
    id: 105,
    name: "Saia Midi Plissada",
    code: "BRE-005",
    price: 99.0,
    description:
      "Saia plissada vintage em tom mostarda. Cós alto e caimento elegante. Uma peça clássica que nunca sai de moda e combina com tudo.",
    images: [
      "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=800",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800",
    ],
    category: "brecho",
    available: true,
  },
];

export function getProductById(id: number): Product | undefined {
  return [...autoraisProducts, ...brechoProducts].find((p) => p.id === id);
}

export function getProductsByCategory(category: "autorais" | "brecho"): Product[] {
  if (category === "autorais") return autoraisProducts;
  return brechoProducts;
}
