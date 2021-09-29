
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Predefined_input_Control_Flow_of_Action_016ac63229782039429f = '016ac63229782039429f';
const _Predefined_output_Control_Flow_016ac6322acf67eebfe7 = '016ac6322acf67eebfe7';
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
const _instance_of_Runnable_Output____json_0175b6513d6d8f1e484c = db.assignTag('0175b6513d6d8f1e484c');
const _instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e = db.assignTag('0175b6513d6d8f1e484e');
const _instance_of_Runnable_Input____list_0175b6513d6d8f1e484f = db.assignTag('0175b6513d6d8f1e484f');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0175b6513d6e8f1e484e = db.assignTag('0175b6513d6e8f1e484e');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_0175b6513d6f8f1e484e = db.assignTag('0175b6513d6f8f1e484e');
const _instance_of_Documentation_017b35893b758b10a531 = db.assignTag('017b35893b758b10a531');
const _instance_of_Documentation_017b3591e6e6b1f7cecf = db.assignTag('017b3591e6e6b1f7cecf');
const _instance_of_Documentation_017b3591e6ee21a506ad = db.assignTag('017b3591e6ee21a506ad');
const _instance_of_Documentation_017b3591e6f4d7d182b2 = db.assignTag('017b3591e6f4d7d182b2');
const _instance_of_Documentation_017b3591e6f9ebea4195 = db.assignTag('017b3591e6f9ebea4195');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _JSON_0179b2684a901d133726               = '0179b2684a901d133726';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e
db.newModel(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e, 'Object list to JSON') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Object list to Json',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e);
// :_instance_of_Runnable_Output____json_0175b6513d6d8f1e484c
db.newInstance(_instance_of_Runnable_Output____json_0175b6513d6d8f1e484c)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'json',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____list_0175b6513d6d8f1e484f
db.newInstance(_instance_of_Runnable_Input____list_0175b6513d6d8f1e484f)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0175b6513d6e8f1e484e
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0175b6513d6e8f1e484e)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_0175b6513d6f8f1e484e
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_0175b6513d6f8f1e484e)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b758b10a531
db.newInstance(_instance_of_Documentation_017b35893b758b10a531)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Parses a list of object into a JSON.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Parse a list of object into a stringified JSON',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3591e6e6b1f7cecf
db.newInstance(_instance_of_Documentation_017b3591e6e6b1f7cecf)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3591e6ee21a506ad
db.newInstance(_instance_of_Documentation_017b3591e6ee21a506ad)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'A list of objects.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3591e6f4d7d182b2
db.newInstance(_instance_of_Documentation_017b3591e6f4d7d182b2)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3591e6f9ebea4195
db.newInstance(_instance_of_Documentation_017b3591e6f9ebea4195)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Stringified JSON',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____list_0175b6513d6d8f1e484f);
db.assign(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0175b6513d6e8f1e484e);
db.assign(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____json_0175b6513d6d8f1e484c);
db.assign(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_0175b6513d6f8f1e484e);
db.assign(_instance_of_Runnable_Output____json_0175b6513d6d8f1e484c, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____list_0175b6513d6d8f1e484f, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0175b6513d6e8f1e484e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_0175b6513d6f8f1e484e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Documentation_017b35893b758b10a531   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e);
db.assign(_instance_of_Documentation_017b3591e6e6b1f7cecf   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0175b6513d6e8f1e484e);
db.assign(_instance_of_Documentation_017b3591e6ee21a506ad   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____list_0175b6513d6d8f1e484f);
db.assign(_instance_of_Documentation_017b3591e6f4d7d182b2   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_output_Control_Flow____Control_Flow_0175b6513d6f8f1e484e);
db.assign(_instance_of_Documentation_017b3591e6f9ebea4195   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____json_0175b6513d6d8f1e484c);
db.assign(_instance_of_Runnable_Output____json_0175b6513d6d8f1e484c, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3591e6f9ebea4195   );
db.assign(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____json_0175b6513d6d8f1e484c);
db.assign(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____list_0175b6513d6d8f1e484f);
db.assign(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0175b6513d6e8f1e484e);
db.assign(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_0175b6513d6f8f1e484e);
db.assign(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b758b10a531   );
db.assign(_instance_of_Runnable_Input____list_0175b6513d6d8f1e484f, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3591e6ee21a506ad   );
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0175b6513d6e8f1e484e, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3591e6e6b1f7cecf   );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_0175b6513d6f8f1e484e, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3591e6f4d7d182b2   );
db.assignOptional(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e, _Object_gooRel_ff022000000000000003, _JSON_0179b2684a901d133726);
db.assignOptional(_instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e, _GOO_parentGooRel_ff02200000000000000u, _JSON_0179b2684a901d133726);
db.assignOptional(_JSON_0179b2684a901d133726, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e);
db.assignOptional(_JSON_0179b2684a901d133726, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Object_list_to_JSON_0175b6513d6d8f1e484e);
