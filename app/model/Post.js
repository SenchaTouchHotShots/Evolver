Ext.define('Evolver.model.Post', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                dateFormat: 'm/d/Y',
                name: 'date',
                type: 'date'
            },
            {
                name: 'title',
                type: 'string'
            },
            {
                name: 'author',
                type: 'string'
            },
            {
                name: 'content',
                type: 'string'
            },
            {
                name: 'category',
                type: 'string'
            }
        ]
    }
});