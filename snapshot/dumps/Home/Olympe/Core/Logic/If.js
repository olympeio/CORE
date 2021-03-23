
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
let _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
let _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
let _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
let _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
let _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
let _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
let _String_ff021000000000000011             = 'ff021000000000000011';


// Definition of tags of defined properties
let _Documentation_Function_Metadata_errors_0172c6ae82952a74193f = '0172c6ae82952a74193f';
let _Documentation_Function_Metadata_inputs_0172c6ae82952a74193d = '0172c6ae82952a74193d';
let _Documentation_Function_Metadata_outputs_0172c6ae82952a74193e = '0172c6ae82952a74193e';
let _Documentation_Metadata_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
let _Documentation_Metadata_toolTip_01703376c4a81c0e9d91 = '01703376c4a81c0e9d91';
let _Object_name_ff023000000000000011             = 'ff023000000000000011';
let _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
let _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
let _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
let _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
let _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
let _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
let _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
let _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
let _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
let _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';

//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
let _Math_0178445f8bd56b19894f               = '0178445f8bd56b19894f';
let _Text_0178445ee2a56bf00fd6               = '0178445ee2a56bf00fd6';
let _Logic_0178445ee2a56bf00fd6               = '0178445f8bd56b198950';
let _Auth_0178445f8bd56b198951               = '0178445f8bd56b198951';
let _Net_0178445f8bd56b198952               = '0178445f8bd56b198952';

// Definition of tags used for newly created instances
let _instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4 = db.assignTag('01633eaa139d1f5e2fc4');
let _instance_of_Runnable_Input____01633eaa172b89783ceb = db.assignTag('01633eaa172b89783ceb'); // Condition
let _instance_of_Runnable_Input____01633eaa18a8fe6cb2b0 = db.assignTag('01633eaa18a8fe6cb2b0'); // a
let _instance_of_Runnable_Input____01633eaa19c3e19408f4 = db.assignTag('01633eaa19c3e19408f4'); // b
let _instance_of_Runnable_Output____01633eaa1abb0efed4ab = db.assignTag('01633eaa1abb0efed4ab'); // Condition ? a : b
let _instance_of_Documentation_Function_Metadata_d0c33eaa139d1f5e2fc4 = db.assignTag('d0c33eaa139d1f5e2fc4');

// :_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4
db.newModel(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, 'If').extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'If',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4);

// :_instance_of_Runnable_Input____01633eaa172b89783ceb - Condition
db.newInstance(_instance_of_Runnable_Input____01633eaa172b89783ceb)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Condition',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____01633eaa172b89783ceb);
db.assign(_instance_of_Runnable_Input____01633eaa172b89783ceb, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000012');
db.assign(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____01633eaa172b89783ceb);

// :_instance_of_Runnable_Input____01633eaa18a8fe6cb2b0 - a
db.newInstance(_instance_of_Runnable_Input____01633eaa18a8fe6cb2b0)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____01633eaa18a8fe6cb2b0);
db.assign(_instance_of_Runnable_Input____01633eaa18a8fe6cb2b0, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000001');
db.assign(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____01633eaa18a8fe6cb2b0);

// :_instance_of_Runnable_Input____01633eaa19c3e19408f4 - b
db.newInstance(_instance_of_Runnable_Input____01633eaa19c3e19408f4)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____01633eaa19c3e19408f4);
db.assign(_instance_of_Runnable_Input____01633eaa19c3e19408f4, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000001');
db.assign(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____01633eaa19c3e19408f4);

// :_instance_of_Runnable_Output____01633eaa1abb0efed4ab - Condition ? a : b
db.newInstance(_instance_of_Runnable_Output____01633eaa1abb0efed4ab)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Condition ? a : b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Runnable_Definition_Outputs_01621fb84e320000f00b  , _instance_of_Runnable_Output____01633eaa1abb0efed4ab);
db.assign(_instance_of_Runnable_Output____01633eaa1abb0efed4ab, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000001');
db.assign(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____01633eaa1abb0efed4ab);

// :_instance_of_Documentation_Function_Metadata_d0c33eaa139d1f5e2fc4
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c33eaa139d1f5e2fc4)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]: "",
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]: "## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01633eaa172b89783ceb-Condition | Boolean | The condition to test. |\n| 01633eaa18a8fe6cb2b0-a | Object | The value to return on `true`. |\n| 01633eaa19c3e19408f4-b | Object | The value to return on `false`. |\n",
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]: "## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01633eaa1abb0efed4ab-Condition ? a : b | Object | a if Condition is `true`, b otherwise. |\n",
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]: "## Description\nThis function switches between 2 data-flows based on the provided condition.\n",
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]: "Switch data flows based on a condition.",
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c33eaa139d1f5e2fc4);
db.assign(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c33eaa139d1f5e2fc4);
db.assign(_instance_of_Documentation_Function_Metadata_d0c33eaa139d1f5e2fc4, _Object_gooRel_ff022000000000000003, _instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4);

// Assigning to a Folder. Check this
let parentFolder = _Logic_0178445ee2a56bf00fd6; // Core/Text
db.assignOptional(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Object_gooRel_ff022000000000000003, parentFolder);
db.assignOptional(parentFolder, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4);
db.assignOptional(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _GOO_parentGooRel_ff02200000000000000u, parentFolder);
db.assignOptional(parentFolder, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4);
