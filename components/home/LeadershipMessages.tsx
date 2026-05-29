"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function LeadershipMessages() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/5 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-50" />
      
      <div className="container relative mx-auto px-4 space-y-12">
        <MessageCard
          name="Dr. MURALI S."
          title="Principal, Maharaja Institute of Technology Mysore"
          image="/images/principal_upscaled.jpg"
          quote="Maharaja Institute of Technology Mysore is more than an engineering college. It is a mission-driven institution built on the noble belief that education has the power to transform individuals, communities, and the nation. Located in Mandya district but situated close to the culturally rich city of Mysore, our campus serves as a bridge between opportunity and aspiration, especially for students from rural and semi-urban backgrounds. This is highly supported by transport services we render to most of the places in and around Mysore."
        />
        
        <MessageCard
          name="Dr. RANJITH K.C."
          title="Head of Department, CSE AI & ML"
          image="/images/faculty/dr_ranjith_k_c.jpg"
          quote="Artificial Intelligence is rapidly reshaping the job market, creating unprecedented opportunities. In Karnataka's thriving tech ecosystem, the demand for highly skilled AI professionals is skyrocketing. InnovateX plays a crucial role in bridging the gap between theoretical knowledge and industry demands. By empowering our students with cutting-edge skills and hands-on experience, we are not just preparing them for the future—we are building the next generation of leaders who will drive technological advancement and create a resilient, inclusive future."
          reversed
        />
      </div>
    </section>
  );
}

function MessageCard({ 
  name, 
  title, 
  image, 
  quote, 
  reversed = false 
}: { 
  name: string; 
  title: string; 
  image: string; 
  quote: string; 
  reversed?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto"
    >
      <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 bg-white/[0.03] p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm`}>
        <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-2xl overflow-hidden shadow-2xl relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        <div className={`flex-1 text-center ${reversed ? 'md:text-right' : 'md:text-left'}`}>
          <Quote className={`w-12 h-12 text-purple-400/30 mb-6 mx-auto ${reversed ? 'md:ml-auto md:mr-0' : 'md:mx-0'}`} />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {name}
          </h2>
          <p className="text-xl text-white/80 font-medium mb-6">
            {title}
          </p>
          
          <p className={`text-lg text-white/60 leading-relaxed italic border-purple-500/50 text-left ${reversed ? 'border-r-4 pr-6 text-right' : 'border-l-4 pl-6 text-left'}`}>
            "{quote}"
          </p>
        </div>
      </div>
    </motion.div>
  );
}
