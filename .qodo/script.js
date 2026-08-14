const percentEl = document.getElementById('percent');
const barFill = document.getElementById('barFill');
const statusEl = document.getElementById('statusLine');
const loader = document.getElementById('loader');

const statuses = [
    'initializing',
    'decrypting frequency',
    'syncing visuals',
    'tuning signal',
    'almost there'
];

let progress = 0;
let statusIdx = 0;

function tick() {
    // eased, slightly randomized increments for a "loading" feel
    const remaining = 100 - progress;
    const step = Math.max(0.6, remaining * 0.06 * (0.6 + Math.random() * 0.8));
    progress = Math.min(100, progress + step);

    percentEl.textContent = Math.floor(progress);
    barFill.style.width = progress + '%';

    const nextStatus = Math.min(
        statuses.length - 1,
        Math.floor((progress / 100) * statuses.length)
    );
    if (nextStatus !== statusIdx) {
        statusIdx = nextStatus;
        statusEl.innerHTML = statuses[statusIdx] + '<span class="accent">_</span>';
    }

    if (progress < 100) {
        requestAnimationFrame(() => setTimeout(tick, 30));
    } else {
        finish();
    }
}

function finish() {
    statusEl.innerHTML = 'signal locked<span class="accent">_</span>';
    setTimeout(() => {
        document.body.classList.add('opened');
        document.body.classList.add('unlocked');
        setTimeout(() => { loader.style.display = 'none'; }, 1200);
    }, 350);
}

requestAnimationFrame(() => setTimeout(tick, 200));