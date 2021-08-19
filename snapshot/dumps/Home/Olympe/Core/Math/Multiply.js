
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


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
const _instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372 = db.assignTag('01626ca57a3657c7d372');
const _instance_of_Runnable_Input____a_01626ca5a59c894c6890 = db.assignTag('01626ca5a59c894c6890');
const _instance_of_Runnable_Input____b_01626ca5fd6e05b9701d = db.assignTag('01626ca5fd6e05b9701d');
const _instance_of_Runnable_Output____a$_42_$b_01626ca624c442901a72 = db.assignTag('01626ca624c442901a72');
const _instance_of_Documentation_017b35893b8d25d1089d = db.assignTag('017b35893b8d25d1089d');
const _instance_of_Documentation_017b35893f8ecdd33edb = db.assignTag('017b35893f8ecdd33edb');
const _instance_of_Documentation_017b35893f9576a15432 = db.assignTag('017b35893f9576a15432');
const _instance_of_Documentation_017b3589427fc26e8142 = db.assignTag('017b3589427fc26e8142');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Math_0178445f8bd56b19894f               = '0178445f8bd56b19894f';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372
db.newModel(_instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372, 'Multiply') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.setRootInstanceTag(_instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372);
// :_instance_of_Runnable_Input____a_01626ca5a59c894c6890
db.newInstance(_instance_of_Runnable_Input____a_01626ca5a59c894c6890)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____b_01626ca5fd6e05b9701d
db.newInstance(_instance_of_Runnable_Input____b_01626ca5fd6e05b9701d)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____a$_42_$b_01626ca624c442901a72
db.newInstance(_instance_of_Runnable_Output____a$_42_$b_01626ca624c442901a72)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a*b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b8d25d1089d
db.newInstance(_instance_of_Documentation_017b35893b8d25d1089d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Performs a multiplication operation between the 2 numbers passed as arguments.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Multiplies 2 numbers.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f8ecdd33edb
db.newInstance(_instance_of_Documentation_017b35893f8ecdd33edb)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'First operand.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f9576a15432
db.newInstance(_instance_of_Documentation_017b35893f9576a15432)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Second operand.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589427fc26e8142
db.newInstance(_instance_of_Documentation_017b3589427fc26e8142)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The result of the multiplication.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____a_01626ca5a59c894c6890);
db.assign(_instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____b_01626ca5fd6e05b9701d);
db.assign(_instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____a$_42_$b_01626ca624c442901a72);
db.assign(_instance_of_Runnable_Input____a_01626ca5a59c894c6890, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____b_01626ca5fd6e05b9701d, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____a$_42_$b_01626ca624c442901a72, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Documentation_017b35893b8d25d1089d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372);
db.assign(_instance_of_Documentation_017b35893f8ecdd33edb   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____a_01626ca5a59c894c6890);
db.assign(_instance_of_Documentation_017b35893f9576a15432   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____b_01626ca5fd6e05b9701d);
db.assign(_instance_of_Documentation_017b3589427fc26e8142   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____a$_42_$b_01626ca624c442901a72);
db.assign(_instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____a_01626ca5a59c894c6890);
db.assign(_instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____b_01626ca5fd6e05b9701d);
db.assign(_instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____a$_42_$b_01626ca624c442901a72);
db.assign(_instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b8d25d1089d   );
db.assign(_instance_of_Runnable_Input____a_01626ca5a59c894c6890, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f8ecdd33edb   );
db.assign(_instance_of_Runnable_Input____b_01626ca5fd6e05b9701d, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f9576a15432   );
db.assign(_instance_of_Runnable_Output____a$_42_$b_01626ca624c442901a72, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589427fc26e8142   );
db.assignOptional(_instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372, _Object_gooRel_ff022000000000000003, _Math_0178445f8bd56b19894f);
db.assignOptional(_instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372, _GOO_parentGooRel_ff02200000000000000u, _Math_0178445f8bd56b19894f);
db.assignOptional(_Math_0178445f8bd56b19894f, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372);
db.assignOptional(_Math_0178445f8bd56b19894f, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Multiply_01626ca57a3657c7d372);
