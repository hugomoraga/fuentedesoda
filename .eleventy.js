const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (config) => {
  config.addPlugin(syntaxHighlight);
  config.addPassthroughCopy("img");
  config.addPassthroughCopy("css");
  config.addPassthroughCopy("js");

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