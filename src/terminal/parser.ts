const WHITESPACE = /\s/;
const QUOTES = new Set(['"', "'"]);

export type ParsedInput = {
  name: string;
  args: string[];
};

export const tokenize = (input: string): string[] => {
  const tokens: string[] = [];
  let current = "";
  let quote: string | null = null;
  let hasToken = false;

  for (const character of input.trim()) {
    if (quote !== null) {
      if (character === quote) {
        quote = null;
      } else {
        current += character;
      }
    } else if (QUOTES.has(character)) {
      quote = character;
      hasToken = true;
    } else if (WHITESPACE.test(character)) {
      if (hasToken) {
        tokens.push(current);
        current = "";
        hasToken = false;
      }
    } else {
      current += character;
      hasToken = true;
    }
  }
  if (hasToken) {
    tokens.push(current);
  }
  return tokens;
};

export const parseInput = (input: string): ParsedInput => {
  const [name = "", ...args] = tokenize(input);
  return { name: name.toLowerCase(), args };
};
