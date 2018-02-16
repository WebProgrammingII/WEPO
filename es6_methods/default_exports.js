// Export default export for service here
const service = () => {
  return {
    console: (c) => console.log(c),
    alert: (a) => alert(a)
  };
};

module.exports = service();
