
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
const _String_ff021000000000000011             = 'ff021000000000000011';


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
const _instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b = db.assignTag('01717c91b5f57d8e871b');
const _instance_of_Runnable_Input____s1_01717c91b7684659b494 = db.assignTag('01717c91b7684659b494');
const _instance_of_Runnable_Input____s2_01717c91b8e70a690099 = db.assignTag('01717c91b8e70a690099');
const _instance_of_Runnable_Output____s1_localeCompare$_40_$s2$_41_$_01717c91ba57803e767a = db.assignTag('01717c91ba57803e767a');
const _instance_of_Documentation_017b35893b948dca1447 = db.assignTag('017b35893b948dca1447');
const _instance_of_Documentation_017b35893f9b53e2216f = db.assignTag('017b35893f9b53e2216f');
const _instance_of_Documentation_017b35893f9be8be3367 = db.assignTag('017b35893f9be8be3367');
const _instance_of_Documentation_017b35a326fe24a1e1b2 = db.assignTag('017b35a326fe24a1e1b2');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Text_0178445ee2a56bf00fd6               = '0178445ee2a56bf00fd6';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b
db.newModel(_instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b, 'Compare Strings Ignore Case') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.setRootInstanceTag(_instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b);
// :_instance_of_Runnable_Input____s1_01717c91b7684659b494
db.newInstance(_instance_of_Runnable_Input____s1_01717c91b7684659b494)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s1',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____s2_01717c91b8e70a690099
db.newInstance(_instance_of_Runnable_Input____s2_01717c91b8e70a690099)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s2',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____s1_localeCompare$_40_$s2$_41_$_01717c91ba57803e767a
db.newInstance(_instance_of_Runnable_Output____s1_localeCompare$_40_$s2$_41_$_01717c91ba57803e767a)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s1.localeCompare(s2)',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b948dca1447
db.newInstance(_instance_of_Documentation_017b35893b948dca1447)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Returns a number indicating whether the reference string s2 comes before, after, or is equivalent to s1 string in sort order, ignoring the case.\n\nUses the `localeCompare` JavaScript` function. See: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Compare a string with another one ignoring case.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f9b53e2216f
db.newInstance(_instance_of_Documentation_017b35893f9b53e2216f)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Second string',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f9be8be3367
db.newInstance(_instance_of_Documentation_017b35893f9be8be3367)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'First string',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a326fe24a1e1b2
db.newInstance(_instance_of_Documentation_017b35a326fe24a1e1b2)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Returns -1 if (s1 < s2), 0 if (s1 == s2), and 1 if (s1 > s2). It ignores the case.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____s1_01717c91b7684659b494);
db.assign(_instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____s2_01717c91b8e70a690099);
db.assign(_instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____s1_localeCompare$_40_$s2$_41_$_01717c91ba57803e767a);
db.assign(_instance_of_Runnable_Input____s1_01717c91b7684659b494, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____s2_01717c91b8e70a690099, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____s1_localeCompare$_40_$s2$_41_$_01717c91ba57803e767a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Documentation_017b35893b948dca1447   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b);
db.assign(_instance_of_Documentation_017b35893f9b53e2216f   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____s2_01717c91b8e70a690099);
db.assign(_instance_of_Documentation_017b35893f9be8be3367   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____s1_01717c91b7684659b494);
db.assign(_instance_of_Documentation_017b35a326fe24a1e1b2   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____s1_localeCompare$_40_$s2$_41_$_01717c91ba57803e767a);
db.assign(_instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____s1_01717c91b7684659b494);
db.assign(_instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____s2_01717c91b8e70a690099);
db.assign(_instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____s1_localeCompare$_40_$s2$_41_$_01717c91ba57803e767a);
db.assign(_instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b948dca1447   );
db.assign(_instance_of_Runnable_Input____s1_01717c91b7684659b494, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f9be8be3367   );
db.assign(_instance_of_Runnable_Input____s2_01717c91b8e70a690099, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f9b53e2216f   );
db.assign(_instance_of_Runnable_Output____s1_localeCompare$_40_$s2$_41_$_01717c91ba57803e767a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a326fe24a1e1b2   );
db.assignOptional(_instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b, _Object_gooRel_ff022000000000000003, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b, _GOO_parentGooRel_ff02200000000000000u, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Compare_Strings_Ignore_Case_01717c91b5f57d8e871b);
