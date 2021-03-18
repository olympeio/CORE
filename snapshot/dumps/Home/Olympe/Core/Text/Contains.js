
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
let _Boolean_ff021000000000000012            = 'ff021000000000000012';
let _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
let _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
let _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
let _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
let _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
let _String_ff021000000000000011             = 'ff021000000000000011';


// Definition of tags of defined properties
let _Documentation_Function_Metadata_errors_0172c6ae82952a74193f = '0172c6ae82952a74193f';
let _Documentation_Function_Metadata_inputs_0172c6ae82952a74193d = '0172c6ae82952a74193d';
let _Documentation_Function_Metadata_outputs_0172c6ae82952a74193e = '0172c6ae82952a74193e';
let _Documentation_Metadata_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
let _Documentation_Metadata_toolTip_01703376c4a81c0e9d91 = '01703376c4a81c0e9d91';
let _Object_name_ff023000000000000011             = 'ff023000000000000011';
let _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
let _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
let _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
let _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
let _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
let _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
let _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
let _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
let _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
let _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances
let _instance_of_Coded_Function_model____Contains_01784489130ecd734b15 = db.assignTag('01626bf8811fa380be1c');
let _instance_of_Runnable_Input____s1_0178449143c5ce243201 = db.assignTag('01626bf9b3b43525c946');
let _instance_of_Runnable_Input____s2_0178449153718bc3a2e4 = db.assignTag('01626bfb12f7ee3b833a');
let _instance_of_Runnable_Output____s1_contains$_40_$s2$_41_$_017844919f59a5de7853 = db.assignTag('01626bfb92937330648b');
let _instance_of_Documentation_Function_Metadata_01784491a601ba17de88 = db.assignTag('01784491a601ba17de88');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
let _Text_0178445ee2a56bf00fd6               = '0178445ee2a56bf00fd6';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Contains_01784489130ecd734b15
db.newModel(_instance_of_Coded_Function_model____Contains_01784489130ecd734b15, 'Contains') // tag and name of the model
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Function_model____Contains_01784489130ecd734b15, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Contains',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Contains_01784489130ecd734b15);
// :_instance_of_Runnable_Input____s1_0178449143c5ce243201
db.newInstance(_instance_of_Runnable_Input____s1_0178449143c5ce243201)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Contains_01784489130ecd734b15)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s1',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____s2_0178449153718bc3a2e4
db.newInstance(_instance_of_Runnable_Input____s2_0178449153718bc3a2e4)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Contains_01784489130ecd734b15)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s2',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____s1_contains$_40_$s2$_41_$_017844919f59a5de7853
db.newInstance(_instance_of_Runnable_Output____s1_contains$_40_$s2$_41_$_017844919f59a5de7853)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Contains_01784489130ecd734b15)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s1.contains(s2)',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_01784491a601ba17de88
db.newInstance(_instance_of_Documentation_Function_Metadata_01784491a601ba17de88)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 0178449143c5ce243201-s1 | String | The string to search in. |\n| 0178449153718bc3a2e4-s2 | String | The string to search for. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 017844919f59a5de7853-s1.contains(s2) | Boolean | `true` if s2 is found anywhere in s1. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nDetermines whether one string may be found within another string, returning true or false as appropriate.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Checks whether a string contains another one.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Contains_01784489130ecd734b15, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____s1_0178449143c5ce243201);
db.assign(_instance_of_Coded_Function_model____Contains_01784489130ecd734b15, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____s2_0178449153718bc3a2e4);
db.assign(_instance_of_Coded_Function_model____Contains_01784489130ecd734b15, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____s1_contains$_40_$s2$_41_$_017844919f59a5de7853);
db.assign(_instance_of_Runnable_Input____s1_0178449143c5ce243201, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____s2_0178449153718bc3a2e4, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____s1_contains$_40_$s2$_41_$_017844919f59a5de7853, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Coded_Function_model____Contains_01784489130ecd734b15, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_01784491a601ba17de88);
db.assign(_instance_of_Coded_Function_model____Contains_01784489130ecd734b15, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____s1_0178449143c5ce243201);
db.assign(_instance_of_Coded_Function_model____Contains_01784489130ecd734b15, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____s2_0178449153718bc3a2e4);
db.assign(_instance_of_Coded_Function_model____Contains_01784489130ecd734b15, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____s1_contains$_40_$s2$_41_$_017844919f59a5de7853);
db.assignOptional(_instance_of_Coded_Function_model____Contains_01784489130ecd734b15, _Object_gooRel_ff022000000000000003, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Contains_01784489130ecd734b15);
db.assignOptional(_instance_of_Coded_Function_model____Contains_01784489130ecd734b15, _GOO_parentGooRel_ff02200000000000000u, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Contains_01784489130ecd734b15);
