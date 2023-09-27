import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import http from "node:http";
import Metalsmith from "metalsmith";
import collections from "@metalsmith/collections";
import layouts from "@metalsmith/layouts";
import markdown from "@metalsmith/markdown";
import finalhandler from "finalhandler";
import serveStatic from "serve-static";

const __dirname = dirname(fileURLToPath(import.meta.url));
const t1 = performance.now();

Metalsmith(__dirname) // parent directory of this file
  .source("./") // source directory
  .destination("../dist/docs") // destination directory
  .clean(true) // clean destination before
  .env({
    // pass NODE_ENV & other environment variables
    DEBUG: process.env.DEBUG,
    NODE_ENV: process.env.NODE_ENV,
  })
  .metadata({
    // add any variable you want & use them in layout-files
    sitename: "My Static Site & Blog",
    siteurl: "https://example.com/",
    description: "It's about saying »Hello« to the world.",
    generatorname: "Metalsmith",
    generatorurl: "https://metalsmith.io/",
  })
  .use(function snapshot(files, metalsmith) {
    // console.log(metalsmith);
    // console.log(files);
    for (const [key, value] of Object.entries(files)) {
      console.log(`   - ${key}`);
      files[key]["contents"] = Buffer.from(
        files[key]["contents"].toString().replaceAll(".md", ".html"),
        "utf-8"
      );
    }
    // metalsmith["_files"] = files;
  })
  .use(
    collections({
      apis: "api/*.md",
    })
  ) // use `collections.posts` in layouts
  .use(markdown()) // transpile all md into html
  // .use(
  //   permalinks({
  //     // change URLs to permalink URLs
  //     relative: false, // put css only in /css
  //   })
  // )
  .use(
    layouts({
      default: "layout.hbs",
      directory: "./layouts",
      engineOptions: {
        helpers: {
          formattedDate: function (date) {
            return new Date(date).toLocaleDateString();
          },
        },
      },
    })
  ) // wrap layouts around html
  .build((err) => {
    // build process
    if (err) throw err; // error handling is required
    console.log(
      `Build success in ${((performance.now() - t1) / 1000).toFixed(1)}s`
    );

    // Serve up public/ftp folder
    var serve = serveStatic("dist/docs", {
      index: ["index.html", "index.htm"],
    });

    // Create server
    var server = http.createServer(function onRequest(req, res) {
      serve(req, res, finalhandler(req, res));
    });

    // Listen
    server.listen(3001);

    console.log("creat server success. http://127.0.0.1:3001");
  });
