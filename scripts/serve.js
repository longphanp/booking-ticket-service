const esbuild = require("esbuild");
const { settings } = require("./settings");

(async function () {
  const ctx = await esbuild.context({
    ...settings,
    plugins: [
      {
        name: "rebuild-notify",
        setup(build) {
          build.onEnd((result) => {
            console.log(`build changed`);
          });
        },
      },
    ],
  });

  await ctx.watch();
  console.log(`Watch...`);
})();
