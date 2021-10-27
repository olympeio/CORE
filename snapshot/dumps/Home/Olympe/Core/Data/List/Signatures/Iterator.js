
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
const _instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf = db.assignTag('017cbceb21fa255b3abf');
const _instance_of_Documentation_017cbced003a0ee6d8e5 = db.assignTag('017cbced003a0ee6d8e5');
const _instance_of_Predefined_Input_model____start_017cbced0ba53cd0099c = db.assignTag('017cbced0ba53cd0099c');
const _instance_of_Documentation_017cbced0be0e4f6cdb5 = db.assignTag('017cbced0be0e4f6cdb5');
const _instance_of_Predefined_Input_model____item_017cbcedbd83d5559188 = db.assignTag('017cbcedbd83d5559188');
const _instance_of_Documentation_017cbcedbda8038a4c2c = db.assignTag('017cbcedbda8038a4c2c');
const _instance_of_Predefined_Input_model____rank_017cbcee1c8bbde12d8e = db.assignTag('017cbcee1c8bbde12d8e');
const _instance_of_Documentation_017cbcee1cb438bea3e4 = db.assignTag('017cbcee1cb438bea3e4');
const _instance_of_Predefined_Input_model____list_017cbcee54ba6ccf037a = db.assignTag('017cbcee54ba6ccf037a');
const _instance_of_Documentation_017cbcee54d70171d535 = db.assignTag('017cbcee54d70171d535');
const _instance_of_Predefined_Output_model____end_017cbcee8b991222d13b = db.assignTag('017cbcee8b991222d13b');
const _instance_of_Documentation_017cbcee8bbd911f1985 = db.assignTag('017cbcee8bbd911f1985');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Core_100000000000000000df               = '100000000000000000df';
const _Signatures_017cbcea3b221d4b44dd         = '017cbcea3b221d4b44dd';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf
db.newModel(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf, 'Iterator') // tag and name of the model 
    .extends(_Function_01621fb84e320000f000).setModelTag(_Function_Signature_011100000000000adef0) 
    .setProperties({
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Iterator',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf);
// :_instance_of_Documentation_017cbced003a0ee6d8e5
db.newInstance(_instance_of_Documentation_017cbced003a0ee6d8e5)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf)
    .setNameOrProperties({
        [_Documentation_summary_01703376c4a81c0e9d91]:'Used for brick ForEach',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____start_017cbced0ba53cd0099c
db.newModel(_instance_of_Predefined_Input_model____start_017cbced0ba53cd0099c)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'start',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbced0be0e4f6cdb5
db.newInstance(_instance_of_Documentation_017cbced0be0e4f6cdb5)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'When the item is ready to be process',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____item_017cbcedbd83d5559188
db.newModel(_instance_of_Predefined_Input_model____item_017cbcedbd83d5559188)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'item',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcedbda8038a4c2c
db.newInstance(_instance_of_Documentation_017cbcedbda8038a4c2c)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The item to process',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____rank_017cbcee1c8bbde12d8e
db.newModel(_instance_of_Predefined_Input_model____rank_017cbcee1c8bbde12d8e)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'rank',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcee1cb438bea3e4
db.newInstance(_instance_of_Documentation_017cbcee1cb438bea3e4)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The rank of the item in the list',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____list_017cbcee54ba6ccf037a
db.newModel(_instance_of_Predefined_Input_model____list_017cbcee54ba6ccf037a)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'list',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcee54d70171d535
db.newInstance(_instance_of_Documentation_017cbcee54d70171d535)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The whole list itself',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Output_model____end_017cbcee8b991222d13b
db.newModel(_instance_of_Predefined_Output_model____end_017cbcee8b991222d13b)
    .setModelTag(_Predefined_Output_016ac4f59dd99f5df3e1) // tag of the model
    .setParentTag(_Runnable_Output_0168a431d25001540002) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'end',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cbcee8bbd911f1985
db.newInstance(_instance_of_Documentation_017cbcee8bbd911f1985)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'To trigger when the item has been process',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____start_017cbced0ba53cd0099c);
db.assign(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____item_017cbcedbd83d5559188);
db.assign(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____rank_017cbcee1c8bbde12d8e);
db.assign(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____list_017cbcee54ba6ccf037a);
db.assign(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf, _Function_Signature_Predefined_Outputs_rel_016ac4f59a2917fdef02, _instance_of_Predefined_Output_model____end_017cbcee8b991222d13b);
db.assign(_instance_of_Predefined_Input_model____start_017cbced0ba53cd0099c, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_Input_model____item_017cbcedbd83d5559188, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Object_ff021000000000000001                      );
db.assign(_instance_of_Predefined_Input_model____rank_017cbcee1c8bbde12d8e, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Number_ff021000000000000013                      );
db.assign(_instance_of_Predefined_Input_model____list_017cbcee54ba6ccf037a, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Predefined_Output_model____end_017cbcee8b991222d13b, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Documentation_017cbced003a0ee6d8e5   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf);
db.assign(_instance_of_Documentation_017cbced0be0e4f6cdb5   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____start_017cbced0ba53cd0099c);
db.assign(_instance_of_Documentation_017cbcedbda8038a4c2c   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____item_017cbcedbd83d5559188);
db.assign(_instance_of_Documentation_017cbcee1cb438bea3e4   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____rank_017cbcee1c8bbde12d8e);
db.assign(_instance_of_Documentation_017cbcee54d70171d535   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____list_017cbcee54ba6ccf037a);
db.assign(_instance_of_Documentation_017cbcee8bbd911f1985   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Output_model____end_017cbcee8b991222d13b);
db.assign(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbced003a0ee6d8e5   );
db.assign(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____start_017cbced0ba53cd0099c);
db.assign(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____item_017cbcedbd83d5559188);
db.assign(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____rank_017cbcee1c8bbde12d8e);
db.assign(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____list_017cbcee54ba6ccf037a);
db.assign(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Output_model____end_017cbcee8b991222d13b);
db.assign(_instance_of_Predefined_Input_model____start_017cbced0ba53cd0099c, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbced0be0e4f6cdb5   );
db.assign(_instance_of_Predefined_Input_model____item_017cbcedbd83d5559188, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcedbda8038a4c2c   );
db.assign(_instance_of_Predefined_Input_model____rank_017cbcee1c8bbde12d8e, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcee1cb438bea3e4   );
db.assign(_instance_of_Predefined_Input_model____list_017cbcee54ba6ccf037a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcee54d70171d535   );
db.assign(_instance_of_Predefined_Output_model____end_017cbcee8b991222d13b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cbcee8bbd911f1985   );
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf);
db.assignOptional(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf, _Object_gooRel_ff022000000000000003, _Signatures_017cbcea3b221d4b44dd);
db.assignOptional(_instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf, _GOO_parentGooRel_ff02200000000000000u, _Signatures_017cbcea3b221d4b44dd);
db.assignOptional(_Signatures_017cbcea3b221d4b44dd, _Object_containsRel_ff02200000000000000f, _instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf);
db.assignOptional(_Signatures_017cbcea3b221d4b44dd, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Function_Signature_model____Iterator_017cbceb21fa255b3abf);
