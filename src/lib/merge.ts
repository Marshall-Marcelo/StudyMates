const merge = (...className: (string | boolean | undefined | null)[]) => {
  return className.filter(Boolean).join("");
};

export default merge;
