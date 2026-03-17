import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check, Upload, User, GraduationCap, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { filieres } from '../data/content';

/**
 * Page Préinscription - Formulaire multi-étapes
 * Style minimaliste professionnel
 */
const Preinscription = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    postnom: '',
    prenom: '',
    dateNaissance: '',
    lieuNaissance: '',
    sexe: '',
    nationalite: '',
    adresse: '',
    telephone: '',
    email: '',
    anneeBac: '',
    serieBac: '',
    mentionBac: '',
    etablissementBac: '',
    villeBac: '',
    filiere: '',
    anneeAcademique: '2025-2026',
    acteNaissance: null,
    attestationBac: null,
    certifieExactitude: false
  });
  const [errors, setErrors] = useState({});
  
  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
      if (!formData.postnom.trim()) newErrors.postnom = 'Le postnom est requis';
      if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est requis';
      if (!formData.dateNaissance) newErrors.dateNaissance = 'La date de naissance est requise';
      if (!formData.lieuNaissance.trim()) newErrors.lieuNaissance = 'Le lieu de naissance est requis';
      if (!formData.sexe) newErrors.sexe = 'Le sexe est requis';
      if (!formData.email.trim()) {
        newErrors.email = 'L\'email est requis';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'L\'email n\'est pas valide';
      }
    }
    
    if (step === 2) {
      if (!formData.anneeBac.trim()) newErrors.anneeBac = 'L\'année d\'obtention est requise';
      if (!formData.serieBac) newErrors.serieBac = 'La série est requise';
      if (!formData.mentionBac) newErrors.mentionBac = 'La mention est requise';
    }
    
    if (step === 3) {
      if (!formData.filiere) newErrors.filiere = 'La filière est requise';
      if (!formData.certifieExactitude) newErrors.certifieExactitude = 'Vous devez certifier l\'exactitude des informations';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const goToNextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      }
    }
  };
  
  const goToPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      setIsSubmitted(true);
    }
  };
  
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };
  
  // Progress Bar
  const ProgressBar = () => (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center flex-1 last:flex-0">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-inter font-semibold text-sm transition-colors ${
              step < currentStep 
                ? 'bg-iae-primary text-white' 
                : step === currentStep 
                  ? 'bg-iae-primary text-white' 
                  : 'bg-gray-100 text-gray-400'
            }`}>
              {step < currentStep ? <Check className="w-5 h-5" /> : step}
            </div>
            {step < 3 && (
              <div className={`flex-1 h-1 mx-4 transition-colors ${
                step < currentStep ? 'bg-iae-primary' : 'bg-gray-100'
              }`} />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-3 text-sm font-inter">
        <span className={currentStep === 1 ? 'text-iae-primary font-medium' : 'text-gray-400'}>Informations</span>
        <span className={currentStep === 2 ? 'text-iae-primary font-medium' : 'text-gray-400'}>Baccalauréat</span>
        <span className={currentStep === 3 ? 'text-iae-primary font-medium' : 'text-gray-400'}>Documents</span>
      </div>
    </div>
  );
  
  // Étape 1: Informations personnelles
  const Step1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
      className="space-y-6"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-iae-primary/10 flex items-center justify-center">
          <User className="w-5 h-5 text-iae-primary" />
        </div>
        <h2 className="font-sora text-2xl font-bold text-gray-900">
          Informations personnelles
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            className={`input-iae ${errors.nom ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Votre nom"
          />
          {errors.nom && <p className="mt-1 text-sm text-red-500">{errors.nom}</p>}
        </div>
        
        <div>
          <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
            Postnom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="postnom"
            value={formData.postnom}
            onChange={handleChange}
            className={`input-iae ${errors.postnom ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Votre postnom"
          />
          {errors.postnom && <p className="mt-1 text-sm text-red-500">{errors.postnom}</p>}
        </div>
        
        <div>
          <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
            Prénom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            className={`input-iae ${errors.prenom ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Votre prénom"
          />
          {errors.prenom && <p className="mt-1 text-sm text-red-500">{errors.prenom}</p>}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
            Date de naissance <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="dateNaissance"
            value={formData.dateNaissance}
            onChange={handleChange}
            className={`input-iae ${errors.dateNaissance ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          />
          {errors.dateNaissance && <p className="mt-1 text-sm text-red-500">{errors.dateNaissance}</p>}
        </div>
        
        <div>
          <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
            Lieu de naissance <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lieuNaissance"
            value={formData.lieuNaissance}
            onChange={handleChange}
            className={`input-iae ${errors.lieuNaissance ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Ville de naissance"
          />
          {errors.lieuNaissance && <p className="mt-1 text-sm text-red-500">{errors.lieuNaissance}</p>}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
            Sexe <span className="text-red-500">*</span>
          </label>
          <select
            name="sexe"
            value={formData.sexe}
            onChange={handleChange}
            className={`input-iae ${errors.sexe ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          >
            <option value="">Sélectionnez</option>
            <option value="masculin">Masculin</option>
            <option value="feminin">Féminin</option>
          </select>
          {errors.sexe && <p className="mt-1 text-sm text-red-500">{errors.sexe}</p>}
        </div>
        
        <div>
          <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
            Nationalité
          </label>
          <input
            type="text"
            name="nationalite"
            value={formData.nationalite}
            onChange={handleChange}
            className="input-iae"
            placeholder="Votre nationalité"
          />
        </div>
      </div>
      
      <div>
        <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
          Adresse complète
        </label>
        <textarea
          name="adresse"
          value={formData.adresse}
          onChange={handleChange}
          rows={2}
          className="input-iae resize-none"
          placeholder="Votre adresse complète"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="input-iae"
            placeholder="+242 XX XXX XXXX"
          />
        </div>
        
        <div>
          <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`input-iae ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
            placeholder="votre@email.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
      </div>
    </motion.div>
  );
  
  // Étape 2: Baccalauréat
  const Step2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
      className="space-y-6"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-iae-primary/10 flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-iae-primary" />
        </div>
        <h2 className="font-sora text-2xl font-bold text-gray-900">
          Informations sur le baccalauréat
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
            Année d'obtention <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="anneeBac"
            value={formData.anneeBac}
            onChange={handleChange}
            className={`input-iae ${errors.anneeBac ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Ex: 2024"
          />
          {errors.anneeBac && <p className="mt-1 text-sm text-red-500">{errors.anneeBac}</p>}
        </div>
        
        <div>
          <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
            Série <span className="text-red-500">*</span>
          </label>
          <select
            name="serieBac"
            value={formData.serieBac}
            onChange={handleChange}
            className={`input-iae ${errors.serieBac ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          >
            <option value="">Sélectionnez la série</option>
            <option value="scientifique">Scientifique</option>
            <option value="litteraire">Littéraire</option>
            <option value="commerciale">Commerciale</option>
            <option value="technique">Technique</option>
          </select>
          {errors.serieBac && <p className="mt-1 text-sm text-red-500">{errors.serieBac}</p>}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
            Mention <span className="text-red-500">*</span>
          </label>
          <select
            name="mentionBac"
            value={formData.mentionBac}
            onChange={handleChange}
            className={`input-iae ${errors.mentionBac ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          >
            <option value="">Sélectionnez la mention</option>
            <option value="passable">Passable</option>
            <option value="assez-bien">Assez Bien</option>
            <option value="bien">Bien</option>
            <option value="tres-bien">Très Bien</option>
          </select>
          {errors.mentionBac && <p className="mt-1 text-sm text-red-500">{errors.mentionBac}</p>}
        </div>
        
        <div>
          <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
            Établissement d'obtention
          </label>
          <input
            type="text"
            name="etablissementBac"
            value={formData.etablissementBac}
            onChange={handleChange}
            className="input-iae"
            placeholder="Nom de l'établissement"
          />
        </div>
      </div>
      
      <div>
        <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
          Ville d'obtention
        </label>
        <input
          type="text"
          name="villeBac"
          value={formData.villeBac}
          onChange={handleChange}
          className="input-iae"
          placeholder="Ville où vous avez obtenu votre bac"
        />
      </div>
    </motion.div>
  );
  
  // Étape 3: Choix de filière et documents
  const Step3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
      className="space-y-6"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-iae-primary/10 flex items-center justify-center">
          <FileText className="w-5 h-5 text-iae-primary" />
        </div>
        <h2 className="font-sora text-2xl font-bold text-gray-900">
          Choix de filière et documents
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
            Filière souhaitée <span className="text-red-500">*</span>
          </label>
          <select
            name="filiere"
            value={formData.filiere}
            onChange={handleChange}
            className={`input-iae ${errors.filiere ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          >
            <option value="">Sélectionnez une filière</option>
            {filieres.map((f) => (
              <option key={f.id} value={f.id}>{f.nom}</option>
            ))}
          </select>
          {errors.filiere && <p className="mt-1 text-sm text-red-500">{errors.filiere}</p>}
        </div>
        
        <div>
          <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
            Année académique
          </label>
          <select
            name="anneeAcademique"
            value={formData.anneeAcademique}
            onChange={handleChange}
            className="input-iae"
          >
            <option value="2025-2026">2025-2026</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
            Acte de naissance (PDF ou image, max 2Mo)
          </label>
          <div className="relative">
            <input
              type="file"
              name="acteNaissance"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleChange}
              className="hidden"
              id="acteNaissance"
            />
            <label
              htmlFor="acteNaissance"
              className="flex items-center justify-center w-full px-4 py-4 border-2 border-dashed border-gray-200 rounded-lg cursor-pointer hover:border-iae-primary hover:bg-iae-primary/5 transition-colors"
            >
              <Upload className="w-5 h-5 text-gray-400 mr-2" />
              <span className="font-inter text-sm text-gray-600">
                {formData.acteNaissance ? formData.acteNaissance.name : 'Cliquez pour télécharger'}
              </span>
            </label>
          </div>
        </div>
        
        <div>
          <label className="block font-inter text-sm font-medium text-gray-700 mb-2">
            Attestation du baccalauréat (PDF ou image, max 2Mo)
          </label>
          <div className="relative">
            <input
              type="file"
              name="attestationBac"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleChange}
              className="hidden"
              id="attestationBac"
            />
            <label
              htmlFor="attestationBac"
              className="flex items-center justify-center w-full px-4 py-4 border-2 border-dashed border-gray-200 rounded-lg cursor-pointer hover:border-iae-primary hover:bg-iae-primary/5 transition-colors"
            >
              <Upload className="w-5 h-5 text-gray-400 mr-2" />
              <span className="font-inter text-sm text-gray-600">
                {formData.attestationBac ? formData.attestationBac.name : 'Cliquez pour télécharger'}
              </span>
            </label>
          </div>
        </div>
      </div>
      
      <div className="pt-4">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            name="certifieExactitude"
            checked={formData.certifieExactitude}
            onChange={handleChange}
            className="w-5 h-5 mt-0.5 text-iae-primary border-gray-300 rounded focus:ring-iae-primary"
          />
          <span className={`font-inter text-sm ${errors.certifieExactitude ? 'text-red-500' : 'text-gray-700'}`}>
            Je certifie l'exactitude des informations fournies dans ce formulaire 
            et m'engage à fournir les documents originaux lors de mon inscription définitive.
          </span>
        </label>
        {errors.certifieExactitude && <p className="mt-1 text-sm text-red-500">{errors.certifieExactitude}</p>}
      </div>
    </motion.div>
  );
  
  // Message de confirmation
  const SuccessMessage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="text-center py-12"
    >
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-iae-primary/10 flex items-center justify-center">
        <CheckCircle2 className="w-10 h-10 text-iae-primary" />
      </div>
      <h2 className="font-sora text-3xl font-bold text-gray-900 mb-4">
        Préinscription envoyée avec succès !
      </h2>
      <p className="font-inter text-gray-600 max-w-lg mx-auto mb-8">
        Merci {formData.prenom} {formData.nom} pour votre préinscription. 
        Notre équipe étudiera votre dossier et vous contactera dans les plus brefs délais 
        à l'adresse email {formData.email}.
      </p>
      <div className="bg-iae-bg rounded-lg p-6 max-w-md mx-auto mb-8">
        <p className="font-inter text-sm text-gray-600 mb-2">
          <span className="font-semibold">Filière choisie :</span>{' '}
          {filieres.find(f => f.id === parseInt(formData.filiere))?.nom}
        </p>
        <p className="font-inter text-sm text-gray-600">
          <span className="font-semibold">Année académique :</span> {formData.anneeAcademique}
        </p>
      </div>
      <a href="/" className="btn-primary">
        Retour à l'accueil
      </a>
    </motion.div>
  );
  
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-iae-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container-iae relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="inline-block font-inter text-xs font-semibold tracking-widest uppercase text-white/60 mb-4">
              Rejoignez l'excellence
            </span>
            <h1 className="font-sora text-3xl md:text-4xl font-bold text-white mb-4">
              Préinscription en ligne
            </h1>
            <p className="font-inter text-white/70">
              Complétez ce formulaire en 3 étapes pour démarrer votre parcours à l'IAE.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Formulaire */}
      <section className="section-iae bg-iae-bg">
        <div className="container-iae max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl border border-gray-100 p-8 md:p-10"
          >
            {isSubmitted ? (
              <SuccessMessage />
            ) : (
              <>
                <ProgressBar />
                
                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {currentStep === 1 && <Step1 key="step1" />}
                    {currentStep === 2 && <Step2 key="step2" />}
                    {currentStep === 3 && <Step3 key="step3" />}
                  </AnimatePresence>
                  
                  {/* Boutons de navigation */}
                  <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={goToPrevStep}
                      disabled={currentStep === 1}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-inter text-sm font-medium transition-colors ${
                        currentStep === 1
                          ? 'text-gray-300 cursor-not-allowed'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Précédent</span>
                    </button>
                    
                    {currentStep < 3 ? (
                      <button
                        type="button"
                        onClick={goToNextStep}
                        className="btn-primary"
                      >
                        <span>Suivant</span>
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn-accent"
                      >
                        <span>Soumettre</span>
                        <Check className="w-4 h-4 ml-2" />
                      </button>
                    )}
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Preinscription;
