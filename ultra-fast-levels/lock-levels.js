// Configuration file for locked levels
const LOCKED_LEVELS = [  6, 7, 8, 9, 10]; // Ultra Fast levels that are locked

// Function to check if current level is locked
function checkIfLocked() {
    const match = window.location.pathname.match(/level(\d+)\.html/);
    if (match) {
        const levelNum = parseInt(match[1]);
        return LOCKED_LEVELS.includes(levelNum);
    }
    return false;
}

// Function to show locked screen
function showLockedScreen(levelNum) {
    document.body.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Level ${levelNum} - Quick Math</title>
            <style>
                body { background: white; font-family: Arial, sans-serif; margin: 0; padding: 0; }
                h1 { text-align: center; font-size: clamp(32px, 5vw, 60px); margin: 2vh 0; }
                .back-btn { position: fixed; top: 3vh; right: 4vw; background: #0330f8; color: white; border: none; padding: 1vh 2vw; border-radius: 15px; cursor: pointer; font-weight: bold; font-size: clamp(16px, 3vw, 24px); }
                .back-btn:hover { background: #021cbf; }
                .locked { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; }
                .locked h2 { font-size: clamp(40px, 8vw, 80px); color: #8b5cf6; margin: 0 0 2vh 0; font-weight: bold; }
                .locked p { font-size: clamp(20px, 4vw, 36px); color: #666; margin: 0; }
                .icon { font-size: clamp(60px, 12vw, 120px); margin-bottom: 2vh; }
            </style>
        </head>
        <body>
            <h1>Level ${levelNum}</h1>
            <button onclick="window.location.href='../levels-ultra-fast.html';" class="back-btn">← Back</button>
            <div class="locked">
                <div class="icon">🔒</div>
                <h2>Coming Soon!</h2>
                <p>Level ${levelNum} is currently being developed.</p>
            </div>
        </body>
        </html>
    `;
}

// Check on page load
document.addEventListener('DOMContentLoaded', function() {
    const match = window.location.pathname.match(/level(\d+)\.html/);
    if (match) {
        const levelNum = parseInt(match[1]);
        if (LOCKED_LEVELS.includes(levelNum)) {
            showLockedScreen(levelNum);
        }
    }
});
