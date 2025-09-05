# 🔗 LinkedIn Clone

Un clone completo di LinkedIn sviluppato con React, che replica le principali funzionalità del social network professionale più famoso al mondo.

## 🌟 Panoramica del Progetto

Questo progetto è una replica fedele di LinkedIn che include tutte le funzionalità principali della piattaforma originale: gestione del profilo utente, feed dei post, sistema di commenti, ricerca lavoro, e molto altro. L'applicazione è stata sviluppata utilizzando tecnologie moderne e best practices per garantire un'esperienza utente fluida e professionale.

## ✨ Funzionalità Principali

### 🏠 **Home Feed**
- **Feed dinamico** con caricamento dei post in tempo reale
- **Creazione post** con supporto per testo e immagini
- **Sistema di commenti** completo con rating (stelle)
- **Visualizzazione immagini** a schermo intero con modal
- **Caricamento progressivo** dei post (paginazione)
- **Profili utente** integrati in ogni post

### 👤 **Gestione Profilo**
- **Profilo personale** completamente personalizzabile
- **Visualizzazione profili** di altri utenti
- **Immagine profilo** e copertina personalizzabili
- **Sezioni profilo**: Esperienza, Formazione, Competenze, Interessi
- **Analytics del profilo** con statistiche di visualizzazione
- **Modifica in tempo reale** delle informazioni personali

### 💼 **Sezione Lavoro (Jobs)**
- **Ricerca offerte di lavoro** per parola chiave
- **Filtri avanzati** per azienda e posizione
- **Visualizzazione dettagliata** delle offerte
- **Interfaccia intuitiva** per la navigazione delle opportunità
- **Integrazione con API esterne** per offerte reali

