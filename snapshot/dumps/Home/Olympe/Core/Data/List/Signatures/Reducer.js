
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
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
const _instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca = db.assignTag('017cbcf4fa3339ec24ca');
const _instance_of_Documentation_017cbcf52108d43abbb3 = db.assignTag('017cbcf52108d43abbb3');
const _instance_of_Predefined_Input_model____accumulator_017cbcf528f826052b00 = db.assignTag('017cbcf528f826052b00');
const _instance_of_Documentation_017cbcf5292366f77307 = db.assignTag('017cbcf5292366f77307');
const _instance_of_Predefined_Input_model____start_017cbcf52a4e8f0ce2ac = db.assignTag('017cbcf52a4e8f0ce2ac');
const _instance_of_Documentation_017cbcf52a6dc45d52b4 = db.assignTag('017cbcf52a6dc45d52b4');
const _instance_of_Predefined_Input_model____item_017cbcf52e5d5d399fd5 = db.assignTag('017cbcf52e5d5d399fd5');
const _instance_of_Documentation_017cbcf52e79e5796e2f = db.assignTag('017cbcf52e79e5796e2f');
const _instance_of_Predefined_Input_model____rank_017cbcf5518ff8ed8dd3 = db.assignTag('017cbcf5518ff8ed8dd3');
const _instance_of_Documentation_017cbcf551acf93a28ad = db.assignTag('017cbcf551acf93a28ad');
const _instance_of_Predefined_Input_model____list_017cbcf633f20dc26d91 = db.assignTag('017cbcf633f20dc26d91');
const _instance_of_Documentation_017cbcf63412076b6201 = db.assignTag('017cbcf63412076b6201');
const _instance_of_Predefined_Output_model____end_017cbcf68c1c20c2e911 = db.assignTag('017cbcf68c1c20c2e911');
const _instance_of_Documentation_017cbcf68c37f4755ecc = db.assignTag('017cbcf68c37f4755ecc');
const _instance_of_Predefined_Output_model____result_017cbcf68df005d6a508 = db.assignTag('017cbcf68df005d6a508');
const _instance_of_Documentation_017cbcf68e0cfdb665ae = db.assignTag('017cbcf68e0cfdb665ae');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Core_100000000000000000df               = '100000000000000000df';
const _Signatures_017cbcea3b221d4b44dd         = '017cbcea3b221d4b44dd';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca
db.newModel(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca, 'Reducer') // tag and name of the model 
    .extends(_Function_01621fb84e320000f000).setModelTag(_Function_Signature_011100000000000adef0) 
    .setProperties({
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Reducer',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca);
// :_instance_of_Documentation_017cbcf52108d43abbb3
db.newInstance(_instance_of_Documentation_017cbcf52108d43abbb3)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca)
    .setNameOrProperties({
        [_Documentation_summary_01703376c4a81c0e9d91]:'Used for brick Reduce',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____accumulator_017cbcf528f826052b00
db.newModel(_instance_of_Predefined_Input_model____accumulator_017cbcf528f826052b00)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'accumulator',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf5292366f77307
db.newInstance(_instance_of_Documentation_017cbcf5292366f77307)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The resulting value of the processing of the preceding item.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____start_017cbcf52a4e8f0ce2ac
db.newModel(_instance_of_Predefined_Input_model____start_017cbcf52a4e8f0ce2ac)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'start',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf52a6dc45d52b4
db.newInstance(_instance_of_Documentation_017cbcf52a6dc45d52b4)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'When the item is ready to be processed.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____item_017cbcf52e5d5d399fd5
db.newModel(_instance_of_Predefined_Input_model____item_017cbcf52e5d5d399fd5)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'item',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf52e79e5796e2f
db.newInstance(_instance_of_Documentation_017cbcf52e79e5796e2f)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The item to process',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____rank_017cbcf5518ff8ed8dd3
db.newModel(_instance_of_Predefined_Input_model____rank_017cbcf5518ff8ed8dd3)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'rank',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf551acf93a28ad
db.newInstance(_instance_of_Documentation_017cbcf551acf93a28ad)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The item rank in the list',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____list_017cbcf633f20dc26d91
db.newModel(_instance_of_Predefined_Input_model____list_017cbcf633f20dc26d91)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'list',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:4,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf63412076b6201
db.newInstance(_instance_of_Documentation_017cbcf63412076b6201)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The whole original list',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Output_model____end_017cbcf68c1c20c2e911
db.newModel(_instance_of_Predefined_Output_model____end_017cbcf68c1c20c2e911)
    .setModelTag(_Predefined_Output_016ac4f59dd99f5df3e1) // tag of the model
    .setParentTag(_Runnable_Output_0168a431d25001540002) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'end',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf68c37f4755ecc
db.newInstance(_instance_of_Documentation_017cbcf68c37f4755ecc)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'To be triggered when the new result has been determined for that item.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Output_model____result_017cbcf68df005d6a508
db.newModel(_instance_of_Predefined_Output_model____result_017cbcf68df005d6a508)
    .setModelTag(_Predefined_Output_016ac4f59dd99f5df3e1) // tag of the model
    .setParentTag(_Runnable_Output_0168a431d25001540002) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'result',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf68e0cfdb665ae
db.newInstance(_instance_of_Documentation_017cbcf68e0cfdb665ae)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The result of that iteration, that become the next iteration accumulator or the final result if the item is the last one.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____accumulator_017cbcf528f826052b00);
db.assign(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____start_017cbcf52a4e8f0ce2ac);
db.assign(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____item_017cbcf52e5d5d399fd5);
db.assign(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____rank_017cbcf5518ff8ed8dd3);
db.assign(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____list_017cbcf633f20dc26d91);
db.assign(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca, _Function_Signature_Predefined_Outputs_rel_016ac4f59a2917fdef02, _instance_of_Predefined_Output_model____end_017cbcf68c1c20c2e911);
db.assign(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca, _Function_Signature_Predefined_Outputs_rel_016ac4f59a2917fdef02, _instance_of_Predefined_Output_model____result_017cbcf68df005d6a508);
db.assign(_instance_of_Predefined_Input_model____accumulator_017cbcf528f826052b00, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Object_ff021000000000000001                      );
db.assign(_instance_of_Predefined_Input_model____start_017cbcf52a4e8f0ce2ac, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_Input_model____item_017cbcf52e5d5d399fd5, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Object_ff021000000000000001                      );
db.assign(_instance_of_Predefined_Input_model____rank_017cbcf5518ff8ed8dd3, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Number_ff021000000000000013                      );
db.assign(_instance_of_Predefined_Input_model____list_017cbcf633f20dc26d91, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Predefined_Output_model____end_017cbcf68c1c20c2e911, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_Output_model____result_017cbcf68df005d6a508, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Object_ff021000000000000001                      );
db.assign(_instance_of_Documentation_017cbcf52108d43abbb3   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca);
db.assign(_instance_of_Documentation_017cbcf5292366f77307   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____accumulator_017cbcf528f826052b00);
db.assign(_instance_of_Documentation_017cbcf52a6dc45d52b4   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____start_017cbcf52a4e8f0ce2ac);
db.assign(_instance_of_Documentation_017cbcf52e79e5796e2f   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____item_017cbcf52e5d5d399fd5);
db.assign(_instance_of_Documentation_017cbcf551acf93a28ad   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____rank_017cbcf5518ff8ed8dd3);
db.assign(_instance_of_Documentation_017cbcf63412076b6201   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____list_017cbcf633f20dc26d91);
db.assign(_instance_of_Documentation_017cbcf68c37f4755ecc   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Output_model____end_017cbcf68c1c20c2e911);
db.assign(_instance_of_Documentation_017cbcf68e0cfdb665ae   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Output_model____result_017cbcf68df005d6a508);
db.assign(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf52108d43abbb3   );
db.assign(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____accumulator_017cbcf528f826052b00);
db.assign(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____start_017cbcf52a4e8f0ce2ac);
db.assign(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____item_017cbcf52e5d5d399fd5);
db.assign(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____rank_017cbcf5518ff8ed8dd3);
db.assign(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____list_017cbcf633f20dc26d91);
db.assign(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Output_model____end_017cbcf68c1c20c2e911);
db.assign(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Output_model____result_017cbcf68df005d6a508);
db.assign(_instance_of_Predefined_Input_model____accumulator_017cbcf528f826052b00, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf5292366f77307   );
db.assign(_instance_of_Predefined_Input_model____start_017cbcf52a4e8f0ce2ac, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf52a6dc45d52b4   );
db.assign(_instance_of_Predefined_Input_model____item_017cbcf52e5d5d399fd5, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf52e79e5796e2f   );
db.assign(_instance_of_Predefined_Input_model____rank_017cbcf5518ff8ed8dd3, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf551acf93a28ad   );
db.assign(_instance_of_Predefined_Input_model____list_017cbcf633f20dc26d91, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf63412076b6201   );
db.assign(_instance_of_Predefined_Output_model____end_017cbcf68c1c20c2e911, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf68c37f4755ecc   );
db.assign(_instance_of_Predefined_Output_model____result_017cbcf68df005d6a508, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf68e0cfdb665ae   );
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca);
db.assignOptional(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca, _Object_gooRel_ff022000000000000003, _Signatures_017cbcea3b221d4b44dd);
db.assignOptional(_instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca, _GOO_parentGooRel_ff02200000000000000u, _Signatures_017cbcea3b221d4b44dd);
db.assignOptional(_Signatures_017cbcea3b221d4b44dd, _Object_containsRel_ff02200000000000000f, _instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca);
db.assignOptional(_Signatures_017cbcea3b221d4b44dd, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Function_Signature_model____Reducer_017cbcf4fa3339ec24ca);
