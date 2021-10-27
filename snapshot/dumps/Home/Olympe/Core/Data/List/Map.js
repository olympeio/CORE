
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
const _Mapper_017cbcea9b5783843d2d             = '017cbcea9b5783843d2d';
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
const _instance_of_Coded_Action_model____Map_017cbcf3e6a262751981 = db.assignTag('017cbcf3e6a262751981');
const _instance_of_Control_Flow____Control_Flow_017cbcf3e6a3f2cd26cf = db.assignTag('017cbcf3e6a3f2cd26cf');
const _instance_of_Control_Flow____Control_Flow_017cbcf3e6a3f73b08ae = db.assignTag('017cbcf3e6a3f73b08ae');
const _instance_of_Documentation_017cbcf6e6de26dd42dd = db.assignTag('017cbcf6e6de26dd42dd');
const _instance_of_Documentation_017cbcf6e71bc7679d51 = db.assignTag('017cbcf6e71bc7679d51');
const _instance_of_Documentation_017cbcf6e73e564145dc = db.assignTag('017cbcf6e73e564145dc');
const _instance_of_Runnable_Input____list_017cbcf6fa1478168ba6 = db.assignTag('017cbcf6fa1478168ba6');
const _instance_of_Documentation_017cbcf6fa424684f6e9 = db.assignTag('017cbcf6fa424684f6e9');
const _instance_of_Runnable_Input____mapper_017cbcf6fa8a40b27406 = db.assignTag('017cbcf6fa8a40b27406');
const _instance_of_Documentation_017cbcf6fad2f5447468 = db.assignTag('017cbcf6fad2f5447468');
const _instance_of_Runnable_Output____resulting_list_017cbcf77f37a41fc107 = db.assignTag('017cbcf77f37a41fc107');
const _instance_of_Documentation_017cbcf77f5409f31ec0 = db.assignTag('017cbcf77f5409f31ec0');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981
db.newModel(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981, 'Map') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Map',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981);
// :_instance_of_Control_Flow____Control_Flow_017cbcf3e6a3f2cd26cf
db.newInstance(_instance_of_Control_Flow____Control_Flow_017cbcf3e6a3f2cd26cf)
    .setModelTag(_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Control_Flow____Control_Flow_017cbcf3e6a3f73b08ae
db.newInstance(_instance_of_Control_Flow____Control_Flow_017cbcf3e6a3f73b08ae)
    .setModelTag(_Control_Flow_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf6e6de26dd42dd
db.newInstance(_instance_of_Documentation_017cbcf6e6de26dd42dd)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The map brick creates a new list which items are the result values of the provided function (mapper) execution on every item of the original provided list.\n\n## Example:\n- inputs:\n  1. list: `[1, 4, 9, 16]`\n  2. mapper: `(x) => x * 2`\n\n- outputs:\n  1. resulting list: [2, 8, 18, 32]',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Creates a new list with the results the provided function called for every item of the list.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf6e71bc7679d51
db.newInstance(_instance_of_Documentation_017cbcf6e71bc7679d51)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf6e73e564145dc
db.newInstance(_instance_of_Documentation_017cbcf6e73e564145dc)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____list_017cbcf6fa1478168ba6
db.newInstance(_instance_of_Runnable_Input____list_017cbcf6fa1478168ba6)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf6fa424684f6e9
db.newInstance(_instance_of_Documentation_017cbcf6fa424684f6e9)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The original list to iterate on.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____mapper_017cbcf6fa8a40b27406
db.newInstance(_instance_of_Runnable_Input____mapper_017cbcf6fa8a40b27406)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'mapper',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf6fad2f5447468
db.newInstance(_instance_of_Documentation_017cbcf6fad2f5447468)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The function to execute on every item of the list, providing the item of the new list.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____resulting_list_017cbcf77f37a41fc107
db.newInstance(_instance_of_Runnable_Output____resulting_list_017cbcf77f37a41fc107)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'resulting list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf77f5409f31ec0
db.newInstance(_instance_of_Documentation_017cbcf77f5409f31ec0)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The generated list with items resulting of the mapper function.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Control_Flow____Control_Flow_017cbcf3e6a3f73b08ae);
db.assign(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____list_017cbcf6fa1478168ba6);
db.assign(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____mapper_017cbcf6fa8a40b27406);
db.assign(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Control_Flow____Control_Flow_017cbcf3e6a3f2cd26cf);
db.assign(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____resulting_list_017cbcf77f37a41fc107);
db.assign(_instance_of_Control_Flow____Control_Flow_017cbcf3e6a3f2cd26cf, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Control_Flow____Control_Flow_017cbcf3e6a3f73b08ae, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____list_017cbcf6fa1478168ba6, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____mapper_017cbcf6fa8a40b27406, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Mapper_017cbcea9b5783843d2d                      );
db.assign(_instance_of_Runnable_Output____resulting_list_017cbcf77f37a41fc107, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Documentation_017cbcf6e6de26dd42dd   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Map_017cbcf3e6a262751981);
db.assign(_instance_of_Documentation_017cbcf6e71bc7679d51   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Control_Flow____Control_Flow_017cbcf3e6a3f73b08ae);
db.assign(_instance_of_Documentation_017cbcf6e73e564145dc   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Control_Flow____Control_Flow_017cbcf3e6a3f2cd26cf);
db.assign(_instance_of_Documentation_017cbcf6fa424684f6e9   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____list_017cbcf6fa1478168ba6);
db.assign(_instance_of_Documentation_017cbcf6fad2f5447468   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____mapper_017cbcf6fa8a40b27406);
db.assign(_instance_of_Documentation_017cbcf77f5409f31ec0   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____resulting_list_017cbcf77f37a41fc107);
db.assign(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017cbcf3e6a3f2cd26cf);
db.assign(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017cbcf3e6a3f73b08ae);
db.assign(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf6e6de26dd42dd   );
db.assign(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____list_017cbcf6fa1478168ba6);
db.assign(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____mapper_017cbcf6fa8a40b27406);
db.assign(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____resulting_list_017cbcf77f37a41fc107);
db.assign(_instance_of_Control_Flow____Control_Flow_017cbcf3e6a3f2cd26cf, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf6e73e564145dc   );
db.assign(_instance_of_Control_Flow____Control_Flow_017cbcf3e6a3f73b08ae, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf6e71bc7679d51   );
db.assign(_instance_of_Runnable_Input____list_017cbcf6fa1478168ba6, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf6fa424684f6e9   );
db.assign(_instance_of_Runnable_Input____mapper_017cbcf6fa8a40b27406, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf6fad2f5447468   );
db.assign(_instance_of_Runnable_Output____resulting_list_017cbcf77f37a41fc107, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf77f5409f31ec0   );
db.assignOptional(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Action_model____Map_017cbcf3e6a262751981, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Map_017cbcf3e6a262751981);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Map_017cbcf3e6a262751981);
