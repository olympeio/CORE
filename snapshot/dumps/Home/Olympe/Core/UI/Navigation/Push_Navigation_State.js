
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Predefined_input_Control_Flow_of_Action_016ac63229782039429f = '016ac63229782039429f';
const _Predefined_output_Control_Flow_016ac6322acf67eebfe7 = '016ac6322acf67eebfe7';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
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
const _instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4 = db.assignTag('017aedb1b34419737ca4');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_017aedb1b344b2b4b534 = db.assignTag('017aedb1b344b2b4b534');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017aedb1b344e83abb8a = db.assignTag('017aedb1b344e83abb8a');
const _instance_of_Runnable_Input____State_017aedb217748cb04c84 = db.assignTag('017aedb217748cb04c84');
const _instance_of_Documentation_017b4e232ceada885823 = db.assignTag('017b4e232ceada885823');
const _instance_of_Documentation_017b4e232d1bceb6bca4 = db.assignTag('017b4e232d1bceb6bca4');
const _instance_of_Documentation_017b4e232d27f663611e = db.assignTag('017b4e232d27f663611e');
const _instance_of_Documentation_017b4e232d3d4034a08c = db.assignTag('017b4e232d3d4034a08c');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Navigation_0179b269f70efbab6b8d         = '0179b269f70efbab6b8d';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4
db.newModel(_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4, 'Push Navigation State') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Push Navigation State',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4);
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_017aedb1b344b2b4b534
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_017aedb1b344b2b4b534)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017aedb1b344e83abb8a
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017aedb1b344e83abb8a)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____State_017aedb217748cb04c84
db.newInstance(_instance_of_Runnable_Input____State_017aedb217748cb04c84)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'State',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b4e232ceada885823
db.newInstance(_instance_of_Documentation_017b4e232ceada885823)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Push a new navigation state, the data after the hashtag (#) in the browser current page URL.\n\nAny old state is kept, and can be accessed using the browser back and next buttons.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Replace string after # in URL.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b4e232d1bceb6bca4
db.newInstance(_instance_of_Documentation_017b4e232d1bceb6bca4)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The new state to add in the URL.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b4e232d27f663611e
db.newInstance(_instance_of_Documentation_017b4e232d27f663611e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Trigger input.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b4e232d3d4034a08c
db.newInstance(_instance_of_Documentation_017b4e232d3d4034a08c)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Trigger ouput.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017aedb1b344e83abb8a);
db.assign(_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____State_017aedb217748cb04c84);
db.assign(_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_017aedb1b344b2b4b534);
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_017aedb1b344b2b4b534, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017aedb1b344e83abb8a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____State_017aedb217748cb04c84, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Documentation_017b4e232ceada885823   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4);
db.assign(_instance_of_Documentation_017b4e232d1bceb6bca4   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____State_017aedb217748cb04c84);
db.assign(_instance_of_Documentation_017b4e232d27f663611e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017aedb1b344e83abb8a);
db.assign(_instance_of_Documentation_017b4e232d3d4034a08c   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_output_Control_Flow____Control_Flow_017aedb1b344b2b4b534);
db.assign(_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_017aedb1b344b2b4b534);
db.assign(_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017aedb1b344e83abb8a);
db.assign(_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____State_017aedb217748cb04c84);
db.assign(_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b4e232ceada885823   );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_017aedb1b344b2b4b534, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b4e232d3d4034a08c   );
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017aedb1b344e83abb8a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b4e232d27f663611e   );
db.assign(_instance_of_Runnable_Input____State_017aedb217748cb04c84, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b4e232d1bceb6bca4   );
db.assignOptional(_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4, _Object_gooRel_ff022000000000000003, _Navigation_0179b269f70efbab6b8d);
db.assignOptional(_instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4, _GOO_parentGooRel_ff02200000000000000u, _Navigation_0179b269f70efbab6b8d);
db.assignOptional(_Navigation_0179b269f70efbab6b8d, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4);
db.assignOptional(_Navigation_0179b269f70efbab6b8d, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Push_Navigation_State_017aedb1b34419737ca4);
