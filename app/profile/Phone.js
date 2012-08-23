Ext.define('Evolver.profile.Phone', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Phone',
        controllers: ['Main'],
        views: ['Main', 'PostList', 'PageList', 'PageDetails', 'PostDetails'],
    },
    isActive: function() {
        return false;
        // return Ext.os.is.Phone;
    },
    launch: function() {
        console.log('phone');
       Ext.create('Evolver.view.phone.Main', {fullscreen: true});
    }
});