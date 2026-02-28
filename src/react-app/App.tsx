import ContatoPage from "@/react-app/pages/Contato";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { CartProvider } from "@/react-app/hooks/useCart";
import HomePage from "@/react-app/pages/Home";
import AutoraisPage from "@/react-app/pages/Autorais";
import BrechoPage from "@/react-app/pages/Brecho";
import SobreNosPage from "@/react-app/pages/SobreNos";
import ProductDetailPage from "@/react-app/pages/ProductDetail";
import CartPage from "@/react-app/pages/Cart";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/autorais" element={<AutoraisPage />} />
          <Route path="/autorais/:id" element={<ProductDetailPage />} />
          <Route path="/brecho" element={<BrechoPage />} />
          <Route path="/brecho/:id" element={<ProductDetailPage />} />
          <Route path="/carrinho" element={<CartPage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
