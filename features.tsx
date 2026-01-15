import { Award, Users, Zap, Globe, TrendingUp, Shield } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Award,
      title: 'Award-Winning Quality',
      description: 'Our publications have won numerous industry awards for excellence in design and content.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced editors, designers, and marketing professionals dedicated to your success.'
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Efficient workflows that get your content published quickly without compromising quality.'
    },
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Reach readers worldwide through our extensive distribution and digital platforms.'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Excellence',
      description: 'Strategic marketing campaigns that maximize your reach and drive sales.'
    },
    {
      icon: Shield,
      title: 'Rights Protection',
      description: 'Comprehensive legal support to protect your intellectual property and rights.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-stone-50 via-amber-50/20 to-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-foreground mb-4">
            Why Choose Lexicon Press
          </h2>
          <p className="text-xl text-muted-foreground">
            We combine creativity, technology, and expertise to deliver exceptional publishing experiences
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-border group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl text-primary-foreground mb-4">
              Ready to Publish Your Next Project?
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your publishing vision to life
            </p>
            <button className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-accent transition-colors">
              Schedule a Consultation
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
