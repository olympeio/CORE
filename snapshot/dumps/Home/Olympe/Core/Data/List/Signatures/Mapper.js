
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
const _instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d = db.assignTag('017cbcea9b5783843d2d');
const _instance_of_Documentation_017cbceef0ed08d518fe = db.assignTag('017cbceef0ed08d518fe');
const _instance_of_Predefined_Input_model____start_017cbceefac376a0db75 = db.assignTag('017cbceefac376a0db75');
const _instance_of_Documentation_017cbceefaef10463823 = db.assignTag('017cbceefaef10463823');
const _instance_of_Predefined_Input_model____item_017cbcef495e7d85b015 = db.assignTag('017cbcef495e7d85b015');
const _instance_of_Documentation_017cbcef497fdf934f28 = db.assignTag('017cbcef497fdf934f28');
const _instance_of_Predefined_Input_model____rank_017cbcef5c5ff8de6d10 = db.assignTag('017cbcef5c5ff8de6d10');
const _instance_of_Documentation_017cbcef5c7f2dbf9d44 = db.assignTag('017cbcef5c7f2dbf9d44');
const _instance_of_Predefined_Input_model____list_017cbcef5d02e05d8fdc = db.assignTag('017cbcef5d02e05d8fdc');
const _instance_of_Documentation_017cbcef5d20c478d7a3 = db.assignTag('017cbcef5d20c478d7a3');
const _instance_of_Predefined_Output_model____end_017cbcf0353aa0bf0011 = db.assignTag('017cbcf0353aa0bf0011');
const _instance_of_Documentation_017cbcf0355fc57f601e = db.assignTag('017cbcf0355fc57f601e');
const _instance_of_Predefined_Output_model____output_item_017cbcf035d9531ae017 = db.assignTag('017cbcf035d9531ae017');
const _instance_of_Documentation_017cbcf03616d257f19c = db.assignTag('017cbcf03616d257f19c');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Core_100000000000000000df               = '100000000000000000df';
const _Signatures_017cbcea3b221d4b44dd         = '017cbcea3b221d4b44dd';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d
db.newModel(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d, 'Mapper') // tag and name of the model 
    .extends(_Function_01621fb84e320000f000).setModelTag(_Function_Signature_011100000000000adef0) 
    .setProperties({
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Mapper',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d);
// :_instance_of_Documentation_017cbceef0ed08d518fe
db.newInstance(_instance_of_Documentation_017cbceef0ed08d518fe)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d)
    .setNameOrProperties({
        [_Documentation_summary_01703376c4a81c0e9d91]:'Used for brick Map',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____start_017cbceefac376a0db75
db.newModel(_instance_of_Predefined_Input_model____start_017cbceefac376a0db75)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'start',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbceefaef10463823
db.newInstance(_instance_of_Documentation_017cbceefaef10463823)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'When the item is ready to be processed',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____item_017cbcef495e7d85b015
db.newModel(_instance_of_Predefined_Input_model____item_017cbcef495e7d85b015)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'item',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcef497fdf934f28
db.newInstance(_instance_of_Documentation_017cbcef497fdf934f28)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The item to process',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____rank_017cbcef5c5ff8de6d10
db.newModel(_instance_of_Predefined_Input_model____rank_017cbcef5c5ff8de6d10)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'rank',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcef5c7f2dbf9d44
db.newInstance(_instance_of_Documentation_017cbcef5c7f2dbf9d44)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The rank of the item in the list',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____list_017cbcef5d02e05d8fdc
db.newModel(_instance_of_Predefined_Input_model____list_017cbcef5d02e05d8fdc)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'list',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcef5d20c478d7a3
db.newInstance(_instance_of_Documentation_017cbcef5d20c478d7a3)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The whole list itself',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Output_model____end_017cbcf0353aa0bf0011
db.newModel(_instance_of_Predefined_Output_model____end_017cbcf0353aa0bf0011)
    .setModelTag(_Predefined_Output_016ac4f59dd99f5df3e1) // tag of the model
    .setParentTag(_Runnable_Output_0168a431d25001540002) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'end',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf0355fc57f601e
db.newInstance(_instance_of_Documentation_017cbcf0355fc57f601e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'When the output item is ready to be pushed in the resulting list',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Output_model____output_item_017cbcf035d9531ae017
db.newModel(_instance_of_Predefined_Output_model____output_item_017cbcf035d9531ae017)
    .setModelTag(_Predefined_Output_016ac4f59dd99f5df3e1) // tag of the model
    .setParentTag(_Runnable_Output_0168a431d25001540002) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'output item',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcf03616d257f19c
db.newInstance(_instance_of_Documentation_017cbcf03616d257f19c)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The output item to replace the input one in the resulting list.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____start_017cbceefac376a0db75);
db.assign(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____item_017cbcef495e7d85b015);
db.assign(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____rank_017cbcef5c5ff8de6d10);
db.assign(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____list_017cbcef5d02e05d8fdc);
db.assign(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d, _Function_Signature_Predefined_Outputs_rel_016ac4f59a2917fdef02, _instance_of_Predefined_Output_model____end_017cbcf0353aa0bf0011);
db.assign(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d, _Function_Signature_Predefined_Outputs_rel_016ac4f59a2917fdef02, _instance_of_Predefined_Output_model____output_item_017cbcf035d9531ae017);
db.assign(_instance_of_Predefined_Input_model____start_017cbceefac376a0db75, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_Input_model____item_017cbcef495e7d85b015, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Object_ff021000000000000001                      );
db.assign(_instance_of_Predefined_Input_model____rank_017cbcef5c5ff8de6d10, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Number_ff021000000000000013                      );
db.assign(_instance_of_Predefined_Input_model____list_017cbcef5d02e05d8fdc, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Predefined_Output_model____end_017cbcf0353aa0bf0011, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_Output_model____output_item_017cbcf035d9531ae017, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Object_ff021000000000000001                      );
db.assign(_instance_of_Documentation_017cbceef0ed08d518fe   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d);
db.assign(_instance_of_Documentation_017cbceefaef10463823   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____start_017cbceefac376a0db75);
db.assign(_instance_of_Documentation_017cbcef497fdf934f28   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____item_017cbcef495e7d85b015);
db.assign(_instance_of_Documentation_017cbcef5c7f2dbf9d44   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____rank_017cbcef5c5ff8de6d10);
db.assign(_instance_of_Documentation_017cbcef5d20c478d7a3   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____list_017cbcef5d02e05d8fdc);
db.assign(_instance_of_Documentation_017cbcf0355fc57f601e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Output_model____end_017cbcf0353aa0bf0011);
db.assign(_instance_of_Documentation_017cbcf03616d257f19c   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Output_model____output_item_017cbcf035d9531ae017);
db.assign(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbceef0ed08d518fe   );
db.assign(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____start_017cbceefac376a0db75);
db.assign(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____item_017cbcef495e7d85b015);
db.assign(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____rank_017cbcef5c5ff8de6d10);
db.assign(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____list_017cbcef5d02e05d8fdc);
db.assign(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Output_model____end_017cbcf0353aa0bf0011);
db.assign(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Output_model____output_item_017cbcf035d9531ae017);
db.assign(_instance_of_Predefined_Input_model____start_017cbceefac376a0db75, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbceefaef10463823   );
db.assign(_instance_of_Predefined_Input_model____item_017cbcef495e7d85b015, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcef497fdf934f28   );
db.assign(_instance_of_Predefined_Input_model____rank_017cbcef5c5ff8de6d10, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcef5c7f2dbf9d44   );
db.assign(_instance_of_Predefined_Input_model____list_017cbcef5d02e05d8fdc, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcef5d20c478d7a3   );
db.assign(_instance_of_Predefined_Output_model____end_017cbcf0353aa0bf0011, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf0355fc57f601e   );
db.assign(_instance_of_Predefined_Output_model____output_item_017cbcf035d9531ae017, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcf03616d257f19c   );
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d);
db.assignOptional(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d, _Object_gooRel_ff022000000000000003, _Signatures_017cbcea3b221d4b44dd);
db.assignOptional(_instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d, _GOO_parentGooRel_ff02200000000000000u, _Signatures_017cbcea3b221d4b44dd);
db.assignOptional(_Signatures_017cbcea3b221d4b44dd, _Object_containsRel_ff02200000000000000f, _instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d);
db.assignOptional(_Signatures_017cbcea3b221d4b44dd, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Function_Signature_model____Mapper_017cbcea9b5783843d2d);
