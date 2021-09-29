
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
const _instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d = db.assignTag('0179c79a6fb65e17624d');
const _instance_of_Runnable_Input____str_0179c79af682bb9dc031 = db.assignTag('0179c79af682bb9dc031');
const _instance_of_Runnable_Output____decoded_0179c79b074bfd81208a = db.assignTag('0179c79b074bfd81208a');
const _instance_of_Runnable_Input____entire_URL_0179c7c7dabd55cdd2a5 = db.assignTag('0179c7c7dabd55cdd2a5');
const _instance_of_Documentation_017b5b1759c032ec7e4f = db.assignTag('017b5b1759c032ec7e4f');
const _instance_of_Documentation_017b5b175a1e0860ca44 = db.assignTag('017b5b175a1e0860ca44');
const _instance_of_Documentation_017b5b175a4c51869499 = db.assignTag('017b5b175a4c51869499');
const _instance_of_Documentation_017b5b175a8b5ecf764e = db.assignTag('017b5b175a8b5ecf764e');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Net_0179b26969330c80c58b                = '0179b26969330c80c58b';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d
db.newModel(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d, 'Decode URI Component') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Decode URI Component',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d);
// :_instance_of_Runnable_Input____str_0179c79af682bb9dc031
db.newInstance(_instance_of_Runnable_Input____str_0179c79af682bb9dc031)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'str',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____decoded_0179c79b074bfd81208a
db.newInstance(_instance_of_Runnable_Output____decoded_0179c79b074bfd81208a)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'decoded',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____entire_URL_0179c7c7dabd55cdd2a5
db.newInstance(_instance_of_Runnable_Input____entire_URL_0179c7c7dabd55cdd2a5)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'entire URL',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:false,
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b5b1759c032ec7e4f
db.newInstance(_instance_of_Documentation_017b5b1759c032ec7e4f)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Calls the Javascript `decodeURI` or `decodeURIComponent` function.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Decodes a URI or URI component',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b5b175a1e0860ca44
db.newInstance(_instance_of_Documentation_017b5b175a1e0860ca44)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Input____str_0179c79af682bb9dc031)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The URI to be decoded.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b5b175a4c51869499
db.newInstance(_instance_of_Documentation_017b5b175a4c51869499)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Input____entire_URL_0179c7c7dabd55cdd2a5)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'If `true`, `decodeURI` is called.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b5b175a8b5ecf764e
db.newInstance(_instance_of_Documentation_017b5b175a8b5ecf764e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Output____decoded_0179c79b074bfd81208a)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The decoded URI.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____str_0179c79af682bb9dc031);
db.assign(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____entire_URL_0179c7c7dabd55cdd2a5);
db.assign(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____decoded_0179c79b074bfd81208a);
db.assign(_instance_of_Runnable_Input____str_0179c79af682bb9dc031, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____decoded_0179c79b074bfd81208a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____entire_URL_0179c7c7dabd55cdd2a5, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Documentation_017b5b1759c032ec7e4f   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d);
db.assign(_instance_of_Documentation_017b5b175a1e0860ca44   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____str_0179c79af682bb9dc031);
db.assign(_instance_of_Documentation_017b5b175a4c51869499   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____entire_URL_0179c7c7dabd55cdd2a5);
db.assign(_instance_of_Documentation_017b5b175a8b5ecf764e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____decoded_0179c79b074bfd81208a);
db.assign(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____str_0179c79af682bb9dc031);
db.assign(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____decoded_0179c79b074bfd81208a);
db.assign(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____entire_URL_0179c7c7dabd55cdd2a5);
db.assign(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b5b1759c032ec7e4f   );
db.assign(_instance_of_Runnable_Input____str_0179c79af682bb9dc031, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b5b175a1e0860ca44   );
db.assign(_instance_of_Runnable_Output____decoded_0179c79b074bfd81208a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b5b175a8b5ecf764e   );
db.assign(_instance_of_Runnable_Input____entire_URL_0179c7c7dabd55cdd2a5, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b5b175a4c51869499   );
db.assignOptional(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d, _Object_gooRel_ff022000000000000003, _Net_0179b26969330c80c58b);
db.assignOptional(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d, _GOO_parentGooRel_ff02200000000000000u, _Net_0179b26969330c80c58b);
db.assignOptional(_Net_0179b26969330c80c58b, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d);
db.assignOptional(_Net_0179b26969330c80c58b, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d);
