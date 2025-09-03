import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { BsX } from 'react-icons/bs';
import './ImageModal.css';

/**
 * Componente modale per visualizzare immagini a schermo intero
 * @param {boolean} show - Controlla la visibilità del modale
 * @param {function} onHide - Funzione per chiudere il modale
 * @param {string} imageSrc - URL dell'immagine da visualizzare
 * @param {string} imageAlt - Testo alternativo per l'immagine
 */
const ImageModal = ({
  show,
  onHide,
  imageSrc,
  imageAlt = 'Immagine del post'
}) => {
  // Gestisce la chiusura del modale con il tasto Escape
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onHide();
      }
    };

    if (show) {
      document.addEventListener('keydown', handleKeyDown);
      // Previene lo scroll del body quando il modale è aperto
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [show, onHide]);

  // Gestisce il click sul backdrop per chiudere il modale
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onHide();
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="xl"
      centered
      className="image-modal"
      backdrop={false} // Gestiamo manualmente il backdrop
    >
      {/* Backdrop personalizzato */}
      <div className="image-modal-backdrop" onClick={handleBackdropClick}>
        <div className="image-modal-container" onClick={(e) => e.stopPropagation()}>
          {/* Header del modale con pulsante di chiusura */}
          <div className="image-modal-header">
            <Button
              variant="outline-light"
              className="image-modal-close-btn"
              onClick={onHide}
              aria-label="Chiudi modale"
            >
              <BsX size={24} />
            </Button>
          </div>

          {/* Contenuto principale con l'immagine */}
          <div className="image-modal-content">
            {/* Immagine principale */}
            <div className="image-modal-image-container">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="image-modal-image"
                onError={(e) => {
                  console.error('Errore nel caricamento dell\'immagine:', imageSrc);
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback in caso di errore nel caricamento */}
              <div className="image-modal-error" style={{ display: 'none' }}>
                <p>Impossibile caricare l'immagine</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;