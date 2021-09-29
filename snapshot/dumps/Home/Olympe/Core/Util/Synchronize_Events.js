
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
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
const _instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218 = db.assignTag('016bd5eed74159ea8218');
const _instance_of_Runnable_Input____event_1_016bd5eed8a9bb9accaa = db.assignTag('016bd5eed8a9bb9accaa');
const _instance_of_Runnable_Input____event_2_016bd5eed9b05daff8a2 = db.assignTag('016bd5eed9b05daff8a2');
const _instance_of_Runnable_Output____output_event_016bd5eedaf031322bd5 = db.assignTag('016bd5eedaf031322bd5');
const _instance_of_Documentation_017b35893b9c7479f64d = db.assignTag('017b35893b9c7479f64d');
const _instance_of_Documentation_017b359e66ca72e5d56b = db.assignTag('017b359e66ca72e5d56b');
const _instance_of_Documentation_017b359e66d340ca5fa3 = db.assignTag('017b359e66d340ca5fa3');
const _instance_of_Documentation_017b359e66da39587399 = db.assignTag('017b359e66da39587399');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Util_0179b26a12e03686de9c               = '0179b26a12e03686de9c';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218
db.newModel(_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218, 'Synchronize Events') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Synchronize Events',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218);
// :_instance_of_Runnable_Input____event_1_016bd5eed8a9bb9accaa
db.newInstance(_instance_of_Runnable_Input____event_1_016bd5eed8a9bb9accaa)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'event 1',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____event_2_016bd5eed9b05daff8a2
db.newInstance(_instance_of_Runnable_Input____event_2_016bd5eed9b05daff8a2)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'event 2',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____output_event_016bd5eedaf031322bd5
db.newInstance(_instance_of_Runnable_Output____output_event_016bd5eedaf031322bd5)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'output event',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b9c7479f64d
db.newInstance(_instance_of_Documentation_017b35893b9c7479f64d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Dispatches a control flow whenever one of the two input gets triggered, after they both have been triggered at least once.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Synchronize 2 control-flows.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b359e66ca72e5d56b
db.newInstance(_instance_of_Documentation_017b359e66ca72e5d56b)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'First input flow.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b359e66d340ca5fa3
db.newInstance(_instance_of_Documentation_017b359e66d340ca5fa3)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Second input flow.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b359e66da39587399
db.newInstance(_instance_of_Documentation_017b359e66da39587399)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The output flow, generated when both input has been triggered.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____event_1_016bd5eed8a9bb9accaa);
db.assign(_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____event_2_016bd5eed9b05daff8a2);
db.assign(_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____output_event_016bd5eedaf031322bd5);
db.assign(_instance_of_Runnable_Input____event_1_016bd5eed8a9bb9accaa, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____event_2_016bd5eed9b05daff8a2, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Output____output_event_016bd5eedaf031322bd5, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Documentation_017b35893b9c7479f64d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218);
db.assign(_instance_of_Documentation_017b359e66ca72e5d56b   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____event_1_016bd5eed8a9bb9accaa);
db.assign(_instance_of_Documentation_017b359e66d340ca5fa3   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____event_2_016bd5eed9b05daff8a2);
db.assign(_instance_of_Documentation_017b359e66da39587399   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____output_event_016bd5eedaf031322bd5);
db.assign(_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____event_1_016bd5eed8a9bb9accaa);
db.assign(_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____event_2_016bd5eed9b05daff8a2);
db.assign(_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____output_event_016bd5eedaf031322bd5);
db.assign(_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b9c7479f64d   );
db.assign(_instance_of_Runnable_Input____event_1_016bd5eed8a9bb9accaa, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b359e66ca72e5d56b   );
db.assign(_instance_of_Runnable_Input____event_2_016bd5eed9b05daff8a2, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b359e66d340ca5fa3   );
db.assign(_instance_of_Runnable_Output____output_event_016bd5eedaf031322bd5, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b359e66da39587399   );
db.assignOptional(_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218, _Object_gooRel_ff022000000000000003, _Util_0179b26a12e03686de9c);
db.assignOptional(_instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218, _GOO_parentGooRel_ff02200000000000000u, _Util_0179b26a12e03686de9c);
db.assignOptional(_Util_0179b26a12e03686de9c, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218);
db.assignOptional(_Util_0179b26a12e03686de9c, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Synchronize_Events_016bd5eed74159ea8218);
