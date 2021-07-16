
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Date$_47_$Time_ff021000000000000014     = 'ff021000000000000014';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
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
const _Runnable_Input_Default_Value_01740c5d4ae4b520dd02 = '01740c5d4ae4b520dd02';
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
const _instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425 = db.assignTag('01783b8342bb01350425');
const _instance_of_Runnable_Input____date_to_compare_01783b902f3067a0c900 = db.assignTag('01783b902f3067a0c900');
const _instance_of_Runnable_Input____comparison_date_01783b90485ef5f763bf = db.assignTag('01783b90485ef5f763bf');
const _instance_of_Runnable_Input____strictly_01783b906317f8b4cbe3 = db.assignTag('01783b906317f8b4cbe3');
const _instance_of_Runnable_Output____is_date_before_01783b9083c8b5f5e61c = db.assignTag('01783b9083c8b5f5e61c');
const _instance_of_Documentation_Function_Metadata_017a1f11c9119dae82f8 = db.assignTag('017a1f11c9119dae82f8');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Datetime_0179b2690f49a1f52652           = '0179b2690f49a1f52652';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425
db.newModel(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425, 'Is DateTime Before') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        ['01621fb84e320000f001']:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Is DateTime Before',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425);
// :_instance_of_Runnable_Input____date_to_compare_01783b902f3067a0c900
db.newInstance(_instance_of_Runnable_Input____date_to_compare_01783b902f3067a0c900)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'date to compare',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____comparison_date_01783b90485ef5f763bf
db.newInstance(_instance_of_Runnable_Input____comparison_date_01783b90485ef5f763bf)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'comparison date',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____strictly_01783b906317f8b4cbe3
db.newInstance(_instance_of_Runnable_Input____strictly_01783b906317f8b4cbe3)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'strictly',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:true,
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____is_date_before_01783b9083c8b5f5e61c
db.newInstance(_instance_of_Runnable_Output____is_date_before_01783b9083c8b5f5e61c)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'is date before',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_017a1f11c9119dae82f8
db.newInstance(_instance_of_Documentation_Function_Metadata_017a1f11c9119dae82f8)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01783b90485ef5f763bf-comparison date | Date/Time | The reference date. |\n| 01783b902f3067a0c900-date to compare | Date/Time | The date we want to know if it is before another date. |\n| 01783b906317f8b4cbe3-strictly | Boolean | To choose if two equals dates should return true, or not. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01783b9083c8b5f5e61c-is date before | Boolean | The result. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nReturns true if the datetime object is before another datetime object, false otherwise.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:' Returns a boolean indicating whether a datetime is before another.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____date_to_compare_01783b902f3067a0c900);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____comparison_date_01783b90485ef5f763bf);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____strictly_01783b906317f8b4cbe3);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____is_date_before_01783b9083c8b5f5e61c);
db.assign(_instance_of_Runnable_Input____date_to_compare_01783b902f3067a0c900, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Date$_47_$Time_ff021000000000000014              );
db.assign(_instance_of_Runnable_Input____comparison_date_01783b90485ef5f763bf, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Date$_47_$Time_ff021000000000000014              );
db.assign(_instance_of_Runnable_Input____strictly_01783b906317f8b4cbe3, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Runnable_Output____is_date_before_01783b9083c8b5f5e61c, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_017a1f11c9119dae82f8);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____date_to_compare_01783b902f3067a0c900);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____comparison_date_01783b90485ef5f763bf);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____strictly_01783b906317f8b4cbe3);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____is_date_before_01783b9083c8b5f5e61c);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_017a1f11c9119dae82f8);
db.assignOptional(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425, _Object_gooRel_ff022000000000000003, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425, _GOO_parentGooRel_ff02200000000000000u, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Is_DateTime_Before_01783b8342bb01350425);
