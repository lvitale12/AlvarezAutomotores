import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Car, Trophy, Clock, Users } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = '', duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration * 60); // 60fps
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { icon: Car, value: 500, suffix: '+', label: 'Vehículos vendidos' },
  { icon: Trophy, value: 15, suffix: '+', label: 'Años de experiencia' },
  { icon: Users, value: 98, suffix: '%', label: 'Clientes satisfechos' },
  { icon: Clock, value: 24, suffix: 'hs', label: 'Respuesta promedio' },
];

export default function StatsCounter() {
  return (
    <section className="relative z-20 -mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl shadow-2xl shadow-brand-blue/10 border border-gray-100 p-8 md:p-0 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-gray-100"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center py-6 md:py-10 text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-4 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="text-3xl md:text-4xl font-montserrat font-black text-brand-blue tracking-tight">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs text-slate-400 font-medium mt-2 uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
