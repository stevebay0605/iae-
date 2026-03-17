import React from 'react';
import { motion } from 'framer-motion';

/**
 * Composant SectionHeader réutilisable
 * Style minimaliste professionnel avec polices Inter et Sora
 * 
 * @param {string} title - Titre principal
 * @param {string} subtitle - Sous-titre/label (optionnel)
 * @param {string} description - Description (optionnel)
 * @param {string} align - 'left', 'center', 'right'
 * @param {string} className - Classes CSS additionnelles
 */
const SectionHeader = ({
  title,
  subtitle,
  description,
  align = 'center',
  className = ''
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-16 ${alignClasses[align]} ${className}`}
    >
      {subtitle && (
        <span className="section-label">
          {subtitle}
        </span>
      )}
      <h2 className="section-title">
        {title}
      </h2>
      {description && (
        <p className={`section-description ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
