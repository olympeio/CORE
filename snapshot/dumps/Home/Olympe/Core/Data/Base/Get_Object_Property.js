
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Property_ff021000000000000005           = 'ff021000000000000005';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
const _Documentation_Function_Metadata_errors_0172c6ae82952a74193f = '0172c6ae82952a74193f';
const _Documentation_Function_Metadata_inputs_0172c6ae82952a74193d = '0172c6ae82952a74193d';
const _Documentation_Function_Metadata_outputs_0172c6ae82952a74193e = '0172c6ae82952a74193e';
const _Documentation_Metadata_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_Metadata_toolTip_01703376c4a81c0e9d91 = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Runnable_Input____Property_01632a1a376f332a0d31 = db.assignTag('01632a1a376f332a0d31');
const _instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0 = db.assignTag('01632a1a376f822b77c0');
const _instance_of_Runnable_Output____Value_01632a1a376f8d4e2550 = db.assignTag('01632a1a376f8d4e2550');
const _instance_of_Runnable_Input____Object_01632a1a376fd0496993 = db.assignTag('01632a1a376fd0496993');
const _instance_of_Documentation_Function_Metadata_d0c32a1a376f822b77c0 = db.assignTag('d0c32a1a376f822b77c0');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Base_0179b26837d01a7c3cdc               = '0179b26837d01a7c3cdc';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0
db.newModel(_instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0, 'Get Object Property') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Get Object Property',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0);
// :_instance_of_Runnable_Input____Property_01632a1a376f332a0d31
db.newInstance(_instance_of_Runnable_Input____Property_01632a1a376f332a0d31)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Property',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Value_01632a1a376f8d4e2550
db.newInstance(_instance_of_Runnable_Output____Value_01632a1a376f8d4e2550)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Value',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Object_01632a1a376fd0496993
db.newInstance(_instance_of_Runnable_Input____Object_01632a1a376fd0496993)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Object',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c32a1a376f822b77c0
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c32a1a376f822b77c0)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01632a1a376fd0496993-Object | Object | The object. |\n| 01632a1a376f332a0d31-Property | Property | The property. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01632a1a376f8d4e2550-Value | Object | The value of the property for that object. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nAccess an object\'s property value.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Get the property value of an object.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Property_01632a1a376f332a0d31);
db.assign(_instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Object_01632a1a376fd0496993);
db.assign(_instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Value_01632a1a376f8d4e2550);
db.assign(_instance_of_Runnable_Input____Property_01632a1a376f332a0d31, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Property_ff021000000000000005                    );
db.assign(_instance_of_Runnable_Output____Value_01632a1a376f8d4e2550, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____Object_01632a1a376fd0496993, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c32a1a376f822b77c0);
db.assign(_instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Property_01632a1a376f332a0d31);
db.assign(_instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Value_01632a1a376f8d4e2550);
db.assign(_instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Object_01632a1a376fd0496993);
db.assign(_instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c32a1a376f822b77c0);
db.assignOptional(_instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0, _Object_gooRel_ff022000000000000003, _Base_0179b26837d01a7c3cdc);
db.assignOptional(_instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0, _GOO_parentGooRel_ff02200000000000000u, _Base_0179b26837d01a7c3cdc);
db.assignOptional(_Base_0179b26837d01a7c3cdc, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0);
db.assignOptional(_Base_0179b26837d01a7c3cdc, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Get_Object_Property_01632a1a376f822b77c0);
