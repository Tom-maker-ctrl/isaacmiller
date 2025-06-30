import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scale, Shield, Users, Award, ArrowRight, Calendar, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const expertiseAreasData = [
  {
    titleKey: 'home.expertise.correctional_title',
    descriptionKey: 'home.expertise.correctional_desc',
    icon: Scale,
    link: '/domaine/tribunal-correctionnel'
  },
  {
    titleKey: 'home.expertise.police_title',
    descriptionKey: 'home.expertise.police_desc',
    icon: Shield,
    link: '/domaine/tribunal-police'
  }
];

const pressReviewsData = [
  {
    titleKey: 'home.press.articles.sudinfo_nivelles.title',
    excerptKey: 'home.press.articles.sudinfo_nivelles.excerpt',
    source: 'Sudinfo',
    date: '29 Mai 2024',
    link: 'https://www.sudinfo.be/id841561/article/2024-05-29/le-dealer-de-cocaine-attitre-de-nivelles-mouhamadou-21-ans-alias-moha-pour-sa'
  },
  {
    titleKey: 'home.press.articles.dhnet_office.title',
    excerptKey: 'home.press.articles.dhnet_office.excerpt',
    source: 'DHnet',
    date: '07 Mars 2024',
    link: 'https://www.dhnet.be/actu/faits/2024/03/07/loffice-des-etrangers-veut-les-expulser-la-justice-les-libere-les-dossiers-etaient-incomplets-NHWSA74H6JBZBFZL433CZL2GIE/'
  },
  {
    titleKey: 'home.press.articles.avenir_clitophon.title',
    excerptKey: 'home.press.articles.avenir_clitophon.excerpt',
    source: 'L’Avenir',
    date: '27 Novembre 2024',
    link: 'https://www.lavenir.net/regions/mons-centre/la-louviere/2024/11/27/lavocat-general-demande-une-peine-de-27-ans-de-reclusion-criminelle-contre-jean-luc-clitophon-auteur-dun-meurtre-a-la-louviere-7E4QO5BRINGSLDVRJOPP22R4UQ/'
  }
];

const whyChooseFeaturesData = [
  {
    icon: Shield,
    titleKey: 'home.why_us.feature1_title',
    descriptionKey: 'home.why_us.feature1_desc'
  },
  {
    icon: Users,
    titleKey: 'home.why_us.feature2_title',
    descriptionKey: 'home.why_us.feature2_desc'
  },
  {
    icon: Award,
    titleKey: 'home.why_us.feature3_title',
    descriptionKey: 'home.why_us.feature3_desc'
  }
];

const Home = () => {
  const { t } = useTranslation();

  const expertiseAreas = expertiseAreasData.map(area => ({
    ...area,
    title: t(area.titleKey),
    description: t(area.descriptionKey)
  }));

  const whyChooseFeatures = whyChooseFeaturesData.map(feature => ({
    ...feature,
    title: t(feature.titleKey),
    description: t(feature.descriptionKey)
  }));

  const pressReviews = pressReviewsData.map(review => ({
    ...review,
    title: t(review.titleKey),
    excerpt: t(review.excerptKey)
  }));

  const newLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/a67cff5d-5256-450a-8724-54e03507ecf0/00ea6419077a4ca9eca48ee0986716f3.png";

  return (
    <div className="min-h-screen">
      <section className="hero-gradient py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img src={newLogoUrl} alt="Logo Isaac Miller" className="h-16 w-16 lg:h-20 lg:w-20 object-contain rounded-full" />
                  <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                    {t('header.title')}
                    <span className="block text-3xl lg:text-4xl text-slate-600 font-medium mt-2">
                      {t('home.hero.subtitle')}
                    </span>
                  </h1>
                </div>
                <p className="text-xl text-slate-600 max-w-lg">
                  {t('home.hero.intro')}
                </p>
                <p className="text-2xl text-slate-700 font-semibold italic mt-4">
                  {t('home.hero.slogan')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/reservation">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-slate-800 to-slate-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <Calendar className="mr-2 h-5 w-5" />
                    {t('home.hero.appointment_button')}
                  </Button>
                </Link>
                <a href="tel:0471609463">
                  <Button variant="default" size="lg" className="w-full sm:w-auto bg-slate-700 hover:bg-slate-800 text-white">
                    <Phone className="mr-2 h-5 w-5" />
                    {t('home.hero.emergency_button')}
                  </Button>
                </a>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">3+</div>
                  <div className="text-sm text-slate-600">{t('home.stats.experience')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">500+</div>
                  <div className="text-sm text-slate-600">{t('home.stats.cases')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">95%</div>
                  <div className="text-sm text-slate-600">{t('home.stats.satisfaction')}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img  
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                  alt="Isaac Miller, avocat pénaliste professionnel en costume dans son bureau"
                 src="https://images.unsplash.com/photo-1485348616965-15c926318fbb" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              {t('home.expertise.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('home.expertise.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={area.link}>
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 card-hover group-hover:border-slate-300 transition-all duration-300">
                    <div className="flex items-start space-x-6">
                      <div className="p-4 bg-gradient-to-br from-slate-800 to-slate-600 rounded-xl group-hover:shadow-lg transition-all duration-300">
                        <area.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                          {area.title}
                        </h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                          {area.description}
                        </p>
                        <div className="flex items-center text-slate-700 group-hover:text-slate-800 transition-colors">
                          <span className="font-medium">{t('home.expertise.book_now')}</span>
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/domaine">
              <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                {t('home.expertise.see_all_button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              {t('home.why_us.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('home.why_us.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg card-hover"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-slate-800 to-slate-600 rounded-xl mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              {t('home.press.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pressReviews.map((review, index) => (
              <motion.article
                key={review.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-2xl border border-slate-200 card-hover"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-800">{review.source}</span>
                    <span className="text-sm text-slate-500">{review.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight">
                    {review.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {review.excerpt}
                </p>
                <a href={review.link} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-700 hover:text-slate-900 font-medium mt-2 inline-block">
                  {t('home.press.read_article')} <ArrowRight className="inline h-4 w-4" />
                </a>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/medias/presse">
              <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                {t('home.press.see_all_button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t('home.consultation.title')}
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              {t('home.consultation.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservation">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-slate-800 hover:bg-slate-100 transform hover:scale-105 transition-all duration-300">
                  <Calendar className="mr-2 h-5 w-5" />
                  {t('home.consultation.appointment_button')}
                </Button>
              </Link>
              <a href="tel:0471609463">
                <Button size="lg" variant="default" className="w-full sm:w-auto bg-slate-700 hover:bg-slate-800 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  {t('home.consultation.emergency_button')}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;