import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const products = [
  {
    icon: 'Building2',
    title: 'Каркасы зданий',
    description: 'Металлические каркасы для промышленных и коммерческих зданий любой сложности',
  },
  {
    icon: 'Container',
    title: 'Ангары и склады',
    description: 'Быстровозводимые конструкции для хранения и производства',
  },
  {
    icon: 'Box',
    title: 'Металлоконструкции',
    description: 'Балки, колонны, фермы и другие элементы для строительства',
  },
  {
    icon: 'Warehouse',
    title: 'Производственные цеха',
    description: 'Проектирование и монтаж промышленных сооружений',
  },
  {
    icon: 'Home',
    title: 'Навесы и козырьки',
    description: 'Защитные конструкции для входных групп и парковок',
  },
  {
    icon: 'Layers',
    title: 'Резервуары',
    description: 'Металлические емкости для хранения различных материалов',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша продукция</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Широкий спектр металлоконструкций для различных отраслей промышленности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary">
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={product.icon as any} size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
