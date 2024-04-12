ffunction firstChar(text) {
  // Iterate over each character in the string
  for (let char of text) {
    // Check if the character is not a space
    if (char !== ' ') {
      // Return the first non-space character
      return char;
    }
  }
  // If no non-space character is found, return an empty string
  return '';
}

// Test cases
console.log(firstChar(' Rosa Parks ')); // Output: 'R'
console.log(firstChar(' Hello World ')); // Output: 'H'
console.log(firstChar(' ')); // Output: ''
console.log(firstChar('')); // Output: ''
