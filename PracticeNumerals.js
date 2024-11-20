function wordsToNumber(input) {
    const tokens = {
        'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
        'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10,
        'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14,
        'fifteen': 15, 'sixteen': 16, 'seventeen': 17, 'eighteen': 18,
        'nineteen': 19, 'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50,
        'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90,
        'hundred': 100, 'thousand': 1000, 'million': 1000000, 'billion': 1000000000,
        'lakh': 100000, 'crore': 10000000
    };

    const originalInput = input.trim();
    
    // Check if the input is already a number
    if (!isNaN(originalInput)) {
        return originalInput;
    }

    input = input.toLowerCase().replace(/[^a-z\s]/g, ''); // Normalize input by removing non-alphabet characters
    const words = input.split(/\s+/);
    let total = 0, current = 0;
    let hasNumericWord = false;

    words.forEach(word => {
        if (tokens[word] !== undefined) {
            hasNumericWord = true;
            if (tokens[word] < 100) {
                current += tokens[word];
            } else {
                current = current === 0 ? tokens[word] : current * tokens[word];
                if (tokens[word] >= 1000) {
                    total += current;
                    current = 0;
                }
            }
        }
    });

    if (hasNumericWord) {
        return total + current;
    }

    // Return the original input if no numeric words are found
    return originalInput
}

// Example usage:
console.log(wordsToNumber("one")); // Output: 1
console.log(wordsToNumber("One hundred Bag")); // Output: 1
console.log(wordsToNumber("1")); // Output: 1
console.log(wordsToNumber("abcd")); // Output: "abcd"
console.log(wordsToNumber("one hundred twenty three")); // Output: 123
