
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
const _UI_Event_For_Selection_016c865bbf883591cc25 = '016c865bbf883591cc25';


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
const _instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80 = db.assignTag('01619e359987cdf3fc80');
const _instance_of_Runnable_Input____Event_01619e359987cdf3fc81 = db.assignTag('01619e359987cdf3fc81');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_01619e359988cdf3fc80 = db.assignTag('01619e359988cdf3fc80');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_01619e359989cdf3fc80 = db.assignTag('01619e359989cdf3fc80');
const _instance_of_Documentation_017b35893b31db3e545d = db.assignTag('017b35893b31db3e545d');
const _instance_of_Documentation_017b35893f0e34a821cc = db.assignTag('017b35893f0e34a821cc');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Event_0179b269e44e8b51bce0              = '0179b269e44e8b51bce0';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80
db.newModel(_instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80, 'Dispatch Event') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Dispatch Event',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80);
// :_instance_of_Runnable_Input____Event_01619e359987cdf3fc81
db.newInstance(_instance_of_Runnable_Input____Event_01619e359987cdf3fc81)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Event',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_01619e359988cdf3fc80
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_01619e359988cdf3fc80)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_01619e359989cdf3fc80
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_01619e359989cdf3fc80)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b31db3e545d
db.newInstance(_instance_of_Documentation_017b35893b31db3e545d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Dispatches the provided event.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Dispatches an event.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f0e34a821cc
db.newInstance(_instance_of_Documentation_017b35893f0e34a821cc)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The event to dispatch.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Event_01619e359987cdf3fc81);
db.assign(_instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_01619e359988cdf3fc80);
db.assign(_instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_01619e359989cdf3fc80);
db.assign(_instance_of_Runnable_Input____Event_01619e359987cdf3fc81, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _UI_Event_For_Selection_016c865bbf883591cc25      );
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_01619e359988cdf3fc80, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_01619e359989cdf3fc80, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Documentation_017b35893b31db3e545d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80);
db.assign(_instance_of_Documentation_017b35893f0e34a821cc   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Event_01619e359987cdf3fc81);
db.assign(_instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Event_01619e359987cdf3fc81);
db.assign(_instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_01619e359988cdf3fc80);
db.assign(_instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_01619e359989cdf3fc80);
db.assign(_instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b31db3e545d   );
db.assign(_instance_of_Runnable_Input____Event_01619e359987cdf3fc81, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f0e34a821cc   );
db.assignOptional(_instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80, _Object_gooRel_ff022000000000000003, _Event_0179b269e44e8b51bce0);
db.assignOptional(_instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80, _GOO_parentGooRel_ff02200000000000000u, _Event_0179b269e44e8b51bce0);
db.assignOptional(_Event_0179b269e44e8b51bce0, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80);
db.assignOptional(_Event_0179b269e44e8b51bce0, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Dispatch_Event_01619e359987cdf3fc80);