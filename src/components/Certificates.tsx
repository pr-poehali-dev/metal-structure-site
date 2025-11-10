import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const certificates = [
  {
    icon: 'Award',
    title: 'ISO 9001',
    description: 'Сертификат системы менеджмента качества',
  },
  {
    icon: 'ShieldCheck',
    title: 'ISO 14001',
    description: 'Экологический менеджмент',
  },
  {
    icon: 'FileCheck',
    title: 'СРО',
    description: 'Допуск на строительные работы',
  },
  {
    icon: 'BadgeCheck',
    title: 'ГОСТ',
    description: 'Соответствие государственным стандартам',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Сертификаты и лицензии</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы соответствуем всем требованиям и стандартам качества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <CardContent className="pt-8 pb-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert.icon as any} size={36} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Все наши специалисты регулярно проходят аттестацию и повышение квалификации
          </p>
        </div>
      </div>
    </section>
  );
}
