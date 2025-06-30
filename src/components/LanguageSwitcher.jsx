import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-lg">
      <Button
        variant={i18n.language.startsWith('fr') ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => changeLanguage('fr')}
        className="text-xs font-bold w-10 h-7"
      >
        FR
      </Button>
      <Button
        variant={i18n.language.startsWith('en') ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => changeLanguage('en')}
        className="text-xs font-bold w-10 h-7"
      >
        EN
      </Button>
      <Button
        variant={i18n.language.startsWith('nl') ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => changeLanguage('nl')}
        className="text-xs font-bold w-10 h-7"
      >
        NL
      </Button>
    </div>
  );
};

export default LanguageSwitcher;