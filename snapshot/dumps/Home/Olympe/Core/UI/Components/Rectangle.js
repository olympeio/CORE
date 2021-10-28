
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Visual_Component_017a8a97979d7c51ab6a = '017a8a97979d7c51ab6a';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Property_ff021000000000000005           = 'ff021000000000000005';
const _Property_Metadata_016d1bb681929c2cc3f0  = '016d1bb681929c2cc3f0';
const _String_ff021000000000000011             = 'ff021000000000000011';
const _Visual_Component_01664466071746f5e167   = '01664466071746f5e167';


// Definition of tags of defined properties
const _Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001 = '01621fb84e320000f001';
const _Display_Metadata_$_40_$Runtime$_41_$_iconCode_01609de3f292e3c2c6ff = '01609de3f292e3c2c6ff';
const _Documentation_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_summary_01703376c4a81c0e9d91   = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Property_Metadata_computable_016d1bb681929c2cc3f3 = '016d1bb681929c2cc3f3';
const _Property_Metadata_editableInDefinition_0170beccaac4129d72a9 = '0170beccaac4129d72a9';
const _Property_Metadata_rank_016d1bb681929c2cc3f1  = '016d1bb681929c2cc3f1';
const _Renderable_Default_Color_01611d9c686bbed5fdba = '01611d9c686bbed5fdba';
const _Renderable_Height_01611d9a0452a179c68f       = '01611d9a0452a179c68f';


// Definition of tags of defined relations
const _Abstract_Visual_Component_themable_property_016951f802614c4350bf = '016951f802614c4350bf';
const _Documentation_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Object_propertyRel_ff02200000000000000c      = 'ff02200000000000000c';
const _Property_Metadata_Property_016d1bb681929c2cc3f5 = '016d1bb681929c2cc3f5';
const _Property_Metadata_PropertyCategory_016d1bb681929c2cc3f4 = '016d1bb681929c2cc3f4';
const _Property_typeRel_ff02200000000000000d        = 'ff02200000000000000d';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Visual_Component_model____Rectangle_017cc0cf86f2a650141a = db.assignTag('017cc0cf86f2a650141a');
const _instance_of_Documentation_017cc0cfaca690f2f83d = db.assignTag('017cc0cfaca690f2f83d');
const _instance_of_Property__Rectangle____MUI_sx_$_91_$json$_93_$_017cc0db6cae7827c401 = db.assignTag('017cc0db6cae7827c401');
const _instance_of_Property_Metadata_017cc0db6cafa7cdae1f = db.assignTag('017cc0db6cafa7cdae1f');
const _instance_of_Documentation_017cc0db6cfc69d6baf2 = db.assignTag('017cc0db6cfc69d6baf2');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Components_017c78c7a7b6795d5151         = '017c78c7a7b6795d5151';
const _Custom_properties_0164188f5cc0c205bc06  = '0164188f5cc0c205bc06';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






db.newInstance(_instance_of_Property__Rectangle____MUI_sx_$_91_$json$_93_$_017cc0db6cae7827c401, _Property_ff021000000000000005)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'MUI sx [json]',
        'v'                                     :1
    })
