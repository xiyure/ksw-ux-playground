function r(e, u) {
  return {
    _methods: {
      setPasswordMode: (t) => {
        e.value !== t && (u.value = "", e.value = t);
      }
    }
  };
}
export {
  r as usePassword
};
