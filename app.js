/**
 * Created with JetBrains WebStorm.
 * User: Sataporn
 * Date: 26/2/2557
 * Time: 13:48 น.
 * To change this template use File | Settings | File Templates.
 */
//app na luk EVa
Ext.application({
    name:'CarCalculate',
    views:['view_SettingAdd','view_MainApp','view_SettingEdit','view_Result'],
    models:['model_SettingAdd'],
    stores:['store_SettingAdd'],
    controllers:['controller_SettingAdd','controller_MainApp','controller_SettingEdit','controller_Result'],
    launch:function(){
        //Log for debug.
        console.log('CarCalculate start...');
        //define MainApp view as variable.
        var _viewMainApp = {
            xtype: 'wg_view_MainApp'
        };
        //define SettingAdd view as variable.
        var _viewSettingAdd = {
            xtype: 'wg_view_SettingAdd'
        };
        //define SettingEdit view as variable.
        var _viewSettingEdit = {
            xtype: 'wg_view_SettingEdit'
        };
        //define Result view as variable.
        var _viewResult = {
            xtype: 'wg_view_Result'
        };
        //Define SettingAdd store as variable.
        var _storeSettingAdd = Ext.getStore('store_SettingAdd');
        //Debug for store.
        console.log(_storeSettingAdd.data.all);
        //Debug getCount() method.
        console.log(_storeSettingAdd.data.getCount());

        if(_storeSettingAdd.data.getCount() == 0){
            //Debug true condition.
            console.log('condition true');
            //Port to screen.
//            Ext.Viewport.add([_viewMainApp,_viewSettingEdit,_viewResult]);
            Ext.Viewport.add([_viewSettingAdd,_viewMainApp,_viewSettingEdit,_viewResult]);
        }else{
            //Debug false condition.
            console.log('condition false');
            //Port to screen.
            Ext.Viewport.add([_viewMainApp,_viewSettingEdit,_viewResult]);
        }
    }
});