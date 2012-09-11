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
                dateFormat: 'Y-m-d H:i:s',
                name: 'modified',
                type: 'date'
            },
            {
                name: 'url',
                type: 'string'
            }
        ]
    }
});