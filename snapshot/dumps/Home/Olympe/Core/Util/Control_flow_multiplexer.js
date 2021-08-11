
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
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
const _instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f = db.assignTag('016ab6f2396da4eb386f');
const _instance_of_Runnable_Input____Control_Flow_1_016ab6f23ad52c6bc493 = db.assignTag('016ab6f23ad52c6bc493');
const _instance_of_Runnable_Input____Control_Flow_2_016ab6f23f1df63a9432 = db.assignTag('016ab6f23f1df63a9432');
const _instance_of_Runnable_Output____Control_Flow_016ab703d2e58cbe52ba = db.assignTag('016ab703d2e58cbe52ba');
const _instance_of_Documentation_017b35893ba19617f52d = db.assignTag('017b35893ba19617f52d');
const _instance_of_Documentation_017b35893fb15e2a305b = db.assignTag('017b35893fb15e2a305b');
const _instance_of_Documentation_017b35893fb1f295478d = db.assignTag('017b35893fb1f295478d');
const _instance_of_Documentation_017b35a45e900a21e1b2 = db.assignTag('017b35a45e900a21e1b2');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Util_0179b26a12e03686de9c               = '0179b26a12e03686de9c';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f
db.newModel(_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f, 'Control flow multiplexer') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Control Flow Multiplexer',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f);
// :_instance_of_Runnable_Input____Control_Flow_1_016ab6f23ad52c6bc493
db.newInstance(_instance_of_Runnable_Input____Control_Flow_1_016ab6f23ad52c6bc493)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow 1',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Control_Flow_2_016ab6f23f1df63a9432
db.newInstance(_instance_of_Runnable_Input____Control_Flow_2_016ab6f23f1df63a9432)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow 2',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Control_Flow_016ab703d2e58cbe52ba
db.newInstance(_instance_of_Runnable_Output____Control_Flow_016ab703d2e58cbe52ba)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ba19617f52d
db.newInstance(_instance_of_Documentation_017b35893ba19617f52d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Creates a new control flow by joining two different control flows. The resulting flow is triggered whenever',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Joins two control flows into one.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fb15e2a305b
db.newInstance(_instance_of_Documentation_017b35893fb15e2a305b)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The second control flow to join.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fb1f295478d
db.newInstance(_instance_of_Documentation_017b35893fb1f295478d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The first control flow to join.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a45e900a21e1b2
db.newInstance(_instance_of_Documentation_017b35a45e900a21e1b2)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The resulting control flow.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Control_Flow_1_016ab6f23ad52c6bc493);
db.assign(_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Control_Flow_2_016ab6f23f1df63a9432);
db.assign(_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Control_Flow_016ab703d2e58cbe52ba);
db.assign(_instance_of_Runnable_Input____Control_Flow_1_016ab6f23ad52c6bc493, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____Control_Flow_2_016ab6f23f1df63a9432, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Output____Control_Flow_016ab703d2e58cbe52ba, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Documentation_017b35893ba19617f52d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f);
db.assign(_instance_of_Documentation_017b35893fb15e2a305b   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Control_Flow_2_016ab6f23f1df63a9432);
db.assign(_instance_of_Documentation_017b35893fb1f295478d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Control_Flow_1_016ab6f23ad52c6bc493);
db.assign(_instance_of_Documentation_017b35a45e900a21e1b2   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Control_Flow_016ab703d2e58cbe52ba);
db.assign(_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Control_Flow_1_016ab6f23ad52c6bc493);
db.assign(_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Control_Flow_2_016ab6f23f1df63a9432);
db.assign(_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Control_Flow_016ab703d2e58cbe52ba);
db.assign(_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ba19617f52d   );
db.assign(_instance_of_Runnable_Input____Control_Flow_1_016ab6f23ad52c6bc493, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fb1f295478d   );
db.assign(_instance_of_Runnable_Input____Control_Flow_2_016ab6f23f1df63a9432, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fb15e2a305b   );
db.assign(_instance_of_Runnable_Output____Control_Flow_016ab703d2e58cbe52ba, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a45e900a21e1b2   );
db.assignOptional(_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f, _Object_gooRel_ff022000000000000003, _Util_0179b26a12e03686de9c);
db.assignOptional(_instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f, _GOO_parentGooRel_ff02200000000000000u, _Util_0179b26a12e03686de9c);
db.assignOptional(_Util_0179b26a12e03686de9c, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f);
db.assignOptional(_Util_0179b26a12e03686de9c, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Control_flow_multiplexer_016ab6f2396da4eb386f);
