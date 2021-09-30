
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
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
const _instance_of_Coded_Function_model____And_01632a642d93817d8aca = db.assignTag('01632a642d93817d8aca');
const _instance_of_Runnable_Input____a_01632a643268961df58a = db.assignTag('01632a643268961df58a');
const _instance_of_Runnable_Input____b_01632a643435735552c5 = db.assignTag('01632a643435735552c5');
const _instance_of_Runnable_Output____a_andand_b_01632a64357ab8aaac28 = db.assignTag('01632a64357ab8aaac28');
const _instance_of_Documentation_017b35893baeb71daf21 = db.assignTag('017b35893baeb71daf21');
const _instance_of_Documentation_017b35893fc7029139cb = db.assignTag('017b35893fc7029139cb');
const _instance_of_Documentation_017b35893fc74614f413 = db.assignTag('017b35893fc74614f413');
const _instance_of_Documentation_017b358942f01badd038 = db.assignTag('017b358942f01badd038');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Logic_0178445f8bd56b198950              = '0178445f8bd56b198950';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____And_01632a642d93817d8aca
db.newModel(_instance_of_Coded_Function_model____And_01632a642d93817d8aca, 'And') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.setRootInstanceTag(_instance_of_Coded_Function_model____And_01632a642d93817d8aca);
// :_instance_of_Runnable_Input____a_01632a643268961df58a
db.newInstance(_instance_of_Runnable_Input____a_01632a643268961df58a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____And_01632a642d93817d8aca)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____b_01632a643435735552c5
db.newInstance(_instance_of_Runnable_Input____b_01632a643435735552c5)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____And_01632a642d93817d8aca)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____a_andand_b_01632a64357ab8aaac28
db.newInstance(_instance_of_Runnable_Output____a_andand_b_01632a64357ab8aaac28)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____And_01632a642d93817d8aca)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a && b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893baeb71daf21
db.newInstance(_instance_of_Documentation_017b35893baeb71daf21)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____And_01632a642d93817d8aca)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The `and` of a set of operands is true if and only if all of its operands are true.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Logical And.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fc7029139cb
db.newInstance(_instance_of_Documentation_017b35893fc7029139cb)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____And_01632a642d93817d8aca)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'First operand.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fc74614f413
db.newInstance(_instance_of_Documentation_017b35893fc74614f413)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____And_01632a642d93817d8aca)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Second operand.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b358942f01badd038
db.newInstance(_instance_of_Documentation_017b358942f01badd038)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____And_01632a642d93817d8aca)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'`true` if both `a` and `b` are true. `false` otherwise.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____And_01632a642d93817d8aca, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____a_01632a643268961df58a);
db.assign(_instance_of_Coded_Function_model____And_01632a642d93817d8aca, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____b_01632a643435735552c5);
db.assign(_instance_of_Coded_Function_model____And_01632a642d93817d8aca, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____a_andand_b_01632a64357ab8aaac28);
db.assign(_instance_of_Runnable_Input____a_01632a643268961df58a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Runnable_Input____b_01632a643435735552c5, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Runnable_Output____a_andand_b_01632a64357ab8aaac28, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Documentation_017b35893baeb71daf21   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____And_01632a642d93817d8aca);
db.assign(_instance_of_Documentation_017b35893fc7029139cb   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____a_01632a643268961df58a);
db.assign(_instance_of_Documentation_017b35893fc74614f413   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____b_01632a643435735552c5);
db.assign(_instance_of_Documentation_017b358942f01badd038   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____a_andand_b_01632a64357ab8aaac28);
db.assign(_instance_of_Coded_Function_model____And_01632a642d93817d8aca, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____a_01632a643268961df58a);
db.assign(_instance_of_Coded_Function_model____And_01632a642d93817d8aca, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____b_01632a643435735552c5);
db.assign(_instance_of_Coded_Function_model____And_01632a642d93817d8aca, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____a_andand_b_01632a64357ab8aaac28);
db.assign(_instance_of_Coded_Function_model____And_01632a642d93817d8aca, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893baeb71daf21   );
db.assign(_instance_of_Runnable_Input____a_01632a643268961df58a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fc7029139cb   );
db.assign(_instance_of_Runnable_Input____b_01632a643435735552c5, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fc74614f413   );
db.assign(_instance_of_Runnable_Output____a_andand_b_01632a64357ab8aaac28, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b358942f01badd038   );
db.assignOptional(_instance_of_Coded_Function_model____And_01632a642d93817d8aca, _Object_gooRel_ff022000000000000003, _Logic_0178445f8bd56b198950);
db.assignOptional(_instance_of_Coded_Function_model____And_01632a642d93817d8aca, _GOO_parentGooRel_ff02200000000000000u, _Logic_0178445f8bd56b198950);
db.assignOptional(_Logic_0178445f8bd56b198950, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____And_01632a642d93817d8aca);
db.assignOptional(_Logic_0178445f8bd56b198950, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____And_01632a642d93817d8aca);
