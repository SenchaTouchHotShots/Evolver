Ext.define('Evolver.view.phone.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.phonemain',
    id: 'mainView',
    config: {
        tabBar: {
            docked: 'bottom'
        },
        items: [
            {
                xtype: 'navigationview',
                iconCls: 'quote_black2',
                iconMask: true,
                title: 'Posts',
                items: [
                  {xtype: 'postlist', title: 'Posts List'}
                ]
            },
            {
                xtype: 'navigationview',
                title: 'Pages',
                iconCls: 'info',
                iconMask: true,
                items: [
                  {xtype: 'pagelist', title: 'Pages List'}
                ]
            }
        ]
    }

});