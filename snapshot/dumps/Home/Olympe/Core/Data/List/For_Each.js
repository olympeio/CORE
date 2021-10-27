
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Control_Flow_016ac63229782039429f       = '016ac63229782039429f';
const _Control_Flow_016ac6322acf67eebfe7       = '016ac6322acf67eebfe7';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Iterator_017cbceb21fa255b3abf           = '017cbceb21fa255b3abf';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';


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
const _instance_of_Control_Flow____Control_Flow_017cbcf45a5b092f7c12 = db.assignTag('017cbcf45a5b092f7c12');
const _instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8 = db.assignTag('017cbcf45a5b7c4fb9a8');
const _instance_of_Control_Flow____Control_Flow_017cbcf45a5bc4679b62 = db.assignTag('017cbcf45a5bc4679b62');
const _instance_of_Documentation_017cbcf7d28c61973e41 = db.assignTag('017cbcf7d28c61973e41');
const _instance_of_Documentation_017cbcf7d2cbc5b919b9 = db.assignTag('017cbcf7d2cbc5b919b9');
const _instance_of_Documentation_017cbcf7d2f6f0a77334 = db.assignTag('017cbcf7d2f6f0a77334');
const _instance_of_Runnable_Input____list_017cbcf7d8a35f0b5356 = db.assignTag('017cbcf7d8a35f0b5356');
const _instance_of_Documentation_017cbcf7d8d7ea738949 = db.assignTag('017cbcf7d8d7ea738949');
const _instance_of_Runnable_Input____iterator_017cbcf7d936b522fd77 = db.assignTag('017cbcf7d936b522fd77');
const _instance_of_Documentation_017cbcf7d95d5ec98729 = db.assignTag('017cbcf7d95d5ec98729');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8
db.newModel(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8, 'For Each') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'For Each',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8);
// :_instance_of_Control_Flow____Control_Flow_017cbcf45a5b092f7c12
db.newInstance(_instance_of_Control_Flow____Control_Flow_017cbcf45a5b092f7c12)
    .setModelTag(_Control_Flow_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Control_Flow____Control_Flow_017cbcf45a5bc4679b62
db.newInstance(_instance_of_Control_Flow____Control_Flow_017cbcf45a5bc4679b62)
    .setModelTag(_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf7d28c61973e41
db.newInstance(_instance_of_Documentation_017cbcf7d28c61973e41)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Executes the provided iterator function once for each item of the provided list.\n\nThe output control flow is triggered when all items have been processed.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Execute a provided function once for each list item.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf7d2cbc5b919b9
db.newInstance(_instance_of_Documentation_017cbcf7d2cbc5b919b9)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf7d2f6f0a77334
db.newInstance(_instance_of_Documentation_017cbcf7d2f6f0a77334)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____list_017cbcf7d8a35f0b5356
db.newInstance(_instance_of_Runnable_Input____list_017cbcf7d8a35f0b5356)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf7d8d7ea738949
db.newInstance(_instance_of_Documentation_017cbcf7d8d7ea738949)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The original list to iterate on.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____iterator_017cbcf7d936b522fd77
db.newInstance(_instance_of_Runnable_Input____iterator_017cbcf7d936b522fd77)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'iterator',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf7d95d5ec98729
db.newInstance(_instance_of_Documentation_017cbcf7d95d5ec98729)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The function to execute on every item.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Control_Flow____Control_Flow_017cbcf45a5b092f7c12);
db.assign(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____list_017cbcf7d8a35f0b5356);
db.assign(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____iterator_017cbcf7d936b522fd77);
db.assign(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Control_Flow____Control_Flow_017cbcf45a5bc4679b62);
db.assign(_instance_of_Control_Flow____Control_Flow_017cbcf45a5b092f7c12, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Control_Flow____Control_Flow_017cbcf45a5bc4679b62, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____list_017cbcf7d8a35f0b5356, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____iterator_017cbcf7d936b522fd77, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Iterator_017cbceb21fa255b3abf                    );
db.assign(_instance_of_Documentation_017cbcf7d28c61973e41   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8);
db.assign(_instance_of_Documentation_017cbcf7d2cbc5b919b9   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Control_Flow____Control_Flow_017cbcf45a5b092f7c12);
db.assign(_instance_of_Documentation_017cbcf7d2f6f0a77334   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Control_Flow____Control_Flow_017cbcf45a5bc4679b62);
db.assign(_instance_of_Documentation_017cbcf7d8d7ea738949   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____list_017cbcf7d8a35f0b5356);
db.assign(_instance_of_Documentation_017cbcf7d95d5ec98729   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____iterator_017cbcf7d936b522fd77);
db.assign(_instance_of_Control_Flow____Control_Flow_017cbcf45a5b092f7c12, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf7d2cbc5b919b9   );
db.assign(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017cbcf45a5b092f7c12);
db.assign(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017cbcf45a5bc4679b62);
db.assign(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf7d28c61973e41   );
db.assign(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____list_017cbcf7d8a35f0b5356);
db.assign(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____iterator_017cbcf7d936b522fd77);
db.assign(_instance_of_Control_Flow____Control_Flow_017cbcf45a5bc4679b62, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf7d2f6f0a77334   );
db.assign(_instance_of_Runnable_Input____list_017cbcf7d8a35f0b5356, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf7d8d7ea738949   );
db.assign(_instance_of_Runnable_Input____iterator_017cbcf7d936b522fd77, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf7d95d5ec98729   );
db.assignOptional(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____For_Each_017cbcf45a5b7c4fb9a8);
