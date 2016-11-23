// return an array of lines
const nl2a = (strings, ...values) => {
    return strings.raw
    .map((string, i) => string + (values[i] || ''))
    .join('')
    .split('\n')
    .filter((line) => line !== '');
};

// return an array of trimmed lines
const nl2at = (strings, ...values) => {
    return strings.raw
    .map((string, i) => string + (values[i] || ''))
    .join('')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line !== '');
};

module.exports = {
    nl2a, nl2at
};
