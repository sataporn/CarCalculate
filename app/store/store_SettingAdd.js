/**
 * Created with JetBrains WebStorm.
 * User: Sataporn
 * Date: 26/2/2557
 * Time: 13:51 น.
 * To change this template use File | Settings | File Templates.
 */
//d e a c
Ext.define('CarCalculate.store.store_SettingAdd',{
    extend:'Ext.data.Store',
    requires:['Ext.data.proxy.LocalStorage'],
    config:{
        model:'CarCalculate.model.model_SettingAdd',
        autoLoad:true,
        proxy:{
            id:'CarCalculate-Local-ID',
            type:'localstorage'
        }
    }
});