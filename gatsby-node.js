//const webpack = require("webpack");
const _ = require("lodash");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const Promise = require("bluebird");

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    const separtorIndex = ~slug.indexOf("--") ? slug.indexOf("--") : 0;
    const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0;
    createNodeField({
      node,
      name: `slug`,
      value: `${separtorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`
    });
    createNodeField({
      node,
      name: `prefix`,
      value: separtorIndex ? slug.substring(1, separtorIndex) : ""
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve("./src/templates/blog.js");
    const tagTemplate = path.resolve("./src/pages/blog.js");
    resolve(
      graphql(
        `
          {
            allPrismicBlog {
              edges {
                node {
                  id
                  slugs
                  data {
                    section
                    tags1 {
                      tag {
                        document {
                          data {
                            tag
                          }
                        }
                      }
                    }
                    title {
                      html
                      text
                    }
                    header_image {
                      localFile {
                        id
                      }
                    }
                    text {
                      html
                      text
                    }
                    date
                    section
                  }
                }
              }
            }
            allPrismicTag {
              edges {
                node {
                  id
                  data {
                    tag
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allPrismicBlog.edges;
        const tags = result.data.allPrismicTag.edges;
        const tagsWithPosts = {};
        posts.forEach(element => {
          const id = element.node.id;
          const postTags = element.node.data.tags1;
          postTags.forEach(postTag => {
            tags.forEach(tag => {
              // console.log("Tag, ", postTag.tag.document)
              if (postTag.tag.document[0].data.tag === tag.node.data.tag) {
                tagsWithPosts[tag.node.data.tag] = [];
                tagsWithPosts[tag.node.data.tag].push(id);
              }
            });
          });
          console.log(tagsWithPosts);
          createPage({
            path: `/${element.node.data.section}/${element.node.slugs[0]}`,
            component: postTemplate,
            context: {
              id
            }
          });
        });
        // tags.forEach(tag => {
        //   createPage({
        //     path: `/tag/${tag.node.data.tag}`,
        //     component: tagTemplate
        //     // context: {
        //     //   id
        //     // }
        //   });
        // });
      })
    );
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case "build-javascript":
      {
        // let components = store.getState().pages.map(page => page.componentChunkName);
        // components = _.uniq(components);
        // config.plugin("CommonsChunkPlugin", webpack.optimize.CommonsChunkPlugin, [
        //   {
        //     name: `commons`,
        //     chunks: [`app`, ...components],
        //     minChunks: (module, count) => {
        //       const vendorModuleList = []; // [`material-ui`, `lodash`];
        //       const isFramework = _.some(
        //         vendorModuleList.map(vendor => {
        //           const regex = new RegExp(`[\\\\/]node_modules[\\\\/]${vendor}[\\\\/].*`, `i`);
        //           return regex.test(module.resource);
        //         })
        //       );
        //       return isFramework || count > 1;
        //     }
        //   }
        // ]);

        config.plugin("BundleAnalyzerPlugin", BundleAnalyzerPlugin, [
          {
            analyzerMode: "static",
            reportFilename: "./report/treemap.html",
            openAnalyzer: true,
            logLevel: "error",
            defaultSizes: "gzip"
          }
        ]);

        config.loader("yaml-loader", {
          test: /\.yaml$/,
          include: path.resolve("data"),
          loader: "yaml"
        });
      }
      break;
  }

  return config;
};
// exports.modifyBabelrc = ({ babelrc }) => {
//   return {
//     ...babelrc,
//     plugins: babelrc.plugins.concat([
//       [
//         "styled-jsx/babel",
//         {
//           plugins: [
//             "styled-jsx-plugin-postcss",
//             [
//               "styled-jsx-plugin-stylelint",
//               {
//                 stylelint: {
//                   rules: {
//                     "block-no-empty": true,
//                     "color-no-invalid-hex": true,
//                     "unit-no-unknown": true,
//                     "property-no-unknown": true,
//                     "declaration-block-no-shorthand-property-overrides": true,
//                     "selector-pseudo-element-no-unknown": true,
//                     "selector-type-no-unknown": true,
//                     "media-feature-name-no-unknown": true,
//                     "no-empty-source": true,
//                     "no-extra-semicolons": true,
//                     "function-url-no-scheme-relative": true,
//                     "declaration-no-important": true,
//                     "selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["global"] }],
//                     "shorthand-property-no-redundant-values": true,
//                     "no-duplicate-selectors": null,
//                     "declaration-block-no-duplicate-properties": null,
//                     "no-descending-specificity": null
//                   }
//                 }
//               }
//             ]
//           ]
//         }
//       ],
//       [
//         "import",
//         {
//           libraryName: "antd",
//           style: "css"
//         }
//       ],
//       `syntax-dynamic-import`,
//       `dynamic-import-webpack`
//     ])
//   };
// };
