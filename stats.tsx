export function Stats() {
  const stats = [
    {
      value: '1,200+',
      label: 'Books Published',
      description: 'Across all genres and formats'
    },
    {
      value: '350+',
      label: 'Magazine Issues',
      description: 'Monthly and quarterly publications'
    },
    {
      value: '500+',
      label: 'Happy Authors',
      description: 'Trust us with their work'
    },
    {
      value: '25+',
      label: 'Years Experience',
      description: 'In the publishing industry'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6"
            >
              <div className="text-5xl md:text-6xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-xl text-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
