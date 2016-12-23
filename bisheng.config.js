module.exports = {
    port: 8099,
    hot: false,
    lazyLoad: true,
    source: ['./posts', './blogs'],
    root: '/bisheng-theme-one/',
    plugins: ['bisheng-plugin-description'],
    doraConfig: {
        verbose: true,
        physcisFileSystem: false

    },
    pick: {
            posts(markdownData)
            {
                return {
                    meta: markdownData.meta,
                    description: markdownData.description,
                };
            }
        }
};
