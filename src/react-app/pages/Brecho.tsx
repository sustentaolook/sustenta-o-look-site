import Layout from "@/react-app/components/layout/Layout";
import ProductCard from "@/react-app/components/product/ProductCard";
import { brechoProducts } from "@/react-app/data/products";

export default function BrechoPage() {
  const availableProducts = brechoProducts.filter((p) => p.available);
  const unavailableProducts = brechoProducts.filter((p) => !p.available);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Brechó
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Curadoria vintage e upcycling com história. Peças garimpadas e transformadas 
            com cuidado, prontas para uma nova vida no seu guarda-roupa.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {availableProducts.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {availableProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {unavailableProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="font-serif text-2xl text-center text-muted-foreground mb-8">
                Temporariamente Indisponíveis
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 opacity-60">
                {unavailableProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {brechoProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Em breve novas peças garimpadas.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
