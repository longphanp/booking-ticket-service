const esbuild = require("esbuild");
const { settings } = require("./settings");

(async function () {
  await esbuild.build({
    ...settings,
    minify: true,
  });
})();
