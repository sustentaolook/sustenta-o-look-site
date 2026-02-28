import { useState } from "react";

export default function ContatoPage() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const numeroWhatsApp = "0000000000";

  const enviarWhatsApp = () => {
    if (!nome || !mensagem) return;

    const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Contato</h1>
      <p>Fale com a gente para dúvidas ou informações sobre as peças.</p>

      <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ padding: "10px" }}
        />

        <textarea
          placeholder="Sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          rows={4}
          style={{ padding: "10px" }}
        />

        <button
          onClick={enviarWhatsApp}
          style={{
            padding: "12px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Enviar via WhatsApp
        </button>
      </div>
    </div>
  );
}
