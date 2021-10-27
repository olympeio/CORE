
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_01621fb84e320000f000           = '01621fb84e320000f000';
const _Function_Signature_011100000000000adef0 = '011100000000000adef0';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Number_ff021000000000000013             = 'ff021000000000000013';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Predefined_Input_016ac4f59c592b862457   = '016ac4f59c592b862457';
const _Predefined_Output_016ac4f59dd99f5df3e1  = '016ac4f59dd99f5df3e1';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
const _Documentation_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_summary_01703376c4a81c0e9d91   = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f = '017bc044aeacce7ffc8f';


// Definition of tags of defined relations
const _Documentation_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01 = '016ac4f59a2917fdef01';
const _Function_Signature_Predefined_Outputs_rel_016ac4f59a2917fdef02 = '016ac4f59a2917fdef02';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2 = '016ac4f5a0091c4790e2';
const _Project_primordialItemRel_ff02200000000000002a = 'ff02200000000000002a';


// Definition of tags used for newly created instances 
const _instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d = db.assignTag('017cbceae14592d9f88d');
const _instance_of_Documentation_017cbcf1b60b32bd6f02 = db.assignTag('017cbcf1b60b32bd6f02');
const _instance_of_Predefined_Input_model____item_017cbcf1bbc36dde6367 = db.assignTag('017cbcf1bbc36dde6367');
const _instance_of_Documentation_017cbcf1bbf94a33584d = db.assignTag('017cbcf1bbf94a33584d');
const _instance_of_Predefined_Input_model____rank_017cbcf1bc382e2fb554 = db.assignTag('017cbcf1bc382e2fb554');
const _instance_of_Documentation_017cbcf1bc931c2b6f8c = db.assignTag('017cbcf1bc931c2b6f8c');
const _instance_of_Predefined_Input_model____list_017cbcf2571f32f9c4b0 = db.assignTag('017cbcf2571f32f9c4b0');
const _instance_of_Documentation_017cbcf25744d3364895 = db.assignTag('017cbcf25744d3364895');
const _instance_of_Predefined_Output_model____result_017cbcf260218dfe8133 = db.assignTag('017cbcf260218dfe8133');
const _instance_of_Documentation_017cbcf260407cc71b70 = db.assignTag('017cbcf260407cc71b70');
const _instance_of_Predefined_Input_model____start_017cbd1d2ef75ae5b220 = db.assignTag('017cbd1d2ef75ae5b220');
const _instance_of_Documentation_017cbd1d2f12942eec85 = db.assignTag('017cbd1d2f12942eec85');
const _instance_of_Predefined_Output_model____end_017cbd1d5bb477ea0db6 = db.assignTag('017cbd1d5bb477ea0db6');
const _instance_of_Documentation_017cbd1d5bcf67066975 = db.assignTag('017cbd1d5bcf67066975');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Core_100000000000000000df               = '100000000000000000df';
const _Signatures_017cbcea3b221d4b44dd         = '017cbcea3b221d4b44dd';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d
db.newModel(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d, 'Predicate') // tag and name of the model 
    .extends(_Function_01621fb84e320000f000).setModelTag(_Function_Signature_011100000000000adef0) 
    .setProperties({
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Predicate',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d);
// :_instance_of_Documentation_017cbcf1b60b32bd6f02
db.newInstance(_instance_of_Documentation_017cbcf1b60b32bd6f02)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d)
    .setNameOrProperties({
        [_Documentation_summary_01703376c4a81c0e9d91]:'Used for brick Filter',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____item_017cbcf1bbc36dde6367
db.newModel(_instance_of_Predefined_Input_model____item_017cbcf1bbc36dde6367)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'item',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf1bbf94a33584d
db.newInstance(_instance_of_Documentation_017cbcf1bbf94a33584d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The item to test',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____rank_017cbcf1bc382e2fb554
db.newModel(_instance_of_Predefined_Input_model____rank_017cbcf1bc382e2fb554)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'rank',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf1bc931c2b6f8c
db.newInstance(_instance_of_Documentation_017cbcf1bc931c2b6f8c)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The item rank in the list',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____list_017cbcf2571f32f9c4b0
db.newModel(_instance_of_Predefined_Input_model____list_017cbcf2571f32f9c4b0)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'list',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf25744d3364895
db.newInstance(_instance_of_Documentation_017cbcf25744d3364895)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The whole list',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Output_model____result_017cbcf260218dfe8133
db.newModel(_instance_of_Predefined_Output_model____result_017cbcf260218dfe8133)
    .setModelTag(_Predefined_Output_016ac4f59dd99f5df3e1) // tag of the model
    .setParentTag(_Runnable_Output_0168a431d25001540002) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'result',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf260407cc71b70
db.newInstance(_instance_of_Documentation_017cbcf260407cc71b70)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'TRUE to keep the item in the resulting list, FALSE to remove it.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____start_017cbd1d2ef75ae5b220
db.newModel(_instance_of_Predefined_Input_model____start_017cbd1d2ef75ae5b220)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'start',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbd1d2f12942eec85
db.newInstance(_instance_of_Documentation_017cbd1d2f12942eec85)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'When the item is ready to be tested',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Output_model____end_017cbd1d5bb477ea0db6
db.newModel(_instance_of_Predefined_Output_model____end_017cbd1d5bb477ea0db6)
    .setModelTag(_Predefined_Output_016ac4f59dd99f5df3e1) // tag of the model
    .setParentTag(_Runnable_Output_0168a431d25001540002) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'end',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbd1d5bcf67066975
db.newInstance(_instance_of_Documentation_017cbd1d5bcf67066975)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'To be triggered when the test result is set',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____item_017cbcf1bbc36dde6367);
db.assign(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____rank_017cbcf1bc382e2fb554);
db.assign(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____list_017cbcf2571f32f9c4b0);
db.assign(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____start_017cbd1d2ef75ae5b220);
db.assign(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d, _Function_Signature_Predefined_Outputs_rel_016ac4f59a2917fdef02, _instance_of_Predefined_Output_model____result_017cbcf260218dfe8133);
db.assign(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d, _Function_Signature_Predefined_Outputs_rel_016ac4f59a2917fdef02, _instance_of_Predefined_Output_model____end_017cbd1d5bb477ea0db6);
db.assign(_instance_of_Predefined_Input_model____item_017cbcf1bbc36dde6367, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Object_ff021000000000000001                      );
db.assign(_instance_of_Predefined_Input_model____rank_017cbcf1bc382e2fb554, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Number_ff021000000000000013                      );
db.assign(_instance_of_Predefined_Input_model____list_017cbcf2571f32f9c4b0, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Predefined_Output_model____result_017cbcf260218dfe8133, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Predefined_Input_model____start_017cbd1d2ef75ae5b220, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_Output_model____end_017cbd1d5bb477ea0db6, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Documentation_017cbcf1b60b32bd6f02   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d);
db.assign(_instance_of_Documentation_017cbcf1bbf94a33584d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____item_017cbcf1bbc36dde6367);
db.assign(_instance_of_Documentation_017cbcf1bc931c2b6f8c   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____rank_017cbcf1bc382e2fb554);
db.assign(_instance_of_Documentation_017cbcf25744d3364895   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____list_017cbcf2571f32f9c4b0);
db.assign(_instance_of_Documentation_017cbcf260407cc71b70   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Output_model____result_017cbcf260218dfe8133);
db.assign(_instance_of_Documentation_017cbd1d2f12942eec85   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____start_017cbd1d2ef75ae5b220);
db.assign(_instance_of_Documentation_017cbd1d5bcf67066975   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Output_model____end_017cbd1d5bb477ea0db6);
db.assign(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf1b60b32bd6f02   );
db.assign(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____item_017cbcf1bbc36dde6367);
db.assign(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____rank_017cbcf1bc382e2fb554);
db.assign(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____list_017cbcf2571f32f9c4b0);
db.assign(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Output_model____result_017cbcf260218dfe8133);
db.assign(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____start_017cbd1d2ef75ae5b220);
db.assign(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Output_model____end_017cbd1d5bb477ea0db6);
db.assign(_instance_of_Predefined_Input_model____item_017cbcf1bbc36dde6367, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf1bbf94a33584d   );
db.assign(_instance_of_Predefined_Input_model____rank_017cbcf1bc382e2fb554, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf1bc931c2b6f8c   );
db.assign(_instance_of_Predefined_Input_model____list_017cbcf2571f32f9c4b0, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf25744d3364895   );
db.assign(_instance_of_Predefined_Output_model____result_017cbcf260218dfe8133, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf260407cc71b70   );
db.assign(_instance_of_Predefined_Input_model____start_017cbd1d2ef75ae5b220, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbd1d2f12942eec85   );
db.assign(_instance_of_Predefined_Output_model____end_017cbd1d5bb477ea0db6, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbd1d5bcf67066975   );
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d);
db.assignOptional(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d, _Object_gooRel_ff022000000000000003, _Signatures_017cbcea3b221d4b44dd);
db.assignOptional(_instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d, _GOO_parentGooRel_ff02200000000000000u, _Signatures_017cbcea3b221d4b44dd);
db.assignOptional(_Signatures_017cbcea3b221d4b44dd, _Object_containsRel_ff02200000000000000f, _instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d);
db.assignOptional(_Signatures_017cbcea3b221d4b44dd, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Function_Signature_model____Predicate_017cbceae14592d9f88d);
