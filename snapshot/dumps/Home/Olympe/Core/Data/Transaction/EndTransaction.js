
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Error_Flow_016eeb5ede9f3094d8f0         = '016eeb5ede9f3094d8f0';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Predefined_input_Control_Flow_of_Action_016ac63229782039429f = '016ac63229782039429f';
const _Predefined_output_Control_Flow_016ac6322acf67eebfe7 = '016ac6322acf67eebfe7';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


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
const _instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600 = db.assignTag('0162f2ed1d1ba6349600');
const _instance_of_Runnable_Output____Error_Flow_0162f2ed1d1ba6349601 = db.assignTag('0162f2ed1d1ba6349601');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162f2ed1d1ca6349600 = db.assignTag('0162f2ed1d1ca6349600');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_0162f2ed1d1da6349600 = db.assignTag('0162f2ed1d1da6349600');
const _instance_of_Documentation_Function_Metadata_d0c2f2ed1d1ba6349600 = db.assignTag('d0c2f2ed1d1ba6349600');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Transaction_0179b26880c1af51a32b        = '0179b26880c1af51a32b';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600
db.newModel(_instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600, 'EndTransaction') // tag and name of the model
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'EndTransaction',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600);
// :_instance_of_Runnable_Output____Error_Flow_0162f2ed1d1ba6349601
db.newInstance(_instance_of_Runnable_Output____Error_Flow_0162f2ed1d1ba6349601)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162f2ed1d1ca6349600
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162f2ed1d1ca6349600)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_0162f2ed1d1da6349600
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_0162f2ed1d1da6349600)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c2f2ed1d1ba6349600
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c2f2ed1d1ba6349600)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'## Errors\n| Code | Description |\n| --- | --- |\n| 1 | The transaction was rejected. |\n',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nMarks the end of a series of transaction operations. The transaction is then executed.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Ends and executes a transaction.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162f2ed1d1ca6349600);
db.assign(_instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Error_Flow_0162f2ed1d1ba6349601);
db.assign(_instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_0162f2ed1d1da6349600);
db.assign(_instance_of_Runnable_Output____Error_Flow_0162f2ed1d1ba6349601, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162f2ed1d1ca6349600, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_0162f2ed1d1da6349600, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c2f2ed1d1ba6349600);
db.assign(_instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Error_Flow_0162f2ed1d1ba6349601);
db.assign(_instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162f2ed1d1ca6349600);
db.assign(_instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_0162f2ed1d1da6349600);
db.assign(_instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c2f2ed1d1ba6349600);
db.assignOptional(_instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600, _Object_gooRel_ff022000000000000003, _Transaction_0179b26880c1af51a32b);
db.assignOptional(_instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600, _GOO_parentGooRel_ff02200000000000000u, _Transaction_0179b26880c1af51a32b);
db.assignOptional(_Transaction_0179b26880c1af51a32b, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600);
db.assignOptional(_Transaction_0179b26880c1af51a32b, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____EndTransaction_0162f2ed1d1ba6349600);
