
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _EnumDef_017a768f966fc08ebb98            = '017a768f966fc08ebb98';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _List_To_Enum_Transformer_017cc6ab948f5ff43cfd = '017cc6ab948f5ff43cfd';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


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
const _instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3 = db.assignTag('017cc6aff41ef19ebff3');
const _instance_of_Documentation_017cc6b017fdde5100cd = db.assignTag('017cc6b017fdde5100cd');
const _instance_of_Runnable_Input____list_017cc6b022360416c775 = db.assignTag('017cc6b022360416c775');
const _instance_of_Documentation_017cc6b022730f5074f9 = db.assignTag('017cc6b022730f5074f9');
const _instance_of_Runnable_Input____transformer_017cc6b02396ca30d791 = db.assignTag('017cc6b02396ca30d791');
const _instance_of_Documentation_017cc6b023c8f6f6ba13 = db.assignTag('017cc6b023c8f6f6ba13');
const _instance_of_Runnable_Output____enum_017cc6b06436fcf69f10 = db.assignTag('017cc6b06436fcf69f10');
const _instance_of_Documentation_017cc6b06451c3fdce2d = db.assignTag('017cc6b06451c3fdce2d');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3
db.newModel(_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3, 'List To Enum') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'List To Enum',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3);
// :_instance_of_Documentation_017cc6b017fdde5100cd
db.newInstance(_instance_of_Documentation_017cc6b017fdde5100cd)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Create a new local enum object and iterate on each item of the provided list to generate values for that enum via the transformer function.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Create an enum object based on a list.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____list_017cc6b022360416c775
db.newInstance(_instance_of_Runnable_Input____list_017cc6b022360416c775)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cc6b022730f5074f9
db.newInstance(_instance_of_Documentation_017cc6b022730f5074f9)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The list to iterate on.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____transformer_017cc6b02396ca30d791
db.newInstance(_instance_of_Runnable_Input____transformer_017cc6b02396ca30d791)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'transformer',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cc6b023c8f6f6ba13
db.newInstance(_instance_of_Documentation_017cc6b023c8f6f6ba13)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The function that transform a list item to an enum value.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____enum_017cc6b06436fcf69f10
db.newInstance(_instance_of_Runnable_Output____enum_017cc6b06436fcf69f10)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'enum',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cc6b06451c3fdce2d
db.newInstance(_instance_of_Documentation_017cc6b06451c3fdce2d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The created enum.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____list_017cc6b022360416c775);
db.assign(_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____transformer_017cc6b02396ca30d791);
db.assign(_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____enum_017cc6b06436fcf69f10);
db.assign(_instance_of_Runnable_Input____list_017cc6b022360416c775, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____transformer_017cc6b02396ca30d791, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_To_Enum_Transformer_017cc6ab948f5ff43cfd    );
db.assign(_instance_of_Runnable_Output____enum_017cc6b06436fcf69f10, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _EnumDef_017a768f966fc08ebb98                     );
db.assign(_instance_of_Documentation_017cc6b017fdde5100cd   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3);
db.assign(_instance_of_Documentation_017cc6b022730f5074f9   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____list_017cc6b022360416c775);
db.assign(_instance_of_Documentation_017cc6b023c8f6f6ba13   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____transformer_017cc6b02396ca30d791);
db.assign(_instance_of_Documentation_017cc6b06451c3fdce2d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____enum_017cc6b06436fcf69f10);
db.assign(_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cc6b017fdde5100cd   );
db.assign(_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____list_017cc6b022360416c775);
db.assign(_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____transformer_017cc6b02396ca30d791);
db.assign(_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____enum_017cc6b06436fcf69f10);
db.assign(_instance_of_Runnable_Input____list_017cc6b022360416c775, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cc6b022730f5074f9   );
db.assign(_instance_of_Runnable_Input____transformer_017cc6b02396ca30d791, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cc6b023c8f6f6ba13   );
db.assign(_instance_of_Runnable_Output____enum_017cc6b06436fcf69f10, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cc6b06451c3fdce2d   );
db.assignOptional(_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____List_To_Enum_017cc6aff41ef19ebff3);
