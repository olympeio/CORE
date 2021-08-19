
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Date$_47_$Time_ff021000000000000014     = 'ff021000000000000014';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
const _Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94 = '01703376c4a81c0e9d94';
const _Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001 = '01621fb84e320000f001';
const _Documentation_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_summary_01703376c4a81c0e9d91   = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
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
const _instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6 = db.assignTag('0166f7efa33f8a310dd6');
const _instance_of_Runnable_Input____datetime_0166f7efa4576183817c = db.assignTag('0166f7efa4576183817c');
const _instance_of_Runnable_Input____duration_0166f7efa576d579d0c3 = db.assignTag('0166f7efa576d579d0c3');
const _instance_of_Runnable_Output____datetime_0166f7f162e274be785b = db.assignTag('0166f7f162e274be785b');
const _instance_of_Documentation_017b35893b2e76507584 = db.assignTag('017b35893b2e76507584');
const _instance_of_Documentation_017b35893ec54cd7fba8 = db.assignTag('017b35893ec54cd7fba8');
const _instance_of_Documentation_017b35893ec64d8f5513 = db.assignTag('017b35893ec64d8f5513');
const _instance_of_Documentation_017b35894269766c8c71 = db.assignTag('017b35894269766c8c71');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Datetime_0179b2690f49a1f52652           = '0179b2690f49a1f52652';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6
db.newModel(_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6, 'DateTime Minus DEPRECATED') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'deprecated',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'DateTime Minus DEPRECATED',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6);
// :_instance_of_Runnable_Input____datetime_0166f7efa4576183817c
db.newInstance(_instance_of_Runnable_Input____datetime_0166f7efa4576183817c)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'datetime',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____duration_0166f7efa576d579d0c3
db.newInstance(_instance_of_Runnable_Input____duration_0166f7efa576d579d0c3)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'duration',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____datetime_0166f7f162e274be785b
db.newInstance(_instance_of_Runnable_Output____datetime_0166f7f162e274be785b)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'datetime',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b2e76507584
db.newInstance(_instance_of_Documentation_017b35893b2e76507584)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Creates a new `DateTime` by subtracting an amount of time from the provided `DateTime`.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Subtract a duration from a DateTime.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ec54cd7fba8
db.newInstance(_instance_of_Documentation_017b35893ec54cd7fba8)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The initial `DateTime`.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ec64d8f5513
db.newInstance(_instance_of_Documentation_017b35893ec64d8f5513)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The duration to subtract.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35894269766c8c71
db.newInstance(_instance_of_Documentation_017b35894269766c8c71)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The resulting `DateTime`.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____datetime_0166f7efa4576183817c);
db.assign(_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____duration_0166f7efa576d579d0c3);
db.assign(_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____datetime_0166f7f162e274be785b);
db.assign(_instance_of_Runnable_Input____datetime_0166f7efa4576183817c, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Date$_47_$Time_ff021000000000000014              );
db.assign(_instance_of_Runnable_Input____duration_0166f7efa576d579d0c3, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____datetime_0166f7f162e274be785b, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Documentation_017b35893b2e76507584   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6);
db.assign(_instance_of_Documentation_017b35893ec54cd7fba8   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____datetime_0166f7efa4576183817c);
db.assign(_instance_of_Documentation_017b35893ec64d8f5513   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____duration_0166f7efa576d579d0c3);
db.assign(_instance_of_Documentation_017b35894269766c8c71   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____datetime_0166f7f162e274be785b);
db.assign(_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____datetime_0166f7efa4576183817c);
db.assign(_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____duration_0166f7efa576d579d0c3);
db.assign(_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____datetime_0166f7f162e274be785b);
db.assign(_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b2e76507584   );
db.assign(_instance_of_Runnable_Input____datetime_0166f7efa4576183817c, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ec54cd7fba8   );
db.assign(_instance_of_Runnable_Input____duration_0166f7efa576d579d0c3, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ec64d8f5513   );
db.assign(_instance_of_Runnable_Output____datetime_0166f7f162e274be785b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35894269766c8c71   );
db.assignOptional(_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6, _Object_gooRel_ff022000000000000003, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6, _GOO_parentGooRel_ff02200000000000000u, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____DateTime_Minus_DEPRECATED_0166f7efa33f8a310dd6);
