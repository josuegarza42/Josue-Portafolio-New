// Runs before styles are painted, so the saved night theme does not flash white.
try {
 const saved = JSON.parse(localStorage.getItem('garage.preferences.v1') || 'null');
 document.documentElement.dataset.theme = saved?.theme === 'night' ? 'night' : 'day';
} catch { document.documentElement.dataset.theme = 'day'; }
