import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contacts() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за ваше обращение! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <section id="contacts" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground">info@stalprom.ru</p>
                  <p className="text-muted-foreground">sales@stalprom.ru</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Промышленная, д. 25, стр. 1
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-muted-foreground">Сб-Вс: выходной</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Отправить заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" required />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" required />
                </div>
                <div>
                  <Input type="email" placeholder="Email" required />
                </div>
                <div>
                  <Textarea placeholder="Сообщение" rows={5} required />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
