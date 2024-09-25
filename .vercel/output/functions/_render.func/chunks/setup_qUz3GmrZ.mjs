function setGetEnv(fn, reset = false) {
  _onSetGetEnv(reset);
}
let _onSetGetEnv = () => {
};
function setOnSetGetEnv(fn) {
  _onSetGetEnv = fn;
}

const setup = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  setGetEnv
}, Symbol.toStringTag, { value: 'Module' }));

export { setGetEnv as a, setup as b, setOnSetGetEnv as s };
