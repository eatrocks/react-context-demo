module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/hello/world": { page: "/greeting", query: { id: "world" } },
      "/hello/sun": { page: "/greeting", query: { id: "sun" } }
    };
  }
};
