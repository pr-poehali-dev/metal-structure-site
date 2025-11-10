import Icon from '@/components/ui/icon';

const advantages = [
  {
    icon: 'Award',
    title: 'Опыт 18 лет',
    description: 'Работаем на рынке металлоконструкций с 2005 года',
  },
  {
    icon: 'Users',
    title: 'Команда профессионалов',
    description: 'Квалифицированные инженеры и монтажники',
  },
  {
    icon: 'CheckCircle',
    title: 'Качество',
    description: 'Соблюдение всех стандартов и технических норм',
  },
  {
    icon: 'Clock',
    title: 'Сроки',
    description: 'Точное выполнение договорных обязательств',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                СтальПром — ведущая компания по производству и монтажу металлоконструкций в России. 
                Мы специализируемся на создании надежных и долговечных решений для промышленных, 
                коммерческих и сельскохозяйственных объектов.
              </p>
              <p>
                Наша команда состоит из опытных инженеров-проектировщиков, технологов и монтажников, 
                которые обеспечивают высочайшее качество на всех этапах реализации проекта.
              </p>
              <p>
                Мы используем только сертифицированные материалы и современное оборудование, 
                что позволяет нам гарантировать долговечность и надежность наших конструкций.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Icon name={advantage.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
