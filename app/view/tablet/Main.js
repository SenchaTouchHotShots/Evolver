Ext.define('Evolver.view.tablet.Main', {
    extend: 'Ext.Panel',
    id: 'mainView',
    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'tabpanel',
                width: 200,
                docked: 'left',
                items: [
                    {
                        xtype: 'pagelist',
                        title: 'Pages'
                    },
                    {
                        xtype: 'postlist',
                        title: 'Posts'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'vbox',
                scrollable: true,
                items: [
                    {
                        xtype: 'container',
                        layout: 'fit',
                        id: 'banner',
                        height: 140,
                        html: '<img src="http://12ftguru.com/wp-content/themes/small-business/images/sb_logo.png">'
                    },
                    {
                        xtype: 'pagedetails'
                    },
                    {
                        xtype: 'postdetails',
                        hidden: true
                    }
                ]
            }


        ]
    }

});