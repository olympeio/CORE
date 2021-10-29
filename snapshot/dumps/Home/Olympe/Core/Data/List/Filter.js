
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
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Predicate_017cbceae14592d9f88d          = '017cbceae14592d9f88d';
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
const _instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2 = db.assignTag('017cbcf45dbd504928a2');
const _instance_of_Control_Flow____Control_Flow_017cbcf45dbeedb9fdde = db.assignTag('017cbcf45dbeedb9fdde');
const _instance_of_Control_Flow____Control_Flow_017cbcf45dbfe6ddd6b6 = db.assignTag('017cbcf45dbfe6ddd6b6');
const _instance_of_Documentation_017cbcf9acf65126e1d0 = db.assignTag('017cbcf9acf65126e1d0');
const _instance_of_Documentation_017cbcf9ad319bb6b12c = db.assignTag('017cbcf9ad319bb6b12c');
const _instance_of_Documentation_017cbcf9ad56bf386b25 = db.assignTag('017cbcf9ad56bf386b25');
const _instance_of_Runnable_Input____list_017cbcf9b6cfd5447b7f = db.assignTag('017cbcf9b6cfd5447b7f');
const _instance_of_Documentation_017cbcf9b6fc95a9094d = db.assignTag('017cbcf9b6fc95a9094d');
const _instance_of_Runnable_Input____predicate_017cbcf9dffdd70c4b0b = db.assignTag('017cbcf9dffdd70c4b0b');
const _instance_of_Documentation_017cbcf9e0215440c84f = db.assignTag('017cbcf9e0215440c84f');
const _instance_of_Runnable_Output____filtered_list_017cbcfa0450f323caf7 = db.assignTag('017cbcfa0450f323caf7');
const _instance_of_Documentation_017cbcfa046c638f59d6 = db.assignTag('017cbcfa046c638f59d6');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2
db.newModel(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2, 'Filter') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Filter',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2);
// :_instance_of_Control_Flow____Control_Flow_017cbcf45dbeedb9fdde
db.newInstance(_instance_of_Control_Flow____Control_Flow_017cbcf45dbeedb9fdde)
    .setModelTag(_Control_Flow_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Control_Flow____Control_Flow_017cbcf45dbfe6ddd6b6
db.newInstance(_instance_of_Control_Flow____Control_Flow_017cbcf45dbfe6ddd6b6)
    .setModelTag(_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf9acf65126e1d0
db.newInstance(_instance_of_Documentation_017cbcf9acf65126e1d0)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The filter brick creates a new list that contains all items for which the provided function (predicate) returns `true` and so pass the test.\n\n## Example:\n- inputs\n  1. list = `["spray", "limit", "elite", "exuberant", "destruction", "present"]`\n  2. predicate = `(word) => word.length > 6`\n\n- outputs\n  1. filtered list = `["exuberant", "destruction", "present"]`',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Creates a new list with all items that pass the test of the predicate function.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf9ad319bb6b12c
db.newInstance(_instance_of_Documentation_017cbcf9ad319bb6b12c)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf9ad56bf386b25
db.newInstance(_instance_of_Documentation_017cbcf9ad56bf386b25)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____list_017cbcf9b6cfd5447b7f
db.newInstance(_instance_of_Runnable_Input____list_017cbcf9b6cfd5447b7f)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf9b6fc95a9094d
db.newInstance(_instance_of_Documentation_017cbcf9b6fc95a9094d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The original list to iterate on.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____predicate_017cbcf9dffdd70c4b0b
db.newInstance(_instance_of_Runnable_Input____predicate_017cbcf9dffdd70c4b0b)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'predicate',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf9e0215440c84f
db.newInstance(_instance_of_Documentation_017cbcf9e0215440c84f)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The predicate function that test whether an item is present in the filtered list.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____filtered_list_017cbcfa0450f323caf7
db.newInstance(_instance_of_Runnable_Output____filtered_list_017cbcfa0450f323caf7)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'filtered list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcfa046c638f59d6
db.newInstance(_instance_of_Documentation_017cbcfa046c638f59d6)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The created list with items that pass the test.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Control_Flow____Control_Flow_017cbcf45dbeedb9fdde);
db.assign(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____list_017cbcf9b6cfd5447b7f);
db.assign(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____predicate_017cbcf9dffdd70c4b0b);
db.assign(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Control_Flow____Control_Flow_017cbcf45dbfe6ddd6b6);
db.assign(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____filtered_list_017cbcfa0450f323caf7);
db.assign(_instance_of_Control_Flow____Control_Flow_017cbcf45dbeedb9fdde, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Control_Flow____Control_Flow_017cbcf45dbfe6ddd6b6, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____list_017cbcf9b6cfd5447b7f, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____predicate_017cbcf9dffdd70c4b0b, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Predicate_017cbceae14592d9f88d                   );
db.assign(_instance_of_Runnable_Output____filtered_list_017cbcfa0450f323caf7, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Documentation_017cbcf9acf65126e1d0   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2);
db.assign(_instance_of_Documentation_017cbcf9ad319bb6b12c   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Control_Flow____Control_Flow_017cbcf45dbeedb9fdde);
db.assign(_instance_of_Documentation_017cbcf9ad56bf386b25   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Control_Flow____Control_Flow_017cbcf45dbfe6ddd6b6);
db.assign(_instance_of_Documentation_017cbcf9b6fc95a9094d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____list_017cbcf9b6cfd5447b7f);
db.assign(_instance_of_Documentation_017cbcf9e0215440c84f   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____predicate_017cbcf9dffdd70c4b0b);
db.assign(_instance_of_Documentation_017cbcfa046c638f59d6   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____filtered_list_017cbcfa0450f323caf7);
db.assign(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017cbcf45dbeedb9fdde);
db.assign(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017cbcf45dbfe6ddd6b6);
db.assign(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf9acf65126e1d0   );
db.assign(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____list_017cbcf9b6cfd5447b7f);
db.assign(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____predicate_017cbcf9dffdd70c4b0b);
db.assign(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____filtered_list_017cbcfa0450f323caf7);
db.assign(_instance_of_Control_Flow____Control_Flow_017cbcf45dbeedb9fdde, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf9ad319bb6b12c   );
db.assign(_instance_of_Control_Flow____Control_Flow_017cbcf45dbfe6ddd6b6, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf9ad56bf386b25   );
db.assign(_instance_of_Runnable_Input____list_017cbcf9b6cfd5447b7f, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf9b6fc95a9094d   );
db.assign(_instance_of_Runnable_Input____predicate_017cbcf9dffdd70c4b0b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf9e0215440c84f   );
db.assign(_instance_of_Runnable_Output____filtered_list_017cbcfa0450f323caf7, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcfa046c638f59d6   );
db.assignOptional(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Filter_017cbcf45dbd504928a2);
