export const generateColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rbgColor = `background-color: rgb(${r} ${g} ${b});`;
  document.body.setAttribute("style", rbgColor);
};
