Ext.define('Evolver.view.tablet.Main', {
    extend: 'Ext.Panel',
    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'tabpanel',
                width: 160,
                docked: 'left',
                items: [
                    {
                        xtype: 'tabletPageList',
                        title: 'Pages'
                    },
                    {
                        xtype: 'tabletPostList',
                        title: 'Posts'
                    }
                ]
            },
            {
                xtype: 'container',
                html: '<img src="http://12ftguru.com/wp-content/themes/small-business/images/sb_logo.png"'
            }
        ]
    }

});