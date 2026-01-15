import { BookOpen, Newspaper, Package } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: BookOpen,
      title: 'Book Publishing',
      description: 'From concept to distribution, we handle every aspect of book publishing. Fiction, non-fiction, academic texts - we bring your vision to life with professional editing, design, and marketing.',
      image: 'https://images.unsplash.com/photo-1763039334164-dba5f9aeb1fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaXNoaW5nJTIwYm9va3MlMjBzaGVsZnxlbnwxfHx8fDE3NjgzNzcwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Professional Editing', 'Cover Design', 'Distribution Networks', 'Marketing Support']
    },
    {
      icon: Newspaper,
      title: 'Magazine Production',
      description: 'Create stunning magazines that engage readers. Our team provides end-to-end magazine production including editorial planning, layout design, printing, and subscription management.',
      image: 'https://images.unsplash.com/photo-1757862351345-c7957a8c8756?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYWdhemluZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjgzNzcwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Editorial Planning', 'Graphic Design', 'Print & Digital', 'Subscription Services']
    },
    {
      icon: Package,
      title: 'Publishing Materials',
      description: 'Quality publishing materials for all your needs. We produce promotional materials, catalogs, brochures, and marketing collateral that showcase your content beautifully.',
      image: 'https://images.unsplash.com/photo-1581508512961-0e3b9524db40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHByZXNzJTIwbWF0ZXJpYWxzfGVufDF8fHx8MTc2ODI5MDgyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Promotional Materials', 'Catalogs & Brochures', 'Marketing Collateral', 'Custom Solutions']
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-foreground mb-4">
            Our Publishing Services
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive solutions for all your publishing needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isReverse = index % 2 === 1;
            
            return (
              <div 
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${isReverse ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Image */}
                <div className={isReverse ? 'lg:col-start-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={isReverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  
                  <h3 className="text-3xl text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
