// Spoločné funkcie pre všetky levely

// Dynamicky zistiť cestu k zvukom v závislosti od lokácie HTML
function getSoundPath(filename) {
	// Skontroluj či sme v podriadenej zložke (beginner-levels. ultra-fast-levels atď)
	if (window.location.pathname.includes('beginner-levels') || 
		window.location.pathname.includes('ultra-fast-levels')) {
		return '../assets/sounds/' + filename;
	}
	return 'assets/sounds/' + filename;
}

// Prednahratie audio súborov pre lepší výkon
const tickSounds = [
	new Audio(getSoundPath('tick. tick 1.mp3')),
	new Audio(getSoundPath('tick. tick 2.mp3')),
	new Audio(getSoundPath('tick. 4-Clock ticking  sound effect.mp3'))
];

// Nastavenie hlasitosti pre tick zvuky
tickSounds.forEach(sound => {
	sound.volume = 0.3; // Nastavte podľa potreby (0.0 - 1.0)
});

// Prednahratie achievement zvukov
const achievementSound = new Audio(getSoundPath('Achievement Sound Effect.mp3'));
const minecraftXpSound = new Audio(getSoundPath('minecraft xp  Sound Effect.mp3'));
const rareAchievementSound = new Audio(getSoundPath('Rare Achievement - Minecraft Sound Effect (HD).mp3'));

// Prednahratie buzzer zvukov pre správne/nesprávne odpovede
const correctBuzzer = new Audio(getSoundPath('buzzer. correct.mp3'));
const wrongBuzzer = new Audio(getSoundPath('buzzer. wrong.mp3'));

// Nastavenie hlasitosti pre achievement zvuky
achievementSound.volume = 0.5;
minecraftXpSound.volume = 0.4;
rareAchievementSound.volume = 0.6;

// Nastavenie hlasitosti pre buzzer zvuky
correctBuzzer.volume = 0.4;
wrongBuzzer.volume = 0.4;

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

// Funkcia pre prehranie achievement zvukov pri dokončení levelu
function play_level_complete_sound() {
	try {
		// Klonujeme zvuky pre možnosť opakovania
		const achievement = achievementSound.cloneNode();
		const xpSound = minecraftXpSound.cloneNode();
		
		achievement.volume = 0.5;
		xpSound.volume = 0.4;
		
		// Prehraj oba zvuky súčasne
		achievement.play().catch(error => {
			console.log('Achievement sound playback failed:', error);
		});
		
		xpSound.play().catch(error => {
			console.log('XP sound playback failed:', error);
		});
		
	} catch (error) {
		console.log('Level complete sound error:', error);
	}
}

// Funkcia pre prehranie rare achievement zvuku pri dokončení boss levelu
function play_boss_level_complete_sound() {
	try {
		// Klonujeme zvuk pre možnosť opakovania
		const rareAchievement = rareAchievementSound.cloneNode();
		
		rareAchievement.volume = 0.6;
		
		// Prehraj rare achievement zvuk
		rareAchievement.play().catch(error => {
			console.log('Rare achievement sound playback failed:', error);
		});
		
	} catch (error) {
		console.log('Boss level complete sound error:', error);
	}
}

// Funkcia pre prehranie zvuku správnej odpovede
function play_correct_answer_sound() {
	try {
		// Klonujeme zvuk pre možnosť rýchleho opakovania
		const correctSound = correctBuzzer.cloneNode();
		correctSound.volume = 0.4;
		
		correctSound.play().catch(error => {
			console.log('Correct answer sound playback failed:', error);
		});
		
	} catch (error) {
		console.log('Correct answer sound error:', error);
	}
}

// Funkcia pre prehranie zvuku nesprávnej odpovede
function play_wrong_answer_sound() {
	try {
		// Klonujeme zvuk pre možnosť rýchleho opakovania
		const wrongSound = wrongBuzzer.cloneNode();
		wrongSound.volume = 0.1;
		
		wrongSound.play().catch(error => {
			console.log('Wrong answer sound playback failed:', error);
		});
		
	} catch (error) {
		console.log('Wrong answer sound error:', error);
	}
}
