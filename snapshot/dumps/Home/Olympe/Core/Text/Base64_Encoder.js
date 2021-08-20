
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
const _instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba = db.assignTag('016cb9162263a22bcaba');
const _instance_of_Runnable_Input____input_016cb9162263a22bcabb = db.assignTag('016cb9162263a22bcabb');
const _instance_of_Runnable_Input____encoding_016cb9162263a22bcabc = db.assignTag('016cb9162263a22bcabc');
const _instance_of_Runnable_Output____base64_string_016cb9162263a22bcabd = db.assignTag('016cb9162263a22bcabd');
const _instance_of_Documentation_017b35893b9b2d5e3375 = db.assignTag('017b35893b9b2d5e3375');
const _instance_of_Documentation_017b35893f9e3092c47d = db.assignTag('017b35893f9e3092c47d');
const _instance_of_Documentation_017b35893f9e8ee7541a = db.assignTag('017b35893f9e8ee7541a');
const _instance_of_Documentation_017b3589429530fa2bfc = db.assignTag('017b3589429530fa2bfc');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Text_0178445ee2a56bf00fd6               = '0178445ee2a56bf00fd6';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba
db.newModel(_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba, 'Base64 Encoder') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Base64 Encoder',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba);
// :_instance_of_Runnable_Input____input_016cb9162263a22bcabb
db.newInstance(_instance_of_Runnable_Input____input_016cb9162263a22bcabb)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'input',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____encoding_016cb9162263a22bcabc
db.newInstance(_instance_of_Runnable_Input____encoding_016cb9162263a22bcabc)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'encoding',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:'UTF-8',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____base64_string_016cb9162263a22bcabd
db.newInstance(_instance_of_Runnable_Output____base64_string_016cb9162263a22bcabd)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'base64 string',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b9b2d5e3375
db.newInstance(_instance_of_Documentation_017b35893b9b2d5e3375)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Encode a UTF-8 or binary string into Base64',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Encode to Base64',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f9e3092c47d
db.newInstance(_instance_of_Documentation_017b35893f9e3092c47d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The string to encode',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f9e8ee7541a
db.newInstance(_instance_of_Documentation_017b35893f9e8ee7541a)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The encoding of the input (`UTF-8`or `binary`)',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589429530fa2bfc
db.newInstance(_instance_of_Documentation_017b3589429530fa2bfc)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____input_016cb9162263a22bcabb);
db.assign(_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____encoding_016cb9162263a22bcabc);
db.assign(_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____base64_string_016cb9162263a22bcabd);
db.assign(_instance_of_Runnable_Input____input_016cb9162263a22bcabb, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____encoding_016cb9162263a22bcabc, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____base64_string_016cb9162263a22bcabd, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Documentation_017b35893b9b2d5e3375   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba);
db.assign(_instance_of_Documentation_017b35893f9e3092c47d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____input_016cb9162263a22bcabb);
db.assign(_instance_of_Documentation_017b35893f9e8ee7541a   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____encoding_016cb9162263a22bcabc);
db.assign(_instance_of_Documentation_017b3589429530fa2bfc   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____base64_string_016cb9162263a22bcabd);
db.assign(_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____input_016cb9162263a22bcabb);
db.assign(_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____encoding_016cb9162263a22bcabc);
db.assign(_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____base64_string_016cb9162263a22bcabd);
db.assign(_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b9b2d5e3375   );
db.assign(_instance_of_Runnable_Input____input_016cb9162263a22bcabb, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f9e3092c47d   );
db.assign(_instance_of_Runnable_Input____encoding_016cb9162263a22bcabc, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f9e8ee7541a   );
db.assign(_instance_of_Runnable_Output____base64_string_016cb9162263a22bcabd, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589429530fa2bfc   );
db.assignOptional(_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba, _Object_gooRel_ff022000000000000003, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba, _GOO_parentGooRel_ff02200000000000000u, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Base64_Encoder_016cb9162263a22bcaba);
