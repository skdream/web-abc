module.exports = {
  llang: "zh-CN",
  title: "前端学习笔记",
  description: "前端学习笔记,react,js,html,ci/cd,nodejs",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "meta",
      {
        name: "keywords",
        content: "web前端,HTML5,CSS3,Javascript,SVG,canvas,react",
      },
    ],
    ["meta", { name: "anthor", content: "jsir" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
  themeConfig: {
    repo: "skdream/web-abc",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "Github",
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: "skdream/web-abc",
    docsDir: "docs",
    docsBranch: "main",
    // 默认是 false, 设置为 true 来启用
    editLinks: false,
    // 默认为 "Edit this page"
    editLinkText: "帮助我们改善此页面！",
    // displayAllHeaders: true,
    lastUpdated: '上次更新', // string | boolean
    nav: [
      { text: "JavaScript", link: "/javascript/" },
      // { text: "nodejs", link: "/nodejs/" },
    ],
    sidebar: [
      {
        title: "react.js系列",
        collapsed: false,
        // children: [["react/diff", "react diff 原理"]],
      },
      {
        title: "Javascript系列",
        collapsed: false,
        // children: [["javascript/bind", "如何实现bind函数"]],
      },
    ],
  },
  plugins: [
    ["@vuepress/back-to-top"],
    ['@vuepress/last-updated'],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-9305024-3",
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
  },
};
