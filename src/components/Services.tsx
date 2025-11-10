import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Pencil',
    title: 'Проектирование',
    description: 'Разработка проектной документации с учетом всех технических требований и норм',
  },
  {
    icon: 'Factory',
    title: 'Производство',
    description: 'Изготовление металлоконструкций на современном оборудовании',
  },
  {
    icon: 'Wrench',
    title: 'Монтаж',
    description: 'Профессиональная установка конструкций под ключ',
  },
  {
    icon: 'Paintbrush',
    title: 'Антикоррозийная обработка',
    description: 'Защита металла от коррозии и увеличение срока службы',
  },
  {
    icon: 'Settings',
    title: 'Техническое обслуживание',
    description: 'Плановое обслуживание и ремонт металлоконструкций',
  },
  {
    icon: 'FileText',
    title: 'Консультации',
    description: 'Экспертная поддержка на всех этапах реализации проекта',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный цикл работ от проектирования до монтажа
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Icon name={service.icon as any} size={28} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