### 💬 **Sistema di Commenti**
- **Commenti con rating** (sistema a stelle)
- **Modifica e eliminazione** commenti (solo per l'autore)
- **Visualizzazione identità autore** con nome e foto profilo
- **Interfaccia responsive** e user-friendly
- **Conferme di eliminazione** per prevenire errori

### 🔍 **Navigazione e Ricerca**
- **Navbar responsive** con tutte le sezioni principali
- **Barra di ricerca** integrata
- **Menu dropdown** per profilo utente e aziende
- **Routing dinamico** tra le diverse sezioni
- **Widget messaggi** sempre accessibile

### 📱 **Design Responsive**
- **Layout adattivo** per desktop, tablet e mobile
- **Interfaccia moderna** ispirata al design originale di LinkedIn
- **Animazioni fluide** e transizioni eleganti
- **Accessibilità** ottimizzata per screen reader
- **Performance ottimizzate** per tutti i dispositivi

## 🛠️ Tecnologie Utilizzate

### **Frontend Framework**
- **React 19.1.1** - Libreria principale per l'interfaccia utente
- **React Router DOM 7.8.2** - Gestione del routing e navigazione
- **React Bootstrap 2.10.10** - Componenti UI responsive
- **Bootstrap 5.3.8** - Framework CSS per il design

### **State Management**
- **Redux Toolkit 2.8.2** - Gestione dello stato globale dell'applicazione
- **React Redux 9.2.0** - Integrazione React-Redux

### **HTTP Client & API**
- **Axios 1.11.0** - Client HTTP per chiamate API
- **Strive School API** - Backend per gestione utenti, post e commenti

### **Styling & Icons**
- **Bootstrap Icons 1.13.1** - Set completo di icone
- **React Icons 5.5.0** - Libreria di icone React
- **CSS personalizzato** - Stili custom per componenti specifici

### **Build Tools**
- **Vite 7.1.2** - Build tool veloce e moderno
- **ESLint 9.33.0** - Linting del codice JavaScript/React
- **SWC** - Compilatore veloce per React

## 📁 Struttura del Progetto

```
linkedlnclone/
├── public/                     # File statici
│   ├── linkedin-favicon.png    # Favicon del sito
│   └── vite.svg               # Logo Vite
├── src/
│   ├── Components/            # Componenti React
│   │   ├── CustomNavbar.jsx   # Barra di navigazione principale
│   │   ├── FeedHome.jsx       # Feed principale dei post
│   │   ├── UserPost.jsx       # Componente per creare post
│   │   ├── Commento.jsx       # Sistema di commenti
│   │   ├── Profile.jsx        # Profilo utente principale
│   │   ├── UserProfile.jsx    # Profilo utente generico
│   │   ├── Jobs.jsx           # Sezione lavoro
│   │   ├── Searchbar.jsx      # Barra di ricerca
│   │   ├── ImageModal.jsx     # Modal per immagini
│   │   ├── WidgetMessaggi.jsx # Widget messaggi
│   │   └── [Altri componenti] # Sezioni aggiuntive
│   ├── assets/                # Risorse statiche
│   │   ├── img/              # Immagini del progetto
│   │   └── [Altri asset]     # Loghi, icone, ecc.
│   ├── redux/                # Gestione stato Redux
│   │   ├── actions/          # Azioni Redux
│   │   ├── reducers/         # Reducers Redux
│   │   └── store/            # Configurazione store
│   ├── services/             # Servizi e utilities
│   ├── App.jsx               # Componente principale
│   └── main.jsx              # Entry point dell'applicazione
├── package.json              # Dipendenze e script
├── vite.config.js           # Configurazione Vite
└── README.md                # Documentazione del progetto
```

## 🚀 Come Iniziare

### **Prerequisiti**
- Node.js (versione 18 o superiore)
- npm o yarn
- Git

### **Installazione**

1. **Clona il repository**
   ```bash
   git clone [url-repository]
   cd linkedlnclone
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri l'applicazione**
   - Vai su `http://localhost:5173/`
   - L'applicazione si ricaricherà automaticamente ad ogni modifica

### **Script Disponibili**

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Crea la build di produzione
- `npm run preview` - Anteprima della build di produzione
- `npm run lint` - Esegue il linting del codice

## 🎯 Funzionalità Dettagliate

### **Sistema di Autenticazione**
- Integrazione con API Strive School per l'autenticazione
- Gestione token JWT per le sessioni utente
- Protezione delle route private

### **Gestione Post**
- Creazione post con testo e immagini
- Upload immagini con preview
- Validazione form completa
- Feedback visivo per operazioni async

### **Sistema Commenti Avanzato**
- Commenti con sistema di rating (1-5 stelle)
- Modifica inline dei commenti
- Eliminazione con conferma
- Visualizzazione autore con foto profilo
- Placeholder personalizzati per utenti senza foto

### **Ricerca Lavoro**
- Integrazione con API esterne per offerte reali
- Filtri multipli (parola chiave, azienda, posizione)
- Interfaccia pulita e professionale
- Paginazione dei risultati

## 🎨 Design e UX

### **Principi di Design**
- **Coerenza visiva** con il design originale di LinkedIn
- **Responsive design** per tutti i dispositivi
- **Accessibilità** seguendo le linee guida WCAG
- **Performance** ottimizzate con lazy loading

### **Palette Colori**
- **Primario**: #0a66c2 (Blu LinkedIn)
- **Secondario**: #ffffff (Bianco)
- **Accenti**: #5a5a5a (Grigio testo)
- **Errori**: #d32f2f (Rosso)
- **Successo**: #2e7d32 (Verde)

## 🔧 Configurazione API

L'applicazione utilizza le API di Strive School per:
- Gestione utenti e profili
- CRUD operazioni sui post
- Sistema di commenti
- Upload immagini

Per configurare le API, assicurati di avere un token valido nelle variabili d'ambiente.

## 📱 Responsive Design

L'applicazione è completamente responsive e ottimizzata per:
- **Desktop** (1200px+): Layout completo con sidebar
- **Tablet** (768px-1199px): Layout adattato con menu collassabile
- **Mobile** (< 768px): Layout mobile-first con navigazione ottimizzata

## 🚀 Performance

### **Ottimizzazioni Implementate**
- **Code splitting** con React.lazy
- **Lazy loading** delle immagini
- **Memoization** dei componenti pesanti
- **Bundle optimization** con Vite
- **Caching** delle chiamate API

## 🤝 Contribuire al Progetto

1. Fork del repository
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit delle modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push del branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è stato sviluppato per scopi educativi come parte del corso Epicode.

## 👨‍💻 Sviluppatore

Progetto sviluppato con ❤️ utilizzando le migliori pratiche di sviluppo React e un'attenzione particolare all'esperienza utente e alle performance.

---

**LinkedIn Clone** - Un progetto che dimostra competenze avanzate nello sviluppo di applicazioni web moderne con React, Redux, e tecnologie all'avanguardia.
