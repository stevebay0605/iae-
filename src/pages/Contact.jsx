import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';
import { coordonnees } from '../data/content';
import SectionHeader from '../components/ui/SectionHeader';

/**
 * Page Contact - Formulaire et coordonnées
 * Style minimaliste avec images
 */
const Contact = () => {
  return (
    <main className="pt-20">
      {/* Hero Section avec image */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1427504740708-99243b9c7e5e?w=1920&h=800&fit=crop"
            alt="Contact IAE"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://placehold.co/1920x800/064E3B/FFFFFF?text=Contact';
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
              Restons en lien
            </span>
            <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contactez-nous
            </h1>
            <p className="font-inter text-lg text-white/80 leading-relaxed">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans votre projet d'études.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Section Contact */}
      <section className="section-iae bg-white">
        <div className="container-iae">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Coordonnées */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <h2 className="font-sora text-2xl font-bold text-gray-900 mb-8">
                Nos coordonnées
              </h2>
              
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
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-iae-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-iae-primary" />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-gray-900 mb-1">Horaires</h4>
                    <div className="font-inter text-gray-600 text-sm space-y-1">
                      <p>{coordonnees.horaires.semaine}</p>
                      <p>{coordonnees.horaires.samedi}</p>
                      <p>{coordonnees.horaires.dimanche}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Réseaux sociaux */}
              <div className="mt-10">
                <h3 className="font-inter font-semibold text-gray-900 mb-4">Suivez-nous</h3>
                <div className="flex space-x-3">
                  <a
                    href={coordonnees.reseaux.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-iae-primary hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={coordonnees.reseaux.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-iae-primary hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={coordonnees.reseaux.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-iae-primary hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={coordonnees.reseaux.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-iae-primary hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-iae-bg rounded-xl p-8">
                <h2 className="font-sora text-2xl font-bold text-gray-900 mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="font-inter text-gray-600 text-sm mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
                        Nom
                      </label>
                      <input
                        type="text"
                        className="input-iae"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
                        Prénom
                      </label>
                      <input
                        type="text"
                        className="input-iae"
                        placeholder="Votre prénom"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="input-iae"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        className="input-iae"
                        placeholder="+242 XX XXX XXXX"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      className="input-iae"
                      placeholder="Objet de votre message"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="input-iae resize-none"
                      placeholder="Votre message..."
                    />
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer le message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Section Carte */}
      <section className="py-16 bg-iae-bg border-t border-gray-100">
        <div className="container-iae">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden border border-gray-100"
          >
            <div className="h-80 bg-iae-primary flex items-center justify-center">
              <div className="text-center text-white p-8">
                <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h3 className="font-sora text-3xl font-bold mb-2">Institut Africain de l'Excellence</h3>
                <p className="font-inter text-white/80">
                  {coordonnees.adresse}<br />
                  {coordonnees.ville}, {coordonnees.pays}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
