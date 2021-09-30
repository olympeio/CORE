
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Date$_47_$Time_ff021000000000000014     = 'ff021000000000000014';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
const _Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94 = '01703376c4a81c0e9d94';
const _Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001 = '01621fb84e320000f001';
const _Documentation_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_summary_01703376c4a81c0e9d91   = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_Input_Default_Value_01740c5d4ae4b520dd02 = '01740c5d4ae4b520dd02';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Documentation_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf = db.assignTag('01783b830eb52a7e2ddf');
const _instance_of_Runnable_Input____date_to_compare_01783b8e96323fc0768a = db.assignTag('01783b8e96323fc0768a');
const _instance_of_Runnable_Input____comparison_date_01783b8ea957143560bd = db.assignTag('01783b8ea957143560bd');
const _instance_of_Runnable_Output____is_date_after_01783b8eced7cef47184 = db.assignTag('01783b8eced7cef47184');
const _instance_of_Runnable_Input____strictly_01783b8f85f3c547c654 = db.assignTag('01783b8f85f3c547c654');
const _instance_of_Documentation_017b35893b30d57d9245 = db.assignTag('017b35893b30d57d9245');
const _instance_of_Documentation_017b35893ec8530baa09 = db.assignTag('017b35893ec8530baa09');
const _instance_of_Documentation_017b35893ec91c850115 = db.assignTag('017b35893ec91c850115');
const _instance_of_Documentation_017b35893ecd2f718dbf = db.assignTag('017b35893ecd2f718dbf');
const _instance_of_Documentation_017b3589426a87cad766 = db.assignTag('017b3589426a87cad766');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Datetime_0179b2690f49a1f52652           = '0179b2690f49a1f52652';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf
db.newModel(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf, 'Is DateTime After') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Is DateTime After',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf);
// :_instance_of_Runnable_Input____date_to_compare_01783b8e96323fc0768a
db.newInstance(_instance_of_Runnable_Input____date_to_compare_01783b8e96323fc0768a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'date to compare',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____comparison_date_01783b8ea957143560bd
db.newInstance(_instance_of_Runnable_Input____comparison_date_01783b8ea957143560bd)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'comparison date',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____is_date_after_01783b8eced7cef47184
db.newInstance(_instance_of_Runnable_Output____is_date_after_01783b8eced7cef47184)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'is date after',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____strictly_01783b8f85f3c547c654
db.newInstance(_instance_of_Runnable_Input____strictly_01783b8f85f3c547c654)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'strictly',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:true,
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b30d57d9245
db.newInstance(_instance_of_Documentation_017b35893b30d57d9245)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Returns true if the datetime object is after another datetime object, false otherwise.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Returns a boolean indicating whether a datetime is after another.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ec8530baa09
db.newInstance(_instance_of_Documentation_017b35893ec8530baa09)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The date we want to know if it is after another date.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ec91c850115
db.newInstance(_instance_of_Documentation_017b35893ec91c850115)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The reference date.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ecd2f718dbf
db.newInstance(_instance_of_Documentation_017b35893ecd2f718dbf)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'To choose if two equals dates should return true, or not.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589426a87cad766
db.newInstance(_instance_of_Documentation_017b3589426a87cad766)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The result.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____date_to_compare_01783b8e96323fc0768a);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____comparison_date_01783b8ea957143560bd);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____strictly_01783b8f85f3c547c654);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____is_date_after_01783b8eced7cef47184);
db.assign(_instance_of_Runnable_Input____date_to_compare_01783b8e96323fc0768a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Date$_47_$Time_ff021000000000000014              );
db.assign(_instance_of_Runnable_Input____comparison_date_01783b8ea957143560bd, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Date$_47_$Time_ff021000000000000014              );
db.assign(_instance_of_Runnable_Output____is_date_after_01783b8eced7cef47184, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Runnable_Input____strictly_01783b8f85f3c547c654, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Documentation_017b35893b30d57d9245   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf);
db.assign(_instance_of_Documentation_017b35893ec8530baa09   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____date_to_compare_01783b8e96323fc0768a);
db.assign(_instance_of_Documentation_017b35893ec91c850115   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____comparison_date_01783b8ea957143560bd);
db.assign(_instance_of_Documentation_017b35893ecd2f718dbf   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____strictly_01783b8f85f3c547c654);
db.assign(_instance_of_Documentation_017b3589426a87cad766   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____is_date_after_01783b8eced7cef47184);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____date_to_compare_01783b8e96323fc0768a);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____comparison_date_01783b8ea957143560bd);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____is_date_after_01783b8eced7cef47184);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____strictly_01783b8f85f3c547c654);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b30d57d9245   );
db.assign(_instance_of_Runnable_Input____date_to_compare_01783b8e96323fc0768a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ec8530baa09   );
db.assign(_instance_of_Runnable_Input____comparison_date_01783b8ea957143560bd, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ec91c850115   );
db.assign(_instance_of_Runnable_Output____is_date_after_01783b8eced7cef47184, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589426a87cad766   );
db.assign(_instance_of_Runnable_Input____strictly_01783b8f85f3c547c654, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ecd2f718dbf   );
db.assignOptional(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf, _Object_gooRel_ff022000000000000003, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf, _GOO_parentGooRel_ff02200000000000000u, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Is_DateTime_After_01783b830eb52a7e2ddf);
