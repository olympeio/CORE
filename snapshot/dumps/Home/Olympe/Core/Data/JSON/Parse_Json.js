
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Object_ff021000000000000001             = 'ff021000000000000001';
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
const _instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7 = db.assignTag('0162e331fae562c33ef7');
const _instance_of_Runnable_Input____source_0162e331fc8fe5716519 = db.assignTag('0162e331fc8fe5716519');
const _instance_of_Runnable_Output____result_0162e3322c583d0cbd93 = db.assignTag('0162e3322c583d0cbd93');
const _instance_of_Runnable_Input____path_0162e33251904fd5ad37 = db.assignTag('0162e33251904fd5ad37');
const _instance_of_Documentation_017b35893b73ed20429e = db.assignTag('017b35893b73ed20429e');
const _instance_of_Documentation_017b35893f7100a7893c = db.assignTag('017b35893f7100a7893c');
const _instance_of_Documentation_017b35893f715803831d = db.assignTag('017b35893f715803831d');
const _instance_of_Documentation_017b3589427a301f1fd8 = db.assignTag('017b3589427a301f1fd8');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _JSON_0179b2684a901d133726               = '0179b2684a901d133726';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7
db.newModel(_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7, 'Parse JSON') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Parse Json',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7);
// :_instance_of_Runnable_Input____source_0162e331fc8fe5716519
db.newInstance(_instance_of_Runnable_Input____source_0162e331fc8fe5716519)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'source',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____result_0162e3322c583d0cbd93
db.newInstance(_instance_of_Runnable_Output____result_0162e3322c583d0cbd93)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'result',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____path_0162e33251904fd5ad37
db.newInstance(_instance_of_Runnable_Input____path_0162e33251904fd5ad37)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'path',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b73ed20429e
db.newInstance(_instance_of_Documentation_017b35893b73ed20429e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Parses a JSON string and extracts the object specified by the path.\n\nThe path is specified in dotted form.\n\n\n**Examples**:\n```\nParseJson({ "a": { "b": "hello"}}, \'a.b\') -> "hello"\nParseJson([\'a\', \'b\', \'c\'], 1) -> \'b\'\nParseJson({ "03. my key": true}, \'["03. my key"]\') -> true\n```\nFull doc of the syntax supported: [jsonpath](https://www.npmjs.com/package/jsonpath). A list is returned when multiple results are found.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Parse a JSON string.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f7100a7893c
db.newInstance(_instance_of_Documentation_017b35893f7100a7893c)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The JSON string.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f715803831d
db.newInstance(_instance_of_Documentation_017b35893f715803831d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The path where the object is. Wildcard (*), recursion (..), range ([start:end:step] are supported.)',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589427a301f1fd8
db.newInstance(_instance_of_Documentation_017b3589427a301f1fd8)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The object instance.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____source_0162e331fc8fe5716519);
db.assign(_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____path_0162e33251904fd5ad37);
db.assign(_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____result_0162e3322c583d0cbd93);
db.assign(_instance_of_Runnable_Input____source_0162e331fc8fe5716519, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____result_0162e3322c583d0cbd93, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____path_0162e33251904fd5ad37, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Documentation_017b35893b73ed20429e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7);
db.assign(_instance_of_Documentation_017b35893f7100a7893c   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____source_0162e331fc8fe5716519);
db.assign(_instance_of_Documentation_017b35893f715803831d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____path_0162e33251904fd5ad37);
db.assign(_instance_of_Documentation_017b3589427a301f1fd8   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____result_0162e3322c583d0cbd93);
db.assign(_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____source_0162e331fc8fe5716519);
db.assign(_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____result_0162e3322c583d0cbd93);
db.assign(_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____path_0162e33251904fd5ad37);
db.assign(_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b73ed20429e   );
db.assign(_instance_of_Runnable_Input____source_0162e331fc8fe5716519, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f7100a7893c   );
db.assign(_instance_of_Runnable_Output____result_0162e3322c583d0cbd93, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589427a301f1fd8   );
db.assign(_instance_of_Runnable_Input____path_0162e33251904fd5ad37, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f715803831d   );
db.assignOptional(_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7, _Object_gooRel_ff022000000000000003, _JSON_0179b2684a901d133726);
db.assignOptional(_instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7, _GOO_parentGooRel_ff02200000000000000u, _JSON_0179b2684a901d133726);
db.assignOptional(_JSON_0179b2684a901d133726, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7);
db.assignOptional(_JSON_0179b2684a901d133726, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Parse_JSON_0162e331fae562c33ef7);
