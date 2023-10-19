const uniqueMorseRepresentations = (words) => {
  const morseMap = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  const morseSet = new Set();

  for (let i = 0; i < words.length; i++) {
    let morseWord = '';
    const word = words[i];

    for (let j = 0; j < word.length; j++) {
      const letter = word[j];
      morseWord += morseMap[letter];
    }

    morseSet.add(morseWord);
  }

  return morseSet.size;
};