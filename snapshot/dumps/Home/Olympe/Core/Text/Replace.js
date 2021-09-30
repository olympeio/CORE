
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


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
const _instance_of_Coded_Function_model____Replace_01717ca5bc4613380144 = db.assignTag('01717ca5bc4613380144');
const _instance_of_Runnable_Input____s_01717ca5be4ddedd2d4e = db.assignTag('01717ca5be4ddedd2d4e');
const _instance_of_Runnable_Input____pattern_01717ca5c00d355ee878 = db.assignTag('01717ca5c00d355ee878');
const _instance_of_Runnable_Input____replacement_01717ca5c1e683fa73fd = db.assignTag('01717ca5c1e683fa73fd');
const _instance_of_Runnable_Output____new_string_01717ca5c3b7c19fdeea = db.assignTag('01717ca5c3b7c19fdeea');
const _instance_of_Documentation_017b35893bb2fefeca6e = db.assignTag('017b35893bb2fefeca6e');
const _instance_of_Documentation_017b35893fce2a9c8122 = db.assignTag('017b35893fce2a9c8122');
const _instance_of_Documentation_017b35893fcfe997e177 = db.assignTag('017b35893fcfe997e177');
const _instance_of_Documentation_017b35893fcff3d55f21 = db.assignTag('017b35893fcff3d55f21');
const _instance_of_Documentation_017b358942f4b7cdb51c = db.assignTag('017b358942f4b7cdb51c');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Text_0178445ee2a56bf00fd6               = '0178445ee2a56bf00fd6';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144
db.newModel(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144, 'Replace') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.setRootInstanceTag(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144);
// :_instance_of_Runnable_Input____s_01717ca5be4ddedd2d4e
db.newInstance(_instance_of_Runnable_Input____s_01717ca5be4ddedd2d4e)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____pattern_01717ca5c00d355ee878
db.newInstance(_instance_of_Runnable_Input____pattern_01717ca5c00d355ee878)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'pattern',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____replacement_01717ca5c1e683fa73fd
db.newInstance(_instance_of_Runnable_Input____replacement_01717ca5c1e683fa73fd)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'replacement',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____new_string_01717ca5c3b7c19fdeea
db.newInstance(_instance_of_Runnable_Output____new_string_01717ca5c3b7c19fdeea)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'new string',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893bb2fefeca6e
db.newInstance(_instance_of_Documentation_017b35893bb2fefeca6e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Returns a new string in which the *first* match of `pattern` has been replaced by `replacement`. Both `pattern` and `replacement` are strings.\n\nUses the `replace` JavaScript function: See: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)\n',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Within a string, replace the first occurrence of a pattern by another string.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fce2a9c8122
db.newInstance(_instance_of_Documentation_017b35893fce2a9c8122)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The original string.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fcfe997e177
db.newInstance(_instance_of_Documentation_017b35893fcfe997e177)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The string to use as a replacement.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fcff3d55f21
db.newInstance(_instance_of_Documentation_017b35893fcff3d55f21)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The string to replace.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b358942f4b7cdb51c
db.newInstance(_instance_of_Documentation_017b358942f4b7cdb51c)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The string with the pattern replaced.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____s_01717ca5be4ddedd2d4e);
db.assign(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____pattern_01717ca5c00d355ee878);
db.assign(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____replacement_01717ca5c1e683fa73fd);
db.assign(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____new_string_01717ca5c3b7c19fdeea);
db.assign(_instance_of_Runnable_Input____s_01717ca5be4ddedd2d4e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____pattern_01717ca5c00d355ee878, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____replacement_01717ca5c1e683fa73fd, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____new_string_01717ca5c3b7c19fdeea, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Documentation_017b35893bb2fefeca6e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Replace_01717ca5bc4613380144);
db.assign(_instance_of_Documentation_017b35893fce2a9c8122   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____s_01717ca5be4ddedd2d4e);
db.assign(_instance_of_Documentation_017b35893fcfe997e177   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____replacement_01717ca5c1e683fa73fd);
db.assign(_instance_of_Documentation_017b35893fcff3d55f21   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____pattern_01717ca5c00d355ee878);
db.assign(_instance_of_Documentation_017b358942f4b7cdb51c   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____new_string_01717ca5c3b7c19fdeea);
db.assign(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____s_01717ca5be4ddedd2d4e);
db.assign(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____pattern_01717ca5c00d355ee878);
db.assign(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____replacement_01717ca5c1e683fa73fd);
db.assign(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____new_string_01717ca5c3b7c19fdeea);
db.assign(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893bb2fefeca6e   );
db.assign(_instance_of_Runnable_Input____s_01717ca5be4ddedd2d4e, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fce2a9c8122   );
db.assign(_instance_of_Runnable_Input____pattern_01717ca5c00d355ee878, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fcff3d55f21   );
db.assign(_instance_of_Runnable_Input____replacement_01717ca5c1e683fa73fd, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fcfe997e177   );
db.assign(_instance_of_Runnable_Output____new_string_01717ca5c3b7c19fdeea, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b358942f4b7cdb51c   );
db.assignOptional(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144, _Object_gooRel_ff022000000000000003, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_instance_of_Coded_Function_model____Replace_01717ca5bc4613380144, _GOO_parentGooRel_ff02200000000000000u, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Replace_01717ca5bc4613380144);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Replace_01717ca5bc4613380144);
