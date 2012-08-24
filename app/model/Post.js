Ext.define('Evolver.model.Post', {
    extend: 'Ext.data.Model',
    idProperty: 'guid',
    config: {
        fields: [
            {
                name: 'guid',
                type: 'string'
            },
            {
                //<pubDate>Wed, 17 Aug 2011 15:44:57 +0000</pubDate>
                dateFormat: 'D, d M Y H:i:s Z',
                name: 'pubDate',
                type: 'date'
            },
            {
                name: 'title',
                type: 'string'
            },
            {
                name: 'author',
                mapping: 'creator',
                type: 'string'
            },
            {
                name: 'content',
                mapping: 'encoded',
                type: 'string'
            },
            {
                name: 'category',
                type: 'string'
            },
            {
                name: 'link',
                type: 'string'
            }
        ]
    }
});