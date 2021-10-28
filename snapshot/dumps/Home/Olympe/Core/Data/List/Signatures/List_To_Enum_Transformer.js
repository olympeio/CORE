
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_01621fb84e320000f000           = '01621fb84e320000f000';
const _Function_Signature_011100000000000adef0 = '011100000000000adef0';
const _Number_ff021000000000000013             = 'ff021000000000000013';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Predefined_Input_016ac4f59c592b862457   = '016ac4f59c592b862457';
const _Predefined_Output_016ac4f59dd99f5df3e1  = '016ac4f59dd99f5df3e1';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
const _String_ff021000000000000011             = 'ff021000000000000011';


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
const _instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd = db.assignTag('017cc6ab948f5ff43cfd');
const _instance_of_Documentation_017cc6acb4b993d846e8 = db.assignTag('017cc6acb4b993d846e8');
const _instance_of_Predefined_Input_model____item_017cc6acbfcc69142b80 = db.assignTag('017cc6acbfcc69142b80');
const _instance_of_Documentation_017cc6acbfff57626a80 = db.assignTag('017cc6acbfff57626a80');
const _instance_of_Predefined_Input_model____rank_017cc6acc04286747cbd = db.assignTag('017cc6acc04286747cbd');
const _instance_of_Documentation_017cc6acc0e53685327b = db.assignTag('017cc6acc0e53685327b');
const _instance_of_Predefined_Output_model____value_017cc6ae59240fde308d = db.assignTag('017cc6ae59240fde308d');
const _instance_of_Documentation_017cc6ae5948a841ae3f = db.assignTag('017cc6ae5948a841ae3f');
const _instance_of_Predefined_Output_model____name_017cc6ae598cc636cd99 = db.assignTag('017cc6ae598cc636cd99');
const _instance_of_Documentation_017cc6ae5a7a40160bd3 = db.assignTag('017cc6ae5a7a40160bd3');
const _instance_of_Predefined_Output_model____rank_017cc6ae5b053b10edbb = db.assignTag('017cc6ae5b053b10edbb');
const _instance_of_Documentation_017cc6ae5b5c0a43c4e8 = db.assignTag('017cc6ae5b5c0a43c4e8');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Core_100000000000000000df               = '100000000000000000df';
const _Signatures_017cbcea3b221d4b44dd         = '017cbcea3b221d4b44dd';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd
db.newModel(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd, 'List To Enum Transformer') // tag and name of the model 
    .extends(_Function_01621fb84e320000f000).setModelTag(_Function_Signature_011100000000000adef0) 
    .setProperties({
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'List To Enum Transformer',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd);
// :_instance_of_Documentation_017cc6acb4b993d846e8
db.newInstance(_instance_of_Documentation_017cc6acb4b993d846e8)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Function type used by the brick List to Enum.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Transform a list item to an enum value.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____item_017cc6acbfcc69142b80
db.newModel(_instance_of_Predefined_Input_model____item_017cc6acbfcc69142b80)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'item',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cc6acbfff57626a80
db.newInstance(_instance_of_Documentation_017cc6acbfff57626a80)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The item to process.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Input_model____rank_017cc6acc04286747cbd
db.newModel(_instance_of_Predefined_Input_model____rank_017cc6acc04286747cbd)
    .setModelTag(_Predefined_Input_016ac4f59c592b862457) // tag of the model
    .setParentTag(_Runnable_Input_0168a431d25001540001) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'rank',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cc6acc0e53685327b
db.newInstance(_instance_of_Documentation_017cc6acc0e53685327b)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The item rank in the original list.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Output_model____value_017cc6ae59240fde308d
db.newModel(_instance_of_Predefined_Output_model____value_017cc6ae59240fde308d)
    .setModelTag(_Predefined_Output_016ac4f59dd99f5df3e1) // tag of the model
    .setParentTag(_Runnable_Output_0168a431d25001540002) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'value',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cc6ae5948a841ae3f
db.newInstance(_instance_of_Documentation_017cc6ae5948a841ae3f)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The internal value of the enum value.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Output_model____name_017cc6ae598cc636cd99
db.newModel(_instance_of_Predefined_Output_model____name_017cc6ae598cc636cd99)
    .setModelTag(_Predefined_Output_016ac4f59dd99f5df3e1) // tag of the model
    .setParentTag(_Runnable_Output_0168a431d25001540002) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'name',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cc6ae5a7a40160bd3
db.newInstance(_instance_of_Documentation_017cc6ae5a7a40160bd3)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The display name of the enum value.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_Output_model____rank_017cc6ae5b053b10edbb
db.newModel(_instance_of_Predefined_Output_model____rank_017cc6ae5b053b10edbb)
    .setModelTag(_Predefined_Output_016ac4f59dd99f5df3e1) // tag of the model
    .setParentTag(_Runnable_Output_0168a431d25001540002) // tag of model's parent (if any; null else)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'rank',
        [_Predefined_IO_Predefined_IO_Rank_017bc044aeacce7ffc8f]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cc6ae5b5c0a43c4e8
db.newInstance(_instance_of_Documentation_017cc6ae5b5c0a43c4e8)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The rank to assign to the enum value.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____item_017cc6acbfcc69142b80);
db.assign(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd, _Function_Signature_Predefined_Inputs_rel_016ac4f59a2917fdef01, _instance_of_Predefined_Input_model____rank_017cc6acc04286747cbd);
db.assign(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd, _Function_Signature_Predefined_Outputs_rel_016ac4f59a2917fdef02, _instance_of_Predefined_Output_model____value_017cc6ae59240fde308d);
db.assign(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd, _Function_Signature_Predefined_Outputs_rel_016ac4f59a2917fdef02, _instance_of_Predefined_Output_model____name_017cc6ae598cc636cd99);
db.assign(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd, _Function_Signature_Predefined_Outputs_rel_016ac4f59a2917fdef02, _instance_of_Predefined_Output_model____rank_017cc6ae5b053b10edbb);
db.assign(_instance_of_Predefined_Input_model____item_017cc6acbfcc69142b80, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Object_ff021000000000000001                      );
db.assign(_instance_of_Predefined_Input_model____rank_017cc6acc04286747cbd, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Number_ff021000000000000013                      );
db.assign(_instance_of_Predefined_Output_model____value_017cc6ae59240fde308d, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _String_ff021000000000000011                      );
db.assign(_instance_of_Predefined_Output_model____name_017cc6ae598cc636cd99, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _String_ff021000000000000011                      );
db.assign(_instance_of_Predefined_Output_model____rank_017cc6ae5b053b10edbb, _Predefined_IO_Predefined_Type_IO_016ac4f5a0091c4790e2, _Number_ff021000000000000013                      );
db.assign(_instance_of_Documentation_017cc6acb4b993d846e8   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd);
db.assign(_instance_of_Documentation_017cc6acbfff57626a80   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____item_017cc6acbfcc69142b80);
db.assign(_instance_of_Documentation_017cc6acc0e53685327b   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Input_model____rank_017cc6acc04286747cbd);
db.assign(_instance_of_Documentation_017cc6ae5948a841ae3f   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Output_model____value_017cc6ae59240fde308d);
db.assign(_instance_of_Documentation_017cc6ae5a7a40160bd3   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Output_model____name_017cc6ae598cc636cd99);
db.assign(_instance_of_Documentation_017cc6ae5b5c0a43c4e8   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_Output_model____rank_017cc6ae5b053b10edbb);
db.assign(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cc6acb4b993d846e8   );
db.assign(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____item_017cc6acbfcc69142b80);
db.assign(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Input_model____rank_017cc6acc04286747cbd);
db.assign(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Output_model____value_017cc6ae59240fde308d);
db.assign(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Output_model____name_017cc6ae598cc636cd99);
db.assign(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_Output_model____rank_017cc6ae5b053b10edbb);
db.assign(_instance_of_Predefined_Input_model____item_017cc6acbfcc69142b80, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cc6acbfff57626a80   );
db.assign(_instance_of_Predefined_Input_model____rank_017cc6acc04286747cbd, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cc6acc0e53685327b   );
db.assign(_instance_of_Predefined_Output_model____value_017cc6ae59240fde308d, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cc6ae5948a841ae3f   );
db.assign(_instance_of_Predefined_Output_model____name_017cc6ae598cc636cd99, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cc6ae5a7a40160bd3   );
db.assign(_instance_of_Predefined_Output_model____rank_017cc6ae5b053b10edbb, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cc6ae5b5c0a43c4e8   );
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd);
db.assignOptional(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd, _Object_gooRel_ff022000000000000003, _Signatures_017cbcea3b221d4b44dd);
db.assignOptional(_instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd, _GOO_parentGooRel_ff02200000000000000u, _Signatures_017cbcea3b221d4b44dd);
db.assignOptional(_Signatures_017cbcea3b221d4b44dd, _Object_containsRel_ff02200000000000000f, _instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd);
db.assignOptional(_Signatures_017cbcea3b221d4b44dd, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Function_Signature_model____List_To_Enum_Transformer_017cc6ab948f5ff43cfd);
