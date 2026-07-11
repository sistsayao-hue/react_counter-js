const addOne = () => {
  setCount(prevCount => {
    const newCount = prevCount + 1;
    return newCount % 5 === 0 ? newCount + 100 : newCount;
  });
};
const add100 = () => {
  addOne(); // Chama addOne ao invés de setCount diretamente
};
