
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
const _instance_of_Coded_Function_model____Not_01632a7f645d8a5b265a = db.assignTag('01632a7f645d8a5b265a');
const _instance_of_Runnable_Input____a_01632a7f6637c5c131d4 = db.assignTag('01632a7f6637c5c131d4');
const _instance_of_Runnable_Output____$_33_$a_01632a7f6a34eec8d9cc = db.assignTag('01632a7f6a34eec8d9cc');
const _instance_of_Documentation_017b35893bac4bb4db1c = db.assignTag('017b35893bac4bb4db1c');
const _instance_of_Documentation_017b35893fc57d88ac22 = db.assignTag('017b35893fc57d88ac22');
const _instance_of_Documentation_017b358942ee9ca446a1 = db.assignTag('017b358942ee9ca446a1');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Logic_0178445f8bd56b198950              = '0178445f8bd56b198950';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Not_01632a7f645d8a5b265a
db.newModel(_instance_of_Coded_Function_model____Not_01632a7f645d8a5b265a, 'Not') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.setRootInstanceTag(_instance_of_Coded_Function_model____Not_01632a7f645d8a5b265a);
// :_instance_of_Runnable_Input____a_01632a7f6637c5c131d4
db.newInstance(_instance_of_Runnable_Input____a_01632a7f6637c5c131d4)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Not_01632a7f645d8a5b265a)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____$_33_$a_01632a7f6a34eec8d9cc
db.newInstance(_instance_of_Runnable_Output____$_33_$a_01632a7f6a34eec8d9cc)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Not_01632a7f645d8a5b265a)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'!a',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893bac4bb4db1c
db.newInstance(_instance_of_Documentation_017b35893bac4bb4db1c)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Not_01632a7f645d8a5b265a)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Returns `false` if its single operand can be converted to `true`; otherwise, returns `true`.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Boolean Not.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fc57d88ac22
db.newInstance(_instance_of_Documentation_017b35893fc57d88ac22)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Not_01632a7f645d8a5b265a)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The operand.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b358942ee9ca446a1
db.newInstance(_instance_of_Documentation_017b358942ee9ca446a1)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Not_01632a7f645d8a5b265a)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The negated value.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Not_01632a7f645d8a5b265a, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____a_01632a7f6637c5c131d4);
db.assign(_instance_of_Coded_Function_model____Not_01632a7f645d8a5b265a, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____$_33_$a_01632a7f6a34eec8d9cc);
db.assign(_instance_of_Runnable_Input____a_01632a7f6637c5c131d4, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Runnable_Output____$_33_$a_01632a7f6a34eec8d9cc, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Documentation_017b35893bac4bb4db1c   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Not_01632a7f645d8a5b265a);
db.assign(_instance_of_Documentation_017b35893fc57d88ac22   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____a_01632a7f6637c5c131d4);
db.assign(_instance_of_Documentation_017b358942ee9ca446a1   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____$_33_$a_01632a7f6a34eec8d9cc);
db.assign(_instance_of_Coded_Function_model____Not_01632a7f645d8a5b265a, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____a_01632a7f6637c5c131d4);
db.assign(_instance_of_Coded_Function_model____Not_01632a7f645d8a5b265a, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____$_33_$a_01632a7f6a34eec8d9cc);
db.assign(_instance_of_Coded_Function_model____Not_01632a7f645d8a5b265a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893bac4bb4db1c   );
db.assign(_instance_of_Runnable_Input____a_01632a7f6637c5c131d4, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fc57d88ac22   );
db.assign(_instance_of_Runnable_Output____$_33_$a_01632a7f6a34eec8d9cc, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b358942ee9ca446a1   );
db.assignOptional(_instance_of_Coded_Function_model____Not_01632a7f645d8a5b265a, _Object_gooRel_ff022000000000000003, _Logic_0178445f8bd56b198950);
db.assignOptional(_instance_of_Coded_Function_model____Not_01632a7f645d8a5b265a, _GOO_parentGooRel_ff02200000000000000u, _Logic_0178445f8bd56b198950);
db.assignOptional(_Logic_0178445f8bd56b198950, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Not_01632a7f645d8a5b265a);
db.assignOptional(_Logic_0178445f8bd56b198950, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Not_01632a7f645d8a5b265a);
