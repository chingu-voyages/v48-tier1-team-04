import randomDino from "./giveRandoDino";
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
  const base = `Did you know that the ${name}`; // provides a base statement to prefix the statement
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

const randomDinosaur = randomDino(); // generates a random dinosaur from the list of dinosaurs
const generateRandomPhrase = (phrases) =>
  phrases.map((phrase) => phrase)[Math.floor(Math.random() * phrases.length)]; // generate a random phrase from within the given array of phrases

const randomPhrase = (dinosaur) => generateRandomPhrase(buildPhrases(dinosaur)); // generate a random phrase from list of phrases above by levaraging the buildPhrases function
const randomDinosaurAndPhrase = randomPhrase(randomDinosaur); // generates a random dinosaur and phrase to be used within the application
export { generateRandomPhrase, randomDinosaurAndPhrase }; // provides access to the raw function if needed as well as the random dinosaur and phrase
export default randomPhrase; // exports a random phrase to be used within the application anywhere its imported and we pass in a dinosaur
