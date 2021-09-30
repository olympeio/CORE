
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


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
const _instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9 = db.assignTag('01626ca1e3ef544963b9');
const _instance_of_Runnable_Input____a_01626ca206a6862da7e1 = db.assignTag('01626ca206a6862da7e1');
const _instance_of_Runnable_Input____b_01626ca22145972bfcc9 = db.assignTag('01626ca22145972bfcc9');
const _instance_of_Runnable_Output____a$_45_$b_01626ca23c4437fb7c89 = db.assignTag('01626ca23c4437fb7c89');
const _instance_of_Documentation_017b35893b8d547e98a2 = db.assignTag('017b35893b8d547e98a2');
const _instance_of_Documentation_017b35893f8e6fd63c14 = db.assignTag('017b35893f8e6fd63c14');
const _instance_of_Documentation_017b35893f8eabef9e8a = db.assignTag('017b35893f8eabef9e8a');
const _instance_of_Documentation_017b3589427f1cc79993 = db.assignTag('017b3589427f1cc79993');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Math_0178445f8bd56b19894f               = '0178445f8bd56b19894f';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9
db.newModel(_instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9, 'Minus') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.setRootInstanceTag(_instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9);
// :_instance_of_Runnable_Input____a_01626ca206a6862da7e1
db.newInstance(_instance_of_Runnable_Input____a_01626ca206a6862da7e1)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____b_01626ca22145972bfcc9
db.newInstance(_instance_of_Runnable_Input____b_01626ca22145972bfcc9)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____a$_45_$b_01626ca23c4437fb7c89
db.newInstance(_instance_of_Runnable_Output____a$_45_$b_01626ca23c4437fb7c89)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a-b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b8d547e98a2
db.newInstance(_instance_of_Documentation_017b35893b8d547e98a2)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Performs a subtraction operation between the 2 numbers passed as arguments.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Subtracts 2 numbers.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f8e6fd63c14
db.newInstance(_instance_of_Documentation_017b35893f8e6fd63c14)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'First operand',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f8eabef9e8a
db.newInstance(_instance_of_Documentation_017b35893f8eabef9e8a)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Second operand',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589427f1cc79993
db.newInstance(_instance_of_Documentation_017b3589427f1cc79993)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The result of the substraction',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____a_01626ca206a6862da7e1);
db.assign(_instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____b_01626ca22145972bfcc9);
db.assign(_instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____a$_45_$b_01626ca23c4437fb7c89);
db.assign(_instance_of_Runnable_Input____a_01626ca206a6862da7e1, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____b_01626ca22145972bfcc9, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____a$_45_$b_01626ca23c4437fb7c89, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Documentation_017b35893b8d547e98a2   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9);
db.assign(_instance_of_Documentation_017b35893f8e6fd63c14   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____a_01626ca206a6862da7e1);
db.assign(_instance_of_Documentation_017b35893f8eabef9e8a   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____b_01626ca22145972bfcc9);
db.assign(_instance_of_Documentation_017b3589427f1cc79993   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____a$_45_$b_01626ca23c4437fb7c89);
db.assign(_instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____a_01626ca206a6862da7e1);
db.assign(_instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____b_01626ca22145972bfcc9);
db.assign(_instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____a$_45_$b_01626ca23c4437fb7c89);
db.assign(_instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b8d547e98a2   );
db.assign(_instance_of_Runnable_Input____a_01626ca206a6862da7e1, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f8e6fd63c14   );
db.assign(_instance_of_Runnable_Input____b_01626ca22145972bfcc9, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f8eabef9e8a   );
db.assign(_instance_of_Runnable_Output____a$_45_$b_01626ca23c4437fb7c89, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589427f1cc79993   );
db.assignOptional(_instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9, _Object_gooRel_ff022000000000000003, _Math_0178445f8bd56b19894f);
db.assignOptional(_instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9, _GOO_parentGooRel_ff02200000000000000u, _Math_0178445f8bd56b19894f);
db.assignOptional(_Math_0178445f8bd56b19894f, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9);
db.assignOptional(_Math_0178445f8bd56b19894f, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Minus_01626ca1e3ef544963b9);
