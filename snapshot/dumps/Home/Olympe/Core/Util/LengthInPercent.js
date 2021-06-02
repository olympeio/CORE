
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Draw_FunctionDef_016b51292eabc0200758   = '016b51292eabc0200758';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Draw_FunctionDef_DrawFunctionDef_$_45_$_Label_relation_016b512932a8455d73ad = '016b512932a8455d73ad';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Model_of_draw_items_DrawItem_$_45_$_Item_relation_016b568e4ded344d4008 = '016b568e4ded344d4008';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Function_model____LengthInPercent_016f8f8416f002ae2b00 = db.assignTag('016f8f8416f002ae2b00');
const _instance_of_Runnable_Input____containerLength_016f8f84669b9b268701 = db.assignTag('016f8f84669b9b268701');
const _instance_of_Runnable_Output____result_016f8f8474fbb8fb0fe8 = db.assignTag('016f8f8474fbb8fb0fe8');
const _instance_of_Runnable_Input____$_37_$_016f8f86914e30ad366c = db.assignTag('016f8f86914e30ad366c');
const _instance_of_Draw_FunctionDef____n$_47_$a_016f9e190d03d2d82d6d = db.assignTag('016f9e190d03d2d82d6d');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _DEFAULT_GOO_10000000000000000GOO        = '10000000000000000GOO';
const _external_ref_inst_of_FunctionDefinition_labels_016f9e143190e0a5a31e = '016f9e143190e0a5a31e';
const _Util_0179b26a12e03686de9c               = '0179b26a12e03686de9c';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____LengthInPercent_016f8f8416f002ae2b00
db.newModel(_instance_of_Coded_Function_model____LengthInPercent_016f8f8416f002ae2b00, 'LengthInPercent') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____LengthInPercent_016f8f8416f002ae2b00, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'LengthInPercent',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____LengthInPercent_016f8f8416f002ae2b00);
// :_instance_of_Runnable_Input____containerLength_016f8f84669b9b268701
db.newInstance(_instance_of_Runnable_Input____containerLength_016f8f84669b9b268701)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____LengthInPercent_016f8f8416f002ae2b00)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'containerLength',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____result_016f8f8474fbb8fb0fe8
db.newInstance(_instance_of_Runnable_Output____result_016f8f8474fbb8fb0fe8)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____LengthInPercent_016f8f8416f002ae2b00)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'result',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____$_37_$_016f8f86914e30ad366c
db.newInstance(_instance_of_Runnable_Input____$_37_$_016f8f86914e30ad366c)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____LengthInPercent_016f8f8416f002ae2b00)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'%',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Draw_FunctionDef____n$_47_$a_016f9e190d03d2d82d6d
db.newInstance(_instance_of_Draw_FunctionDef____n$_47_$a_016f9e190d03d2d82d6d)
    .setModelTag(_Draw_FunctionDef_016b51292eabc0200758) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_DEFAULT_GOO_10000000000000000GOO)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'n/a',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____LengthInPercent_016f8f8416f002ae2b00, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____containerLength_016f8f84669b9b268701);
db.assign(_instance_of_Coded_Function_model____LengthInPercent_016f8f8416f002ae2b00, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____$_37_$_016f8f86914e30ad366c);
db.assign(_instance_of_Coded_Function_model____LengthInPercent_016f8f8416f002ae2b00, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____result_016f8f8474fbb8fb0fe8);
db.assign(_instance_of_Runnable_Input____containerLength_016f8f84669b9b268701, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____result_016f8f8474fbb8fb0fe8, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____$_37_$_016f8f86914e30ad366c, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Draw_FunctionDef____n$_47_$a_016f9e190d03d2d82d6d, _Draw_FunctionDef_DrawFunctionDef_$_45_$_Label_relation_016b512932a8455d73ad, _external_ref_inst_of_FunctionDefinition_labels_016f9e143190e0a5a31e);
db.assign(_instance_of_Draw_FunctionDef____n$_47_$a_016f9e190d03d2d82d6d, _Model_of_draw_items_DrawItem_$_45_$_Item_relation_016b568e4ded344d4008, _instance_of_Coded_Function_model____LengthInPercent_016f8f8416f002ae2b00);
db.assign(_instance_of_Coded_Function_model____LengthInPercent_016f8f8416f002ae2b00, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____containerLength_016f8f84669b9b268701);
db.assign(_instance_of_Coded_Function_model____LengthInPercent_016f8f8416f002ae2b00, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____result_016f8f8474fbb8fb0fe8);
db.assign(_instance_of_Coded_Function_model____LengthInPercent_016f8f8416f002ae2b00, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____$_37_$_016f8f86914e30ad366c);
db.assignOptional(_instance_of_Coded_Function_model____LengthInPercent_016f8f8416f002ae2b00, _Object_gooRel_ff022000000000000003, _Util_0179b26a12e03686de9c);
db.assignOptional(_instance_of_Coded_Function_model____LengthInPercent_016f8f8416f002ae2b00, _GOO_parentGooRel_ff02200000000000000u, _Util_0179b26a12e03686de9c);
db.assignOptional(_Util_0179b26a12e03686de9c, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____LengthInPercent_016f8f8416f002ae2b00);
db.assignOptional(_Util_0179b26a12e03686de9c, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____LengthInPercent_016f8f8416f002ae2b00);
