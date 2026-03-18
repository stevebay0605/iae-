import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { coordonnees, footerLinks } from '../data/content';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container-iae py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-cormorant text-3xl font-bold text-iae-primary">I.A.E</span>
            </Link>
            <p className="font-outfit text-gray-500 text-sm leading-relaxed mb-6">
              L'Institut Africain de l'Excellence forme les leaders de demain
              a travers une education de qualite, innovante et ancree dans les
              valeurs africaines.
            </p>
            <p className="font-cormorant text-lg italic text-iae-accent mb-6">
              " Rigueur · Travail · Excellence "
            </p>
            <div className="flex space-x-3">
              <a href={coordonnees.reseaux.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-iae-primary hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={coordonnees.reseaux.twitter} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-iae-primary hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={coordonnees.reseaux.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-iae-primary hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={coordonnees.reseaux.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-iae-primary hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-outfit text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="font-outfit text-gray-500 hover:text-iae-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-outfit text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Candidats</h3>
            <ul className="space-y-3">
              {footerLinks.candidats.map((link) => (
                <li key={link.label}>
                  {link.path.startsWith('/') ? (
                    <Link to={link.path} className="font-outfit text-gray-500 hover:text-iae-primary transition-colors text-sm">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.path} className="font-outfit text-gray-500 hover:text-iae-primary transition-colors text-sm">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-outfit text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-iae-primary flex-shrink-0 mt-0.5" />
                <span className="font-outfit text-gray-500 text-sm">
                  {coordonnees.adresse}<br />
                  {coordonnees.ville}, {coordonnees.pays}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-iae-primary flex-shrink-0" />
                <a href={`tel:${coordonnees.telephone}`} className="font-outfit text-gray-500 hover:text-iae-primary transition-colors text-sm">
                  {coordonnees.telephone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-iae-primary flex-shrink-0" />
                <a href={`mailto:${coordonnees.email}`} className="font-outfit text-gray-500 hover:text-iae-primary transition-colors text-sm">
                  {coordonnees.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="container-iae py-6">
          <p className="font-outfit text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Institut Africain de l'Excellence (I.A.E).
            Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;