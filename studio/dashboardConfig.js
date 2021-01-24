export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600df0fdd04e2f93981274bb',
                  title: 'Sanity Studio',
                  name: 'sanity-drews-portfolio-studio',
                  apiId: '1382aced-fce3-448c-a2ef-6d33be6c2dbb'
                },
                {
                  buildHookId: '600df0fdd04e2f8922127761',
                  title: 'Blog Website',
                  name: 'sanity-drews-portfolio',
                  apiId: '2da6bdba-ba33-48fe-b2eb-904e55901db1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jedidrew42/sanity-drews-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-drews-portfolio.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
