import { Link } from "react-router";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, MessageCircle } from "lucide-react";
import Layout from "@/react-app/components/layout/Layout";
import { useCart } from "@/react-app/hooks/useCart";
import { Button } from "@/react-app/components/ui/button";

// Número do WhatsApp da marca (formato internacional sem +)
const WHATSAPP_NUMBER = "5500000000000"; // Substituir pelo número real

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace(".", ",")}`;
  };

  const generateWhatsAppMessage = () => {
    let message = "Olá! Gostaria de fazer um pedido:\n\n";
    
    items.forEach((item) => {
      const subtotal = item.price * item.quantity;
      message += `📦 *${item.name}*\n`;
      message += `   Código: ${item.code}\n`;
      message += `   Quantidade: ${item.quantity}\n`;
      message += `   Preço unitário: ${formatPrice(item.price)}\n`;
      message += `   Subtotal: ${formatPrice(subtotal)}\n\n`;
    });
    
    message += `━━━━━━━━━━━━━━━━\n`;
    message += `*TOTAL: ${formatPrice(total)}*\n\n`;
    message += `Aguardo confirmação e informações sobre pagamento e envio. Obrigada!`;
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppCheckout = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6">
            <ShoppingBag className="w-8 h-8 text-muted-foreground" />
          </div>
          <h1 className="font-serif text-3xl text-foreground mb-4">
            Seu carrinho está vazio
          </h1>
          <p className="text-muted-foreground mb-8 text-center max-w-md">
            Explore nossa coleção e encontre peças únicas que combinam com você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="outline">
              <Link to="/autorais">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Ver Autorais
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/brecho">
                Ver Brechó
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-foreground">
            Carrinho
          </h1>
          <button
            onClick={clearCart}
            className="text-sm text-muted-foreground hover:text-destructive transition-colors"
          >
            Limpar carrinho
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 bg-card border border-border"
              >
                {/* Image */}
                <Link
                  to={`/${item.category}/${item.id}`}
                  className="flex-shrink-0 w-24 h-32 bg-secondary overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </Link>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <Link
                    to={`/${item.category}/${item.id}`}
                    className="font-serif text-lg text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                  <p className="text-xs text-muted-foreground tracking-wider mt-1">
                    {item.code}
                  </p>
                  <p className="text-sm text-foreground font-medium mt-2">
                    {formatPrice(item.price)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-border">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 h-8 flex items-center justify-center text-sm border-x border-border">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      aria-label="Remover item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="hidden sm:block text-right">
                  <p className="text-sm text-muted-foreground">Subtotal</p>
                  <p className="text-foreground font-medium">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card border border-border p-6 space-y-6">
              <h2 className="font-serif text-xl text-foreground">
                Resumo do Pedido
              </h2>

              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground truncate pr-4">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="text-foreground flex-shrink-0">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex justify-between text-lg">
                  <span className="font-medium">Total</span>
                  <span className="font-serif text-xl text-foreground">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              <Button
                onClick={handleWhatsAppCheckout}
                className="w-full h-14 text-sm uppercase tracking-widest bg-[#25D366] hover:bg-[#20BD5A]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Finalizar via WhatsApp
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Ao clicar, você será redirecionado para o WhatsApp com seu pedido 
                já formatado. Pagamento e envio combinados diretamente conosco.
              </p>

              <div className="border-t border-border pt-4 space-y-2">
                <p className="text-xs text-muted-foreground">
                  • Todas as peças são feitas sob encomenda
                </p>
                <p className="text-xs text-muted-foreground">
                  • Prazo de produção a combinar
                </p>
                <p className="text-xs text-muted-foreground">
                  • Frete calculado após confirmação
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="mt-12 text-center">
          <Link
            to="/autorais"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continuar comprando
          </Link>
        </div>
      </div>
    </Layout>
  );
}
