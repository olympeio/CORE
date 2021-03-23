
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
let _instance_of_Coded_Function_model____Or_01632a68f21892cad01b = db.assignTag('01632a68f21892cad01b');
let _instance_of_Runnable_Input____01632a68f461f5ff3540 = db.assignTag('01632a68f461f5ff3540'); // a
let _instance_of_Runnable_Input____01632a68f617cd2fb14a = db.assignTag('01632a68f617cd2fb14a'); // b
let _instance_of_Runnable_Output____01632a68f79614f26081 = db.assignTag('01632a68f79614f26081'); // a || b
let _instance_of_Documentation_Function_Metadata_d0c32a68f21892cad01b = db.assignTag('d0c32a68f21892cad01b');

// :_instance_of_Coded_Function_model____Or_01632a68f21892cad01b
db.newModel(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, 'Or').extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Or',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b);

// :_instance_of_Runnable_Input____01632a68f461f5ff3540 - a
db.newInstance(_instance_of_Runnable_Input____01632a68f461f5ff3540)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____01632a68f461f5ff3540);
db.assign(_instance_of_Runnable_Input____01632a68f461f5ff3540, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000012');
db.assign(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____01632a68f461f5ff3540);

// :_instance_of_Runnable_Input____01632a68f617cd2fb14a - b
db.newInstance(_instance_of_Runnable_Input____01632a68f617cd2fb14a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____01632a68f617cd2fb14a);
db.assign(_instance_of_Runnable_Input____01632a68f617cd2fb14a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000012');
db.assign(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____01632a68f617cd2fb14a);

// :_instance_of_Runnable_Output____01632a68f79614f26081 - a || b
db.newInstance(_instance_of_Runnable_Output____01632a68f79614f26081)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a or b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _Runnable_Definition_Outputs_01621fb84e320000f00b  , _instance_of_Runnable_Output____01632a68f79614f26081);
db.assign(_instance_of_Runnable_Output____01632a68f79614f26081, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000012');
db.assign(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____01632a68f79614f26081);

// :_instance_of_Documentation_Function_Metadata_d0c32a68f21892cad01b
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c32a68f21892cad01b)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]: "",
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]: "## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01632a68f461f5ff3540-a | Boolean | first operand. |\n| 01632a68f617cd2fb14a-b | Boolean | second operand. |\n",
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]: "## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n|01632a68f79614f26081-a or b | Boolean | `true` if either `a` or `b` is `true`. `false` otherwise. |\n",
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]: "## Description\nThe `or` of a set of operands is `true` if and only if one of its operands is `true`.\n",
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]: "Logical Or.",
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c32a68f21892cad01b);
db.assign(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c32a68f21892cad01b);
db.assign(_instance_of_Documentation_Function_Metadata_d0c32a68f21892cad01b, _Object_gooRel_ff022000000000000003, _instance_of_Coded_Function_model____Or_01632a68f21892cad01b);

// Assigning to a Folder. Check this
let parentFolder = _Logic_0178445ee2a56bf00fd6; // Core/Logic
db.assignOptional(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _Object_gooRel_ff022000000000000003, parentFolder);
db.assignOptional(parentFolder, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Or_01632a68f21892cad01b);
db.assignOptional(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _GOO_parentGooRel_ff02200000000000000u, parentFolder);
db.assignOptional(parentFolder, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Or_01632a68f21892cad01b);
