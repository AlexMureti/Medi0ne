import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ImageModalProps {
    src: string;
    alt?: string;
    open: boolean;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt = '', open, onClose }) => {
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prev;
        };
    }, [open, onClose]);

    if (!open) return null;

    const element = (
        <div className="image-modal-overlay fixed inset-0 z-[99999] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60" onClick={onClose} />
            <div className="image-modal-content relative max-w-full max-h-full rounded-lg overflow-hidden shadow-2xl">
                <button
                    aria-label="Close image"
                    className="image-modal-close absolute top-2 right-2 z-10 bg-white/90 rounded-full p-1 shadow hover:bg-white"
                    onClick={onClose}
                >
                    <X className="h-5 w-5 text-gray-900" />
                </button>
                <img src={src} alt={alt} className="max-w-[min(100vw,900px)] max-h-[80vh] object-contain block" />
            </div>
        </div>
    );

    if (typeof document !== 'undefined') return createPortal(element, document.body);
    return element;
};

export default ImageModal;
