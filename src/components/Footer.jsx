import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { coordonnees, footerLinks } from '../data/content';

/**
 * Footer - Pied de page de l'IAE
 * Style épuré et professionnel avec polices Inter et Sora
 */
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Section principale */}
      <div className="container-iae py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Colonne 1 : Logo et description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-sora text-3xl font-bold text-iae-primary">
                I.A.E
              </span>
            </Link>
            <p className="font-inter text-gray-500 text-sm leading-relaxed mb-6">
              L'Institut Africain de l'Excellence forme les leaders de demain 
              à travers une éducation de qualité, innovante et ancrée dans les 
              valeurs africaines.
            </p>
            <p className="font-sora text-lg italic text-iae-accent mb-6">
              « Rigueur · Travail · Excellence »
            </p>
            {/* Réseaux sociaux */}
            <div className="flex space-x-3">
              <a
                href={coordonnees.reseaux.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-iae-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={coordonnees.reseaux.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-iae-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={coordonnees.reseaux.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-iae-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={coordonnees.reseaux.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-iae-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Colonne 2 : Navigation */}
          <div>
            <h3 className="font-inter text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-inter text-gray-500 hover:text-iae-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Colonne 3 : Candidats */}
          <div>
            <h3 className="font-inter text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Candidats
            </h3>
            <ul className="space-y-3">
              {footerLinks.candidats.map((link) => (
                <li key={link.label}>
                  {link.path.startsWith('/') ? (
                    <Link
                      to={link.path}
                      className="font-inter text-gray-500 hover:text-iae-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.path}
                      className="font-inter text-gray-500 hover:text-iae-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Colonne 4 : Contact */}
          <div>
            <h3 className="font-inter text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-iae-primary flex-shrink-0 mt-0.5" />
                <span className="font-inter text-gray-500 text-sm">
                  {coordonnees.adresse}<br />
                  {coordonnees.ville}, {coordonnees.pays}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-iae-primary flex-shrink-0" />
                <a
                  href={`tel:${coordonnees.telephone}`}
                  className="font-inter text-gray-500 hover:text-iae-primary transition-colors text-sm"
                >
                  {coordonnees.telephone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-iae-primary flex-shrink-0" />
                <a
                  href={`mailto:${coordonnees.email}`}
                  className="font-inter text-gray-500 hover:text-iae-primary transition-colors text-sm"
                >
                  {coordonnees.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Barre de copyright */}
      <div className="border-t border-gray-100">
        <div className="container-iae py-6">
          <p className="font-inter text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Institut Africain de l'Excellence (I.A.E). 
            Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
