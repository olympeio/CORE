
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
const _Predefined_input_Control_Flow_of_Action_016ac63229782039429f = '016ac63229782039429f';
const _Predefined_output_Control_Flow_016ac6322acf67eebfe7 = '016ac6322acf67eebfe7';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';


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
const _instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157 = db.assignTag('0162ce4b6d50ec186157');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162ce4b6d51ec186157 = db.assignTag('0162ce4b6d51ec186157');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_0162ce4b6d52ec186157 = db.assignTag('0162ce4b6d52ec186157');
const _instance_of_Runnable_Input____duration_$_91_$s$_93_$_0162ce5052318229fcef = db.assignTag('0162ce5052318229fcef');
const _instance_of_Documentation_017b35893ba3445f6b99 = db.assignTag('017b35893ba3445f6b99');
const _instance_of_Documentation_017b35893fb39a2614bf = db.assignTag('017b35893fb39a2614bf');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Util_0179b26a12e03686de9c               = '0179b26a12e03686de9c';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157
db.newModel(_instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157, 'Pause') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Pause',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157);
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162ce4b6d51ec186157
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162ce4b6d51ec186157)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_0162ce4b6d52ec186157
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_0162ce4b6d52ec186157)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____duration_$_91_$s$_93_$_0162ce5052318229fcef
db.newInstance(_instance_of_Runnable_Input____duration_$_91_$s$_93_$_0162ce5052318229fcef)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'duration [s]',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ba3445f6b99
db.newInstance(_instance_of_Documentation_017b35893ba3445f6b99)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Pauses a control flow for a specified amount of time. This helps creating delayed actions.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Pauses a control flow.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fb39a2614bf
db.newInstance(_instance_of_Documentation_017b35893fb39a2614bf)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Duration, in seconds.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162ce4b6d51ec186157);
db.assign(_instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____duration_$_91_$s$_93_$_0162ce5052318229fcef);
db.assign(_instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_0162ce4b6d52ec186157);
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162ce4b6d51ec186157, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_0162ce4b6d52ec186157, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____duration_$_91_$s$_93_$_0162ce5052318229fcef, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Documentation_017b35893ba3445f6b99   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157);
db.assign(_instance_of_Documentation_017b35893fb39a2614bf   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____duration_$_91_$s$_93_$_0162ce5052318229fcef);
db.assign(_instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162ce4b6d51ec186157);
db.assign(_instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_0162ce4b6d52ec186157);
db.assign(_instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____duration_$_91_$s$_93_$_0162ce5052318229fcef);
db.assign(_instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ba3445f6b99   );
db.assign(_instance_of_Runnable_Input____duration_$_91_$s$_93_$_0162ce5052318229fcef, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fb39a2614bf   );
db.assignOptional(_instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157, _Object_gooRel_ff022000000000000003, _Util_0179b26a12e03686de9c);
db.assignOptional(_instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157, _GOO_parentGooRel_ff02200000000000000u, _Util_0179b26a12e03686de9c);
db.assignOptional(_Util_0179b26a12e03686de9c, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157);
db.assignOptional(_Util_0179b26a12e03686de9c, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Pause_0162ce4b6d50ec186157);
