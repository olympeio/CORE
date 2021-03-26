
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
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
const _instance_of_Coded_Function_model____Or_01632a68f21892cad01b = db.assignTag('01632a68f21892cad01b');
const _instance_of_Runnable_Input____a_01632a68f461f5ff3540 = db.assignTag('01632a68f461f5ff3540');
const _instance_of_Runnable_Input____b_01632a68f617cd2fb14a = db.assignTag('01632a68f617cd2fb14a');
const _instance_of_Runnable_Output____a_or_b_01632a68f79614f26081 = db.assignTag('01632a68f79614f26081');
const _instance_of_Documentation_Function_Metadata_d0c32a68f21892cad01b = db.assignTag('d0c32a68f21892cad01b');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Logic_0178445f8bd56b198950              = '0178445f8bd56b198950';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Or_01632a68f21892cad01b
db.newModel(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, 'Or') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.setRootInstanceTag(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b);
// :_instance_of_Runnable_Input____a_01632a68f461f5ff3540
db.newInstance(_instance_of_Runnable_Input____a_01632a68f461f5ff3540)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____b_01632a68f617cd2fb14a
db.newInstance(_instance_of_Runnable_Input____b_01632a68f617cd2fb14a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____a_or_b_01632a68f79614f26081
db.newInstance(_instance_of_Runnable_Output____a_or_b_01632a68f79614f26081)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a or b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c32a68f21892cad01b
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c32a68f21892cad01b)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01632a68f461f5ff3540-a | Boolean | first operand. |\n| 01632a68f617cd2fb14a-b | Boolean | second operand. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n|01632a68f79614f26081-a or b | Boolean | `true` if either `a` or `b` is `true`. `false` otherwise. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nThe `or` of a set of operands is `true` if and only if one of its operands is `true`.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Logical Or.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____a_01632a68f461f5ff3540);
db.assign(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____b_01632a68f617cd2fb14a);
db.assign(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____a_or_b_01632a68f79614f26081);
db.assign(_instance_of_Runnable_Input____a_01632a68f461f5ff3540, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Runnable_Input____b_01632a68f617cd2fb14a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Runnable_Output____a_or_b_01632a68f79614f26081, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c32a68f21892cad01b);
db.assign(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____a_01632a68f461f5ff3540);
db.assign(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____b_01632a68f617cd2fb14a);
db.assign(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____a_or_b_01632a68f79614f26081);
db.assign(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c32a68f21892cad01b);
db.assignOptional(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _Object_gooRel_ff022000000000000003, _Logic_0178445f8bd56b198950);
db.assignOptional(_instance_of_Coded_Function_model____Or_01632a68f21892cad01b, _GOO_parentGooRel_ff02200000000000000u, _Logic_0178445f8bd56b198950);
db.assignOptional(_Logic_0178445f8bd56b198950, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Or_01632a68f21892cad01b);
db.assignOptional(_Logic_0178445f8bd56b198950, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Or_01632a68f21892cad01b);
