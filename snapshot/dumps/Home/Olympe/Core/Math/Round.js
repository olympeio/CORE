
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
const _instance_of_Coded_Function_model____Round_01689e733cf446875997 = db.assignTag('01689e733cf446875997');
const _instance_of_Runnable_Input____a_01689e73431b42b06cb5 = db.assignTag('01689e73431b42b06cb5');
const _instance_of_Runnable_Output____round$_40_$a$_41_$_01689e7346db002d6118 = db.assignTag('01689e7346db002d6118');
const _instance_of_Documentation_017b35893b8937fcc03a = db.assignTag('017b35893b8937fcc03a');
const _instance_of_Documentation_017b35893f8a053a41d5 = db.assignTag('017b35893f8a053a41d5');
const _instance_of_Documentation_017b3589427ecfbbbb52 = db.assignTag('017b3589427ecfbbbb52');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Math_0178445f8bd56b19894f               = '0178445f8bd56b19894f';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Round_01689e733cf446875997
db.newModel(_instance_of_Coded_Function_model____Round_01689e733cf446875997, 'Round') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.setRootInstanceTag(_instance_of_Coded_Function_model____Round_01689e733cf446875997);
// :_instance_of_Runnable_Input____a_01689e73431b42b06cb5
db.newInstance(_instance_of_Runnable_Input____a_01689e73431b42b06cb5)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Round_01689e733cf446875997)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____round$_40_$a$_41_$_01689e7346db002d6118
db.newInstance(_instance_of_Runnable_Output____round$_40_$a$_41_$_01689e7346db002d6118)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Round_01689e733cf446875997)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'round(a)',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b8937fcc03a
db.newInstance(_instance_of_Documentation_017b35893b8937fcc03a)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Round_01689e733cf446875997)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Returns the nearest integer to the given number.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Rounds a number to the nearest integer.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f8a053a41d5
db.newInstance(_instance_of_Documentation_017b35893f8a053a41d5)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Round_01689e733cf446875997)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The number to round up.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589427ecfbbbb52
db.newInstance(_instance_of_Documentation_017b3589427ecfbbbb52)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Round_01689e733cf446875997)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The nearest integer to `a`.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Round_01689e733cf446875997, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____a_01689e73431b42b06cb5);
db.assign(_instance_of_Coded_Function_model____Round_01689e733cf446875997, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____round$_40_$a$_41_$_01689e7346db002d6118);
db.assign(_instance_of_Runnable_Input____a_01689e73431b42b06cb5, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____round$_40_$a$_41_$_01689e7346db002d6118, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Documentation_017b35893b8937fcc03a   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Round_01689e733cf446875997);
db.assign(_instance_of_Documentation_017b35893f8a053a41d5   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____a_01689e73431b42b06cb5);
db.assign(_instance_of_Documentation_017b3589427ecfbbbb52   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____round$_40_$a$_41_$_01689e7346db002d6118);
db.assign(_instance_of_Coded_Function_model____Round_01689e733cf446875997, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____a_01689e73431b42b06cb5);
db.assign(_instance_of_Coded_Function_model____Round_01689e733cf446875997, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____round$_40_$a$_41_$_01689e7346db002d6118);
db.assign(_instance_of_Coded_Function_model____Round_01689e733cf446875997, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b8937fcc03a   );
db.assign(_instance_of_Runnable_Input____a_01689e73431b42b06cb5, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f8a053a41d5   );
db.assign(_instance_of_Runnable_Output____round$_40_$a$_41_$_01689e7346db002d6118, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589427ecfbbbb52   );
db.assignOptional(_instance_of_Coded_Function_model____Round_01689e733cf446875997, _Object_gooRel_ff022000000000000003, _Math_0178445f8bd56b19894f);
db.assignOptional(_instance_of_Coded_Function_model____Round_01689e733cf446875997, _GOO_parentGooRel_ff02200000000000000u, _Math_0178445f8bd56b19894f);
db.assignOptional(_Math_0178445f8bd56b19894f, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Round_01689e733cf446875997);
db.assignOptional(_Math_0178445f8bd56b19894f, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Round_01689e733cf446875997);
