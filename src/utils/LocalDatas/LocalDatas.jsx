export const setData = (key, value) => {
  localStorage.setItem(key, value);
};

export const getData = (key) => {
  const item = localStorage.getItem(key);
  return item;
};

export const getAllData = () => {
  return localStorage;
};

export const removeData = (key) => {
  localStorage.removeItem(key);
};

export const removeAllData = () => {
  localStorage.clear();
};

export const setSessionData = (key, value) => {
  sessionStorage.setItem(key, value);
};

export const getSessionData = (key) => {
  const item = sessionStorage.getItem(key);
  return item;
};

export const getAllSessionData = () => {
  return sessionStorage;
};

export const removeSessionData = (key) => {
  sessionStorage.removeItem(key);
};

export const removeAllSessionData = () => {
  sessionStorage.clear();
};
