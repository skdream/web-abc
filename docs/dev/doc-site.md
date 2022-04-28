# 静态网站搭建程序对比

Docusaurus 设计之初就极度重视开发者及贡献者的体验。

⚛️ 用 💚 使用 React 打造:
使用 React 扩展与自定义
提供您自己的 React 组件，完全掌控网站的浏览体验
Pluggable:
使用基础模板搭建网站，随后使用进阶功能及插件
开放您的插件源码，与社群共享
✂️ 开发者体验:
立即撰写您的软件文档
统一配置文件可被轻松维护
Hot reloading with lightning-fast incremental build on changes
基于路由的代码及数据拆分
轻松发布至 GitHub Pages、Netlify、Vercel 及其他部署服务
Our shared goal—to help your users quickly find what they need and understand your products better. We share our best practices to help you build your docs site right and well.

🎯 SEO 友好：
HTML files are statically generated for every possible path.
Page-specific SEO to help your users land on your official docs directly relating their problems at hand.
📝 由 MDX 驱动：
Write interactive components via JSX and React embedded in markdown.
Share your code in live editors to get your users to love your products on the spot.
🔍 搜索：全站均可被搜索。
💾 Document Versioning: Helps you keep documentation in sync with project releases.
🌍 国际化（i18n）：将您的网站翻译至多国语言。
Docusaurus 2 is born to be compassionately accessible to all your users, and lightning-fast.

⚡️ Lightning-fast. Docusaurus 2 follows the PRPL Pattern that makes sure your content loads blazing fast.
🦖 Accessible. Attention to accessibility, making your site equally accessible to all users.
设计理念
Little to learn. Docusaurus should be easy to learn and use as the API is quite small. 即使需要花大量时间写更多代码，大多数功能应仍可由用户完成。 没有抽象比错误抽象更好，我们不希望用户去捣鼓错误的抽象。 Mandatory talk—Minimal API Surface Area.
Intuitive. Users will not feel overwhelmed when looking at the project directory of a Docusaurus project or adding new features. 软件应简单直观，用户则可轻松扩展。
Layered architecture. The separations of concerns between each layer of our stack (content/theming/styling) should be clear—well-abstracted and modular.
Sensible defaults. Common and popular performance optimizations and configurations will be done for users but they are given the option to override them.
No vendor lock-in. Users are not required to use the default plugins or CSS, although they are highly encouraged to. Certain core infrastructures like React Loadable and React Router cannot be swapped because we do default performance optimization on them, but not higher-level ones. Choice of Markdown engines, CSS frameworks, CSS methodology, and other architectures will be entirely up to users.
We believe that, as developers, knowing how a library works helps us become better at using it. Hence we're dedicating effort to explaining the architecture and various components of Docusaurus with the hope that users reading it will gain a deeper understanding of the tool and be even more proficient in using it.

与其他工具的对比
在所有的静态网站生成器中，Docusaurus 独树一帜，专注于文档站点且有着您需要的诸多开箱即用功能。

We've also studied other main static site generators and would like to share our insights on the comparison, hopefully helping you navigate through the prismatic choices out there.

Gatsby
Gatsby is packed with a lot of features, has a rich ecosystem of plugins, and is capable of doing everything that Docusaurus does. 当然，这带来了较高的学习曲线。 Gatsby 在许多方面做得都很出色，且适合构建许多类型的网站。 另一方面，Docusaurus 尝试将一件事做到尽善尽美——成为最好的内容撰写及发布工具。

GraphQL 是 Gatsby 的核心，但您并不需要它来构建一个站点。 而在大多数静态网站中，您更不需要 GraphQL 所提供的灵活性。

Docusaurus 2 的许多方面都被 Gatsby 的出色之处所启发，这是一个优秀的替代品。

Docz is a Gatsby theme to build documentation websites. 它的功能与 Docusaurus 相比要匮乏。

Next.js
Next.js 是另一款极为热门的 React 混合框架。 它可以帮助您构建出色的文档站点，但并不着重于文档功能本身，而且需要您手动实现 Docusaurus 所自带的功能。

Nextra is an opinionated static site generator built on top of Next.js. 它的功能与 Docusaurus 相比要匮乏。

VuePress
VuePress 与 Docusaurus 有着许多共同点——都非常专注于以内容为中心的网站，且都在安装后提供量身定制的文档特性。 但是，VuePress 由 Vue 驱动，而 Docusaurus 则是由 React 驱动。 若您想要基于 Vue 的解决方案，这将是您的不二之选。

MkDocs
MkDocs is a popular Python static site generator with value propositions similar to Docusaurus.

It is a good option if you don't need a single-page application and don't plan to leverage React.

Material for MkDocs 是一款很好看的主题。

Docsify
Docsify 让您能轻松创建文档网站，但其并不是一款静态网站生成器，且未经搜索引擎优化。

GitBook
GitBook has a very clean design and has been used by many open source projects. With its focus shifting towards a commercial product rather than an open-source tool, many of its requirements no longer fit the needs of open source projects' documentation sites. 结果就是，许多项目转用了其他产品。 您也许在此处听说过 Redux 转投 Docusaurus 怀抱的事情。

目前，GitBook 仅向开源及非营利团队提供。 Docusaurus 则对所有人免费。

Jekyll
Jekyll 是现有的一款成熟且优秀的静态网站生成器——实际上，在 Docusaurus 诞生之前，Facebook 的诸多开源站点都是使用 Jekyll 构建而成！ 它的上手难度极低。 我们想要为您带来与使用 Jekyll 构建静态站点类似的开发者体验。

同静态生成的 HTML 及使用` <script />` 标签所添加的交互性相比，Docusaurus 站点为 React 应用程序。 Using modern JavaScript ecosystem tooling, we hope to set new standards on doc sites' performance, asset building pipeline and optimizations, and ease to set up.