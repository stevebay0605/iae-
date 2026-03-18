import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Composant Button réutilisable pour l'IAE
 * Style minimaliste professionnel avec polices Outfit et Cormorant
 * 
 * @param {string} variant - 'primary', 'secondary', 'accent', 'outline', 'ghost'
 * @param {string} size - 'sm', 'md', 'lg'
 * @param {string} to - Lien interne (utilise Link)
 * @param {string} href - Lien externe (utilise a)
 * @param {function} onClick - Handler de clic
 * @param {boolean} disabled - État désactivé
 * @param {ReactNode} children - Contenu du bouton
 * @param {string} className - Classes CSS additionnelles
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  disabled = false,
  children,
  className = '',
  type = 'button',
  ...props
}) => {
  // Styles de base
  const baseStyles = 'inline-flex items-center justify-center font-outfit font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';
  
  // Variantes de couleur
  const variants = {
    primary: 'bg-iae-primary text-white hover:bg-iae-primary-light focus:ring-iae-primary',
    secondary: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 focus:ring-gray-400',
    accent: 'bg-iae-accent text-white hover:bg-iae-accent-light focus:ring-iae-accent',
    outline: 'bg-transparent text-iae-primary border border-iae-primary hover:bg-iae-primary hover:text-white focus:ring-iae-primary',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-400',
    'ghost-primary': 'bg-transparent text-iae-primary hover:bg-iae-primary/10 focus:ring-iae-primary',
  };
  
  // Tailles
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  };
  
  // Combinaison des classes
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  // Rendu selon le type de lien
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
