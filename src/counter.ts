type UnnecessaryClosureProps = {
  element: HTMLButtonElement;
  count: number;
};

const unnecessaryClosure = ({
  element,
  count,
}: UnnecessaryClosureProps): void => {
  element.innerHTML = `count is ${count}`;
};

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;

  const setCounter = (count: number) => {
    counter = count;
    unnecessaryClosure({ element, count });
  };
  const increment = () => setCounter(counter + 1);
  unnecessaryClosure({ element, count: counter });

  element.addEventListener("click", increment);
}
