const buildPhrases = ({
  name,
  whenLived,
  length,
  taxonomy,
  weight,
  namedBy,
  foundIn,
  typeOfDinosaur,
  diet,
}) => {
  const base = `Did you know ${name}s`; // provides a base statement to prefix the statement
  const phrases = [
    `${base} lived ${whenLived}?`,
    `${base} were ${length} meters long?`,
    `The taxonomy of a ${name} is ${taxonomy}. `,
    `${base} weighed ${weight} tons?`,
    `${base} was named by ${namedBy}?`,
    `${base} was first disovered in ${foundIn}?`,
    `${base} is a ${typeOfDinosaur}?`,
    `${base} was ${diet}?`,
  ]; // provides a list of phrases that dynamically generate facts about the given base
  return phrases; // returns the phrases afters its been filled in with dinosaur specifics
};

const generateRandomPhrase = (phrases) =>
  phrases.map((phrase) => phrase)[Math.floor(Math.random() * phrases.length)]; // generate a random phrase from within the given array of phrases

const randomPhrase = (dinosaur) => generateRandomPhrase(buildPhrases(dinosaur)); // generate a random phrase from list of phrases above by levaraging the buildPhrases function
export { generateRandomPhrase }; // provides access to the raw function if needed
export default randomPhrase; // exports a random phrase to be used within the application anywhere its imported and we pass in a dinosaur
