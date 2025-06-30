import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const Reservation = () => {
  const { t } = useTranslation();
  const googleCalendarUrl = "https://calendar.app.google/CnogsDb9yp3y33Xq9";

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-slate-800 to-slate-600 rounded-2xl mb-6">
            <Calendar className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            {t('booking.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('booking.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <iframe
            src={googleCalendarUrl}
            style={{ border: 0 }}
            width="100%"
            height="700"
            frameBorder="0"
            scrolling="yes"
            title="Agenda de réservation Isaac Miller"
          ></iframe>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center text-slate-600"
        >
          <p>
            {t('booking.contact_info')}
            <br />
            <Trans i18nKey="booking.contact_info2">
              N'hésitez pas à nous contacter directement par téléphone au <a href="tel:0471609463" className="text-slate-800 font-medium hover:underline">0471 60 94 63</a> 
              {' '}ou par email à <a href="mailto:isaac.miller@avocat.be" className="text-slate-800 font-medium hover:underline">isaac.miller@avocat.be</a>.
            </Trans>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Reservation;