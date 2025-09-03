# Guida al Caricamento delle Immagini

Questa guida fornisce informazioni complete su come gestire il caricamento e l'utilizzo delle immagini nel progetto LinkedIn Clone.

## 📋 Indice

1. [Formati di Immagine Supportati](#formati-di-immagine-supportati)
2. [Dimensioni Consigliate](#dimensioni-consigliate)
3. [Sintassi Markdown](#sintassi-markdown)
4. [Organizzazione delle Immagini](#organizzazione-delle-immagini)
5. [Best Practices per l'Ottimizzazione](#best-practices-per-lottimizzazione)
6. [Gestione dei Percorsi Relativi](#gestione-dei-percorsi-relativi)
7. [Limitazioni e Considerazioni](#limitazioni-e-considerazioni)

## 🖼️ Formati di Immagine Supportati

Il progetto supporta i seguenti formati di immagine:

### Formati Principali
- **JPEG/JPG** - Ideale per fotografie e immagini con molti colori
- **PNG** - Perfetto per immagini con trasparenza e grafica
- **GIF** - Supportato per immagini animate (uso limitato)
- **WebP** - Formato moderno con ottima compressione
- **SVG** - Formato vettoriale per icone e grafica scalabile

### Raccomandazioni per Formato
```
📸 Foto profilo: JPEG/PNG
🎨 Icone: SVG
🖼️ Immagini contenuto: JPEG/WebP
✨ Loghi: PNG/SVG
```

## 📏 Dimensioni Consigliate

### Immagini Profilo
- **Dimensione ottimale**: 400x400px
- **Dimensione minima**: 200x200px
- **Dimensione massima**: 800x800px
- **Rapporto**: 1:1 (quadrato)

### Immagini Post
- **Larghezza ottimale**: 1200px
- **Altezza massima**: 630px
- **Rapporto consigliato**: 16:9 o 4:3

### Immagini Copertina
- **Dimensione ottimale**: 1584x396px
- **Rapporto**: 4:1

## 📝 Sintassi Markdown

### Sintassi Base
```markdown
![Testo alternativo](percorso/immagine.jpg)
```

### Con Titolo
```markdown
![Testo alternativo](percorso/immagine.jpg "Titolo dell'immagine")
```

### Immagine Collegata
```markdown
[![Testo alternativo](percorso/immagine.jpg)](https://link-destinazione.com)
```

### Con Dimensioni HTML
```html
<img src="percorso/immagine.jpg" alt="Testo alternativo" width="300" height="200">
```

## 📁 Organizzazione delle Immagini

### Struttura Cartelle Consigliata
```
src/
├── assets/
│   ├── images/
│   │   ├── profiles/          # Immagini profilo
│   │   ├── posts/             # Immagini dei post
│   │   ├── icons/             # Icone e simboli
│   │   ├── backgrounds/       # Sfondi e copertine
│   │   └── ui/                # Elementi interfaccia
│   └── img/                   # Immagini temporanee/test
```

### Convenzioni di Nomenclatura
```
✅ CORRETTO:
- profile-john-doe.jpg
- post-2024-01-15.png
- icon-linkedin.svg
- bg-header-main.jpg

❌ EVITARE:
- IMG_001.jpg
- image (1).png
- foto profilo.jpg (spazi)
- IMMAGINE.JPG (tutto maiuscolo)
```

## ⚡ Best Practices per l'Ottimizzazione

### 1. Compressione
- **JPEG**: Qualità 80-85% per un buon compromesso
- **PNG**: Utilizzare strumenti come TinyPNG
- **WebP**: Preferire quando possibile per dimensioni ridotte

### 2. Strumenti di Ottimizzazione
```bash
# Installazione ImageOptim (macOS)
brew install imageoptim-cli

# Compressione batch
imageoptim --directory ./src/assets/images/
```

### 3. Lazy Loading
```jsx
// Implementazione React
<img 
  src="placeholder.jpg" 
  data-src="immagine-reale.jpg" 
  loading="lazy" 
  alt="Descrizione"
/>
```

### 4. Responsive Images
```html
<picture>
  <source media="(max-width: 768px)" srcset="mobile.jpg">
  <source media="(max-width: 1024px)" srcset="tablet.jpg">
  <img src="desktop.jpg" alt="Immagine responsive">
</picture>
```

## 🔗 Gestione dei Percorsi Relativi

### In React/Vite
```jsx
// ✅ CORRETTO - Import esplicito
import profileImage from '../assets/images/profiles/user.jpg';

// ✅ CORRETTO - Percorso pubblico
<img src="/images/profile.jpg" alt="Profilo" />

// ❌ EVITARE - Percorso relativo diretto
<img src="../images/profile.jpg" alt="Profilo" />
```

### Percorsi Assoluti vs Relativi
```javascript
// Percorso assoluto (dalla root pubblica)
const imagePath = '/assets/images/profile.jpg';

// Percorso relativo (dal componente corrente)
const imagePath = './images/profile.jpg';

// Import dinamico
const imagePath = new URL('../assets/profile.jpg', import.meta.url).href;
```

### Configurazione Vite
```javascript
// vite.config.js
export default {
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images'),
    },
  },
};

// Utilizzo
import profileImg from '@images/profiles/user.jpg';
```

## ⚠️ Limitazioni e Considerazioni

### Limitazioni Tecniche
- **Dimensione massima file**: 5MB per immagine
- **Formati non supportati**: TIFF, BMP, ICO
- **Limite upload simultanei**: 10 immagini

### Considerazioni Performance
```javascript
// ❌ EVITARE - Caricamento di immagini grandi
const largeImage = 'ultra-hd-image-50mb.jpg';

// ✅ PREFERIRE - Immagini ottimizzate
const optimizedImage = 'compressed-image-500kb.webp';
```

### Accessibilità
```jsx
// ✅ SEMPRE includere alt text descrittivo
<img 
  src="profile.jpg" 
  alt="Foto profilo di Mario Rossi, sviluppatore frontend"
/>

// ✅ Per immagini decorative
<img src="decoration.jpg" alt="" role="presentation" />
```

### SEO e Meta Tags
```html
<!-- Open Graph per social media -->
<meta property="og:image" content="https://sito.com/images/preview.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<!-- Twitter Cards -->
<meta name="twitter:image" content="https://sito.com/images/preview.jpg">
```

### Sicurezza
```javascript
// ✅ Validazione lato client
const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
const maxSize = 5 * 1024 * 1024; // 5MB

function validateImage(file) {
  if (!allowedTypes.includes(file.type)) {
    throw new Error('Formato file non supportato');
  }
  if (file.size > maxSize) {
    throw new Error('File troppo grande');
  }
}
```

## 🚀 Implementazione nel Progetto

### Upload Immagine Profilo
```jsx
// Componente per upload immagine
const ProfileImageUpload = () => {
  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('profile', file);
    
    try {
      const response = await uploadProfileImage(userId, file);
      // Aggiorna stato dell'applicazione
    } catch (error) {
      console.error('Errore upload:', error);
    }
  };
  
  return (
    <input 
      type="file" 
      accept="image/*" 
      onChange={(e) => handleImageUpload(e.target.files[0])}
    />
  );
};
```

### API Endpoint
```javascript
// Servizio upload immagini
export const uploadProfileImage = async (userId, imageFile) => {
  const formData = new FormData();
  formData.append('profile', imageFile);
  
  const response = await fetch(`/api/profile/${userId}/picture`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData,
  });
  
  return response.json();
};
```

---

## 📞 Supporto

Per domande o problemi relativi al caricamento delle immagini:
- Controlla la console del browser per errori
- Verifica le dimensioni e il formato del file
- Assicurati che i percorsi siano corretti
- Consulta la documentazione dell'API

**Ultimo aggiornamento**: Gennaio 2025
