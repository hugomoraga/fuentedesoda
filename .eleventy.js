const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyVue = require("@11ty/eleventy-plugin-vue"); // import the plugin

module.exports = (config) => {

  function sortByOrder(values) {
    let vals = [...values]
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order))
  }
  config.addPlugin(eleventyVue);
  config.addPlugin(syntaxHighlight);
  config.addPassthroughCopy("img");
  config.addPassthroughCopy("css");
  config.addPassthroughCopy("js");
  config.addFilter('sortByOrder', sortByOrder)


  config.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
  });
  config.setTemplateFormats(["jpg", "png", "webp", "md", "njk"]);
  config.setBrowserSyncConfig({
    files: ["dist/**/*"],
    open: true,
  });
  config.setDataDeepMerge(true);

  return {
    pathPrefix: "/fuentedesoda",

    dir: {
      input: "src",
      output: "dist",
    },
  };
};