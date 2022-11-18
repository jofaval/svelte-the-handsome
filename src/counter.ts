export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;

  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  const increment = () => setCounter(counter + 1);
  setCounter(0);

  element.addEventListener("click", increment);
}
