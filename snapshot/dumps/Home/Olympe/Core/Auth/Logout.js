
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Predefined_input_Control_Flow_of_Action_016ac63229782039429f = '016ac63229782039429f';
const _Predefined_output_Control_Flow_016ac6322acf67eebfe7 = '016ac6322acf67eebfe7';


// Definition of tags of defined properties
const _Documentation_Function_Metadata_errors_0172c6ae82952a74193f = '0172c6ae82952a74193f';
const _Documentation_Function_Metadata_inputs_0172c6ae82952a74193d = '0172c6ae82952a74193d';
const _Documentation_Function_Metadata_outputs_0172c6ae82952a74193e = '0172c6ae82952a74193e';
const _Documentation_Metadata_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_Metadata_toolTip_01703376c4a81c0e9d91 = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Action_model____Logout_0163d0188add5a16a56d = db.assignTag('0163d0188add5a16a56d');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0163d0188ade5a16a56d = db.assignTag('0163d0188ade5a16a56d');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_0163d0188adf5a16a56d = db.assignTag('0163d0188adf5a16a56d');
const _instance_of_Documentation_Function_Metadata_0179c7d2ff68ffaa089b = db.assignTag('0179c7d2ff68ffaa089b');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Auth_0179b2673490430cc604               = '0179b2673490430cc604';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Logout_0163d0188add5a16a56d
db.newModel(_instance_of_Coded_Action_model____Logout_0163d0188add5a16a56d, 'Logout') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.setRootInstanceTag(_instance_of_Coded_Action_model____Logout_0163d0188add5a16a56d);
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0163d0188ade5a16a56d
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0163d0188ade5a16a56d)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Logout_0163d0188add5a16a56d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_0163d0188adf5a16a56d
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_0163d0188adf5a16a56d)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Logout_0163d0188add5a16a56d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_0179c7d2ff68ffaa089b
db.newInstance(_instance_of_Documentation_Function_Metadata_0179c7d2ff68ffaa089b)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Logout_0163d0188add5a16a56d)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nLog out current user.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Log out current user.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Logout_0163d0188add5a16a56d, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0163d0188ade5a16a56d);
db.assign(_instance_of_Coded_Action_model____Logout_0163d0188add5a16a56d, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_0163d0188adf5a16a56d);
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0163d0188ade5a16a56d, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_0163d0188adf5a16a56d, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Coded_Action_model____Logout_0163d0188add5a16a56d, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_0179c7d2ff68ffaa089b);
db.assign(_instance_of_Coded_Action_model____Logout_0163d0188add5a16a56d, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0163d0188ade5a16a56d);
db.assign(_instance_of_Coded_Action_model____Logout_0163d0188add5a16a56d, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_0163d0188adf5a16a56d);
db.assign(_instance_of_Coded_Action_model____Logout_0163d0188add5a16a56d, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_0179c7d2ff68ffaa089b);
db.assignOptional(_instance_of_Coded_Action_model____Logout_0163d0188add5a16a56d, _Object_gooRel_ff022000000000000003, _Auth_0179b2673490430cc604);
db.assignOptional(_instance_of_Coded_Action_model____Logout_0163d0188add5a16a56d, _GOO_parentGooRel_ff02200000000000000u, _Auth_0179b2673490430cc604);
db.assignOptional(_Auth_0179b2673490430cc604, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Logout_0163d0188add5a16a56d);
db.assignOptional(_Auth_0179b2673490430cc604, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Logout_0163d0188add5a16a56d);
