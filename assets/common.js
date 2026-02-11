// Spoločné funkcie pre všetky levely

// Prednahratie audio súborov pre lepší výkon
const tickSounds = [
	new Audio('assets/sounds/tick. tick 1.mp3'),
	new Audio('assets/sounds/tick. tick 2.mp3'),
	new Audio('assets/sounds/tick. 4-Clock ticking  sound effect.mp3')
];

// Nastavenie hlasitosti pre tick zvuky
tickSounds.forEach(sound => {
	sound.volume = 0.3; // Nastavte podľa potreby (0.0 - 1.0)
});

// Index aktuálneho tick zvuku
let currentTickIndex = 0;

// Funkcia pre tikanie hodín - prehráva skutočné zvuky a strieda ich
function clock_tick() {
	try {
		// Klonujeme audio objekt pre možnosť rýchleho opakovania
		const tickSound = tickSounds[currentTickIndex].cloneNode();
		tickSound.volume = 0.3;
		tickSound.play().catch(error => {
			console.log('Audio playback failed:', error);
		});
		
		// Striedanie zvukov pre realistickejšie tikanie
		currentTickIndex = (currentTickIndex + 1) % tickSounds.length;
		
	} catch (error) {
		console.log('Audio playback error:', error);
	}
}

// Alternatívna funkcia s intenzívnejším tickom (pre posledných 10 sekúnd)
function clock_tick_urgent() {
	try {
		// Pre urgentný režim použijeme vyššiu hlasitosť
		const tickSound = tickSounds[currentTickIndex].cloneNode();
		tickSound.volume = 0.5; // Hlasnejšie pre upozornenie
		tickSound.playbackRate = 1.1; // Mierne rýchlejšie prehrávanie
		tickSound.play().catch(error => {
			console.log('Audio playback failed:', error);
		});
		
		currentTickIndex = (currentTickIndex + 1) % tickSounds.length;
		
	} catch (error) {
		console.log('Audio playback error:', error);
	}
}
