import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Share2, Heart, Eye, Camera } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const photoGalleryData = [
  {
    id: 1,
    src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/a67cff5d-5256-450a-8724-54e03507ecf0/ac13ee31d9da67a4fb5f396a63f397cb.png',
    titleKey: 'photos_page.gallery.portrait_robe.title',
    category: 'Portraits',
    views: 1500,
    likes: 60
  },
  {
    id: 2,
    src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/a67cff5d-5256-450a-8724-54e03507ecf0/de00be08a4870e85661c75840ffb45a5.png',
    titleKey: 'photos_page.gallery.audience.title',
    category: 'Tribunaux',
    views: 1800,
    likes: 75
  }
];

const Photos = () => {
  const { t } = useTranslation();
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [likedPhotos, setLikedPhotos] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState('Tous');

  const photoGallery = photoGalleryData.map(photo => ({
    ...photo,
    title: t(photo.titleKey)
  }));

  const categories = [
    { value: 'Tous', label: t('photos_page.categories.all') },
    { value: 'Portraits', label: t('photos_page.categories.portraits') },
    { value: 'Tribunaux', label: t('photos_page.categories.courts') }
  ];

  const filteredPhotos = activeCategory === 'Tous' 
    ? photoGallery 
    : photoGallery.filter(photo => photo.category === activeCategory);

  const toggleLike = (photoId) => {
    const newLikedPhotos = new Set(likedPhotos);
    if (newLikedPhotos.has(photoId)) {
      newLikedPhotos.delete(photoId);
    } else {
      newLikedPhotos.add(photoId);
    }
    setLikedPhotos(newLikedPhotos);
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            {t('photos_page.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('photos_page.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.value
                  ? 'bg-slate-800 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100 shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" 
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                  <img  
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={photo.title}
                    src={photo.src} />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={() => toggleLike(photo.id)}
                      className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                        likedPhotos.has(photo.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedPhotos.has(photo.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      onClick={() => openModal(photo)}
                      className="w-full bg-white/90 backdrop-blur-sm text-slate-800 py-2 px-4 rounded-lg font-medium hover:bg-white transition-colors duration-300"
                    >
                      {t('photos_page.view_large')}
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {categories.find(c => c.value === photo.category)?.label}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 line-clamp-2">
                    {photo.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{photo.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{photo.likes + (likedPhotos.has(photo.id) ? 1 : 0)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPhotos.length === 0 && activeCategory !== 'Tous' && (
           <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-slate-400 mb-4">
              <Camera className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-slate-600 mb-2">
              {t('photos_page.no_photos_title')}
            </h3>
            <p className="text-slate-500">
              {t('photos_page.no_photos_desc')}
            </p>
          </motion.div>
        )}

        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-300"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="relative">
                  <img  
                    className="w-full h-auto max-h-[70vh] object-contain"
                    alt={selectedPhoto.title}
                    src={selectedPhoto.src} />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        {selectedPhoto.title}
                      </h3>
                      <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        {categories.find(c => c.value === selectedPhoto.category)?.label}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <button className="p-3 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors duration-300">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors duration-300">
                        <Share2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => toggleLike(selectedPhoto.id)}
                        className={`p-3 rounded-full transition-colors duration-300 ${
                          likedPhotos.has(selectedPhoto.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${likedPhotos.has(selectedPhoto.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{t('photos_page.modal.views', { count: selectedPhoto.views })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{t('photos_page.modal.likes', { count: selectedPhoto.likes + (likedPhotos.has(selectedPhoto.id) ? 1 : 0) })}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Photos;