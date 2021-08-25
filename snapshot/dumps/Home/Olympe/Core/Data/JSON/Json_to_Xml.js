
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Error_Flow_016eeb5ede9f3094d8f0         = '016eeb5ede9f3094d8f0';
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
const _instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6 = db.assignTag('017802c8cd51d09059d6');
const _instance_of_Runnable_Input____json_017802c8e7b1d2a37145 = db.assignTag('017802c8e7b1d2a37145');
const _instance_of_Runnable_Output____xml_017802c90d28e6bbc9c9 = db.assignTag('017802c90d28e6bbc9c9');
const _instance_of_Runnable_Input____wrappersPath_01783a54f96c4c9aaa09 = db.assignTag('01783a54f96c4c9aaa09');
const _instance_of_Runnable_Output____Error_Flow_01783a58b17afc8dee4b = db.assignTag('01783a58b17afc8dee4b');
const _instance_of_Documentation_017b35893b74c948b4f7 = db.assignTag('017b35893b74c948b4f7');
const _instance_of_Documentation_017b35893f71254d7652 = db.assignTag('017b35893f71254d7652');
const _instance_of_Documentation_017b35893f715db0f1d3 = db.assignTag('017b35893f715db0f1d3');
const _instance_of_Documentation_017b3589427ad21f81a1 = db.assignTag('017b3589427ad21f81a1');
const _instance_of_Documentation_017b35894411268fe42f = db.assignTag('017b35894411268fe42f');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _JSON_0179b2684a901d133726               = '0179b2684a901d133726';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6
db.newModel(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6, 'JSON to XML') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Json to Xml',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6);
// :_instance_of_Runnable_Input____json_017802c8e7b1d2a37145
db.newInstance(_instance_of_Runnable_Input____json_017802c8e7b1d2a37145)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'json',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____xml_017802c90d28e6bbc9c9
db.newInstance(_instance_of_Runnable_Output____xml_017802c90d28e6bbc9c9)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'xml',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____wrappersPath_01783a54f96c4c9aaa09
db.newInstance(_instance_of_Runnable_Input____wrappersPath_01783a54f96c4c9aaa09)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'wrappersPath',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:'',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Error_Flow_01783a58b17afc8dee4b
db.newInstance(_instance_of_Runnable_Output____Error_Flow_01783a58b17afc8dee4b)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b74c948b4f7
db.newInstance(_instance_of_Documentation_017b35893b74c948b4f7)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Parses a JSON into a XML string, wrapping the result in a series of tags specified by the path (if any).',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Parse a JSON into a XML string',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f71254d7652
db.newInstance(_instance_of_Documentation_017b35893f71254d7652)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'JSON to parse',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f715db0f1d3
db.newInstance(_instance_of_Documentation_017b35893f715db0f1d3)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The path, specified in dotted form, default: \'\'',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589427ad21f81a1
db.newInstance(_instance_of_Documentation_017b3589427ad21f81a1)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The equivalent XML string',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35894411268fe42f
db.newInstance(_instance_of_Documentation_017b35894411268fe42f)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Triggered if the JSON is invalid',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____json_017802c8e7b1d2a37145);
db.assign(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____wrappersPath_01783a54f96c4c9aaa09);
db.assign(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____xml_017802c90d28e6bbc9c9);
db.assign(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Error_Flow_01783a58b17afc8dee4b);
db.assign(_instance_of_Runnable_Input____json_017802c8e7b1d2a37145, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____xml_017802c90d28e6bbc9c9, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____wrappersPath_01783a54f96c4c9aaa09, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____Error_Flow_01783a58b17afc8dee4b, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Documentation_017b35893b74c948b4f7   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6);
db.assign(_instance_of_Documentation_017b35893f71254d7652   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____json_017802c8e7b1d2a37145);
db.assign(_instance_of_Documentation_017b35893f715db0f1d3   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____wrappersPath_01783a54f96c4c9aaa09);
db.assign(_instance_of_Documentation_017b3589427ad21f81a1   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____xml_017802c90d28e6bbc9c9);
db.assign(_instance_of_Documentation_017b35894411268fe42f   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Error_Flow_01783a58b17afc8dee4b);
db.assign(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____json_017802c8e7b1d2a37145);
db.assign(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____xml_017802c90d28e6bbc9c9);
db.assign(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____wrappersPath_01783a54f96c4c9aaa09);
db.assign(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Error_Flow_01783a58b17afc8dee4b);
db.assign(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b74c948b4f7   );
db.assign(_instance_of_Runnable_Input____json_017802c8e7b1d2a37145, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f71254d7652   );
db.assign(_instance_of_Runnable_Output____xml_017802c90d28e6bbc9c9, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589427ad21f81a1   );
db.assign(_instance_of_Runnable_Input____wrappersPath_01783a54f96c4c9aaa09, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f715db0f1d3   );
db.assign(_instance_of_Runnable_Output____Error_Flow_01783a58b17afc8dee4b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35894411268fe42f   );
db.assignOptional(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6, _Object_gooRel_ff022000000000000003, _JSON_0179b2684a901d133726);
db.assignOptional(_instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6, _GOO_parentGooRel_ff02200000000000000u, _JSON_0179b2684a901d133726);
db.assignOptional(_JSON_0179b2684a901d133726, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6);
db.assignOptional(_JSON_0179b2684a901d133726, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____JSON_to_XML_017802c8cd51d09059d6);
