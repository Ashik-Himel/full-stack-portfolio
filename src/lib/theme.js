export const getTheme = function() {
  const currentTheme = localStorage.getItem("theme");

  if (!currentTheme) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark";
    }
    return "light";
  }

  return currentTheme;
}

export const setTheme = function(value) {
  localStorage.setItem("theme", value);
}
