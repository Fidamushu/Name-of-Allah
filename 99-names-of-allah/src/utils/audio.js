export const playArabicAudio = (text, id) => {
    const audio = new Audio(`/audio/${id}.mp3`);
    audio.play().catch(e => {
        console.warn("Local audio failed or missing:", e);

        // Final fallback: native speechSynthesis
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ar-SA';
            utterance.rate = 0.8;
            window.speechSynthesis.speak(utterance);
        } else {
            console.warn("No audio source and speech synthesis is unsupported.");
        }
    });
};
