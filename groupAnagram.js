

function groupAnagrams(words) {
  const map = {};
  for (let word of words) {
    const key = word.split('').sort().join('');
    map[key] = map[key] || [];
    map[key].push(word);
  }
  return Object.values(map);
}
