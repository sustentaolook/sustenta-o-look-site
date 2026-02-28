import { Link } from "react-router";
import type { Product } from "@/react-app/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const basePath = product.category === "autorais" ? "/autorais" : "/brecho";

  return (
    <Link
      to={`${basePath}/${product.id}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {!product.available && (
          <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
            <span className="text-sm uppercase tracking-widest text-foreground">
              Indisponível
            </span>
          </div>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground tracking-wider">
          {product.code}
        </p>
        <p className="text-sm text-foreground font-medium">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </p>
      </div>
    </Link>
  );
}
