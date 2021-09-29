
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
const _instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60 = db.assignTag('0179c79a51b43860eb60');
const _instance_of_Runnable_Input____str_0179c79a97d2dc643bd7 = db.assignTag('0179c79a97d2dc643bd7');
const _instance_of_Runnable_Output____encoded_0179c79ab1824f12ff01 = db.assignTag('0179c79ab1824f12ff01');
const _instance_of_Runnable_Input____entire_URL_0179c7c77489f8ffccd2 = db.assignTag('0179c7c77489f8ffccd2');
const _instance_of_Documentation_017b5b1a3d21153b555e = db.assignTag('017b5b1a3d21153b555e');
const _instance_of_Documentation_017b5b1a3d83cb716ca2 = db.assignTag('017b5b1a3d83cb716ca2');
const _instance_of_Documentation_017b5b1a3db7a41f6dea = db.assignTag('017b5b1a3db7a41f6dea');
const _instance_of_Documentation_017b5b1a3e033b274d5b = db.assignTag('017b5b1a3e033b274d5b');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Net_0179b26969330c80c58b                = '0179b26969330c80c58b';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60
db.newModel(_instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60, 'Encode URI Component') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Encode URI Component',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60);
// :_instance_of_Runnable_Input____str_0179c79a97d2dc643bd7
db.newInstance(_instance_of_Runnable_Input____str_0179c79a97d2dc643bd7)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'str',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____encoded_0179c79ab1824f12ff01
db.newInstance(_instance_of_Runnable_Output____encoded_0179c79ab1824f12ff01)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'encoded',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____entire_URL_0179c7c77489f8ffccd2
db.newInstance(_instance_of_Runnable_Input____entire_URL_0179c7c77489f8ffccd2)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'entire URL',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:false,
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b5b1a3d21153b555e
db.newInstance(_instance_of_Documentation_017b5b1a3d21153b555e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Calls the Javascript `encodeURI` or `encodeURIComponent` function.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Encode a URI or URI component',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b5b1a3d83cb716ca2
db.newInstance(_instance_of_Documentation_017b5b1a3d83cb716ca2)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Input____str_0179c79a97d2dc643bd7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The string to be URI encoded.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b5b1a3db7a41f6dea
db.newInstance(_instance_of_Documentation_017b5b1a3db7a41f6dea)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Input____entire_URL_0179c7c77489f8ffccd2)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'if `true`, `encodeURI` is used.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b5b1a3e033b274d5b
db.newInstance(_instance_of_Documentation_017b5b1a3e033b274d5b)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Output____encoded_0179c79ab1824f12ff01)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The URI encoded string.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____str_0179c79a97d2dc643bd7);
db.assign(_instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____entire_URL_0179c7c77489f8ffccd2);
db.assign(_instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____encoded_0179c79ab1824f12ff01);
db.assign(_instance_of_Runnable_Input____str_0179c79a97d2dc643bd7, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____encoded_0179c79ab1824f12ff01, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____entire_URL_0179c7c77489f8ffccd2, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Documentation_017b5b1a3d21153b555e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60);
db.assign(_instance_of_Documentation_017b5b1a3d83cb716ca2   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____str_0179c79a97d2dc643bd7);
db.assign(_instance_of_Documentation_017b5b1a3db7a41f6dea   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____entire_URL_0179c7c77489f8ffccd2);
db.assign(_instance_of_Documentation_017b5b1a3e033b274d5b   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____encoded_0179c79ab1824f12ff01);
db.assign(_instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____str_0179c79a97d2dc643bd7);
db.assign(_instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____encoded_0179c79ab1824f12ff01);
db.assign(_instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____entire_URL_0179c7c77489f8ffccd2);
db.assign(_instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b5b1a3d21153b555e   );
db.assign(_instance_of_Runnable_Input____str_0179c79a97d2dc643bd7, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b5b1a3d83cb716ca2   );
db.assign(_instance_of_Runnable_Output____encoded_0179c79ab1824f12ff01, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b5b1a3e033b274d5b   );
db.assign(_instance_of_Runnable_Input____entire_URL_0179c7c77489f8ffccd2, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b5b1a3db7a41f6dea   );
db.assignOptional(_instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60, _Object_gooRel_ff022000000000000003, _Net_0179b26969330c80c58b);
db.assignOptional(_instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60, _GOO_parentGooRel_ff02200000000000000u, _Net_0179b26969330c80c58b);
db.assignOptional(_Net_0179b26969330c80c58b, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60);
db.assignOptional(_Net_0179b26969330c80c58b, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Encode_URI_Component_0179c79a51b43860eb60);
