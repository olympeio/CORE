
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Error_Flow_016eeb5ede9f3094d8f0         = '016eeb5ede9f3094d8f0';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
const _String_ff021000000000000011             = 'ff021000000000000011';


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
const _instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900 = db.assignTag('016eeb5ede9f3094d900');
const _instance_of_Runnable_Input____Code_016eeb5ede9f3094d901 = db.assignTag('016eeb5ede9f3094d901');
const _instance_of_Runnable_Input____Error_Flow_016eeb5ede9f3094d902 = db.assignTag('016eeb5ede9f3094d902');
const _instance_of_Runnable_Output____Message_016eeb5ede9f3094d903 = db.assignTag('016eeb5ede9f3094d903');
const _instance_of_Runnable_Output____Control_Flow_016eeb5ede9f3094d904 = db.assignTag('016eeb5ede9f3094d904');
const _instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d905 = db.assignTag('016eeb5ede9f3094d905');
const _instance_of_Documentation_017b35893ba3d434598c = db.assignTag('017b35893ba3d434598c');
const _instance_of_Documentation_017b35893fb22a73d569 = db.assignTag('017b35893fb22a73d569');
const _instance_of_Documentation_017b35893fb247078206 = db.assignTag('017b35893fb247078206');
const _instance_of_Documentation_017b3589429ca087929a = db.assignTag('017b3589429ca087929a');
const _instance_of_Documentation_017b358942a250406542 = db.assignTag('017b358942a250406542');
const _instance_of_Documentation_017b358942a34ead89c5 = db.assignTag('017b358942a34ead89c5');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Util_0179b26a12e03686de9c               = '0179b26a12e03686de9c';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900
db.newModel(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900, 'Catch Error Type') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Catch Error Type',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900);
// :_instance_of_Runnable_Input____Code_016eeb5ede9f3094d901
db.newInstance(_instance_of_Runnable_Input____Code_016eeb5ede9f3094d901)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Code',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Error_Flow_016eeb5ede9f3094d902
db.newInstance(_instance_of_Runnable_Input____Error_Flow_016eeb5ede9f3094d902)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Message_016eeb5ede9f3094d903
db.newInstance(_instance_of_Runnable_Output____Message_016eeb5ede9f3094d903)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Message',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Control_Flow_016eeb5ede9f3094d904
db.newInstance(_instance_of_Runnable_Output____Control_Flow_016eeb5ede9f3094d904)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d905
db.newInstance(_instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d905)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ba3d434598c
db.newInstance(_instance_of_Documentation_017b35893ba3d434598c)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Catching an error from an error-flow, and if the given code is the same than the error code, it allows you to access its details and trigger a control-flow. If the codes are different, it simply forward the error-flow.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Catches errors and extract the details.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fb22a73d569
db.newInstance(_instance_of_Documentation_017b35893fb22a73d569)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The error flow from which to catch errors.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fb247078206
db.newInstance(_instance_of_Documentation_017b35893fb247078206)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The error code that is accepted.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589429ca087929a
db.newInstance(_instance_of_Documentation_017b3589429ca087929a)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The error message.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b358942a250406542
db.newInstance(_instance_of_Documentation_017b358942a250406542)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The output control flow.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b358942a34ead89c5
db.newInstance(_instance_of_Documentation_017b358942a34ead89c5)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The input error flow, if the input code and the error code are different.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Code_016eeb5ede9f3094d901);
db.assign(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Error_Flow_016eeb5ede9f3094d902);
db.assign(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Message_016eeb5ede9f3094d903);
db.assign(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Control_Flow_016eeb5ede9f3094d904);
db.assign(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d905);
db.assign(_instance_of_Runnable_Input____Code_016eeb5ede9f3094d901, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____Error_Flow_016eeb5ede9f3094d902, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Runnable_Output____Message_016eeb5ede9f3094d903, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____Control_Flow_016eeb5ede9f3094d904, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d905, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Documentation_017b35893ba3d434598c   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900);
db.assign(_instance_of_Documentation_017b35893fb22a73d569   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Error_Flow_016eeb5ede9f3094d902);
db.assign(_instance_of_Documentation_017b35893fb247078206   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Code_016eeb5ede9f3094d901);
db.assign(_instance_of_Documentation_017b3589429ca087929a   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Message_016eeb5ede9f3094d903);
db.assign(_instance_of_Documentation_017b358942a250406542   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Control_Flow_016eeb5ede9f3094d904);
db.assign(_instance_of_Documentation_017b358942a34ead89c5   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d905);
db.assign(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Code_016eeb5ede9f3094d901);
db.assign(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Error_Flow_016eeb5ede9f3094d902);
db.assign(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Message_016eeb5ede9f3094d903);
db.assign(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Control_Flow_016eeb5ede9f3094d904);
db.assign(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d905);
db.assign(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ba3d434598c   );
db.assign(_instance_of_Runnable_Input____Code_016eeb5ede9f3094d901, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fb247078206   );
db.assign(_instance_of_Runnable_Input____Error_Flow_016eeb5ede9f3094d902, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fb22a73d569   );
db.assign(_instance_of_Runnable_Output____Message_016eeb5ede9f3094d903, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589429ca087929a   );
db.assign(_instance_of_Runnable_Output____Control_Flow_016eeb5ede9f3094d904, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b358942a250406542   );
db.assign(_instance_of_Runnable_Output____Error_Flow_016eeb5ede9f3094d905, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b358942a34ead89c5   );
db.assignOptional(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900, _Object_gooRel_ff022000000000000003, _Util_0179b26a12e03686de9c);
db.assignOptional(_instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900, _GOO_parentGooRel_ff02200000000000000u, _Util_0179b26a12e03686de9c);
db.assignOptional(_Util_0179b26a12e03686de9c, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900);
db.assignOptional(_Util_0179b26a12e03686de9c, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Catch_Error_Type_016eeb5ede9f3094d900);
