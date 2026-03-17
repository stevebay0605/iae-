import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Phone, Mail, Send, CheckCircle2, Users, BookOpen, Award, Target, GraduationCap, Clock, TrendingUp } from 'lucide-react';
import { statistiques, actualites, etapes_preinscription, coordonnees, valeurs, filieres } from '../data/content';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';

/**
 * Composant Counter - Animation de comptage
 */
const Counter = ({ value, suffixe, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);
  
  return <span ref={ref}>{count}{suffixe}</span>;
};

/**
 * Section Hero - Bannière principale avec image de fond
 * Style inspiré de Racon360
 */
const HeroSection = () => {
  return (
    <section className="relative min-h-[700px] md:min-h-[800px] flex items-center">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop"
          alt="Campus universitaire"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />
      </div>
      
      <div className="container-iae relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-block font-inter text-sm font-medium tracking-widest uppercase text-white/70 mb-4">
              Bienvenue à l'IAE
            </span>
            
            <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Former les{' '}
              <span className="text-iae-accent">leaders</span>
              {' '}de demain
            </h1>
            
            <p className="font-inter text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              L'Institut Africain de l'Excellence vous offre une formation 
              d'exception, alliant rigueur académique et innovation pédagogique.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/preinscription" className="btn-accent">
                Se préinscrire
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/filieres" className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-inter font-medium rounded-lg border border-white/20 backdrop-blur-sm transition-colors duration-200 hover:bg-white/20">
                Nos formations
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Stats flottantes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute bottom-8 right-8 hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <p className="font-sora text-3xl font-bold text-white">500+</p>
                <p className="font-inter text-xs text-white/70">Étudiants</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <p className="font-sora text-3xl font-bold text-white">15+</p>
                <p className="font-inter text-xs text-white/70">Filières</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <p className="font-sora text-3xl font-bold text-white">95%</p>
                <p className="font-inter text-xs text-white/70">Insertion</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * Section Features - Aperçu des programmes
 */
const FeaturesSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Formation de qualité',
      description: 'Des programmes académiques rigoureux reconnus internationalement.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop'
    },
    {
      icon: Users,
      title: 'Corps professoral',
      description: 'Des enseignants experts et passionnés par la transmission du savoir.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop'
    },
    {
      icon: TrendingUp,
      title: 'Insertion professionnelle',
      description: 'Un accompagnement personnalisé vers l\'emploi dès la fin des études.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="section-iae bg-white">
      <div className="container-iae">
        <SectionHeader
          title="Une éducation d'excellence"
          subtitle="Pourquoi l'IAE"
          description="Tout ce dont vous avez besoin pour réussir votre parcours académique et professionnel."
          align="center"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group"
              >
                <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = `https://placehold.co/400x300/064E3B/FFFFFF?text=${encodeURIComponent(feature.title)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="font-sora text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

/**
 * Section Chiffres clés
 */
const StatsSection = () => {
  return (
    <section className="py-16 bg-iae-bg border-y border-gray-100">
      <div className="container-iae">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {statistiques.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="text-center"
            >
              <div className="stat-value">
                <Counter value={stat.valeur} suffixe={stat.suffixe} />
              </div>
              <div className="stat-label">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/**
 * Section Filières avec images
 */
const FilieresSection = () => {
  const displayedFilieres = filieres.slice(0, 3);
  
  return (
    <section className="section-iae bg-white">
      <div className="container-iae">
        <SectionHeader
          title="Nos Filières d'Excellence"
          subtitle="Découvrez"
          description="Explorez nos programmes de formation conçus pour répondre aux besoins du marché."
          align="center"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {displayedFilieres.map((filiere, index) => (
            <motion.div
              key={filiere.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="card-iae overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`https://source.unsplash.com/600x400/?${filiere.imageKeyword}`}
                  alt={filiere.nom}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x400/064E3B/FFFFFF?text=${encodeURIComponent(filiere.nom)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="tag-accent">
                    {filiere.topic}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-sora text-lg font-bold text-gray-900 mb-2 group-hover:text-iae-primary transition-colors">
                  {filiere.nom}
                </h3>
                <p className="font-inter text-gray-600 text-sm line-clamp-2 mb-4">
                  {filiere.description}
                </p>
                <Link 
                  to="/filieres" 
                  className="inline-flex items-center text-iae-primary font-inter text-sm font-medium hover:text-iae-primary-light transition-colors"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-center mt-10"
        >
          <Link to="/filieres" className="btn-secondary">
            Voir toutes les filières
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * Section Valeurs avec images
 */
const ValeursSection = () => {
  const iconMap = {
    'Target': Target,
    'Briefcase': BookOpen,
    'Award': Award
  };
  
  return (
    <section className="section-iae bg-iae-bg">
      <div className="container-iae">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
                alt="Étudiants IAE"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/800x600/064E3B/FFFFFF?text=IAE';
                }}
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <p className="font-sora text-4xl font-bold text-iae-primary mb-1">10+</p>
              <p className="font-inter text-sm text-gray-500">Ans d'excellence</p>
            </div>
          </motion.div>
          
          {/* Contenu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">
              Nos valeurs
            </span>
            <h2 className="section-title mb-6">
              Ce qui nous guide chaque jour
            </h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-8">
              Trois piliers fondamentaux qui définissent notre approche de l'enseignement 
              et guident chacune de nos actions au service de l'excellence.
            </p>
            
            <div className="space-y-6">
              {valeurs.map((valeur, index) => {
                const IconComponent = iconMap[valeur.icon] || Target;
                return (
                  <motion.div
                    key={valeur.titre}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="feature-icon flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-sora text-lg font-bold text-gray-900 mb-1">
                        {valeur.titre}
                      </h3>
                      <p className="font-inter text-gray-600 text-sm">
                        {valeur.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/**
 * Section Actualités avec images
 */
const ActualitesSection = () => {
  const displayedNews = actualites.slice(0, 3);
  
  return (
    <section className="section-iae bg-white">
      <div className="container-iae">
        <SectionHeader
          title="Actualités & Événements"
          subtitle="Restez informés"
          description="Les dernières nouvelles de l'IAE, nos événements et les succès de notre communauté."
          align="center"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {displayedNews.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="card-iae overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`https://source.unsplash.com/600x400/?university,${news.categorie.toLowerCase()}`}
                  alt={news.titre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x400/064E3B/FFFFFF?text=${encodeURIComponent(news.categorie)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="tag-accent">
                    {news.categorie}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="font-inter">{news.date}</span>
                </div>
                <h3 className="font-sora text-lg font-bold text-gray-900 mb-3 group-hover:text-iae-primary transition-colors line-clamp-2">
                  {news.titre}
                </h3>
                <p className="font-inter text-gray-600 text-sm line-clamp-2 mb-4">
                  {news.extrait}
                </p>
                <Link
                  to="/actualites"
                  className="inline-flex items-center text-iae-primary font-inter text-sm font-medium hover:text-iae-primary-light transition-colors group/link"
                >
                  Lire la suite
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-center mt-10"
        >
          <Link to="/actualites" className="btn-secondary">
            Toutes les actualités
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * Section CTA Préinscription
 */
const CTASection = () => {
  return (
    <section className="relative py-24 bg-iae-primary overflow-hidden">
      {/* Pattern de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container-iae relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block font-inter text-xs font-semibold tracking-widest uppercase text-white/60 mb-4">
              Rejoignez-nous
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à rejoindre l'excellence ?
            </h2>
            <p className="font-inter text-white/70 mb-8">
              Suivez ces étapes simples pour démarrer votre parcours à l'IAE.
            </p>
            <Link to="/preinscription" className="btn-accent">
              Commencer ma préinscription
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {etapes_preinscription.map((etape, index) => (
              <div 
                key={etape.numero}
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-sora text-sm font-bold text-white">
                    {etape.numero}
                  </span>
                </div>
                <div>
                  <h3 className="font-sora text-sm font-semibold text-white mb-1">
                    {etape.label}
                  </h3>
                  <p className="font-inter text-white/60 text-xs">
                    {etape.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/**
 * Section Contact avec image
 */
const ContactSection = () => {
  return (
    <section className="section-iae bg-white">
      <div className="container-iae">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Coordonnées */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">
              Contact
            </span>
            <h2 className="section-title mb-6">
              Discutons de votre avenir
            </h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-8">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans votre projet d'études.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-iae-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-iae-primary" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-gray-900 mb-1">Adresse</h4>
                  <p className="font-inter text-gray-600 text-sm">
                    {coordonnees.adresse}<br />
                    {coordonnees.ville}, {coordonnees.pays}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-iae-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-iae-primary" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-gray-900 mb-1">Téléphone</h4>
                  <a 
                    href={`tel:${coordonnees.telephone}`} 
                    className="font-inter text-gray-600 text-sm hover:text-iae-primary transition-colors"
                  >
                    {coordonnees.telephone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-iae-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-iae-primary" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-gray-900 mb-1">Email</h4>
                  <a 
                    href={`mailto:${coordonnees.email}`} 
                    className="font-inter text-gray-600 text-sm hover:text-iae-primary transition-colors"
                  >
                    {coordonnees.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1427504740708-99243b9c7e5e?w=800&h=600&fit=crop"
                alt="Campus IAE"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/800x600/064E3B/FFFFFF?text=Contact';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/**
 * Page Home - Assemblage de toutes les sections
 */
const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <FilieresSection />
      <ValeursSection />
      <ActualitesSection />
      <CTASection />
      <ContactSection />
    </main>
  );
};

export default Home;
