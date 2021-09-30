
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Action_Call_0168c6f020f2a96a0000        = '0168c6f020f2a96a0000';
const _Ascender_01621fb84e32000000a0           = '01621fb84e32000000a0';
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Control_Flow_016ac63229782039429f       = '016ac63229782039429f';
const _Control_Flow_016ac6322acf67eebfe7       = '016ac6322acf67eebfe7';
const _Descender_01621fb84e32000000d0          = '01621fb84e32000000d0';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
const _Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94 = '01703376c4a81c0e9d94';
const _Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001 = '01621fb84e320000f001';
const _Documentation_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_summary_01703376c4a81c0e9d91   = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Ascender_Upward_01621fb84e32000000a2         = '01621fb84e32000000a2';
const _Descender_Downward_01621fb84e32000000d1      = '01621fb84e32000000d1';
const _Documentation_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c = '01692a4af82e8984742c';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Control_Flow____Control_Flow_017a1e1270d93c431392 = db.assignTag('017a1e1270d93c431392');
const _instance_of_Descender_017a1e1270d9478cb7a6   = db.assignTag('017a1e1270d9478cb7a6');
const _instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9 = db.assignTag('017a1e1270d9a8e557a9');
const _instance_of_Ascender_017a1e1270da77634112    = db.assignTag('017a1e1270da77634112');
const _instance_of_Control_Flow____Control_Flow_017a1e1270dae99afd73 = db.assignTag('017a1e1270dae99afd73');
const _instance_of_Runnable_Output____List_017a1e141df28a6115cf = db.assignTag('017a1e141df28a6115cf');
const _instance_of_Documentation_017b35893b6129119c45 = db.assignTag('017b35893b6129119c45');
const _instance_of_Documentation_017b35893f5b3510d56b = db.assignTag('017b35893f5b3510d56b');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9
db.newModel(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9, 'Create List') // tag and name of the model 
    .extends(_Action_Call_0168c6f020f2a96a0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Create List',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9);
// :_instance_of_Control_Flow____Control_Flow_017a1e1270d93c431392
db.newInstance(_instance_of_Control_Flow____Control_Flow_017a1e1270d93c431392)
    .setModelTag(_Control_Flow_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Descender_017a1e1270d9478cb7a6
db.newInstance(_instance_of_Descender_017a1e1270d9478cb7a6)
    .setModelTag(_Descender_01621fb84e32000000d0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Ascender_017a1e1270da77634112
db.newInstance(_instance_of_Ascender_017a1e1270da77634112)
    .setModelTag(_Ascender_01621fb84e32000000a0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Control_Flow____Control_Flow_017a1e1270dae99afd73
db.newInstance(_instance_of_Control_Flow____Control_Flow_017a1e1270dae99afd73)
    .setModelTag(_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____List_017a1e141df28a6115cf
db.newInstance(_instance_of_Runnable_Output____List_017a1e141df28a6115cf)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'List',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b6129119c45
db.newInstance(_instance_of_Documentation_017b35893b6129119c45)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Create a list as an empty JavaScript array.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Create a list.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f5b3510d56b
db.newInstance(_instance_of_Documentation_017b35893f5b3510d56b)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The created list.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Ascender_017a1e1270da77634112        , _Ascender_Upward_01621fb84e32000000a2             , _instance_of_Control_Flow____Control_Flow_017a1e1270dae99afd73);
db.assign(_instance_of_Descender_017a1e1270d9478cb7a6       , _Descender_Downward_01621fb84e32000000d1          , _instance_of_Control_Flow____Control_Flow_017a1e1270d93c431392);
db.assign(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Control_Flow____Control_Flow_017a1e1270d93c431392);
db.assign(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Control_Flow____Control_Flow_017a1e1270dae99afd73);
db.assign(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____List_017a1e141df28a6115cf);
db.assign(_instance_of_Control_Flow____Control_Flow_017a1e1270d93c431392, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Control_Flow____Control_Flow_017a1e1270dae99afd73, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Output____List_017a1e141df28a6115cf, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Descender_017a1e1270d9478cb7a6       );
db.assign(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Ascender_017a1e1270da77634112        );
db.assign(_instance_of_Documentation_017b35893b6129119c45   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9);
db.assign(_instance_of_Documentation_017b35893f5b3510d56b   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____List_017a1e141df28a6115cf);
db.assign(_instance_of_Descender_017a1e1270d9478cb7a6       , _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017a1e1270d93c431392);
db.assign(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017a1e1270d93c431392);
db.assign(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017a1e1270dae99afd73);
db.assign(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____List_017a1e141df28a6115cf);
db.assign(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b6129119c45   );
db.assign(_instance_of_Ascender_017a1e1270da77634112        , _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017a1e1270dae99afd73);
db.assign(_instance_of_Runnable_Output____List_017a1e141df28a6115cf, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f5b3510d56b   );
db.assignOptional(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Create_List_017a1e1270d9a8e557a9);
