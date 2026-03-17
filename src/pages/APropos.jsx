import React from 'react';
import { motion } from 'framer-motion';
import { Target, BookOpen, Award, Users, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import { valeurs, historique } from '../data/content';
import SectionHeader from '../components/ui/SectionHeader';

/**
 * Page À Propos - Présentation de l'IAE
 * Style minimaliste avec images
 */
const APropos = () => {
  const iconMap = {
    'Target': Target,
    'Briefcase': BookOpen,
    'Award': Award
  };
  
  return (
    <main className="pt-20">
      {/* Hero Section avec image */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&h=800&fit=crop"
            alt="Campus IAE"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://placehold.co/1920x800/064E3B/FFFFFF?text=IAE';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        
        <div className="container-iae relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block font-inter text-sm font-medium tracking-widest uppercase text-white/70 mb-4">
              Qui sommes-nous
            </span>
            <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              À propos de l'IAE
            </h1>
            <p className="font-inter text-lg text-white/80 leading-relaxed">
              L'Institut Africain de l'Excellence est une institution d'enseignement 
              supérieur engagée dans la formation des leaders de demain.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Section Mission & Vision avec image */}
      <section className="section-iae bg-white">
        <div className="container-iae">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-label">
                Notre engagement
              </span>
              <h2 className="section-title mb-6">
                Notre Mission
              </h2>
              <p className="font-inter text-gray-600 leading-relaxed mb-6">
                L'Institut Africain de l'Excellence a pour mission de former des 
                professionnels compétents, éthiques et innovants, capables de 
                contribuer au développement durable de l'Afrique et du monde.
              </p>
              <p className="font-inter text-gray-600 leading-relaxed mb-8">
                Nous nous engageons à offrir une éducation de qualité internationale, 
                alliant excellence académique et valeurs africaines, pour préparer 
                les leaders de demain aux défis du 21ème siècle.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-xl bg-iae-primary/10 flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-iae-primary" />
                </div>
                <div>
                  <div className="font-sora text-3xl font-bold text-iae-primary">500+</div>
                  <div className="font-inter text-sm text-gray-500">Étudiants formés</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
                  alt="Formation IAE"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/800x600/064E3B/FFFFFF?text=Formation';
                  }}
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <Globe className="w-8 h-8 text-iae-primary mb-2" />
                <p className="font-sora text-lg font-bold text-gray-900">Vision 2030</p>
                <p className="font-inter text-sm text-gray-500">Excellence africaine</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Section Valeurs */}
      <section className="section-iae bg-iae-bg">
        <div className="container-iae">
          <SectionHeader
            title="Nos Valeurs"
            subtitle="Ce qui nous guide"
            description="Trois piliers fondamentaux qui définissent notre approche de l'enseignement."
            align="center"
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {valeurs.map((valeur, index) => {
              const IconComponent = iconMap[valeur.icon] || Target;
              return (
                <motion.div
                  key={valeur.titre}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="feature-card text-center"
                >
                  <div className="feature-icon mx-auto">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-sora text-xl font-bold text-gray-900 mb-3">
                    {valeur.titre}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm">
                    {valeur.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      
      {/* Section Historique */}
      <section className="section-iae bg-white">
        <div className="container-iae">
          <SectionHeader
            title="Notre Histoire"
            subtitle="Chronologie"
            description="Les moments clés qui ont marqué le parcours de l'IAE depuis sa création."
            align="center"
          />
          
          <div className="relative max-w-4xl mx-auto">
            {/* Ligne verticale */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200" />
            
            <div className="space-y-12">
              {historique.map((item, index) => (
                <motion.div
                  key={item.annee}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Contenu */}
                  <div className="ml-20 md:ml-0 md:w-1/2 md:px-12">
                    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-card">
                      <span className="inline-block px-3 py-1 bg-iae-primary/10 text-iae-primary font-inter font-semibold text-sm rounded-full mb-3">
                        {item.annee}
                      </span>
                      <h3 className="font-sora text-xl font-bold text-gray-900 mb-2">
                        {item.titre}
                      </h3>
                      <p className="font-inter text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Point sur la ligne */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-iae-primary border-4 border-white transform -translate-x-1/2 mt-6" />
                  
                  {/* Espace vide pour l'autre côté */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Équipe */}
      <section className="section-iae bg-iae-bg">
        <div className="container-iae">
          <SectionHeader
            title="Notre Équipe"
            subtitle="Les visages de l'IAE"
            description="Une équipe d'experts passionnés dédiée à votre réussite."
            align="center"
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { nom: 'Prof. Jean Moussa', role: 'Directeur Général', initiale: 'JM' },
              { nom: 'Dr. Marie Kassa', role: 'Doyenne des Études', initiale: 'MK' },
              { nom: 'Prof. Paul Bemba', role: 'Directeur Recherche', initiale: 'PB' },
              { nom: 'Mme Amina Diallo', role: 'Responsable Admissions', initiale: 'AD' }
            ].map((membre, index) => (
              <motion.div
                key={membre.nom}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-iae-primary/10 flex items-center justify-center">
                  <span className="font-sora text-3xl font-bold text-iae-primary">
                    {membre.initiale}
                  </span>
                </div>
                <h3 className="font-sora text-lg font-semibold text-gray-900 mb-1">
                  {membre.nom}
                </h3>
                <p className="font-inter text-gray-500 text-sm">
                  {membre.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Section CTA */}
      <section className="relative py-20 bg-iae-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container-iae relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-white mb-4">
              Rejoignez l'excellence
            </h2>
            <p className="font-inter text-white/70 max-w-2xl mx-auto mb-8">
              Les inscriptions pour l'année académique 2025-2026 sont ouvertes. 
              Ne manquez pas cette opportunité.
            </p>
            <a 
              href="/preinscription" 
              className="inline-flex items-center px-6 py-3 bg-white text-iae-primary font-inter font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Se préinscrire
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default APropos;
