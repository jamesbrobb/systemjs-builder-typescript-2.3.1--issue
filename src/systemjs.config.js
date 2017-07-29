System.config({

    warnings: true,

    transpiler: 'typescript',

    paths: {
        'main': 'main.ts',
        'angular': './node_modules/angular/angular.js'
    },

    map: {
        'typescript': './node_modules/typescript/lib/typescript.js'
    },

    meta: {
        'angular': {
            format: 'global',
            exports: 'angular'
        }
    }
});