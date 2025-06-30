import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, User, Clock, ExternalLink, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articleCategories = [
    { id: 'all', name: 'Tous les articles' },
    { id: 'analysis', name: 'Analyses juridiques' },
    { id: 'opinion', name: 'Tribunes' },
    { id: 'research', name: 'Recherche' },
    { id: 'commentary', name: 'Commentaires' }
  ];

  const articles = [
    {
      id: 1,
      title: 'L\'évolution de la détention préventive en Belgique: enjeux et perspectives',
      category: 'analysis',
      date: '15 Mars 2024',
      readTime: '12 min',
      publication: 'Revue de Droit Pénal et de Criminologie',
      excerpt: 'Une analyse approfondie des réformes récentes en matière de détention préventive et de leurs implications pratiques pour les praticiens du droit pénal.',
      image: 'Legal documents about preventive detention on desk',
      tags: ['Détention préventive', 'Réforme', 'Droit pénal']
    },
    {
      id: 2,
      title: 'Les droits de la défense à l\'ère numérique',
      category: 'opinion',
      date: '8 Mars 2024',
      readTime: '8 min',
      publication: 'Journal des Tribunaux',
      excerpt: 'Réflexion sur l\'adaptation nécessaire des droits de la défense face aux défis posés par la digitalisation de la justice.',
      image: 'Digital justice concept with scales and technology',
      tags: ['Droits de la défense', 'Numérique', 'Innovation']
    },
    {
      id: 3,
      title: 'Analyse comparative des systèmes pénaux européens',
      category: 'research',
      date: '1 Mars 2024',
      readTime: '20 min',
      publication: 'Revue Internationale de Droit Comparé',
      excerpt: 'Étude comparative des différents systèmes de justice pénale en Europe et de leurs approches respectives de la réhabilitation.',
      image: 'European legal systems comparison charts',
      tags: ['Droit comparé', 'Europe', 'Systèmes pénaux']
    },
    {
      id: 4,
      title: 'La présomption d\'innocence en question',
      category: 'commentary',
      date: '22 Février 2024',
      readTime: '10 min',
      publication: 'La Libre Belgique',
      excerpt: 'Commentaire sur les défis contemporains de la présomption d\'innocence dans le contexte médiatique actuel.',
      image: 'Scales of justice representing presumption of innocence',
      tags: ['Présomption d\'innocence', 'Médias', 'Justice']
    },
    {
      id: 5,
      title: 'Réforme du code pénal: impacts sur la pratique',
      category: 'analysis',
      date: '15 Février 2024',
      readTime: '15 min',
      publication: 'Actualités du Droit',
      excerpt: 'Analyse détaillée des modifications apportées par la récente réforme du code pénal et de leurs conséquences pratiques.',
      image: 'New criminal code books and legal documents',
      tags: ['Code pénal', 'Réforme', 'Pratique juridique']
    },
    {
      id: 6,
      title: 'L\'avocat pénaliste face aux nouveaux défis',
      category: 'opinion',
      date: '8 Février 2024',
      readTime: '12 min',
      publication: 'Barreau Magazine',
      excerpt: 'Tribune sur l\'évolution du métier d\'avocat pénaliste et les compétences nécessaires pour répondre aux défis contemporains.',
      image: 'Modern criminal lawyer in contemporary legal environment',
      tags: ['Profession d\'avocat', 'Évolution', 'Compétences']
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Publications & Articles
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez les analyses juridiques, tribunes et recherches publiées par Isaac Miller 
            dans les revues spécialisées et médias.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher dans les articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {articleCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-slate-800 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group"
            >
              <div className="relative h-48 overflow-hidden">
                <img  
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt={article.title}
                 src="https://images.unsplash.com/photo-1548778052-311f4bc2b502" />
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-800 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {articleCategories.find(cat => cat.id === article.category)?.name.replace('Tous les articles', article.category)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-medium text-slate-600">{article.publication}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-500">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{article.date}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight group-hover:text-slate-900 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-slate-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{article.readTime}</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 group-hover:border-slate-400 transition-all"
                  >
                    <span>Lire l'article</span>
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-slate-400 mb-4">
              <FileText className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-slate-600 mb-2">
              Aucun article trouvé
            </h3>
            <p className="text-slate-500">
              Essayez de modifier vos critères de recherche.
            </p>
          </motion.div>
        )}

        {/* Featured Article Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-slate-800 to-slate-600 rounded-2xl p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Article à la une
              </h2>
              <h3 className="text-xl font-semibold text-slate-200 mb-4">
                L'évolution de la détention préventive en Belgique
              </h3>
              <p className="text-slate-200 mb-6 leading-relaxed">
                Découvrez l'analyse complète d'Isaac Miller sur les réformes récentes 
                en matière de détention préventive et leurs implications pratiques.
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-slate-800 hover:bg-slate-100">
                <FileText className="mr-2 h-5 w-5" />
                Lire l'article complet
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-2xl">
                <div className="flex items-center mb-4">
                  <User className="h-5 w-5 text-slate-600 mr-2" />
                  <span className="text-slate-600 font-medium">Isaac Miller</span>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-3">
                  L'évolution de la détention préventive en Belgique
                </h4>
                <p className="text-slate-600 text-sm mb-4">
                  Une analyse approfondie des réformes récentes en matière de détention préventive...
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Revue de Droit Pénal</span>
                  <span>12 min de lecture</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-slate-800 mb-2">50+</div>
            <div className="text-slate-600">Articles publiés</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-slate-800 mb-2">15+</div>
            <div className="text-slate-600">Revues partenaires</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-slate-800 mb-2">25K+</div>
            <div className="text-slate-600">Lecteurs touchés</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-slate-800 mb-2">10+</div>
            <div className="text-slate-600">Années de publication</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;