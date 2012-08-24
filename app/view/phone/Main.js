Ext.define('Evolver.view.phone.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.phonemain',
    config: {
        tabBar: {
            docked: 'bottom',
            ui: 'light'
        },
        items: [
            {
                xtype: 'navigationview',
                title: 'Posts',
                iconCls: 'quote_black2',
                iconMask: true,
                items: [
                  {xtype: 'phonepostlist'}
                ]
            },
            {
                xtype: 'navigationview',
                title: 'Pages',
                iconCls: 'info',
                iconMask: true,
                items: [
                  {xtype: 'phonepagelist'}
                ]
            }
        ]
    }

});