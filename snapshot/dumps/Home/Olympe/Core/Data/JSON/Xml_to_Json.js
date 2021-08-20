
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
const _instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597 = db.assignTag('017802c59d239537f597');
const _instance_of_Runnable_Input____xml_017802c5cea89b1fb550 = db.assignTag('017802c5cea89b1fb550');
const _instance_of_Runnable_Output____json_017802c5f2f0a0c1473b = db.assignTag('017802c5f2f0a0c1473b');
const _instance_of_Runnable_Input____wrappersPath_01783a555ce395a9ae70 = db.assignTag('01783a555ce395a9ae70');
const _instance_of_Runnable_Output____Error_Flow_01783a58e9e2d4f1837b = db.assignTag('01783a58e9e2d4f1837b');
const _instance_of_Documentation_017b35893b71b299599e = db.assignTag('017b35893b71b299599e');
const _instance_of_Documentation_017b35893f7098f4f464 = db.assignTag('017b35893f7098f4f464');
const _instance_of_Documentation_017b35893f70ea19f461 = db.assignTag('017b35893f70ea19f461');
const _instance_of_Documentation_017b3589427ac01a6e1b = db.assignTag('017b3589427ac01a6e1b');
const _instance_of_Documentation_017b3589440e774a4dfa = db.assignTag('017b3589440e774a4dfa');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _JSON_0179b2684a901d133726               = '0179b2684a901d133726';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597
db.newModel(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597, 'XML to JSON') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Xml to Json',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597);
// :_instance_of_Runnable_Input____xml_017802c5cea89b1fb550
db.newInstance(_instance_of_Runnable_Input____xml_017802c5cea89b1fb550)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'xml',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____json_017802c5f2f0a0c1473b
db.newInstance(_instance_of_Runnable_Output____json_017802c5f2f0a0c1473b)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'json',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____wrappersPath_01783a555ce395a9ae70
db.newInstance(_instance_of_Runnable_Input____wrappersPath_01783a555ce395a9ae70)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'wrappersPath',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Error_Flow_01783a58e9e2d4f1837b
db.newInstance(_instance_of_Runnable_Output____Error_Flow_01783a58e9e2d4f1837b)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b71b299599e
db.newInstance(_instance_of_Documentation_017b35893b71b299599e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Parses a XML string into a JSON, extracting the object or array specified by the path (if any).',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Parse a XML string into a JSON',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f7098f4f464
db.newInstance(_instance_of_Documentation_017b35893f7098f4f464)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The path, specified in dotted form, default: \'\'',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f70ea19f461
db.newInstance(_instance_of_Documentation_017b35893f70ea19f461)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'XML to parse',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589427ac01a6e1b
db.newInstance(_instance_of_Documentation_017b3589427ac01a6e1b)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The equivalent JSON.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589440e774a4dfa
db.newInstance(_instance_of_Documentation_017b3589440e774a4dfa)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Triggered if the XML is not valid.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____xml_017802c5cea89b1fb550);
db.assign(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____wrappersPath_01783a555ce395a9ae70);
db.assign(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____json_017802c5f2f0a0c1473b);
db.assign(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Error_Flow_01783a58e9e2d4f1837b);
db.assign(_instance_of_Runnable_Input____xml_017802c5cea89b1fb550, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____json_017802c5f2f0a0c1473b, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____wrappersPath_01783a555ce395a9ae70, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____Error_Flow_01783a58e9e2d4f1837b, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Documentation_017b35893b71b299599e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597);
db.assign(_instance_of_Documentation_017b35893f7098f4f464   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____wrappersPath_01783a555ce395a9ae70);
db.assign(_instance_of_Documentation_017b35893f70ea19f461   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____xml_017802c5cea89b1fb550);
db.assign(_instance_of_Documentation_017b3589427ac01a6e1b   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____json_017802c5f2f0a0c1473b);
db.assign(_instance_of_Documentation_017b3589440e774a4dfa   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Error_Flow_01783a58e9e2d4f1837b);
db.assign(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____xml_017802c5cea89b1fb550);
db.assign(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____json_017802c5f2f0a0c1473b);
db.assign(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____wrappersPath_01783a555ce395a9ae70);
db.assign(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Error_Flow_01783a58e9e2d4f1837b);
db.assign(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b71b299599e   );
db.assign(_instance_of_Runnable_Input____xml_017802c5cea89b1fb550, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f70ea19f461   );
db.assign(_instance_of_Runnable_Output____json_017802c5f2f0a0c1473b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589427ac01a6e1b   );
db.assign(_instance_of_Runnable_Input____wrappersPath_01783a555ce395a9ae70, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f7098f4f464   );
db.assign(_instance_of_Runnable_Output____Error_Flow_01783a58e9e2d4f1837b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589440e774a4dfa   );
db.assignOptional(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597, _Object_gooRel_ff022000000000000003, _JSON_0179b2684a901d133726);
db.assignOptional(_instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597, _GOO_parentGooRel_ff02200000000000000u, _JSON_0179b2684a901d133726);
db.assignOptional(_JSON_0179b2684a901d133726, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597);
db.assignOptional(_JSON_0179b2684a901d133726, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____XML_to_JSON_017802c59d239537f597);
