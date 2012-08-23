Ext.define('Evolver.model.Page', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'title',
                type: 'string'
            },
            {
                name: 'content',
                type: 'string'
            },
            {
                name: 'image',
                type: 'string'
            },
            {
                dateFormat: 'm/d/Y',
                name: 'updated',
                type: 'date'
            }
        ]
    }
});