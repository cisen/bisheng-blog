module.exports = {
  home: '/',
  sitename: 'ReactBoot Update Log',
  // tagline: 'The one theme for bisheng',
  // navigation: [{
  //   title: 'BiSheng',
  //   link: 'https://github.com/benjycui/bisheng',
  // }],
  // footer: 'Copyright and so on...',
  // hideBisheng: true,
  github: '',
  routes: [{
    path: '/',
    component: './template/Archive',
  }, {
    path: '/posts/:post',
    component: './template/Post',
  }, {
    path: '/blogs/:post',
    component: './template/Post',
  }, {
    path: '/tags',
    component: './template/TagCloud',
    dataPath: '/',
  }],
};
