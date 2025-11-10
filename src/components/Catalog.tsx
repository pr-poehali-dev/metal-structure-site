import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const catalogItems = [
  {
    id: 1,
    category: 'warehouse',
    title: 'Склад быстровозводимый',
    description: 'Металлический каркас для складского помещения',
    price: '8 500 ₽/м²',
    specs: ['Высота: 6-12 м', 'Пролет: до 30 м', 'Срок монтажа: 2-3 недели'],
    image: 'https://cdn.poehali.dev/projects/61e0e69a-115c-49ab-ad72-e8b08174e6b6/files/54803c68-6b6b-46ef-b903-73b3d56c54e8.jpg',
  },
  {
    id: 2,
    category: 'hangar',
    title: 'Ангар арочный',
    description: 'Бескаркасная арочная конструкция',
    price: '7 500 ₽/м²',
    specs: ['Высота: 4-8 м', 'Пролет: до 20 м', 'Срок монтажа: 1-2 недели'],
    image: 'https://cdn.poehali.dev/projects/61e0e69a-115c-49ab-ad72-e8b08174e6b6/files/8505c839-cd01-4c23-9b1e-b9390711d57b.jpg',
  },
  {
    id: 3,
    category: 'frame',
    title: 'Каркас здания',
    description: 'Металлокаркас для многоэтажного здания',
    price: '9 500 ₽/м²',
    specs: ['Высота: до 50 м', 'Этажность: до 10', 'Срок монтажа: 3-6 месяцев'],
    image: 'https://cdn.poehali.dev/projects/61e0e69a-115c-49ab-ad72-e8b08174e6b6/files/fab3ef86-1ead-462a-bb99-f795afd613e2.jpg',
  },
  {
    id: 4,
    category: 'workshop',
    title: 'Производственный цех',
    description: 'Промышленное здание с мостовыми кранами',
    price: '10 000 ₽/м²',
    specs: ['Высота: 8-16 м', 'Грузоподъемность: до 50 т', 'Срок монтажа: 2-4 месяца'],
    image: 'https://cdn.poehali.dev/projects/61e0e69a-115c-49ab-ad72-e8b08174e6b6/files/54803c68-6b6b-46ef-b903-73b3d56c54e8.jpg',
  },
  {
    id: 5,
    category: 'warehouse',
    title: 'Холодильный склад',
    description: 'Утепленный склад для хранения продукции',
    price: '11 000 ₽/м²',
    specs: ['Температура: до -25°C', 'Утепление: 200 мм', 'Срок монтажа: 3-4 недели'],
    image: 'https://cdn.poehali.dev/projects/61e0e69a-115c-49ab-ad72-e8b08174e6b6/files/8505c839-cd01-4c23-9b1e-b9390711d57b.jpg',
  },
  {
    id: 6,
    category: 'hangar',
    title: 'Ангар для техники',
    description: 'Место для хранения сельхозтехники',
    price: '6 500 ₽/м²',
    specs: ['Высота: 5-10 м', 'Ворота: до 6 м', 'Срок монтажа: 1-2 недели'],
    image: 'https://cdn.poehali.dev/projects/61e0e69a-115c-49ab-ad72-e8b08174e6b6/files/fab3ef86-1ead-462a-bb99-f795afd613e2.jpg',
  },
];

const categories = [
  { value: 'all', label: 'Все' },
  { value: 'warehouse', label: 'Склады' },
  { value: 'hangar', label: 'Ангары' },
  { value: 'frame', label: 'Каркасы' },
  { value: 'workshop', label: 'Цеха' },
];

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems =
    selectedCategory === 'all'
      ? catalogItems
      : catalogItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="catalog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Каталог продукции</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящую конструкцию из нашего ассортимента
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5">
            {categories.map((cat) => (
              <TabsTrigger key={cat.value} value={cat.value}>
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-2xl transition-shadow group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-accent">
                  {item.price}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {item.specs.map((spec, index) => (
                    <div key={index} className="flex items-start text-sm text-muted-foreground">
                      <Icon name="CheckCircle" size={16} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="flex-1">
                      <Icon name="Info" className="mr-2" size={16} />
                      Подробнее
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{item.title}</DialogTitle>
                      <DialogDescription>{item.description}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-semibold mb-2">Технические характеристики:</h4>
                        <ul className="space-y-2">
                          {item.specs.map((spec, index) => (
                            <li key={index} className="flex items-start">
                              <Icon name="CheckCircle" size={16} className="mr-2 text-primary mt-1" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                        <div>
                          <p className="text-sm text-muted-foreground">Стоимость</p>
                          <p className="text-2xl font-bold text-primary">{item.price}</p>
                        </div>
                        <Button className="bg-accent hover:bg-accent/90">
                          <Icon name="Phone" className="mr-2" size={16} />
                          Заказать
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button className="flex-1 bg-primary hover:bg-primary/90">
                  <Icon name="ShoppingCart" className="mr-2" size={16} />
                  Заказать
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Package" size={48} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-xl text-muted-foreground">Товары в этой категории не найдены</p>
          </div>
        )}
      </div>
    </section>
  );
}
