
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Control_Flow_016ac63229782039429f       = '016ac63229782039429f';
const _Control_Flow_016ac6322acf67eebfe7       = '016ac6322acf67eebfe7';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _String_ff021000000000000011             = 'ff021000000000000011';


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
const _instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a = db.assignTag('0162afedd7acb5c5451a');
const _instance_of_Control_Flow____Control_Flow_0162afedd7adb5c5451a = db.assignTag('0162afedd7adb5c5451a');
const _instance_of_Control_Flow____Control_Flow_0162afedd7aeb5c5451a = db.assignTag('0162afedd7aeb5c5451a');
const _instance_of_Runnable_Input____message_0162afedf7d565956179 = db.assignTag('0162afedf7d565956179');
const _instance_of_Runnable_Input____prefix_0179c6954aff12375bf1 = db.assignTag('0179c6954aff12375bf1');
const _instance_of_Documentation_017b35893b883fbc17db = db.assignTag('017b35893b883fbc17db');
const _instance_of_Documentation_017b35893f8605abed0f = db.assignTag('017b35893f8605abed0f');
const _instance_of_Documentation_017b35893f86d49e2211 = db.assignTag('017b35893f86d49e2211');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _System_0179b269b5c75228d70f             = '0179b269b5c75228d70f';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a
db.newModel(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a, 'Log') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Log',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a);
// :_instance_of_Control_Flow____Control_Flow_0162afedd7adb5c5451a
db.newInstance(_instance_of_Control_Flow____Control_Flow_0162afedd7adb5c5451a)
    .setModelTag(_Control_Flow_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Control_Flow____Control_Flow_0162afedd7aeb5c5451a
db.newInstance(_instance_of_Control_Flow____Control_Flow_0162afedd7aeb5c5451a)
    .setModelTag(_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____message_0162afedf7d565956179
db.newInstance(_instance_of_Runnable_Input____message_0162afedf7d565956179)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'message',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____prefix_0179c6954aff12375bf1
db.newInstance(_instance_of_Runnable_Input____prefix_0179c6954aff12375bf1)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'prefix',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:'Info',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b883fbc17db
db.newInstance(_instance_of_Documentation_017b35893b883fbc17db)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Outputs a message on the console.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Logs a message on the console.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f8605abed0f
db.newInstance(_instance_of_Documentation_017b35893f8605abed0f)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The message to display.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f86d49e2211
db.newInstance(_instance_of_Documentation_017b35893f86d49e2211)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Control_Flow____Control_Flow_0162afedd7adb5c5451a);
db.assign(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____message_0162afedf7d565956179);
db.assign(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____prefix_0179c6954aff12375bf1);
db.assign(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Control_Flow____Control_Flow_0162afedd7aeb5c5451a);
db.assign(_instance_of_Control_Flow____Control_Flow_0162afedd7adb5c5451a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Control_Flow____Control_Flow_0162afedd7aeb5c5451a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____message_0162afedf7d565956179, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____prefix_0179c6954aff12375bf1, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Documentation_017b35893b883fbc17db   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a);
db.assign(_instance_of_Documentation_017b35893f8605abed0f   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____message_0162afedf7d565956179);
db.assign(_instance_of_Documentation_017b35893f86d49e2211   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____prefix_0179c6954aff12375bf1);
db.assign(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_0162afedd7adb5c5451a);
db.assign(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_0162afedd7aeb5c5451a);
db.assign(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____message_0162afedf7d565956179);
db.assign(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____prefix_0179c6954aff12375bf1);
db.assign(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b883fbc17db   );
db.assign(_instance_of_Runnable_Input____message_0162afedf7d565956179, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f8605abed0f   );
db.assign(_instance_of_Runnable_Input____prefix_0179c6954aff12375bf1, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f86d49e2211   );
db.assignOptional(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a, _Object_gooRel_ff022000000000000003, _System_0179b269b5c75228d70f);
db.assignOptional(_instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a, _GOO_parentGooRel_ff02200000000000000u, _System_0179b269b5c75228d70f);
db.assignOptional(_System_0179b269b5c75228d70f, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a);
db.assignOptional(_System_0179b269b5c75228d70f, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Log_0162afedd7acb5c5451a);
