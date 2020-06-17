// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Don Puerto',
  siteDescription:
    'A simple, hackable & minimalistic starter for Gridsome that uses Markdown for content.',
  plugins: [
    {
      // Tag
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Tag',
        baseDir: './documents/tags', // Where .md files are located
        pathPrefix: '/tag',
        template: './src/templates/Tag.vue', // Optional
        refs: {},
      },
    },
    {
      // Author
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Author',
        baseDir: './documents/authors', // Where .md files are located
        pathPrefix: '/author',
        template: './src/templates/Author.vue', // Optional
      },
    },
    {
      // Post
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post',
        baseDir: './documents/programming/categories', // Where .md files are located
        pathPrefix: '/blog',
        template: './src/templates/Post.vue', // Optional
        route: '/blog/:slug',
        refs: {
          tags: 'Tag',          
          author: 'Author'
        },
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
          plugins: ['@gridsome/remark-prismjs'],
        },
      },
    },
  ],
};
