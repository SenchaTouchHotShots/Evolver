Ext.define('Evolver.view.tablet.Main', {
    extend: 'Ext.Panel',
    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'tabpanel',
                width: 200,
                docked: 'left',
                items: [
                    {
                        xtype: 'tabletpagelist',
                        title: 'Pages'
                    },
                    {
                        xtype: 'tabletpostlist',
                        title: 'Posts'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'container',
                        layout: 'fit',
                        id: 'banner',
                        height: 140,
                        html: '<img src="http://12ftguru.com/wp-content/themes/small-business/images/sb_logo.png">'
                    },
                    {
                        xtype: 'container',
                        layout: 'fit',
                        id: 'contentArea',
                        padding: 10,
                        html: 'This is where the content goes'
                    }
                ]
            }


        ]
    }

});