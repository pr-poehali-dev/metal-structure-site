import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/61e0e69a-115c-49ab-ad72-e8b08174e6b6/files/54803c68-6b6b-46ef-b903-73b3d56c54e8.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-secondary/80"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Металлоконструкции <br />любой сложности
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Проектирование, производство и монтаж металлоконструкций с 2005 года
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg"
              onClick={() => scrollToSection('calculator')}
            >
              <Icon name="Calculator" className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-secondary px-8 py-6 text-lg"
              onClick={() => scrollToSection('contacts')}
            >
              Связаться с нами
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">500+</div>
              <div className="text-lg text-white/80">Реализованных проектов</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">18</div>
              <div className="text-lg text-white/80">Лет на рынке</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">100%</div>
              <div className="text-lg text-white/80">Гарантия качества</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white" />
      </div>
    </section>
  );
}
