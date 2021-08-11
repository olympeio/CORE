
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
const _String_ff021000000000000011             = 'ff021000000000000011';


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
const _instance_of_Coded_Function_model____To_Lowercase_01626bf37c1b604aa550 = db.assignTag('01626bf37c1b604aa550');
const _instance_of_Runnable_Input____s_01626bf5359a1c9ea07b = db.assignTag('01626bf5359a1c9ea07b');
const _instance_of_Runnable_Output____result_01626bf5bf18d291924d = db.assignTag('01626bf5bf18d291924d');
const _instance_of_Documentation_017b35893bb5e838b54a = db.assignTag('017b35893bb5e838b54a');
const _instance_of_Documentation_017b35893fd27897267e = db.assignTag('017b35893fd27897267e');
const _instance_of_Documentation_017b358942f588064ca2 = db.assignTag('017b358942f588064ca2');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Text_0178445ee2a56bf00fd6               = '0178445ee2a56bf00fd6';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____To_Lowercase_01626bf37c1b604aa550
db.newModel(_instance_of_Coded_Function_model____To_Lowercase_01626bf37c1b604aa550, 'To Lowercase') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.setRootInstanceTag(_instance_of_Coded_Function_model____To_Lowercase_01626bf37c1b604aa550);
// :_instance_of_Runnable_Input____s_01626bf5359a1c9ea07b
db.newInstance(_instance_of_Runnable_Input____s_01626bf5359a1c9ea07b)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____To_Lowercase_01626bf37c1b604aa550)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____result_01626bf5bf18d291924d
db.newInstance(_instance_of_Runnable_Output____result_01626bf5bf18d291924d)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____To_Lowercase_01626bf37c1b604aa550)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'result',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893bb5e838b54a
db.newInstance(_instance_of_Documentation_017b35893bb5e838b54a)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____To_Lowercase_01626bf37c1b604aa550)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Returns a new string containing the value of the string converted to lower case.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Converts a string to lower case.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fd27897267e
db.newInstance(_instance_of_Documentation_017b35893fd27897267e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____To_Lowercase_01626bf37c1b604aa550)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The string to convert.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b358942f588064ca2
db.newInstance(_instance_of_Documentation_017b358942f588064ca2)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____To_Lowercase_01626bf37c1b604aa550)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The resulting string.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____To_Lowercase_01626bf37c1b604aa550, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____s_01626bf5359a1c9ea07b);
db.assign(_instance_of_Coded_Function_model____To_Lowercase_01626bf37c1b604aa550, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____result_01626bf5bf18d291924d);
db.assign(_instance_of_Runnable_Input____s_01626bf5359a1c9ea07b, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____result_01626bf5bf18d291924d, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Documentation_017b35893bb5e838b54a   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____To_Lowercase_01626bf37c1b604aa550);
db.assign(_instance_of_Documentation_017b35893fd27897267e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____s_01626bf5359a1c9ea07b);
db.assign(_instance_of_Documentation_017b358942f588064ca2   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____result_01626bf5bf18d291924d);
db.assign(_instance_of_Coded_Function_model____To_Lowercase_01626bf37c1b604aa550, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____s_01626bf5359a1c9ea07b);
db.assign(_instance_of_Coded_Function_model____To_Lowercase_01626bf37c1b604aa550, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____result_01626bf5bf18d291924d);
db.assign(_instance_of_Coded_Function_model____To_Lowercase_01626bf37c1b604aa550, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893bb5e838b54a   );
db.assign(_instance_of_Runnable_Input____s_01626bf5359a1c9ea07b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fd27897267e   );
db.assign(_instance_of_Runnable_Output____result_01626bf5bf18d291924d, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b358942f588064ca2   );
db.assignOptional(_instance_of_Coded_Function_model____To_Lowercase_01626bf37c1b604aa550, _Object_gooRel_ff022000000000000003, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_instance_of_Coded_Function_model____To_Lowercase_01626bf37c1b604aa550, _GOO_parentGooRel_ff02200000000000000u, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____To_Lowercase_01626bf37c1b604aa550);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____To_Lowercase_01626bf37c1b604aa550);
