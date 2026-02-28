import { useParams, useNavigate, Link } from "react-router";
import { ArrowLeft, ShoppingBag, Check } from "lucide-react";
import { useState } from "react";
import Layout from "@/react-app/components/layout/Layout";
import ProductGallery from "@/react-app/components/product/ProductGallery";
import { getProductById } from "@/react-app/data/products";
import { useCart } from "@/react-app/hooks/useCart";
import { Button } from "@/react-app/components/ui/button";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const product = getProductById(Number(id));

  if (!product) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
          <h1 className="font-serif text-3xl text-foreground mb-4">
            Produto não encontrado
          </h1>
          <p className="text-muted-foreground mb-8">
            O produto que você está procurando não existe ou foi removido.
          </p>
          <Button onClick={() => navigate(-1)} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </div>
      </Layout>
    );
  }

  const backPath = product.category === "autorais" ? "/autorais" : "/brecho";
  const categoryName = product.category === "autorais" ? "Autorais" : "Brechó";

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      code: product.code,
      price: product.price,
      image: product.images[0],
      category: product.category,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Início
              </Link>
            </li>
            <li className="text-muted-foreground">/</li>
            <li>
              <Link to={backPath} className="text-muted-foreground hover:text-foreground transition-colors">
                {categoryName}
              </Link>
            </li>
            <li className="text-muted-foreground">/</li>
            <li className="text-foreground">{product.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <ProductGallery
            images={product.images}
            videoUrl={product.videoUrl}
            productName={product.name}
          />

          {/* Product Info */}
          <div className="lg:py-8">
            <div className="space-y-6">
              <div>
                <p className="text-xs text-muted-foreground tracking-widest uppercase mb-2">
                  {product.code}
                </p>
                <h1 className="font-serif text-3xl md:text-4xl text-foreground">
                  {product.name}
                </h1>
              </div>

              <p className="text-2xl text-foreground font-medium">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </p>

              <div className="w-full h-px bg-border" />

              <div className="prose prose-sm max-w-none">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4 pt-4">
                {product.available ? (
                  <>
                    <Button
                      onClick={handleAddToCart}
                      className="w-full h-14 text-sm uppercase tracking-widest"
                      disabled={added}
                    >
                      {added ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Adicionado ao Carrinho
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4 mr-2" />
                          Adicionar ao Carrinho
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Peças feitas sob encomenda. Prazo de produção a combinar.
                    </p>
                  </>
                ) : (
                  <div className="bg-secondary p-6 text-center">
                    <p className="text-muted-foreground">
                      Esta peça está temporariamente indisponível.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Entre em contato para mais informações.
                    </p>
                  </div>
                )}
              </div>

              {/* Extra Info */}
              <div className="pt-6 space-y-4 border-t border-border">
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 mt-2 bg-primary rounded-full" />
                  <p className="text-sm text-muted-foreground">
                    Produção artesanal e consciente
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 mt-2 bg-primary rounded-full" />
                  <p className="text-sm text-muted-foreground">
                    Materiais selecionados com cuidado
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 mt-2 bg-primary rounded-full" />
                  <p className="text-sm text-muted-foreground">
                    Pagamento e envio combinados via WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
