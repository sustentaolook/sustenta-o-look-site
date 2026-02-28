import { useState } from "react";

export default function ContatoPage() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const numeroWhatsApp = "0000000000"; // depois você troca pelo número real

  const enviarWhatsApp = () => {
    if (!nome || !mensagem) return;

    const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={{ padding: "60px 20px", maxWidth: "700px", margin: "0 auto" }}>
      <h1>Contato</h1>
      <p style={{ marginTop: "10px" }}>
        Fale com a gente para dúvidas, informações sobre peças ou parcerias.
      </p>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ padding: "12px" }}
        />

        <textarea
          placeholder="Escreva sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          rows={5}
          style={{ padding: "12px" }}
        />

        <button
          onClick={enviarWhatsApp}
          style={{
            padding: "14px",
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
