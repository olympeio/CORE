
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
const _String_ff021000000000000011             = 'ff021000000000000011';


// Definition of tags of defined properties
const _Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94 = '01703376c4a81c0e9d94';
const _Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001 = '01621fb84e320000f001';
const _Documentation_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_summary_01703376c4a81c0e9d91   = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_Input_Default_Value_01740c5d4ae4b520dd02 = '01740c5d4ae4b520dd02';
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
const _instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3 = db.assignTag('01626c0a49aef13d9bd3');
const _instance_of_Runnable_Input____s_01626c0be42a4b118911 = db.assignTag('01626c0be42a4b118911');
const _instance_of_Runnable_Input____start_01626c0c1803f28ecaba = db.assignTag('01626c0c1803f28ecaba');
const _instance_of_Runnable_Input____end_01626c0c3a9406fa0ac4 = db.assignTag('01626c0c3a9406fa0ac4');
const _instance_of_Runnable_Output____substring_01626c0c613a31e435c7 = db.assignTag('01626c0c613a31e435c7');
const _instance_of_Documentation_017b35893bb176954b80 = db.assignTag('017b35893bb176954b80');
const _instance_of_Documentation_017b35893fcde70baa6a = db.assignTag('017b35893fcde70baa6a');
const _instance_of_Documentation_017b35893fce38db4088 = db.assignTag('017b35893fce38db4088');
const _instance_of_Documentation_017b35893fce6efc9cf4 = db.assignTag('017b35893fce6efc9cf4');
const _instance_of_Documentation_017b358942f30694e0cd = db.assignTag('017b358942f30694e0cd');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Text_0178445ee2a56bf00fd6               = '0178445ee2a56bf00fd6';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3
db.newModel(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3, 'Sub String') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.setRootInstanceTag(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3);
// :_instance_of_Runnable_Input____s_01626c0be42a4b118911
db.newInstance(_instance_of_Runnable_Input____s_01626c0be42a4b118911)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____start_01626c0c1803f28ecaba
db.newInstance(_instance_of_Runnable_Input____start_01626c0c1803f28ecaba)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'start',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____end_01626c0c3a9406fa0ac4
db.newInstance(_instance_of_Runnable_Input____end_01626c0c3a9406fa0ac4)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'end',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:-1,
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____substring_01626c0c613a31e435c7
db.newInstance(_instance_of_Runnable_Output____substring_01626c0c613a31e435c7)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'substring',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893bb176954b80
db.newInstance(_instance_of_Documentation_017b35893bb176954b80)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Return the part of the string going from `start` to `end` (limits included).\n\n**Examples**\n```\nSubstring(\'Olympe\', 0, 5) -> \'Olymp\'\nSubstring(\'Olympe\', 1, 4) -> \'lym\'\n```',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Returns part of a string from `start` to `end` included.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fcde70baa6a
db.newInstance(_instance_of_Documentation_017b35893fcde70baa6a)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The input string.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fce38db4088
db.newInstance(_instance_of_Documentation_017b35893fce38db4088)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The index of the first character to include in the returned substring.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fce6efc9cf4
db.newInstance(_instance_of_Documentation_017b35893fce6efc9cf4)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The index of the first character to exclude from the returned substring. Default -1, means length of s.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b358942f30694e0cd
db.newInstance(_instance_of_Documentation_017b358942f30694e0cd)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The resulting string.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____s_01626c0be42a4b118911);
db.assign(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____start_01626c0c1803f28ecaba);
db.assign(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____end_01626c0c3a9406fa0ac4);
db.assign(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____substring_01626c0c613a31e435c7);
db.assign(_instance_of_Runnable_Input____s_01626c0be42a4b118911, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____start_01626c0c1803f28ecaba, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____end_01626c0c3a9406fa0ac4, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____substring_01626c0c613a31e435c7, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Documentation_017b35893bb176954b80   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3);
db.assign(_instance_of_Documentation_017b35893fcde70baa6a   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____s_01626c0be42a4b118911);
db.assign(_instance_of_Documentation_017b35893fce38db4088   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____start_01626c0c1803f28ecaba);
db.assign(_instance_of_Documentation_017b35893fce6efc9cf4   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____end_01626c0c3a9406fa0ac4);
db.assign(_instance_of_Documentation_017b358942f30694e0cd   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____substring_01626c0c613a31e435c7);
db.assign(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____s_01626c0be42a4b118911);
db.assign(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____start_01626c0c1803f28ecaba);
db.assign(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____end_01626c0c3a9406fa0ac4);
db.assign(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____substring_01626c0c613a31e435c7);
db.assign(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893bb176954b80   );
db.assign(_instance_of_Runnable_Input____s_01626c0be42a4b118911, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fcde70baa6a   );
db.assign(_instance_of_Runnable_Input____start_01626c0c1803f28ecaba, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fce38db4088   );
db.assign(_instance_of_Runnable_Input____end_01626c0c3a9406fa0ac4, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fce6efc9cf4   );
db.assign(_instance_of_Runnable_Output____substring_01626c0c613a31e435c7, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b358942f30694e0cd   );
db.assignOptional(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3, _Object_gooRel_ff022000000000000003, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3, _GOO_parentGooRel_ff02200000000000000u, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Sub_String_01626c0a49aef13d9bd3);
