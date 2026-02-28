import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import Layout from "@/react-app/components/layout/Layout";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-cream">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/50 to-cream" />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-olive blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-nude blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Logo Section */}
          <div className="mb-8">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide text-foreground mb-4">
              Sustenta o Look
            </h1>
            <div className="w-24 h-px bg-primary mx-auto" />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Moda autoral independente com curadoria vintage e upcycling. 
            Vista-se com consciência, conforto e identidade.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/autorais"
              className="group inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-primary/90 transition-all"
            >
              Ver Coleção Autoral
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/brecho"
              className="group inline-flex items-center justify-center px-8 py-4 border border-foreground text-foreground text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
            >
              Explorar Brechó
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Logo Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative inline-block">
            <span className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide text-foreground">
              Sustenta o Look
            </span>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-px bg-primary" />
          </div>
          <p className="mt-12 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Cada peça conta uma história. Unimos sustentabilidade e individualidade, 
            valorizando processos artesanais e escolhas conscientes.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-16">
            Nossas Categorias
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Autorais Card */}
            <Link
              to="/autorais"
              className="group relative aspect-[4/5] overflow-hidden bg-secondary"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-nude/30 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <h3 className="font-serif text-3xl md:text-4xl text-background mb-2">
                  Autorais
                </h3>
                <p className="text-background/80 text-sm mb-4">
                  Peças desenvolvidas com identidade e propósito
                </p>
                <span className="inline-flex items-center text-background text-sm uppercase tracking-widest group-hover:underline">
                  Ver coleção
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Brechó Card */}
            <Link
              to="/brecho"
              className="group relative aspect-[4/5] overflow-hidden bg-secondary"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-olive/20 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <h3 className="font-serif text-3xl md:text-4xl text-background mb-2">
                  Brechó
                </h3>
                <p className="text-background/80 text-sm mb-4">
                  Curadoria vintage e upcycling com história
                </p>
                <span className="inline-flex items-center text-background text-sm uppercase tracking-widest group-hover:underline">
                  Explorar
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-6 border border-primary rounded-full flex items-center justify-center">
                <span className="font-serif text-xl text-primary">1</span>
              </div>
              <h3 className="font-serif text-xl mb-3">Consciência</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cada peça é criada ou selecionada pensando no impacto ambiental e social.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-6 border border-primary rounded-full flex items-center justify-center">
                <span className="font-serif text-xl text-primary">2</span>
              </div>
              <h3 className="font-serif text-xl mb-3">Identidade</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Valorizamos a individualidade e a expressão pessoal através da moda.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-6 border border-primary rounded-full flex items-center justify-center">
                <span className="font-serif text-xl text-primary">3</span>
              </div>
              <h3 className="font-serif text-xl mb-3">Conforto</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Peças que você quer vestir todos os dias, feitas para durar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Conheça Nossa História
          </h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">
            Somos Raiane e Larissa, um casal unido pelo amor à moda consciente e sustentável.
          </p>
          <Link
            to="/sobre"
            className="inline-flex items-center justify-center px-8 py-4 border border-background text-background text-sm uppercase tracking-widest hover:bg-background hover:text-foreground transition-all"
          >
            Sobre Nós
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
