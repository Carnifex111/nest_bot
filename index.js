var mergeAlternately = function (word1, word2) {
  let merge = '';
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) merge += word1[i];
    if (i < word2.length) merge += word2[i];
  }
  return merge;
};

a = mergeAlternately('abc', 'pqr');
console.log(a);
