function render() {
  return `
  <div class="lds-ellipsis">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
`;
}

const Loader = {
  toString() {
    return render();
  },
};

export default Loader;
