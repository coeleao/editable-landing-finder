import { Button } from '@/components/ui/button';
import { Play, Check, Users, Star, Smartphone, DollarSign, Clock } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Social Proof Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full shadow-lg">
            <div className="flex -space-x-1">
              <Users className="h-5 w-5" />
              <Users className="h-5 w-5" />
              <Users className="h-5 w-5" />
            </div>
            <span className="font-semibold text-sm md:text-base">+5.847 alunos já faturando</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            <span className="text-primary">Ganhe de R$3.000 a R$10.000</span>
            <br />
            <span className="text-foreground">trabalhando do celular</span>
            <br />
            <span className="text-foreground">sem sair de casa</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            O método comprovado para criar sua renda extra online 
            mesmo sem experiência e sem precisar investir alto.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            { icon: Smartphone, text: 'Direto do celular', color: 'text-primary' },
            { icon: DollarSign, text: 'Resultados rápidos', color: 'text-accent' },
            { icon: Clock, text: 'Menos de 2h por dia', color: 'text-primary' },
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center gap-3 bg-white border-2 border-border rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <item.icon className={`h-6 w-6 ${item.color}`} />
              <span className="font-medium text-foreground">{item.text}</span>
              <Check className="h-5 w-5 text-green-check" />
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="relative max-w-3xl mx-auto">
          {/* Live Viewers Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-gray-800 text-white px-5 py-2.5 rounded-full shadow-xl border border-gray-700">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-check opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-check"></span>
            </span>
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-1">
                <div className="w-5 h-5 rounded-full bg-green-check/20 flex items-center justify-center">
                  <Users className="h-3 w-3 text-green-check" />
                </div>
              </div>
              <span className="font-bold text-sm">
                <span className="text-green-check">1.247</span>
                <span className="text-gray-300 font-normal ml-1">pessoas assistindo agora</span>
              </span>
            </div>
          </div>

          {/* Video Container */}
          <div className="aspect-video bg-card rounded-2xl shadow-card border-4 border-primary/20 overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
              <button className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-glow hover:shadow-glow-strong transition-all duration-300 hover:scale-105">
                <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
              </button>
            </div>
          </div>

          {/* Video Caption */}
          <div className="mt-4 text-center">
            <p className="text-muted-foreground">
              💰 Veja como o Rafael saiu do zero e faturou R$8.500 no primeiro mês
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Button size="lg" variant="gradient" className="text-lg px-10 py-7 shadow-glow hover:shadow-glow-strong transition-all duration-300 animate-pulse">
            Quero Começar a Faturar Agora
          </Button>
        </div>
      </div>
    </section>
  );
}
