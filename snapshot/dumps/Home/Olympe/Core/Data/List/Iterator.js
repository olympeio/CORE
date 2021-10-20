
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_01621fb84e320000f000           = '01621fb84e320000f000';
const _Function_Signature_011100000000000adef0 = '011100000000000adef0';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Number_ff021000000000000013             = 'ff021000000000000013';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Predefined_Input_016ac4f59c592b862457   = '016ac4f59c592b862457';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';


// Definition of tags of defined properties
const _Documentation_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_summary_01703376c4a81c0e9d91   = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f = '017bc044aeacce7ffc8f';


// Definition of tags of defined relations
const _Documentation_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01 = '016ac4f59a2917fdef01';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2 = '016ac4f5a0091c4790e2';
const _Project_primordialItemRel_ff02200000000000002a = 'ff02200000000000002a';


// Definition of tags used for newly created instances 
const _instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10 = db.assignTag('017c9e01e03e32f25d10');
const _instance_of_Documentation_017c9e01ff2409a1f0d0 = db.assignTag('017c9e01ff2409a1f0d0');
const _instance_of_Predefined_Input_model____item_017c9e02bad236445ea4 = db.assignTag('017c9e02bad236445ea4');
const _instance_of_Documentation_017c9e02bb04b3e36739 = db.assignTag('017c9e02bb04b3e36739');
const _instance_of_Predefined_Input_model____rank_017c9e02bc6f0f8518de = db.assignTag('017c9e02bc6f0f8518de');
const _instance_of_Documentation_017c9e02bc8fbccd5fbc = db.assignTag('017c9e02bc8fbccd5fbc');
const _instance_of_Predefined_Input_model____list_017c9e02be6e1f6997da = db.assignTag('017c9e02be6e1f6997da');
const _instance_of_Documentation_017c9e02be8a85758243 = db.assignTag('017c9e02be8a85758243');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Core_100000000000000000df               = '100000000000000000df';
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10
db.newModel(_instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10, 'Iterator') // tag and name of the model 
    .extends(_Function_01621fb84e320000f000).setModelTag(_Function_Signature_011100000000000adef0) 
    .setProperties({
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Iterator',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10);
// :_instance_of_Documentation_017c9e01ff2409a1f0d0
db.newInstance(_instance_of_Documentation_017c9e01ff2409a1f0d0)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Iterators are functions used by the brick `For Each` to process items of a list one by one.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Iterator functions over a collection',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____item_017c9e02bad236445ea4
db.newModel(_instance_of_Predefined_Input_model____item_017c9e02bad236445ea4)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'item',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017c9e02bb04b3e36739
db.newInstance(_instance_of_Documentation_017c9e02bb04b3e36739)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The current processing item',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____rank_017c9e02bc6f0f8518de
db.newModel(_instance_of_Predefined_Input_model____rank_017c9e02bc6f0f8518de)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'rank',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017c9e02bc8fbccd5fbc
db.newInstance(_instance_of_Documentation_017c9e02bc8fbccd5fbc)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The item\'s rank in the list',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____list_017c9e02be6e1f6997da
db.newModel(_instance_of_Predefined_Input_model____list_017c9e02be6e1f6997da)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'list',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017c9e02be8a85758243
db.newInstance(_instance_of_Documentation_017c9e02be8a85758243)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The whole collection',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____item_017c9e02bad236445ea4);
db.assign(_instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____rank_017c9e02bc6f0f8518de);
db.assign(_instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____list_017c9e02be6e1f6997da);
db.assign(_instance_of_Predefined_Input_model____item_017c9e02bad236445ea4, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Object_ff021000000000000001                      );
db.assign(_instance_of_Predefined_Input_model____rank_017c9e02bc6f0f8518de, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Number_ff021000000000000013                      );
db.assign(_instance_of_Predefined_Input_model____list_017c9e02be6e1f6997da, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Documentation_017c9e01ff2409a1f0d0   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10);
db.assign(_instance_of_Documentation_017c9e02bb04b3e36739   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____item_017c9e02bad236445ea4);
db.assign(_instance_of_Documentation_017c9e02bc8fbccd5fbc   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____rank_017c9e02bc6f0f8518de);
db.assign(_instance_of_Documentation_017c9e02be8a85758243   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____list_017c9e02be6e1f6997da);
db.assign(_instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017c9e01ff2409a1f0d0   );
db.assign(_instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____item_017c9e02bad236445ea4);
db.assign(_instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____rank_017c9e02bc6f0f8518de);
db.assign(_instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____list_017c9e02be6e1f6997da);
db.assign(_instance_of_Predefined_Input_model____item_017c9e02bad236445ea4, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017c9e02bb04b3e36739   );
db.assign(_instance_of_Predefined_Input_model____rank_017c9e02bc6f0f8518de, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017c9e02bc8fbccd5fbc   );
db.assign(_instance_of_Predefined_Input_model____list_017c9e02be6e1f6997da, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017c9e02be8a85758243   );
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10);
db.assignOptional(_instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Function_Signature_model____Iterator_017c9e01e03e32f25d10);
