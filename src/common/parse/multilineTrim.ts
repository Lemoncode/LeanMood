export const multilineTrim = (input: string) => {
  return input
    // Transform new lines into array
    .split(/(?:\r\n|\r|\n)/g)
    // Remove extra spaces
    .map(line => line.trim())
    // Return a string
    .join('');
};