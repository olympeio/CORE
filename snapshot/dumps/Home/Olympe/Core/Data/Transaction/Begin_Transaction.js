
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Predefined_input_Control_Flow_of_Action_016ac63229782039429f = '016ac63229782039429f';
const _Predefined_output_Control_Flow_016ac6322acf67eebfe7 = '016ac6322acf67eebfe7';


// Definition of tags of defined properties
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Action_model____Begin_Transaction_0162f2ecd021046908f5 = db.assignTag('0162f2ecd021046908f5');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162f2ecd022046908f5 = db.assignTag('0162f2ecd022046908f5');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_0162f2ecd023046908f5 = db.assignTag('0162f2ecd023046908f5');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Transaction_0179b26880c1af51a32b        = '0179b26880c1af51a32b';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Begin_Transaction_0162f2ecd021046908f5
db.newModel(_instance_of_Coded_Action_model____Begin_Transaction_0162f2ecd021046908f5, 'Begin Transaction') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        ['01621fb84e320000f001']:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Begin_Transaction_0162f2ecd021046908f5, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Begin Transaction',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Begin_Transaction_0162f2ecd021046908f5);
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162f2ecd022046908f5
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162f2ecd022046908f5)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Begin_Transaction_0162f2ecd021046908f5)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_0162f2ecd023046908f5
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_0162f2ecd023046908f5)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Begin_Transaction_0162f2ecd021046908f5)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Begin_Transaction_0162f2ecd021046908f5, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162f2ecd022046908f5);
db.assign(_instance_of_Coded_Action_model____Begin_Transaction_0162f2ecd021046908f5, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_0162f2ecd023046908f5);
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162f2ecd022046908f5, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_0162f2ecd023046908f5, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Coded_Action_model____Begin_Transaction_0162f2ecd021046908f5, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162f2ecd022046908f5);
db.assign(_instance_of_Coded_Action_model____Begin_Transaction_0162f2ecd021046908f5, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_0162f2ecd023046908f5);
db.assignOptional(_instance_of_Coded_Action_model____Begin_Transaction_0162f2ecd021046908f5, _Object_gooRel_ff022000000000000003, _Transaction_0179b26880c1af51a32b);
db.assignOptional(_instance_of_Coded_Action_model____Begin_Transaction_0162f2ecd021046908f5, _GOO_parentGooRel_ff02200000000000000u, _Transaction_0179b26880c1af51a32b);
db.assignOptional(_Transaction_0179b26880c1af51a32b, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Begin_Transaction_0162f2ecd021046908f5);
db.assignOptional(_Transaction_0179b26880c1af51a32b, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Begin_Transaction_0162f2ecd021046908f5);
