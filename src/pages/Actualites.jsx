import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { actualites } from '../data/content';
import SectionHeader from '../components/ui/SectionHeader';

/**
 * Page Actualités - Liste des actualités de l'IAE
 * Style minimaliste avec images
 */
const Actualites = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const totalPages = Math.ceil(actualites.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedNews = actualites.slice(startIndex, startIndex + itemsPerPage);
  
  const categories = [...new Set(actualites.map(n => n.categorie))];
  
  return (
    <main className="pt-20">
      {/* Hero Section avec image */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&h=800&fit=crop"
            alt="Actualités IAE"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://placehold.co/1920x800/064E3B/FFFFFF?text=Actualités';
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
              Restez informés
            </span>
            <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Actualités & Événements
            </h1>
            <p className="font-inter text-lg text-white/80 leading-relaxed">
              Découvrez les dernières nouvelles de l'IAE, nos événements, 
              nos partenariats et les succès de notre communauté.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Section Actualités */}
      <section className="section-iae bg-white">
        <div className="container-iae">
          <SectionHeader
            title="Toutes nos actualités"
            subtitle="À la une"
            align="center"
          />
          
          {/* Filtres de catégories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <button className="px-4 py-2 bg-iae-primary text-white font-inter text-sm rounded-full hover:bg-iae-primary-light transition-colors">
              Toutes
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 bg-white text-gray-700 font-inter text-sm rounded-full hover:bg-gray-100 transition-colors border border-gray-200"
              >
                {cat}
              </button>
            ))}
          </motion.div>
          
          {/* Grille d'actualités */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                {/* Image */}
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
                  <p className="font-inter text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {news.extrait}
                  </p>
                  <button className="inline-flex items-center text-iae-primary font-inter text-sm font-medium hover:text-iae-primary-light transition-colors group/link">
                    Lire la suite
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex items-center justify-center space-x-2 mt-12"
            >
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-inter text-sm transition-colors ${
                    page === currentPage
                      ? 'bg-iae-primary text-white'
                      : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Section Newsletter */}
      <section className="relative py-16 bg-iae-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container-iae relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-sora text-3xl font-bold text-white mb-4">
              Restez connecté
            </h2>
            <p className="font-inter text-white/70 mb-8">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités 
              et ne manquer aucun événement.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-full pl-12 pr-4 py-3 rounded-lg font-inter text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-white text-iae-primary font-inter font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                S'inscrire
              </button>
            </form>
            
            <p className="font-inter text-white/50 text-xs mt-4">
              En vous inscrivant, vous acceptez de recevoir nos communications.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Actualites;
