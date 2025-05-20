import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../locales/en/translation.json";
import hi from "../locales/hi/translation.json";
import gu from "../locales/gu/translation.json";

const translations = { en, hi, gu };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lng) => {
    setLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved && translations[saved]) setLanguage(saved);
  }, []);

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
