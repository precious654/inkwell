export function formatTime(date: Date): string {
    const now = new Date();
    const seconds = Math.floor(Number(now) - Number(date));

    const intervals = {
        year: 31536000,  // 60 * 60 * 24 * 365
        month: 2592000,  // 60 * 60 * 24 * 30
        week: 604800,    // 60 * 60 * 24 * 7
        day: 86400,      // 60 * 60 * 24
        hour: 3600,      // 60 * 60
        minute: 60,
        second: 1
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const count = Math.floor(seconds / secondsInUnit);
        if (count > 0) {
            console.log(`${count} ${unit}${count !== 1 ? 's' : ''} ago`);
            return `${count} ${unit}${count !== 1 ? 's' : ''} ago`;
        }
    }

    return 'just now';
}

