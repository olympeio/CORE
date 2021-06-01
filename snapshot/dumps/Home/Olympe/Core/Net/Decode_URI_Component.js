
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
const _String_ff021000000000000011             = 'ff021000000000000011';


// Definition of tags of defined properties
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d = db.assignTag('0179c79a6fb65e17624d');
const _instance_of_Runnable_Input____str_0179c79af682bb9dc031 = db.assignTag('0179c79af682bb9dc031');
const _instance_of_Runnable_Output____decoded_0179c79b074bfd81208a = db.assignTag('0179c79b074bfd81208a');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Net_0179b26969330c80c58b                = '0179b26969330c80c58b';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d
db.newModel(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d, 'Decode URI Component') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Decode URI Component',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d);
// :_instance_of_Runnable_Input____str_0179c79af682bb9dc031
db.newInstance(_instance_of_Runnable_Input____str_0179c79af682bb9dc031)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'str',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____decoded_0179c79b074bfd81208a
db.newInstance(_instance_of_Runnable_Output____decoded_0179c79b074bfd81208a)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'decoded',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____str_0179c79af682bb9dc031);
db.assign(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____decoded_0179c79b074bfd81208a);
db.assign(_instance_of_Runnable_Input____str_0179c79af682bb9dc031, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____decoded_0179c79b074bfd81208a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____str_0179c79af682bb9dc031);
db.assign(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____decoded_0179c79b074bfd81208a);
db.assignOptional(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d, _Object_gooRel_ff022000000000000003, _Net_0179b26969330c80c58b);
db.assignOptional(_instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d, _GOO_parentGooRel_ff02200000000000000u, _Net_0179b26969330c80c58b);
db.assignOptional(_Net_0179b26969330c80c58b, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d);
db.assignOptional(_Net_0179b26969330c80c58b, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Decode_URI_Component_0179c79a6fb65e17624d);
