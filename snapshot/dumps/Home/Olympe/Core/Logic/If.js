
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Object_ff021000000000000001             = 'ff021000000000000001';
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
const _instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4 = db.assignTag('01633eaa139d1f5e2fc4');
const _instance_of_Runnable_Input____Condition_01633eaa172b89783ceb = db.assignTag('01633eaa172b89783ceb');
const _instance_of_Runnable_Input____a_01633eaa18a8fe6cb2b0 = db.assignTag('01633eaa18a8fe6cb2b0');
const _instance_of_Runnable_Input____b_01633eaa19c3e19408f4 = db.assignTag('01633eaa19c3e19408f4');
const _instance_of_Runnable_Output____Condition_$_63_$_a_$_58_$_b_01633eaa1abb0efed4ab = db.assignTag('01633eaa1abb0efed4ab');
const _instance_of_Documentation_017b35893bada7ee5290 = db.assignTag('017b35893bada7ee5290');
const _instance_of_Documentation_017b35893fc60541e148 = db.assignTag('017b35893fc60541e148');
const _instance_of_Documentation_017b35893fc6ac827308 = db.assignTag('017b35893fc6ac827308');
const _instance_of_Documentation_017b35893fc6f1313741 = db.assignTag('017b35893fc6f1313741');
const _instance_of_Documentation_017b358942efcface69f = db.assignTag('017b358942efcface69f');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Logic_0178445f8bd56b198950              = '0178445f8bd56b198950';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4
db.newModel(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, 'If') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.setRootInstanceTag(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4);
// :_instance_of_Runnable_Input____Condition_01633eaa172b89783ceb
db.newInstance(_instance_of_Runnable_Input____Condition_01633eaa172b89783ceb)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Condition',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____a_01633eaa18a8fe6cb2b0
db.newInstance(_instance_of_Runnable_Input____a_01633eaa18a8fe6cb2b0)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____b_01633eaa19c3e19408f4
db.newInstance(_instance_of_Runnable_Input____b_01633eaa19c3e19408f4)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Condition_$_63_$_a_$_58_$_b_01633eaa1abb0efed4ab
db.newInstance(_instance_of_Runnable_Output____Condition_$_63_$_a_$_58_$_b_01633eaa1abb0efed4ab)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Condition ? a : b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893bada7ee5290
db.newInstance(_instance_of_Documentation_017b35893bada7ee5290)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'This function switches between 2 data-flows based on the provided condition.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Switch data flows based on a condition.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fc60541e148
db.newInstance(_instance_of_Documentation_017b35893fc60541e148)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The value to return on `false`.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fc6ac827308
db.newInstance(_instance_of_Documentation_017b35893fc6ac827308)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The condition to test.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fc6f1313741
db.newInstance(_instance_of_Documentation_017b35893fc6f1313741)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The value to return on `true`.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b358942efcface69f
db.newInstance(_instance_of_Documentation_017b358942efcface69f)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'a if Condition is `true`, b otherwise.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Condition_01633eaa172b89783ceb);
db.assign(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____a_01633eaa18a8fe6cb2b0);
db.assign(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____b_01633eaa19c3e19408f4);
db.assign(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Condition_$_63_$_a_$_58_$_b_01633eaa1abb0efed4ab);
db.assign(_instance_of_Runnable_Input____Condition_01633eaa172b89783ceb, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Runnable_Input____a_01633eaa18a8fe6cb2b0, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____b_01633eaa19c3e19408f4, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Output____Condition_$_63_$_a_$_58_$_b_01633eaa1abb0efed4ab, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Documentation_017b35893bada7ee5290   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4);
db.assign(_instance_of_Documentation_017b35893fc60541e148   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____b_01633eaa19c3e19408f4);
db.assign(_instance_of_Documentation_017b35893fc6ac827308   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Condition_01633eaa172b89783ceb);
db.assign(_instance_of_Documentation_017b35893fc6f1313741   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____a_01633eaa18a8fe6cb2b0);
db.assign(_instance_of_Documentation_017b358942efcface69f   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Condition_$_63_$_a_$_58_$_b_01633eaa1abb0efed4ab);
db.assign(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Condition_01633eaa172b89783ceb);
db.assign(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____a_01633eaa18a8fe6cb2b0);
db.assign(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____b_01633eaa19c3e19408f4);
db.assign(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Condition_$_63_$_a_$_58_$_b_01633eaa1abb0efed4ab);
db.assign(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893bada7ee5290   );
db.assign(_instance_of_Runnable_Input____Condition_01633eaa172b89783ceb, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fc6ac827308   );
db.assign(_instance_of_Runnable_Input____a_01633eaa18a8fe6cb2b0, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fc6f1313741   );
db.assign(_instance_of_Runnable_Input____b_01633eaa19c3e19408f4, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fc60541e148   );
db.assign(_instance_of_Runnable_Output____Condition_$_63_$_a_$_58_$_b_01633eaa1abb0efed4ab, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b358942efcface69f   );
db.assignOptional(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _Object_gooRel_ff022000000000000003, _Logic_0178445f8bd56b198950);
db.assignOptional(_instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4, _GOO_parentGooRel_ff02200000000000000u, _Logic_0178445f8bd56b198950);
db.assignOptional(_Logic_0178445f8bd56b198950, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4);
db.assignOptional(_Logic_0178445f8bd56b198950, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____If_01633eaa139d1f5e2fc4);
