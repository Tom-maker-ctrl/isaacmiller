import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Video, Play, Calendar, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RtlVideoEmbed from '@/components/RtlVideoEmbed';
import { useTranslation } from 'react-i18next';

const videosDataRaw = [
  {
    id: 1,
    titleKey: 'videos_page.videos.marcinelle.title',
    descriptionKey: 'videos_page.videos.marcinelle.description',
    category: 'interviews',
    duration: '02:17',
    date: '04 Juillet 2024',
    source: 'RTL Info',
    thumbnail: 'Courtroom sketch or news report graphic',
    views: 'N/A',
    link: 'https://www.rtl.be/actu/belgique/justice/enfant-sequestre-marcinelle-le-proces-des-parents-commence-au-tribunal/2024-07-04/article/687230',
    embedType: 'rtl',
    videoId: '886925'
  }
];

const Videos = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const videoCategories = [
    { id: 'all', name: t('videos_page.categories.all') },
    { id: 'interviews', name: t('videos_page.categories.interviews') }
  ];

  const videosData = videosDataRaw.map(video => ({
    ...video,
    title: t(video.titleKey),
    description: t(video.descriptionKey)
  }));

  const filteredVideos = selectedCategory === 'all' 
    ? videosData 
    : videosData.filter(video => video.category === selectedCategory);

  const featuredVideo = videosData.length > 0 ? videosData[0] : null;

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
            {t('videos_page.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('videos_page.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {videoCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-slate-800 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group"
            >
              <div className="relative h-48 overflow-hidden">
                {video.embedType === 'rtl' ? (
                  <RtlVideoEmbed videoId={video.videoId} className="w-full h-full" />
                ) : (
                  <a href={video.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <img  
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt={video.thumbnail} 
                      src="https://images.unsplash.com/photo-1567443024551-f3e3cc2be870" />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
                      <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-slate-800 ml-1" />
                      </div>
                    </div>
                  </a>
                )}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium">
                  {video.duration}
                </div>
                <div className="absolute top-2 left-2">
                  <span className="bg-slate-800 text-white px-3 py-1 rounded-full text-xs font-medium capitalize">
                    {videoCategories.find(cat => cat.id === video.category)?.name}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Video className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-medium text-slate-600">{video.source}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-500">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{video.date}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight group-hover:text-slate-900 transition-colors">
                  {video.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{video.duration}</span>
                    </div>
                    <span>{t('videos_page.views', { count: video.views })}</span>
                  </div>
                  
                  {video.embedType !== 'rtl' && (
                    <a href={video.link} target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-slate-300 text-slate-700 hover:bg-slate-50 group-hover:border-slate-400 transition-all"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t('videos_page.view')}
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-slate-400 mb-4">
              <Video className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-slate-600 mb-2">
              {t('videos_page.no_videos_title')}
            </h3>
            <p className="text-slate-500">
              {t('videos_page.no_videos_desc')}
            </p>
          </motion.div>
        )}

        {featuredVideo && (
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
                  {t('videos_page.featured_video_title')}
                </h2>
                <h3 className="text-xl font-semibold text-slate-200 mb-4">
                  {featuredVideo.title}
                </h3>
                <p className="text-slate-200 mb-6 leading-relaxed">
                  {featuredVideo.description}
                </p>
                {featuredVideo.embedType === 'rtl' ? (
                   <Button variant="secondary" size="lg" className="bg-white text-slate-800 hover:bg-slate-100" onClick={() => {
                     const videoElement = document.getElementById(`video-${featuredVideo.id}`);
                     if(videoElement) videoElement.scrollIntoView({ behavior: 'smooth' });
                   }}>
                    <Play className="mr-2 h-5 w-5" />
                    {t('videos_page.watch_video')}
                  </Button>
                ) : (
                  <a href={featuredVideo.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="lg" className="bg-white text-slate-800 hover:bg-slate-100">
                      <Play className="mr-2 h-5 w-5" />
                      {t('videos_page.watch_now')}
                    </Button>
                  </a>
                )}
              </div>
              
              <div className="relative">
                 {featuredVideo.embedType === 'rtl' ? (
                  <RtlVideoEmbed videoId={featuredVideo.videoId} className="w-full h-64 rounded-xl overflow-hidden" />
                ) : (
                  <a href={featuredVideo.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative h-64 rounded-xl overflow-hidden">
                      <img  
                        className="w-full h-full object-cover"
                        alt={featuredVideo.thumbnail}
                        src="https://images.unsplash.com/photo-1544531586-fde5298cdd40" />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div className="bg-white bg-opacity-90 rounded-full p-6">
                          <Play className="h-12 w-12 text-slate-800 ml-1" />
                        </div>
                      </div>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Videos;