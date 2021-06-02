
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
const _Property_ff021000000000000005           = 'ff021000000000000005';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


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
const _instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d = db.assignTag('016778ac9fcc6032ce1d');
const _instance_of_Runnable_Input____object_016778aca26c6df893e7 = db.assignTag('016778aca26c6df893e7');
const _instance_of_Runnable_Input____property_016778acaa8ea38f75d3 = db.assignTag('016778acaa8ea38f75d3');
const _instance_of_Runnable_Input____value_016778acb516521d243d = db.assignTag('016778acb516521d243d');
const _instance_of_Runnable_Output____object_016778acb6bd00078064 = db.assignTag('016778acb6bd00078064');
const _instance_of_Draw_FunctionDef____Draw_Set_object_property_016b655d105c78ced871 = db.assignTag('016b655d105c78ced871');
const _instance_of_Documentation_Function_Metadata_d0c778ac9fcc6032ce1d = db.assignTag('d0c778ac9fcc6032ce1d');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _DEFAULT_GOO_10000000000000000GOO        = '10000000000000000GOO';
const _external_ref_inst_of_FunctionDefinition_labels_016b5129372181281535 = '016b5129372181281535';
const _Operation_0179b268740d49b2a89d          = '0179b268740d49b2a89d';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d
db.newModel(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, 'Set Object Property') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Set Object Property',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d);
// :_instance_of_Runnable_Input____object_016778aca26c6df893e7
db.newInstance(_instance_of_Runnable_Input____object_016778aca26c6df893e7)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'object',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____property_016778acaa8ea38f75d3
db.newInstance(_instance_of_Runnable_Input____property_016778acaa8ea38f75d3)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'property',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____value_016778acb516521d243d
db.newInstance(_instance_of_Runnable_Input____value_016778acb516521d243d)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'value',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____object_016778acb6bd00078064
db.newInstance(_instance_of_Runnable_Output____object_016778acb6bd00078064)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'object',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Draw_FunctionDef____Draw_Set_object_property_016b655d105c78ced871
db.newInstance(_instance_of_Draw_FunctionDef____Draw_Set_object_property_016b655d105c78ced871)
    .setModelTag(_Draw_FunctionDef_016b51292eabc0200758) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_DEFAULT_GOO_10000000000000000GOO)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Draw Set object property',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c778ac9fcc6032ce1d
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c778ac9fcc6032ce1d)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 016778aca26c6df893e7-object | Object | The object to update. |\n| 016778acaa8ea38f75d3-property | Property | The property to update. |\n| 016778acb516521d243d-value | Object | The value to set the property with. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 016778acb6bd00078064-object | Object | The object. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nSets the value of a specific property for the provided object.\n\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Set an Object property.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____object_016778aca26c6df893e7);
db.assign(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____property_016778acaa8ea38f75d3);
db.assign(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____value_016778acb516521d243d);
db.assign(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____object_016778acb6bd00078064);
db.assign(_instance_of_Runnable_Input____object_016778aca26c6df893e7, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____property_016778acaa8ea38f75d3, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Property_ff021000000000000005                    );
db.assign(_instance_of_Runnable_Input____value_016778acb516521d243d, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Output____object_016778acb6bd00078064, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Draw_FunctionDef____Draw_Set_object_property_016b655d105c78ced871, _Draw_FunctionDef_DrawFunctionDef_$_45_$_Label_relation_016b512932a8455d73ad, _external_ref_inst_of_FunctionDefinition_labels_016b5129372181281535);
db.assign(_instance_of_Draw_FunctionDef____Draw_Set_object_property_016b655d105c78ced871, _Model_of_draw_items_DrawItem_$_45_$_Item_relation_016b568e4ded344d4008, _instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d);
db.assign(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c778ac9fcc6032ce1d);
db.assign(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____object_016778aca26c6df893e7);
db.assign(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____property_016778acaa8ea38f75d3);
db.assign(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____value_016778acb516521d243d);
db.assign(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____object_016778acb6bd00078064);
db.assign(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c778ac9fcc6032ce1d);
db.assignOptional(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _Object_gooRel_ff022000000000000003, _Operation_0179b268740d49b2a89d);
db.assignOptional(_instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d, _GOO_parentGooRel_ff02200000000000000u, _Operation_0179b268740d49b2a89d);
db.assignOptional(_Operation_0179b268740d49b2a89d, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d);
db.assignOptional(_Operation_0179b268740d49b2a89d, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Set_Object_Property_016778ac9fcc6032ce1d);
