Ext.define('Evolver.view.phone.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.phonemain',
    title: 'WTF?',
    config: {
        tabBar: {
            docked: 'bottom',
            ui: 'light'
        },
        items: [
            {
                xtype: 'navigationview',
                title: 'Posts',
                iconCls: 'info',
                items: [
                  {xtype: 'phonepostlist'}
                ]
            },
            {
                xtype: 'navigationview',
                title: 'Pages',
                iconCls: 'info',
                items: [
                  {xtype: 'phonepagelist'}
                ]
            }
        ]
    }

});