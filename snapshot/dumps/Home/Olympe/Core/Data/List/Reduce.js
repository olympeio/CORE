
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
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Reducer_017cbcf4fa3339ec24ca            = '017cbcf4fa3339ec24ca';
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
const _instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91 = db.assignTag('017cbcf4ca0f68e43d91');
const _instance_of_Control_Flow____Control_Flow_017cbcf4ca0f7d2eb4fc = db.assignTag('017cbcf4ca0f7d2eb4fc');
const _instance_of_Control_Flow____Control_Flow_017cbcf4ca348aa21f3e = db.assignTag('017cbcf4ca348aa21f3e');
const _instance_of_Documentation_017cbcf9279af340c30d = db.assignTag('017cbcf9279af340c30d');
const _instance_of_Documentation_017cbcf927d2af6931ae = db.assignTag('017cbcf927d2af6931ae');
const _instance_of_Documentation_017cbcf927ff4aa15a54 = db.assignTag('017cbcf927ff4aa15a54');
const _instance_of_Runnable_Input____list_017cbcf931e708e962cd = db.assignTag('017cbcf931e708e962cd');
const _instance_of_Documentation_017cbcf93218912a0954 = db.assignTag('017cbcf93218912a0954');
const _instance_of_Runnable_Input____reducer_017cbcf933f9de53cfb8 = db.assignTag('017cbcf933f9de53cfb8');
const _instance_of_Documentation_017cbcf93419e84333bc = db.assignTag('017cbcf93419e84333bc');
const _instance_of_Runnable_Output____result_017cbcf96e866467527d = db.assignTag('017cbcf96e866467527d');
const _instance_of_Documentation_017cbcf96ea2780e8b1f = db.assignTag('017cbcf96ea2780e8b1f');
const _instance_of_Runnable_Input____initial_value_017cbd285f152c11f040 = db.assignTag('017cbd285f152c11f040');
const _instance_of_Documentation_017cbd285f3d058c2b52 = db.assignTag('017cbd285f3d058c2b52');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91
db.newModel(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91, 'Reduce') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Reduce',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91);
// :_instance_of_Control_Flow____Control_Flow_017cbcf4ca0f7d2eb4fc
db.newInstance(_instance_of_Control_Flow____Control_Flow_017cbcf4ca0f7d2eb4fc)
    .setModelTag(_Control_Flow_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Control_Flow____Control_Flow_017cbcf4ca348aa21f3e
db.newInstance(_instance_of_Control_Flow____Control_Flow_017cbcf4ca348aa21f3e)
    .setModelTag(_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf9279af340c30d
db.newInstance(_instance_of_Documentation_017cbcf9279af340c30d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The reduce brick executes the user-provided function (reducer) on each item of the provided list, passing in the return value from the calculation on the preceding element.\nThe final result of running the reducer across all elements or the list is the single `result` output value of the brick.\n\nAn initial value can be provided to process the first element of the list.\n\n## Example:\n- inputs\n  1. list = `[1, 2, 3]`\n  2. reducer = `(sum, item) => sum + item`\n  3. initial value = 0\n- outputs\n  1. result = 6',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Executes a function on each item of a list to create a unique "reduced" value from it.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf927d2af6931ae
db.newInstance(_instance_of_Documentation_017cbcf927d2af6931ae)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf927ff4aa15a54
db.newInstance(_instance_of_Documentation_017cbcf927ff4aa15a54)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____list_017cbcf931e708e962cd
db.newInstance(_instance_of_Runnable_Input____list_017cbcf931e708e962cd)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf93218912a0954
db.newInstance(_instance_of_Documentation_017cbcf93218912a0954)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The original list to iterate on.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____reducer_017cbcf933f9de53cfb8
db.newInstance(_instance_of_Runnable_Input____reducer_017cbcf933f9de53cfb8)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'reducer',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf93419e84333bc
db.newInstance(_instance_of_Documentation_017cbcf93419e84333bc)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The function to execute for each item of the list which returns the next resulting value.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____result_017cbcf96e866467527d
db.newInstance(_instance_of_Runnable_Output____result_017cbcf96e866467527d)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'result',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf96ea2780e8b1f
db.newInstance(_instance_of_Documentation_017cbcf96ea2780e8b1f)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The return value after calling the reducer on all items of the list.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____initial_value_017cbd285f152c11f040
db.newInstance(_instance_of_Runnable_Input____initial_value_017cbd285f152c11f040)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'initial value',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbd285f3d058c2b52
db.newInstance(_instance_of_Documentation_017cbd285f3d058c2b52)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The initial `resulting value`',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Control_Flow____Control_Flow_017cbcf4ca0f7d2eb4fc);
db.assign(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____list_017cbcf931e708e962cd);
db.assign(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____reducer_017cbcf933f9de53cfb8);
db.assign(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____initial_value_017cbd285f152c11f040);
db.assign(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Control_Flow____Control_Flow_017cbcf4ca348aa21f3e);
db.assign(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____result_017cbcf96e866467527d);
db.assign(_instance_of_Control_Flow____Control_Flow_017cbcf4ca0f7d2eb4fc, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Control_Flow____Control_Flow_017cbcf4ca348aa21f3e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____list_017cbcf931e708e962cd, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____reducer_017cbcf933f9de53cfb8, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Reducer_017cbcf4fa3339ec24ca                     );
db.assign(_instance_of_Runnable_Output____result_017cbcf96e866467527d, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____initial_value_017cbd285f152c11f040, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Documentation_017cbcf9279af340c30d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91);
db.assign(_instance_of_Documentation_017cbcf927d2af6931ae   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Control_Flow____Control_Flow_017cbcf4ca0f7d2eb4fc);
db.assign(_instance_of_Documentation_017cbcf927ff4aa15a54   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Control_Flow____Control_Flow_017cbcf4ca348aa21f3e);
db.assign(_instance_of_Documentation_017cbcf93218912a0954   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____list_017cbcf931e708e962cd);
db.assign(_instance_of_Documentation_017cbcf93419e84333bc   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____reducer_017cbcf933f9de53cfb8);
db.assign(_instance_of_Documentation_017cbcf96ea2780e8b1f   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____result_017cbcf96e866467527d);
db.assign(_instance_of_Documentation_017cbd285f3d058c2b52   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____initial_value_017cbd285f152c11f040);
db.assign(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017cbcf4ca0f7d2eb4fc);
db.assign(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017cbcf4ca348aa21f3e);
db.assign(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf9279af340c30d   );
db.assign(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____list_017cbcf931e708e962cd);
db.assign(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____reducer_017cbcf933f9de53cfb8);
db.assign(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____result_017cbcf96e866467527d);
db.assign(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____initial_value_017cbd285f152c11f040);
db.assign(_instance_of_Control_Flow____Control_Flow_017cbcf4ca0f7d2eb4fc, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf927d2af6931ae   );
db.assign(_instance_of_Control_Flow____Control_Flow_017cbcf4ca348aa21f3e, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf927ff4aa15a54   );
db.assign(_instance_of_Runnable_Input____list_017cbcf931e708e962cd, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf93218912a0954   );
db.assign(_instance_of_Runnable_Input____reducer_017cbcf933f9de53cfb8, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf93419e84333bc   );
db.assign(_instance_of_Runnable_Output____result_017cbcf96e866467527d, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf96ea2780e8b1f   );
db.assign(_instance_of_Runnable_Input____initial_value_017cbd285f152c11f040, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbd285f3d058c2b52   );
db.assignOptional(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Reduce_017cbcf4ca0f68e43d91);
