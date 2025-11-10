import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Calculator() {
  const { toast } = useToast();
  const [constructionType, setConstructionType] = useState('');
  const [area, setArea] = useState('');
  const [height, setHeight] = useState('');
  const [coating, setCoating] = useState('');
  const [cost, setCost] = useState<number | null>(null);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: '',
  });

  const calculateCost = () => {
    if (!constructionType || !area || !height || !coating) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    const baseRates: { [key: string]: number } = {
      'warehouse': 8500,
      'hangar': 7500,
      'frame': 9500,
      'workshop': 10000,
    };

    const coatingRates: { [key: string]: number } = {
      'standard': 1,
      'galvanized': 1.2,
      'painted': 1.3,
      'special': 1.5,
    };

    const areaNum = parseFloat(area);
    const heightNum = parseFloat(height);
    const baseRate = baseRates[constructionType] || 8500;
    const coatingMultiplier = coatingRates[coating] || 1;

    const heightMultiplier = heightNum > 10 ? 1 + (heightNum - 10) * 0.05 : 1;

    const totalCost = areaNum * baseRate * coatingMultiplier * heightMultiplier;
    setCost(Math.round(totalCost));
  };

  const resetCalculator = () => {
    setConstructionType('');
    setArea('');
    setHeight('');
    setCoating('');
    setCost(null);
    setShowRequestForm(false);
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast({
        title: 'Ошибка',
        description: 'Заполните обязательные поля: Имя и Телефон',
        variant: 'destructive',
      });
      return;
    }
    
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время для уточнения деталей.',
    });
    
    setFormData({ name: '', phone: '', email: '', comment: '' });
    setShowRequestForm(false);
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-secondary to-secondary/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Калькулятор стоимости</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Рассчитайте предварительную стоимость вашего проекта
          </p>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Icon name="Calculator" className="mr-2 text-primary" size={28} />
              Расчет металлоконструкций
            </CardTitle>
            <CardDescription>
              Заполните параметры для расчета ориентировочной стоимости
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="type">Тип конструкции</Label>
                <Select value={constructionType} onValueChange={setConstructionType}>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="warehouse">Склад</SelectItem>
                    <SelectItem value="hangar">Ангар</SelectItem>
                    <SelectItem value="frame">Каркас здания</SelectItem>
                    <SelectItem value="workshop">Производственный цех</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="coating">Покрытие</Label>
                <Select value={coating} onValueChange={setCoating}>
                  <SelectTrigger id="coating">
                    <SelectValue placeholder="Выберите покрытие" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Стандартное</SelectItem>
                    <SelectItem value="galvanized">Оцинкованное</SelectItem>
                    <SelectItem value="painted">Окрашенное</SelectItem>
                    <SelectItem value="special">Специальное</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="area">Площадь (м²)</Label>
                <Input
                  id="area"
                  type="number"
                  placeholder="Введите площадь"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  min="1"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="height">Высота (м)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="Введите высоту"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  min="1"
                  step="0.1"
                />
              </div>
            </div>

            {cost !== null && !showRequestForm && (
              <div className="mt-8 p-6 bg-primary/10 rounded-lg border-2 border-primary space-y-4">
                <div className="text-center">
                  <p className="text-lg text-muted-foreground mb-2">Ориентировочная стоимость:</p>
                  <p className="text-4xl font-bold text-primary">
                    {cost.toLocaleString('ru-RU')} ₽
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    * Точная стоимость определяется после детального расчета проекта
                  </p>
                </div>
                <Button
                  onClick={() => setShowRequestForm(true)}
                  className="w-full bg-accent hover:bg-accent/90"
                  size="lg"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </div>
            )}

            {showRequestForm && cost !== null && (
              <div className="mt-8 p-6 bg-card rounded-lg border-2 border-primary">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Icon name="FileText" className="mr-2 text-primary" />
                  Оформление заявки
                </h3>
                <div className="mb-4 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Расчет на сумму:</p>
                  <p className="text-2xl font-bold text-primary">{cost.toLocaleString('ru-RU')} ₽</p>
                  <div className="mt-2 text-sm text-muted-foreground space-y-1">
                    <p>• Тип: {constructionType === 'warehouse' ? 'Склад' : constructionType === 'hangar' ? 'Ангар' : constructionType === 'frame' ? 'Каркас' : 'Цех'}</p>
                    <p>• Площадь: {area} м²</p>
                    <p>• Высота: {height} м</p>
                  </div>
                </div>
                <form onSubmit={handleRequestSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="req-name">Имя *</Label>
                    <Input
                      id="req-name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="req-phone">Телефон *</Label>
                    <Input
                      id="req-phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="req-email">Email</Label>
                    <Input
                      id="req-email"
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="req-comment">Комментарий</Label>
                    <Textarea
                      id="req-comment"
                      placeholder="Дополнительная информация о проекте"
                      rows={3}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit" className="flex-1 bg-accent hover:bg-accent/90" size="lg">
                      <Icon name="Send" className="mr-2" size={20} />
                      Отправить заявку
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowRequestForm(false)}
                      size="lg"
                    >
                      Назад
                    </Button>
                  </div>
                </form>
              </div>
            )}

            <div className="flex gap-4">
              <Button
                onClick={calculateCost}
                className="flex-1 bg-accent hover:bg-accent/90"
                size="lg"
              >
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать
              </Button>
              <Button
                onClick={resetCalculator}
                variant="outline"
                size="lg"
              >
                <Icon name="RotateCcw" className="mr-2" size={20} />
                Сбросить
              </Button>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center">
                <Icon name="Info" className="mr-2 text-primary" size={18} />
                Что влияет на стоимость:
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                <li>• Тип металлоконструкции и ее назначение</li>
                <li>• Общая площадь и высота сооружения</li>
                <li>• Вид покрытия и антикоррозийной защиты</li>
                <li>• Сложность проекта и дополнительные элементы</li>
                <li>• Удаленность объекта и условия монтажа</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}