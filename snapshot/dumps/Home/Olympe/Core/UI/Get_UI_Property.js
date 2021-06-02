
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Draw_FunctionDef_016b51292eabc0200758   = '016b51292eabc0200758';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
const _UI_Property_0162d3ede786c89fb31b        = '0162d3ede786c89fb31b';


// Definition of tags of defined properties
const _Documentation_Function_Metadata_errors_0172c6ae82952a74193f = '0172c6ae82952a74193f';
const _Documentation_Function_Metadata_inputs_0172c6ae82952a74193d = '0172c6ae82952a74193d';
const _Documentation_Function_Metadata_outputs_0172c6ae82952a74193e = '0172c6ae82952a74193e';
const _Documentation_Metadata_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_Metadata_toolTip_01703376c4a81c0e9d91 = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
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
const _instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f = db.assignTag('0162de7dd5abdc9dec7f');
const _instance_of_Runnable_Input____UI_Property_0162de7e041b00292ccd = db.assignTag('0162de7e041b00292ccd');
const _instance_of_Runnable_Output____Value_0162de8176947619c15f = db.assignTag('0162de8176947619c15f');
const _instance_of_Draw_FunctionDef____Draw_Get_UI_property_016b64ab1eca6954d341 = db.assignTag('016b64ab1eca6954d341');
const _instance_of_Documentation_Function_Metadata_d0c2de7dd5abdc9dec7f = db.assignTag('d0c2de7dd5abdc9dec7f');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _DEFAULT_GOO_10000000000000000GOO        = '10000000000000000GOO';
const _external_ref_inst_of_FunctionDefinition_labels_016b512934e0d16c2824 = '016b512934e0d16c2824';
const _UI_0179b269c9b393d21bab                 = '0179b269c9b393d21bab';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f
db.newModel(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f, 'Get UI Property') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Get UI Property',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f);
// :_instance_of_Runnable_Input____UI_Property_0162de7e041b00292ccd
db.newInstance(_instance_of_Runnable_Input____UI_Property_0162de7e041b00292ccd)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'UI Property',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Value_0162de8176947619c15f
db.newInstance(_instance_of_Runnable_Output____Value_0162de8176947619c15f)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Value',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Draw_FunctionDef____Draw_Get_UI_property_016b64ab1eca6954d341
db.newInstance(_instance_of_Draw_FunctionDef____Draw_Get_UI_property_016b64ab1eca6954d341)
    .setModelTag(_Draw_FunctionDef_016b51292eabc0200758) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_DEFAULT_GOO_10000000000000000GOO)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Draw Get UI property',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c2de7dd5abdc9dec7f
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c2de7dd5abdc9dec7f)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 0162de7e041b00292ccd-UI Property | Property | The selected property. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 0162de8176947619c15f-Value | Object | The value of the property. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nRetrieves the value of the specified property from the selected UI element. For example the text color of a label.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Get a property value from a UI element.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____UI_Property_0162de7e041b00292ccd);
db.assign(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Value_0162de8176947619c15f);
db.assign(_instance_of_Runnable_Input____UI_Property_0162de7e041b00292ccd, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _UI_Property_0162d3ede786c89fb31b                 );
db.assign(_instance_of_Runnable_Output____Value_0162de8176947619c15f, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Draw_FunctionDef____Draw_Get_UI_property_016b64ab1eca6954d341, _Draw_FunctionDef_DrawFunctionDef_$_45_$_Label_relation_016b512932a8455d73ad, _external_ref_inst_of_FunctionDefinition_labels_016b512934e0d16c2824);
db.assign(_instance_of_Draw_FunctionDef____Draw_Get_UI_property_016b64ab1eca6954d341, _Model_of_draw_items_DrawItem_$_45_$_Item_relation_016b568e4ded344d4008, _instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f);
db.assign(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c2de7dd5abdc9dec7f);
db.assign(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____UI_Property_0162de7e041b00292ccd);
db.assign(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Value_0162de8176947619c15f);
db.assign(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c2de7dd5abdc9dec7f);
db.assignOptional(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f, _Object_gooRel_ff022000000000000003, _UI_0179b269c9b393d21bab);
db.assignOptional(_instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f, _GOO_parentGooRel_ff02200000000000000u, _UI_0179b269c9b393d21bab);
db.assignOptional(_UI_0179b269c9b393d21bab, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f);
db.assignOptional(_UI_0179b269c9b393d21bab, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Get_UI_Property_0162de7dd5abdc9dec7f);
