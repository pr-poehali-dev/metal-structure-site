import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Icon name="Building2" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-secondary">СтальПром</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('products')} className="text-foreground hover:text-primary transition-colors">
              Продукция
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">
              Портфолио
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              О компании
            </button>
            <button onClick={() => scrollToSection('certificates')} className="text-foreground hover:text-primary transition-colors">
              Сертификаты
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button onClick={() => scrollToSection('calculator')} className="bg-accent hover:bg-accent/90">
              Калькулятор
            </Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 space-y-4">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left py-2 hover:text-primary">
              Главная
            </button>
            <button onClick={() => scrollToSection('products')} className="block w-full text-left py-2 hover:text-primary">
              Продукция
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 hover:text-primary">
              Услуги
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left py-2 hover:text-primary">
              Портфолио
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-primary">
              О компании
            </button>
            <button onClick={() => scrollToSection('certificates')} className="block w-full text-left py-2 hover:text-primary">
              Сертификаты
            </button>
            <button onClick={() => scrollToSection('contacts')} className="block w-full text-left py-2 hover:text-primary">
              Контакты
            </button>
            <Button onClick={() => scrollToSection('calculator')} className="w-full bg-accent hover:bg-accent/90">
              Калькулятор
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
