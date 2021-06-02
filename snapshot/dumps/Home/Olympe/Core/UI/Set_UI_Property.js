
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Draw_FunctionDef_016b51292eabc0200758   = '016b51292eabc0200758';
const _Error_Flow_016eeb5ede9f3094d8f0         = '016eeb5ede9f3094d8f0';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Predefined_input_Control_Flow_of_Action_016ac63229782039429f = '016ac63229782039429f';
const _Predefined_output_Control_Flow_016ac6322acf67eebfe7 = '016ac6322acf67eebfe7';
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
const _instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805 = db.assignTag('0162d2938cadad968805');
const _instance_of_Runnable_Output____Error_Flow_0162d2938cadad968806 = db.assignTag('0162d2938cadad968806');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162d2938caead968805 = db.assignTag('0162d2938caead968805');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_0162d2938cafad968805 = db.assignTag('0162d2938cafad968805');
const _instance_of_Runnable_Input____UI_Property_0162d293ab6f65c86c52 = db.assignTag('0162d293ab6f65c86c52');
const _instance_of_Runnable_Input____Value_0162d293e8f59ad91a16 = db.assignTag('0162d293e8f59ad91a16');
const _instance_of_Draw_FunctionDef____Draw_Set_UI_property_016b64ab20bcac0c9bc3 = db.assignTag('016b64ab20bcac0c9bc3');
const _instance_of_Documentation_Function_Metadata_d0c2d2938cadad968805 = db.assignTag('d0c2d2938cadad968805');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _DEFAULT_GOO_10000000000000000GOO        = '10000000000000000GOO';
const _external_ref_inst_of_FunctionDefinition_labels_016b512934e0d16c2824 = '016b512934e0d16c2824';
const _UI_0179b269c9b393d21bab                 = '0179b269c9b393d21bab';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805
db.newModel(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, 'Set UI Property') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Set UI Property',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805);
// :_instance_of_Runnable_Output____Error_Flow_0162d2938cadad968806
db.newInstance(_instance_of_Runnable_Output____Error_Flow_0162d2938cadad968806)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162d2938caead968805
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162d2938caead968805)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_0162d2938cafad968805
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_0162d2938cafad968805)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____UI_Property_0162d293ab6f65c86c52
db.newInstance(_instance_of_Runnable_Input____UI_Property_0162d293ab6f65c86c52)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'UI Property',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Value_0162d293e8f59ad91a16
db.newInstance(_instance_of_Runnable_Input____Value_0162d293e8f59ad91a16)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Value',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Draw_FunctionDef____Draw_Set_UI_property_016b64ab20bcac0c9bc3
db.newInstance(_instance_of_Draw_FunctionDef____Draw_Set_UI_property_016b64ab20bcac0c9bc3)
    .setModelTag(_Draw_FunctionDef_016b51292eabc0200758) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_DEFAULT_GOO_10000000000000000GOO)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Draw Set UI property',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c2d2938cadad968805
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c2d2938cadad968805)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'## Errors\n| Code | Description |\n| --- | --- |\n| undefined | undefined | The property doesn\'t exist for that component. |\n| undefined | undefined | The scope (or context) couldn\'t be found. |\n',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 0162d293ab6f65c86c52-UI Property | Property | The UI property. |\n| 0162d293e8f59ad91a16-Value | Object | The value. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nSets the specified UI Property to the provided value.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Set a UI Property.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162d2938caead968805);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____UI_Property_0162d293ab6f65c86c52);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Value_0162d293e8f59ad91a16);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Error_Flow_0162d2938cadad968806);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_0162d2938cafad968805);
db.assign(_instance_of_Runnable_Output____Error_Flow_0162d2938cadad968806, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162d2938caead968805, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_0162d2938cafad968805, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____UI_Property_0162d293ab6f65c86c52, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _UI_Property_0162d3ede786c89fb31b                 );
db.assign(_instance_of_Runnable_Input____Value_0162d293e8f59ad91a16, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Draw_FunctionDef____Draw_Set_UI_property_016b64ab20bcac0c9bc3, _Draw_FunctionDef_DrawFunctionDef_$_45_$_Label_relation_016b512932a8455d73ad, _external_ref_inst_of_FunctionDefinition_labels_016b512934e0d16c2824);
db.assign(_instance_of_Draw_FunctionDef____Draw_Set_UI_property_016b64ab20bcac0c9bc3, _Model_of_draw_items_DrawItem_$_45_$_Item_relation_016b568e4ded344d4008, _instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c2d2938cadad968805);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Error_Flow_0162d2938cadad968806);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0162d2938caead968805);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_0162d2938cafad968805);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____UI_Property_0162d293ab6f65c86c52);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Value_0162d293e8f59ad91a16);
db.assign(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c2d2938cadad968805);
db.assignOptional(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _Object_gooRel_ff022000000000000003, _UI_0179b269c9b393d21bab);
db.assignOptional(_instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805, _GOO_parentGooRel_ff02200000000000000u, _UI_0179b269c9b393d21bab);
db.assignOptional(_UI_0179b269c9b393d21bab, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805);
db.assignOptional(_UI_0179b269c9b393d21bab, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Set_UI_Property_0162d2938cadad968805);
