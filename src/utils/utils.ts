export const smoothScrollTo = (id: string, offset: number): void => {
  setTimeout(() => {
    const element: HTMLElement = document.querySelector(`#${id}`);
    if (!element) {
      return;
    }

    window.scrollTo({
      left: 0,
      top: element.offsetTop - offset,
      behavior: 'smooth',
    });
  });
};

export async function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

export function roundTo(num: number, decimalPlaces: number): number {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round((num + Number.EPSILON) * factor) / factor;
}

export function formatMillions(num: number): string {
  return roundTo(num / 1000000, 1) + 'm';
}
