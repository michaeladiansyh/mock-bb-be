function checkAnagram(a, b) {
  let stringOne = a.split('').sort().join('');
  let stringTwo = b.split('').sort().join('');

  if (stringOne === stringTwo) {
    console.log('ini adalah anagram');
  } else {
    console.log('ini bukan anagram');
  }
}

checkAnagram('kamu', 'makam');