.done();
// :_instance_of_Coded_Visual_Component_model____Rectangle_017cc0cf86f2a650141a
db.newModel(_instance_of_Coded_Visual_Component_model____Rectangle_017cc0cf86f2a650141a, 'Rectangle') // tag and name of the model 
    .extends(_Visual_Component_01664466071746f5e167).setModelTag(_Coded_Visual_Component_017a8a97979d7c51ab6a) 
    .setProperties({
        [_Display_Metadata_$_40_$Runtime$_41_$_iconCode_01609de3f292e3c2c6ff]:'',
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Visual_Component_model____Rectangle_017cc0cf86f2a650141a, {
        [db.DEFAULT+_instance_of_Property__Rectangle____MUI_sx_$_91_$json$_93_$_017cc0db6cae7827c401]:'{}',
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Rectangle',
        [db.DEFAULT+_Renderable_Default_Color_01611d9c686bbed5fdba]:db.createColor(234,234,234,1),
        [db.DEFAULT+_Renderable_Height_01611d9a0452a179c68f]:100,
        'v'                                     :2
    });
db.assign(_instance_of_Coded_Visual_Component_model____Rectangle_017cc0cf86f2a650141a, _Object_propertyRel_ff02200000000000000c          , _instance_of_Property__Rectangle____MUI_sx_$_91_$json$_93_$_017cc0db6cae7827c401);
db.setRootInstanceTag(_instance_of_Coded_Visual_Component_model____Rectangle_017cc0cf86f2a650141a);
// :_instance_of_Documentation_017cc0cfaca690f2f83d
db.newInstance(_instance_of_Documentation_017cc0cfaca690f2f83d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Visual_Component_model____Rectangle_017cc0cf86f2a650141a)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'An empty component that can be used as a rectangle, a spacer, an empty `div`, ...\n<br><br>\nThe `MUI sx [json]` property is for advanced customization of the underlying MUI component, see more [here](https://mui.com/system/the-sx-prop/).',
        [_Documentation_summary_01703376c4a81c0e9d91]:'An empty component.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Property_Metadata_017cc0db6cafa7cdae1f
db.newInstance(_instance_of_Property_Metadata_017cc0db6cafa7cdae1f)
    .setModelTag(_Property_Metadata_016d1bb681929c2cc3f0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Visual_Component_model____Rectangle_017cc0cf86f2a650141a)
    // Tag of parent goos
    .addParentGoo(_instance_of_Coded_Visual_Component_model____Rectangle_017cc0cf86f2a650141a)
    .setNameOrProperties({
        [_Property_Metadata_computable_016d1bb681929c2cc3f3]:true,
        [_Property_Metadata_editableInDefinition_0170beccaac4129d72a9]:true,
        [_Property_Metadata_rank_016d1bb681929c2cc3f1]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017cc0db6cfc69d6baf2
db.newInstance(_instance_of_Documentation_017cc0db6cfc69d6baf2)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Visual_Component_model____Rectangle_017cc0cf86f2a650141a)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The system prop that allows defining MUI system overrides as well as additional CSS styles.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Property__Rectangle____MUI_sx_$_91_$json$_93_$_017cc0db6cae7827c401, _Property_typeRel_ff02200000000000000d            , _String_ff021000000000000011                      );
db.assign(_instance_of_Coded_Visual_Component_model____Rectangle_017cc0cf86f2a650141a, _Abstract_Visual_Component_themable_property_016951f802614c4350bf, _instance_of_Property__Rectangle____MUI_sx_$_91_$json$_93_$_017cc0db6cae7827c401);
db.assign(_instance_of_Property_Metadata_017cc0db6cafa7cdae1f, _Property_Metadata_PropertyCategory_016d1bb681929c2cc3f4, _Custom_properties_0164188f5cc0c205bc06           );
db.assign(_instance_of_Property_Metadata_017cc0db6cafa7cdae1f, _Property_Metadata_Property_016d1bb681929c2cc3f5  , _instance_of_Property__Rectangle____MUI_sx_$_91_$json$_93_$_017cc0db6cae7827c401);
db.assign(_instance_of_Documentation_017cc0cfaca690f2f83d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Visual_Component_model____Rectangle_017cc0cf86f2a650141a);
db.assign(_instance_of_Documentation_017cc0db6cfc69d6baf2   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Property__Rectangle____MUI_sx_$_91_$json$_93_$_017cc0db6cae7827c401);
db.assign(_instance_of_Property__Rectangle____MUI_sx_$_91_$json$_93_$_017cc0db6cae7827c401, _Object_gooRel_ff022000000000000003               , _instance_of_Coded_Visual_Component_model____Rectangle_017cc0cf86f2a650141a);
db.assign(_instance_of_Coded_Visual_Component_model____Rectangle_017cc0cf86f2a650141a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cc0cfaca690f2f83d   );
db.assign(_instance_of_Coded_Visual_Component_model____Rectangle_017cc0cf86f2a650141a, _Object_containsRel_ff02200000000000000f          , _instance_of_Property__Rectangle____MUI_sx_$_91_$json$_93_$_017cc0db6cae7827c401);
db.assign(_instance_of_Property__Rectangle____MUI_sx_$_91_$json$_93_$_017cc0db6cae7827c401, _Object_containsRel_ff02200000000000000f          , _instance_of_Property_Metadata_017cc0db6cafa7cdae1f);
db.assign(_instance_of_Property__Rectangle____MUI_sx_$_91_$json$_93_$_017cc0db6cae7827c401, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017cc0db6cfc69d6baf2   );
db.assignOptional(_instance_of_Coded_Visual_Component_model____Rectangle_017cc0cf86f2a650141a, _Object_gooRel_ff022000000000000003, _Components_017c78c7a7b6795d5151);
db.assignOptional(_instance_of_Coded_Visual_Component_model____Rectangle_017cc0cf86f2a650141a, _GOO_parentGooRel_ff02200000000000000u, _Components_017c78c7a7b6795d5151);
db.assignOptional(_Components_017c78c7a7b6795d5151, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Visual_Component_model____Rectangle_017cc0cf86f2a650141a);
db.assignOptional(_Components_017c78c7a7b6795d5151, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Visual_Component_model____Rectangle_017cc0cf86f2a650141a);
