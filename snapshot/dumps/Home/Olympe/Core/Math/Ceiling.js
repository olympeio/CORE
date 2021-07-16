
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
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
const _instance_of_Coded_Function_model____Ceiling_01689e69c0c3c9e89b12 = db.assignTag('01689e69c0c3c9e89b12');
const _instance_of_Runnable_Input____a_01689e69c32b11c577e4 = db.assignTag('01689e69c32b11c577e4');
const _instance_of_Runnable_Output____ceiling$_40_$a$_41_$_01689e69c5de778a413e = db.assignTag('01689e69c5de778a413e');
const _instance_of_Documentation_Function_Metadata_d0c89e69c0c3c9e89b12 = db.assignTag('d0c89e69c0c3c9e89b12');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Math_0178445f8bd56b19894f               = '0178445f8bd56b19894f';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Ceiling_01689e69c0c3c9e89b12
db.newModel(_instance_of_Coded_Function_model____Ceiling_01689e69c0c3c9e89b12, 'Ceiling') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        ['01621fb84e320000f001']:'public',
        'v'                                     :1
    })
    .done(); 
db.setRootInstanceTag(_instance_of_Coded_Function_model____Ceiling_01689e69c0c3c9e89b12);
// :_instance_of_Runnable_Input____a_01689e69c32b11c577e4
db.newInstance(_instance_of_Runnable_Input____a_01689e69c32b11c577e4)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Ceiling_01689e69c0c3c9e89b12)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____ceiling$_40_$a$_41_$_01689e69c5de778a413e
db.newInstance(_instance_of_Runnable_Output____ceiling$_40_$a$_41_$_01689e69c5de778a413e)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Ceiling_01689e69c0c3c9e89b12)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'ceiling(a)',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c89e69c0c3c9e89b12
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c89e69c0c3c9e89b12)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Ceiling_01689e69c0c3c9e89b12)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01689e69c32b11c577e4-a | Number | The number to round up. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01689e69c5de778a413e-ceiling(a) | Number | The smallest integer greater than or equal to a. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nReturns the smallest integer greater than or equal to the given number.\nFor example: Ceiling(1.1) returns 2.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Rounds a number up to the next largest integer.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Ceiling_01689e69c0c3c9e89b12, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____a_01689e69c32b11c577e4);
db.assign(_instance_of_Coded_Function_model____Ceiling_01689e69c0c3c9e89b12, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____ceiling$_40_$a$_41_$_01689e69c5de778a413e);
db.assign(_instance_of_Runnable_Input____a_01689e69c32b11c577e4, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____ceiling$_40_$a$_41_$_01689e69c5de778a413e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Coded_Function_model____Ceiling_01689e69c0c3c9e89b12, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c89e69c0c3c9e89b12);
db.assign(_instance_of_Coded_Function_model____Ceiling_01689e69c0c3c9e89b12, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____a_01689e69c32b11c577e4);
db.assign(_instance_of_Coded_Function_model____Ceiling_01689e69c0c3c9e89b12, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____ceiling$_40_$a$_41_$_01689e69c5de778a413e);
db.assign(_instance_of_Coded_Function_model____Ceiling_01689e69c0c3c9e89b12, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c89e69c0c3c9e89b12);
db.assignOptional(_instance_of_Coded_Function_model____Ceiling_01689e69c0c3c9e89b12, _Object_gooRel_ff022000000000000003, _Math_0178445f8bd56b19894f);
db.assignOptional(_instance_of_Coded_Function_model____Ceiling_01689e69c0c3c9e89b12, _GOO_parentGooRel_ff02200000000000000u, _Math_0178445f8bd56b19894f);
db.assignOptional(_Math_0178445f8bd56b19894f, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Ceiling_01689e69c0c3c9e89b12);
db.assignOptional(_Math_0178445f8bd56b19894f, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Ceiling_01689e69c0c3c9e89b12);
