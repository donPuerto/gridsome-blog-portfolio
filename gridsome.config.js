// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Tag', // Required
        baseDir: './content/tags', // Where .md files are located
        pathPrefix: '/tags', // Add route prefix. Optional
        template: './src/templates/Tag.vue', // Optional
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post', // Required
        baseDir: './content/programming', // Where .md files are located
        pathPrefix: '/programming', // Add route prefix. Optional
        template: './src/templates/Post.vue', // Optional
        route: "/blog/:slug",
        refs: {
          tags: 'Tag'
        },
        
        
      },
    },
    
  ],
  transformers: {
    plugins: ["@gridsome/remark-prismjs"]
  }
  
};
