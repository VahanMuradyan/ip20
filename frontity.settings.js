const settings = {
  name: "ip20",
  state: {
    frontity: {
      url: "https://test-csb-835946.online/",
      title: "IP20",
      description: "Global IP Challenges Forum (IP20+)",
    },
  },
  packages: [
    {
      name: "@frontity/twentytwenty-theme",
      state: {
        theme: {
          menu: [["Home", "/"]],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://test-csb-835946.online/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
