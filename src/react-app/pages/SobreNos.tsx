import { Leaf, Heart, Sparkles } from "lucide-react";
import Layout from "@/react-app/components/layout/Layout";

export default function SobreNosPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Sobre Nós
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Moda consciente feita com propósito, amor e identidade brasileira.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-secondary overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80"
                  alt="Raiane e Larissa - Fundadoras da Sustenta o Look"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-olive/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-nude -z-10" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                Nossa História
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A <strong className="text-foreground">Sustenta o Look</strong> nasceu da 
                  vontade de criar moda com significado. Mais do que roupas, queremos contar 
                  histórias, valorizar processos artesanais e promover escolhas conscientes 
                  que respeitam o meio ambiente e as pessoas.
                </p>
                <p>
                  Somos uma marca independente brasileira que acredita na moda como forma 
                  de expressão e transformação. Cada peça que criamos carrega nossa essência: 
                  feminilidade, delicadeza e consciência ambiental.
                </p>
                <p>
                  Nossa curadoria de brechó traz peças vintage garimpadas com carinho, 
                  enquanto nossa linha autoral desenvolve criações únicas feitas sob encomenda, 
                  valorizando técnicas manuais e materiais sustentáveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
            Quem Faz Acontecer
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Raiane */}
            <div className="bg-background p-8 lg:p-10 border border-border">
              <div className="w-20 h-20 rounded-full bg-olive/10 flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-2">
                Raiane
              </h3>
              <p className="text-sm uppercase tracking-widest text-primary mb-4">
                Direção Criativa
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Formada pela UFRJ, Raiane é a mente criativa por trás de cada peça. 
                Com olhar atento aos detalhes e paixão por design sustentável, ela 
                desenvolve as criações autorais da marca, desde a concepção até os 
                acabamentos finais. Sua formação acadêmica aliada à sensibilidade 
                artística resulta em peças que são verdadeiras obras de expressão pessoal.
              </p>
            </div>

            {/* Larissa */}
            <div className="bg-background p-8 lg:p-10 border border-border">
              <div className="w-20 h-20 rounded-full bg-olive/10 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-2">
                Larissa
              </h3>
              <p className="text-sm uppercase tracking-widest text-primary mb-4">
                Gestão Estratégica & Logística
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Larissa é responsável por toda a gestão estratégica e logística da marca. 
                Ela garante que cada peça chegue às mãos de quem a escolheu com todo o 
                cuidado que merece. Da curadoria do brechó ao atendimento personalizado, 
                Larissa cuida de cada detalhe operacional para que a experiência da 
                cliente seja tão especial quanto as peças que oferecemos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">
            Nossos Valores
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Princípios que guiam cada decisão e cada ponto de costura.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-cream flex items-center justify-center mb-4">
                <Leaf className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">
                Sustentabilidade
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Escolhas conscientes em cada etapa, desde os materiais até a embalagem. 
                Acreditamos que moda e respeito ao planeta podem andar juntos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-cream flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">
                Autenticidade
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Peças únicas que contam histórias. Valorizamos a individualidade e 
                criamos moda para quem quer se expressar de forma genuína.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-cream flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">
                Cuidado
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Atenção em cada detalhe, do primeiro contato à entrega. 
                Tratamos cada cliente e cada peça com o carinho que merecem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-nude/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Vamos Construir Juntas?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            A Sustenta o Look é mais do que uma marca — é uma comunidade de pessoas 
            que acreditam em moda consciente. Explore nossas coleções e encontre 
            peças que combinam com a sua história.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/autorais"
              className="inline-flex items-center justify-center h-12 px-8 text-sm uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Ver Autorais
            </a>
            <a
              href="/brecho"
              className="inline-flex items-center justify-center h-12 px-8 text-sm uppercase tracking-widest border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Ver Brechó
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
