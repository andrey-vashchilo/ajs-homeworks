import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    const object = JSON.parse(saving);
    Object.getPrototypeOf(object);
  } catch (error) {
    throw (new Error(error));
  }
})();
