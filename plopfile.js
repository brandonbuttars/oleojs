module.exports = plop => {
  // Path Variables
  let path = {
    classes: 'src/scripts/classes/',
    components: 'src/components/',
    css: 'dist/styles/oleo.css',
    cssmin: 'dist/styles/oleo.min.css',
    helpers: 'src/scripts/helpers/',
    js: 'dist/scripts/oleo.js',
    jsmin: 'dist/scripts/oleo.min.js',
    modules: 'src/scripts/modules/',
    styles: 'src/styles/',
    templates: 'build/templates/'
  };

  // Helpers
  // plop.addHelper();

  // Generators
  plop.setGenerator('Module', {
    description: 'Generator to create an ES2015 Module.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What do you want to name this module?',
        validate: value => {
          if ((/.+/).test(value)) { return true; }
          return 'name is required';
        }
      }
    ],
    actions: data => {
      let actions = [];
      // Create JS File
      actions.push({
        type: 'add',
        path: path.modules +'{{dashCase name}}/index.js',
        templateFile: path.templates +'modules/module.js'
      });
      // Create HTML File
      actions.push({
        type: 'add',
        path: path.modules +'{{dashCase name}}/index.html',
        templateFile: path.templates +'modules/index.html'
      });
      // Create test file
      actions.push({
        type: 'add',
        path: path.modules +'{{dashCase name}}/test.spec.js',
        templateFile: path.templates +'modules/test.js'
      });

      return actions;
    }
  });

  plop.setGenerator('Component', {
    description: 'Generator to create an ES2015 Riot Components.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What do you want to name this component?',
        validate: value => {
          if ((/.+/).test(value)) { return true; }
          return 'name is required';
        }
      },
      {
        type: 'list',
        name: 'type',
        message: 'What type of a component is this?',
        choices: [
          { name: 'Block', value: 'blocks' },
          { name: 'Branding', value: 'branding' },
          { name: 'Communication', value: 'communication' },
          { name: 'Control', value: 'controls' },
          { name: 'Date/Time', value: 'date-time' },
          { name: 'Filter', value: 'filters' },
          { name: 'Layout', value: 'layout' },
          { name: 'List', value: 'lists' },
          { name: 'Media', value: 'media' },
          { name: 'Menu', value: 'menus' },
          { name: 'Miscellaneous', value: 'misc' },
          { name: 'Pagination', value: 'pagination' },
          { name: 'Profile', value: 'profile' },
          { name: 'Social', value: 'social' },
          { name: 'Table', value: 'tables' },
          { name: 'Theme', value: 'themes' },
          { name: 'Tool', value: 'tools' },
          { name: 'Typography', value: 'typography' }
        ]
      }
    ],
    actions: data => {
      let actions = [];
      // Create JS File
      actions.push({
        type: 'add',
        path: path.components +'{{type}}/{{dashCase name}}/index.js',
        templateFile: path.templates +'components/component.js'
      });
      // Create HTML File
      actions.push({
        type: 'add',
        path: path.components +'{{type}}/{{dashCase name}}/index.html',
        templateFile: path.templates +'components/index.html'
      });
      // Create test file
      actions.push({
        type: 'add',
        path: path.components +'{{type}}/{{dashCase name}}/test.spec.js',
        templateFile: path.templates +'components/test.js'
      });
      // Create SCSS file
      actions.push({
        type: 'add',
        path: path.components +'{{type}}/{{dashCase name}}/_{{dashCase name}}.scss',
        templateFile: path.templates +'components/_style.scss'
      });
      // Append component import to component.js
      actions.push({
        type: 'modify',
        path: path.components +'index.js',
        pattern: /(\/\/ PLOP)/g,
        template: 'import \'./{{type}}/{{dashCase name}}\';\n$1'
      });
      // Append import to SCSS
      actions.push({
        type: 'modify',
        path: path.styles +'_components.scss',
        pattern: /(\/\/ PLOP)/g,
        template: '@import \'../'+ path.components +'{{type}}/{{dashCase name}}/{{dashCase name}}\';\n$1'
      });

      return actions;
    }
  });

  plop.setGenerator('Helper', {
    description: 'Generator to create an ES2015 helper scripts.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What do you want to name this helper?',
        validate: value => {
          if ((/.+/).test(value)) { return true; }
          return 'name is required';
        }
      }
    ],
    actions: data => {
      let actions = [];
      // Create JS File
      actions.push({
        type: 'add',
        path: path.helpers +'{{dashCase name}}/index.js',
        templateFile: path.templates +'helpers/helper.js'
      });
      // Create HTML File
      actions.push({
        type: 'add',
        path: path.helpers +'{{dashCase name}}/index.html',
        templateFile: path.templates +'helpers/index.html'
      });
      // Create test file
      actions.push({
        type: 'add',
        path: path.helpers +'{{dashCase name}}/test.spec.js',
        templateFile: path.templates +'helpers/test.js'
      });

      return actions;
    }
  });
};
