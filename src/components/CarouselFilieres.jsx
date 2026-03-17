import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { filieres } from '../data/content';

/**
 * CarouselFilieres - Carousel des filières IAE
 * Style minimaliste professionnel avec polices Inter et Sora
 */
const CarouselFilieres = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  
  const totalItems = filieres.length;
  
  const goToPrev = () => {
    setShowDetail(false);
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setShowDetail(false);
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };
  
  const currentFiliere = filieres[currentIndex];
  
  return (
    <div className="relative">
      {/* Card principale */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 lg:h-auto min-h-[300px] overflow-hidden bg-gray-100">
            <img
              src={`https://source.unsplash.com/800x600/?${currentFiliere.imageKeyword}`}
              alt={currentFiliere.nom}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://placehold.co/800x600/064E3B/FFFFFF?text=${encodeURIComponent(currentFiliere.nom)}`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="tag-accent">
                {currentFiliere.topic}
              </span>
            </div>
          </div>
          
          {/* Contenu */}
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {showDetail ? (
                <motion.div
                  key="detail"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-sora text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {currentFiliere.nom}
                  </h3>
                  <div className="space-y-3 mb-6">
                    {currentFiliere.specs.map((spec, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-iae-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-iae-primary" />
                        </div>
                        <span className="font-inter text-sm text-gray-600">{spec}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setShowDetail(false)}
                    className="inline-flex items-center space-x-2 text-iae-primary font-inter text-sm font-medium hover:text-iae-primary-light transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Retour</span>
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="normal"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-sora text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {currentFiliere.nom}
                  </h3>
                  <p className="font-sora text-lg text-iae-accent italic mb-4">
                    {currentFiliere.accroche}
                  </p>
                  <p className="font-inter text-gray-600 leading-relaxed mb-6">
                    {currentFiliere.description}
                  </p>
                  <button
                    onClick={() => setShowDetail(true)}
                    className="btn-primary"
                  >
                    Voir la filière
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        {/* Indicateurs */}
        <div className="flex space-x-2">
          {filieres.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setShowDetail(false);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-iae-primary'
                  : 'w-2 bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label={`Aller à la filière ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Boutons prev/next */}
        <div className="flex space-x-2">
          <button
            onClick={goToPrev}
            className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors"
            aria-label="Filière précédente"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors"
            aria-label="Filière suivante"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Compteur */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="font-inter text-sm text-gray-600">
          <span className="font-semibold text-iae-primary">{currentIndex + 1}</span>
          <span className="mx-1">/</span>
          <span>{totalItems}</span>
        </span>
      </div>
    </div>
  );
};

export default CarouselFilieres;
