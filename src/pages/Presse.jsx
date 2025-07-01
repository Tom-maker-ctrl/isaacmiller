import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Newspaper,
  Calendar,
  ExternalLink,
  Search,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const pressArticlesData = [
  {
    id: 1,
    titleKey: "press_page.articles.sudinfo_nivelles.title",
    excerptKey: "press_page.articles.sudinfo_nivelles.excerpt",
    source: "Sudinfo",
    date: "29 Mai 2024",
    year: "2024",
    category: "Actualité",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fb2fbf3db1fd34b6c9ffb602799658806%2F3b1b1444eb504010b4f3821c70dd4857?format=webp&width=800",
    link: "https://www.sudinfo.be/id841561/article/2024-05-29/le-dealer-de-cocaine-attitre-de-nivelles-mouhamadou-21-ans-alias-moha-pour-sa",
  },
  {
    id: 2,
    titleKey: "press_page.articles.dhnet_office.title",
    excerptKey: "press_page.articles.dhnet_office.excerpt",
    source: "DHnet",
    date: "07 Mars 2024",
    year: "2024",
    category: "Justice",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://www.dhnet.be/actu/faits/2024/03/07/loffice-des-etrangers-veut-les-expulser-la-justice-les-libere-les-dossiers-etaient-incomplets-NHWSA74H6JBZBFZL433CZL2GIE/",
  },
  {
    id: 3,
    titleKey: "press_page.articles.avenir_clitophon.title",
    excerptKey: "press_page.articles.avenir_clitophon.excerpt",
    source: "L’Avenir",
    date: "27 Novembre 2024",
    year: "2024",
    category: "Cour d'Assises",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://www.lavenir.net/regions/mons-centre/la-louviere/2024/11/27/lavocat-general-demande-une-peine-de-27-ans-de-reclusion-criminelle-contre-jean-luc-clitophon-auteur-dun-meurtre-a-la-louviere-7E4QO5BRINGSLDVRJOPP22R4UQ/",
  },
  {
    id: 4,
    titleKey: "press_page.articles.dhnet_crime.title",
    excerptKey: "press_page.articles.dhnet_crime.excerpt",
    source: "DHnet",
    date: "25 Novembre 2024",
    year: "2024",
    category: "Cour d'Assises",
    image:
      "https://storage.googleapis.com/hostinger-horizons-assets-prod/a67cff5d-5256-450a-8724-54e03507ecf0/7cb061b9b55989b7c7abf2637e1f4cea.jpg",
    link: "https://www.dhnet.be/regions/centre/2024/11/25/crime-a-la-louviere-les-avocats-de-jean-luc-clitophon-contestent-lintention-dhomicide-RE6MABQFDRF2PAGVJNZX3ZTEHY/",
  },
  {
    id: 5,
    titleKey: "press_page.articles.sudinfo_enquete.title",
    excerptKey: "press_page.articles.sudinfo_enquete.excerpt",
    source: "Sudinfo",
    date: "19 Août 2024",
    year: "2024",
    category: "Justice",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://www.sudinfo.be/id870037/article/2024-08-19/enquete-baclee-la-louviere-juge-pour-des-coups-sur-une-femme-mure-place-mansart",
  },
  {
    id: 6,
    titleKey: "press_page.articles.rtl_agression.title",
    excerptKey: "press_page.articles.rtl_agression.excerpt",
    source: "RTL Info",
    date: "04 Juillet 2023",
    year: "2023",
    category: "Faits Divers",
    image:
      "https://storage.googleapis.com/hostinger-horizons-assets-prod/a67cff5d-5256-450a-8724-54e03507ecf0/d3d5c3259f9bf7438ef45b96c9a01ffa.webp",
    link: "https://www.rtl.be/actu/belgique/faits-divers/le-mandat-darret-dun-homme-suspecte-dune-agression-mortelle-ostende-prolonge/2023-07-04/article/565978",
  },
];

const Presse = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");

  const pressArticles = pressArticlesData.map((article) => ({
    ...article,
    title: t(article.titleKey),
    excerpt: t(article.excerptKey),
  }));

  const years = [
    "all",
    ...new Set(pressArticlesData.map((article) => article.year)),
  ].sort((a, b) =>
    b === "all" ? -1 : a === "all" ? 1 : parseInt(b) - parseInt(a),
  );

  const filteredArticles = pressArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === "all" || article.year === selectedYear;
    return matchesSearch && matchesYear;
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
            {t("press_page.title")}
          </h1>
        </motion.div>

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
                placeholder={t("press_page.search_placeholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-slate-400" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all bg-white"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year === "all" ? t("press_page.all_years") : year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt={article.title}
                  src={article.image}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Newspaper className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-medium text-slate-600">
                      {article.source}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-500">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{article.date}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight group-hover:text-slate-900 transition-colors">
                  {article.title}
                </h3>

                <p className="text-slate-600 mb-4 leading-relaxed text-sm flex-grow">
                  {article.excerpt}
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-auto border-slate-300 text-slate-700 hover:bg-slate-50 group-hover:border-slate-400 transition-all"
                  onClick={() => window.open(article.link, "_blank")}
                >
                  <span>{t("press_page.read_article")}</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
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
              <Newspaper className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-slate-600 mb-2">
              {t("press_page.no_articles_found_title")}
            </h3>
            <p className="text-slate-500">
              {t("press_page.no_articles_found_desc")}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Presse;
