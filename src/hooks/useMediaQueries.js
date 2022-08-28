export const up = (breakpoint) => {
  return `@media screen and (min-width:${breakpoint}px)`;
};
export const down = (breakpoint) => {
  return `@media screen and (max-width:${breakpoint}px)`;
};
