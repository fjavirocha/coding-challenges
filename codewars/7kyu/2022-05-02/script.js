// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
  var vowelsCount = 0;
  str.split('').forEach(ltr => {
    if (ltr === 'a' || ltr === 'e'|| ltr === 'i'|| ltr === 'o' || ltr === 'u') vowelsCount++
  });
  return vowelsCount;
}

console.log(getCount('abracadabra'));