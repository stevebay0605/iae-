import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Clock, Users, GraduationCap, X, BookOpen, TrendingUp } from 'lucide-react';
import { filieres } from '../data/content';
import SectionHeader from '../components/ui/SectionHeader';

/**
 * Page Filières - Liste complète des filières IAE
 * Style minimaliste avec images
 */
const Filieres = () => {
  const [selectedFiliere, setSelectedFiliere] = useState(null);
  
  return (
    <main className="pt-20">
      {/* Hero Section avec image */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&h=800&fit=crop"
            alt="Étudiants IAE"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://placehold.co/1920x800/064E3B/FFFFFF?text=Filières';
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
              Nos programmes
            </span>
            <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nos Filières d'Excellence
            </h1>
            <p className="font-inter text-lg text-white/80 leading-relaxed">
              Découvrez nos programmes de formation conçus pour répondre aux 
              besoins du marché de l'emploi et former les leaders de demain.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Section Liste des Filières */}
      <section className="section-iae bg-white">
        <div className="container-iae">
          <SectionHeader
            title="Toutes nos filières"
            subtitle="6 programmes"
            description="Des formations complètes et professionnalisantes pour votre avenir."
            align="center"
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filieres.map((filiere, index) => (
              <motion.div
                key={filiere.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="card-iae overflow-hidden group cursor-pointer"
                onClick={() => setSelectedFiliere(filiere)}
              >
                {/* Image */}
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
                
                {/* Contenu */}
                <div className="p-6">
                  <h3 className="font-sora text-lg font-bold text-gray-900 mb-2 group-hover:text-iae-primary transition-colors">
                    {filiere.nom}
                  </h3>
                  <p className="font-cormorant text-sm text-iae-accent italic mb-3">
                    {filiere.accroche}
                  </p>
                  <p className="font-inter text-gray-600 text-sm line-clamp-2 mb-4">
                    {filiere.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        3-4 ans
                      </span>
                      <span className="flex items-center">
                        <GraduationCap className="w-4 h-4 mr-1" />
                        Licence
                      </span>
                    </div>
                  </div>
                </div>
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
              Prêt à vous inscrire ?
            </h2>
            <p className="font-inter text-white/70 max-w-2xl mx-auto mb-8">
              Les inscriptions pour l'année académique 2025-2026 sont ouvertes. 
              Ne manquez pas cette opportunité de rejoindre l'excellence.
            </p>
            <a 
              href="/preinscription" 
              className="inline-flex items-center px-6 py-3 bg-white text-iae-primary font-inter font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Commencer ma préinscription
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Modal de détail */}
      <AnimatePresence>
        {selectedFiliere && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedFiliere(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`https://source.unsplash.com/800x400/?${selectedFiliere.imageKeyword}`}
                  alt={selectedFiliere.nom}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/800x400/064E3B/FFFFFF?text=${encodeURIComponent(selectedFiliere.nom)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelectedFiliere(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="tag-accent mb-2">
                    {selectedFiliere.topic}
                  </span>
                  <h2 className="font-sora text-3xl font-bold text-white">
                    {selectedFiliere.nom}
                  </h2>
                </div>
              </div>
              
              {/* Contenu */}
              <div className="p-6">
                <p className="font-cormorant text-lg text-iae-accent italic mb-4">
                  {selectedFiliere.accroche}
                </p>
                <p className="font-inter text-gray-600 leading-relaxed mb-6">
                  {selectedFiliere.description}
                </p>
                
                <h3 className="font-sora text-xl font-bold text-gray-900 mb-4">
                  Programme de formation
                </h3>
                <ul className="space-y-3 mb-6">
                  {selectedFiliere.specs.map((spec, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-iae-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-iae-primary" />
                      </div>
                      <span className="font-inter text-gray-700">{spec}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/preinscription"
                    className="btn-primary flex-1 justify-center"
                    onClick={() => setSelectedFiliere(null)}
                  >
                    S'inscrire à cette filière
                  </Link>
                  <button
                    className="btn-secondary flex-1"
                    onClick={() => setSelectedFiliere(null)}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Filieres;
