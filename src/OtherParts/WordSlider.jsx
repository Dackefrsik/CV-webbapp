import { useState, useEffect } from "react";

export default function WordSlider({phrases, typingSpeed, deletingSpeed, delayAfterTyped, delayBeforeStart}){

    const [currentText, setCurrentText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const fullPhrase = phrases[phraseIndex];
        let timer;

        if (isTyping) {
            // --- SKRIVER UT ---
            if (currentText.length < fullPhrase.length) {
                timer = setTimeout(() => {
                    setCurrentText(fullPhrase.substring(0, currentText.length + 1));
                }, typingSpeed);
            } else {
                // Frasen är klar, vänta innan vi börjar radera
                timer = setTimeout(() => {
                    setIsTyping(false);
                }, delayAfterTyped);
            }
        } else {
            // --- RADERAR ---
            if (currentText.length > 0) {
                timer = setTimeout(() => {
                    setCurrentText(fullPhrase.substring(0, currentText.length - 1));
                }, deletingSpeed);
            } else {
                // Texten är helt raderad, byt till nästa fras efter en kort paus
                timer = setTimeout(() => {
                    setIsTyping(true);
                    setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                }, delayBeforeStart); // Pausa innan nästa fras startar
            }
        }

        // Städa upp timern är kritisk för prestanda
        return () => clearTimeout(timer);
    }, [currentText, isTyping, phraseIndex]);

    return(
        <div class="typewriter-container d-flex align-items-center flex-column">
            <h3>{/* Om texten är tom, rendera ett non-breaking space (&nbsp; i HTML) */}
        {currentText || '\u00A0'}</h3>
        </div>
    )
}