let reverseString = reverseWord("Hello!");
console.log(reverseString); 

function reverseWord(string) {
    return string.split('').reverse().join('');
}

