
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
const _instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8 = db.assignTag('01626cb3ca38d45646f8');
const _instance_of_Runnable_Input____n_01626cb3f10ce52f717c = db.assignTag('01626cb3f10ce52f717c');
const _instance_of_Runnable_Output____string_01626cb430b39e8dce7e = db.assignTag('01626cb430b39e8dce7e');
const _instance_of_Documentation_017b35893b95e794112e = db.assignTag('017b35893b95e794112e');
const _instance_of_Documentation_017b35893f9b680efa40 = db.assignTag('017b35893f9b680efa40');
const _instance_of_Documentation_017b35894292ab4fde1b = db.assignTag('017b35894292ab4fde1b');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Text_0178445ee2a56bf00fd6               = '0178445ee2a56bf00fd6';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8
db.newModel(_instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8, 'To String') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'To String',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8);
// :_instance_of_Runnable_Input____n_01626cb3f10ce52f717c
db.newInstance(_instance_of_Runnable_Input____n_01626cb3f10ce52f717c)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'n',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____string_01626cb430b39e8dce7e
db.newInstance(_instance_of_Runnable_Output____string_01626cb430b39e8dce7e)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'string',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b95e794112e
db.newInstance(_instance_of_Documentation_017b35893b95e794112e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Returns the string representation of the object.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Converts an object into a string.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f9b680efa40
db.newInstance(_instance_of_Documentation_017b35893f9b680efa40)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The object to convert.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35894292ab4fde1b
db.newInstance(_instance_of_Documentation_017b35894292ab4fde1b)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The resulting string.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____n_01626cb3f10ce52f717c);
db.assign(_instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____string_01626cb430b39e8dce7e);
db.assign(_instance_of_Runnable_Input____n_01626cb3f10ce52f717c, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Output____string_01626cb430b39e8dce7e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Documentation_017b35893b95e794112e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8);
db.assign(_instance_of_Documentation_017b35893f9b680efa40   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____n_01626cb3f10ce52f717c);
db.assign(_instance_of_Documentation_017b35894292ab4fde1b   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____string_01626cb430b39e8dce7e);
db.assign(_instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____n_01626cb3f10ce52f717c);
db.assign(_instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____string_01626cb430b39e8dce7e);
db.assign(_instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b95e794112e   );
db.assign(_instance_of_Runnable_Input____n_01626cb3f10ce52f717c, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f9b680efa40   );
db.assign(_instance_of_Runnable_Output____string_01626cb430b39e8dce7e, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35894292ab4fde1b   );
db.assignOptional(_instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8, _Object_gooRel_ff022000000000000003, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8, _GOO_parentGooRel_ff02200000000000000u, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____To_String_01626cb3ca38d45646f8);
