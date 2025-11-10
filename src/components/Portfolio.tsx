import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    image: 'https://cdn.poehali.dev/projects/61e0e69a-115c-49ab-ad72-e8b08174e6b6/files/8505c839-cd01-4c23-9b1e-b9390711d57b.jpg',
    title: 'Производственный комплекс',
    category: 'Промышленность',
    area: '5000 м²',
  },
  {
    image: 'https://cdn.poehali.dev/projects/61e0e69a-115c-49ab-ad72-e8b08174e6b6/files/fab3ef86-1ead-462a-bb99-f795afd613e2.jpg',
    title: 'Складской комплекс',
    category: 'Логистика',
    area: '3500 м²',
  },
  {
    image: 'https://cdn.poehali.dev/projects/61e0e69a-115c-49ab-ad72-e8b08174e6b6/files/54803c68-6b6b-46ef-b903-73b3d56c54e8.jpg',
    title: 'Ангар для техники',
    category: 'Сельское хозяйство',
    area: '2000 м²',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши проекты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Реализованные объекты различного масштаба и назначения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-primary">{project.category}</Badge>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">Площадь: {project.area}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
