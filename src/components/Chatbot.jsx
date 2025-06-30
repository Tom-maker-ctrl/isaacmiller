import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; 

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Bonjour ! Comment puis-je vous aider aujourd'hui ? Posez-moi une question sur les services d'Isaac Miller." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const contactInfo = "Vous pouvez contacter Maître Isaac Miller :\n📞 Par téléphone : 0471 60 94 63\n✉️ Par email : isaac.miller@avocat.be";
  const servicesProvided = "Maître Miller est spécialisé en droit pénal. Cela inclut la défense pénale générale, la contestation d’amendes, les infractions routières, la détention préventive, les affaires devant la Cour d'Assises, le Tribunal de Police et le Tribunal Correctionnel.";
  const servicesNotProvided = "Maître Miller ne prend pas en charge les affaires relevant du droit immobilier, du droit fiscal, du droit de la famille (divorces, etc.), ou du droit social (contrats de travail, etc.). Pour ces matières, il est préférable de consulter un avocat spécialisé dans ces domaines.";
  const defaultFallback = "Je ne suis pas sûr de comprendre votre demande. Pourriez-vous reformuler ou me demander les informations de contact si c'est ce que vous cherchez ?";

  const faqData = {
    "contact": contactInfo,
    "téléphone": contactInfo,
    "email": contactInfo,
    "services": servicesProvided,
    "domaines d'expertise": servicesProvided,
    "défense pénale": servicesProvided,
    "contestation amende": servicesProvided,
    "infraction routière": servicesProvided,
    "prendre rendez-vous": "Vous pouvez prendre rendez-vous directement via la page 'Réservation' de ce site, ou en me contactant par téléphone au 0471 60 94 63.",
    "honoraires": "Les honoraires sont discutés lors de la première consultation. Ils dépendent de la complexité de l'affaire. N'hésitez pas à prendre un premier rendez-vous pour une évaluation.",
    "urgence": "Oui, Maître Miller est disponible pour les urgences. Vous pouvez le contacter au 0471 60 94 63.",
    "cabinet": "Le cabinet principal est en Belgique. Pour des raisons de confidentialité et de sécurité, l'adresse exacte est communiquée lors de la prise de rendez-vous.",
    "suivi dossier": "Pour le suivi de votre dossier, il est préférable de contacter directement Maître Miller par email ou téléphone. Il vous tiendra informé personnellement de chaque étape importante.",
    "aide juridique": "Les conditions d'acceptation de l'aide juridique sont évaluées au cas par cas. Veuillez contacter Maître Miller pour discuter de votre situation.",
    "durée procédure": "La durée d'une procédure pénale varie considérablement en fonction de sa complexité. Une estimation plus précise peut être donnée après analyse de votre dossier.",
    "droit immobilier": servicesNotProvided,
    "droit fiscal": servicesNotProvided,
    "droit de la famille": servicesNotProvided,
    "droit social": servicesNotProvided,
    "divorce": servicesNotProvided,
    "licenciement": servicesNotProvided,
  };
  
  const quickQuestions = [
    "Quels sont vos services ?",
    "Comment vous contacter ?",
    "Prenez-vous en charge le droit immobilier ?"
  ];


  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = { sender: 'user', text: inputValue };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    let botResponseText = defaultFallback;
    const lowerInputValue = inputValue.toLowerCase();

    // Check for keywords
    if (lowerInputValue.includes("contact") || lowerInputValue.includes("téléphone") || lowerInputValue.includes("email") || lowerInputValue.includes("appeler")) {
        botResponseText = contactInfo;
    } else if (lowerInputValue.includes("service") || lowerInputValue.includes("domaine") || lowerInputValue.includes("expertise") || lowerInputValue.includes("type d'affaire")) {
        botResponseText = servicesProvided;
    } else if (lowerInputValue.includes("immobilier") || lowerInputValue.includes("fiscal") || lowerInputValue.includes("famille") || lowerInputValue.includes("social") || lowerInputValue.includes("divorce")) {
        botResponseText = servicesNotProvided;
    } else {
        // Check FAQ data for more specific matches
        const faqKeys = Object.keys(faqData);
        for (const key of faqKeys) {
          // Check if multiple words from the key are present in the input
          const keyWords = key.toLowerCase().split(" ");
          const matchCount = keyWords.filter(word => lowerInputValue.includes(word)).length;
          
          if (matchCount >= Math.min(2, keyWords.length) && keyWords.length > 1 ) { // Match if at least 2 words or the full key (if short)
             botResponseText = faqData[key];
             break;
          } else if (keyWords.length === 1 && lowerInputValue.includes(keyWords[0])) { // Single word keys
             botResponseText = faqData[key];
             break;
          }
        }
    }
    
    const botMessage = { sender: 'bot', text: botResponseText };
    
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 500);

    setInputValue('');
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question); // Keep input field in sync
    const userMessage = { sender: 'user', text: question };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    let botResponseText = defaultFallback;
    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes("contact") || lowerQuestion.includes("téléphone") || lowerQuestion.includes("email")) {
        botResponseText = contactInfo;
    } else if (lowerQuestion.includes("service") || lowerQuestion.includes("domaine") || lowerQuestion.includes("expertise")) {
        botResponseText = servicesProvided;
    } else if (lowerQuestion.includes("immobilier") || lowerQuestion.includes("fiscal") || lowerQuestion.includes("famille")) {
        botResponseText = servicesNotProvided;
    } else {
        const faqKeys = Object.keys(faqData);
        for (const key of faqKeys) {
          if (lowerQuestion.includes(key.toLowerCase().substring(0,15)) || key.toLowerCase().includes(lowerQuestion.substring(0,15))) { 
            botResponseText = faqData[key];
            break;
          }
        }
    }

    const botMessage = { sender: 'bot', text: botResponseText };

    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 500);
    setInputValue(''); // Clear input after sending
  };


  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      >
        <Button
          size="lg"
          className="p-4 rounded-full bg-gradient-to-r from-slate-800 to-slate-600 text-white shadow-xl hover:scale-110 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir le chatbot"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="fixed bottom-24 right-6 z-40 w-[360px] h-[500px] bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden chatbot-container"
          >
            <header className="p-4 bg-slate-800 text-white flex items-center justify-between">
              <h3 className="text-lg font-semibold">Assistant Virtuel</h3>
              <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">
                <X size={20} />
              </button>
            </header>

            <div className="flex-grow p-4 overflow-y-auto space-y-4 chatbot-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-end space-x-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                  {msg.sender === 'bot' && (
                    <div className="p-2 bg-slate-200 rounded-full">
                      <Bot size={18} className="text-slate-600" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] p-3 rounded-xl ${
                      msg.sender === 'user'
                        ? 'bg-slate-600 text-white rounded-br-none'
                        : 'bg-slate-100 text-slate-800 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{msg.text}</p>
                  </div>
                  {msg.sender === 'user' && (
                     <div className="p-2 bg-slate-600 rounded-full">
                      <User size={18} className="text-white" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {messages.length <= 1 && (
               <div className="p-4 border-t border-slate-200">
                <p className="text-xs text-slate-500 mb-2">Ou essayez une question rapide :</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map(q => (
                    <Button key={q} variant="outline" size="sm" className="text-xs" onClick={() => handleQuickQuestion(q)}>
                      {q}
                    </Button>
                  ))}
                </div>
              </div>
            )}


            <footer className="p-4 border-t border-slate-200 bg-slate-50">
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Tapez votre message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-grow focus:ring-slate-500"
                />
                <Button onClick={handleSendMessage} className="bg-slate-700 hover:bg-slate-800">
                  <Send size={18} />
                </Button>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;