import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Building2" size={28} />
              <span className="text-2xl font-bold">СтальПром</span>
            </div>
            <p className="text-white/70">
              Производство и монтаж металлоконструкций с 2005 года
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Услуги</h3>
            <ul className="space-y-2 text-white/70">
              <li>Проектирование</li>
              <li>Производство</li>
              <li>Монтаж</li>
              <li>Обслуживание</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2" />
                info@stalprom.ru
              </li>
              <li className="flex items-center">
                <Icon name="MapPin" size={16} className="mr-2" />
                г. Москва
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Социальные сети</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/70">
          <p>© 2024 СтальПром. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
