module.exports.homepage = function (req, res, next) {
  res.render("index", {
    meta: {
      title: "NodeJS Blog",
      keywords: "nodejs, handlebars, projects, full-script, life, tech stack",
      description: "Node Blog Homepage",
    },
    title: "NodeJS Blog",
    summary:
      "A product-focused front end developer based in Vancouver, BC. Developer specializing in Javascript, VueJS, NodeJS and user experience (UX) design.",
    URI: "/life/1",
    category: "Life",
  });
  // res.render("./components/news", { title: "NodeJS Blog" });
};

module.exports.postLife = function (req, res, next) {
  res.render("./pages/life", {
    meta: {
      title: "Life Blog",
      keywords: "nodejs, handlebars, projects, full-script, life",
      description: "Node Blog Life",
    },
    title: "Life Blog",
    summary: "Life content",
    URI: "/life/1",
  });
  // next();
};

module.exports.postTechStack = function (req, res, next) {
  res.render("./pages/tech-stack", {
    meta: {
      title: "Tech Blog",
      keywords: "nodejs, handlebars, projects, full-script, tech stack",
      description: "Node Blog Tech stack",
    },
    title: "Tech Blog",
    summary: "Tech content",
    URI: "/tech-stack/1",
  });
  // next();
};

module.exports.dashboard = function (req, res, next) {
  res.render("./dashboard", {
    meta: {
      title: "Dashboard",
      keywords: "dashboard, blog",
      description: "Welcome to Dashboard",
    },
    title: "Dashboard",
  });
  // next();
};

module.exports.addLog = function (req, res, next) {
  res.render("./dashboard/add-log", {
    meta: {
      title: "Dashboard / Add new log",
      keywords: "dashboard, blog",
      description: "Welcome to Dashboard",
    },
    title: "Add new log",
  });
  // next();
};
