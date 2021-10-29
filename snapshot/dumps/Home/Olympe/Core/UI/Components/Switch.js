
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Checkbox_Color_017c9cb2d2ca2b658dc5     = '017c9cb2d2ca2b658dc5';
const _Coded_Visual_Component_017a8a97979d7c51ab6a = '017a8a97979d7c51ab6a';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Property_ff021000000000000005           = 'ff021000000000000005';
const _Property_Metadata_016d1bb681929c2cc3f0  = '016d1bb681929c2cc3f0';
const _String_ff021000000000000011             = 'ff021000000000000011';
const _Switch_Size_017c9e2a731790f81ef2        = '017c9e2a731790f81ef2';
const _UI_Event_0163fe51d83dad2a0f4b           = '0163fe51d83dad2a0f4b';
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
const _Renderable_Height_01611d9a0452a179c68f       = '01611d9a0452a179c68f';
const _Renderable_Width_01611d99ec0553b5926e        = '01611d99ec0553b5926e';


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
const _instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93 = db.assignTag('017c9e0e9f6f81f21a93');
const _instance_of_Documentation_017c9e0e9f70d344d595 = db.assignTag('017c9e0e9f70d344d595');
const _instance_of_Property__Switch____Checked_017c9e0e9f719c35839d = db.assignTag('017c9e0e9f719c35839d');
const _instance_of_Property_Metadata_017c9e0e9f722cf6f0c7 = db.assignTag('017c9e0e9f722cf6f0c7');
const _instance_of_Documentation_017c9e0e9f7362f89da4 = db.assignTag('017c9e0e9f7362f89da4');
const _instance_of_Property_Metadata_017c9e0e9f77f92ffc6c = db.assignTag('017c9e0e9f77f92ffc6c');
const _instance_of_Property__Switch____Color_017c9e0e9f78c3147d37 = db.assignTag('017c9e0e9f78c3147d37');
const _instance_of_Documentation_017c9e0e9f79b54f6d1e = db.assignTag('017c9e0e9f79b54f6d1e');
const _instance_of_Property_Metadata_017c9e0e9f7a2e7afeb0 = db.assignTag('017c9e0e9f7a2e7afeb0');
const _instance_of_Property__Switch____Disabled_017c9e0e9f7bec54aaee = db.assignTag('017c9e0e9f7bec54aaee');
const _instance_of_Documentation_017c9e0e9f7c20609dc4 = db.assignTag('017c9e0e9f7c20609dc4');
const _instance_of_Property_Metadata_017c9e0e9f862a5e55a2 = db.assignTag('017c9e0e9f862a5e55a2');
const _instance_of_Property__Switch____On_Change_017c9e0e9f870b1deffd = db.assignTag('017c9e0e9f870b1deffd');
const _instance_of_Documentation_017c9e0e9f88bb90b335 = db.assignTag('017c9e0e9f88bb90b335');
const _instance_of_Property__Switch____Size_017c9e2adcb889ea129c = db.assignTag('017c9e2adcb889ea129c');
const _instance_of_Property_Metadata_017c9e2adcb8dad0baf2 = db.assignTag('017c9e2adcb8dad0baf2');
const _instance_of_Documentation_017c9e2adcdc4984a706 = db.assignTag('017c9e2adcdc4984a706');
const _instance_of_Property_Metadata_017ca2e8859c9f2ca83c = db.assignTag('017ca2e8859c9f2ca83c');
const _instance_of_Property__Switch____MUI_sx_$_91_$json$_93_$_017ca2e8859ca35b3d42 = db.assignTag('017ca2e8859ca35b3d42');
const _instance_of_Documentation_017ca2e885efe71c62fd = db.assignTag('017ca2e885efe71c62fd');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Components_017c78c7a7b6795d5151         = '017c78c7a7b6795d5151';
const _Custom_events_0165335122d2ea44dd92      = '0165335122d2ea44dd92';
const _Custom_properties_0164188f5cc0c205bc06  = '0164188f5cc0c205bc06';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






db.newInstance(_instance_of_Property__Switch____Checked_017c9e0e9f719c35839d, _Property_ff021000000000000005)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Checked',
        'v'                                     :1
    })
.done();
db.newInstance(_instance_of_Property__Switch____Color_017c9e0e9f78c3147d37, _Property_ff021000000000000005)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Color',
        'v'                                     :1
    })
.done();
db.newInstance(_instance_of_Property__Switch____Disabled_017c9e0e9f7bec54aaee, _Property_ff021000000000000005)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Disabled',
        'v'                                     :1
    })
.done();
db.newInstance(_instance_of_Property__Switch____On_Change_017c9e0e9f870b1deffd, _Property_ff021000000000000005)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'On Change',
        'v'                                     :1
    })
.done();
db.newInstance(_instance_of_Property__Switch____Size_017c9e2adcb889ea129c, _Property_ff021000000000000005)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Size',
        'v'                                     :1
    })
.done();
db.newInstance(_instance_of_Property__Switch____MUI_sx_$_91_$json$_93_$_017ca2e8859ca35b3d42, _Property_ff021000000000000005)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'MUI sx [json]',
        'v'                                     :1
    })
.done();
// :_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93
db.newModel(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, 'Switch') // tag and name of the model 
    .extends(_Visual_Component_01664466071746f5e167).setModelTag(_Coded_Visual_Component_017a8a97979d7c51ab6a) 
    .setProperties({
        [_Display_Metadata_$_40_$Runtime$_41_$_iconCode_01609de3f292e3c2c6ff]:'',
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, {
        [db.DEFAULT+_Renderable_Width_01611d99ec0553b5926e]:64,
        [db.DEFAULT+_instance_of_Property__Switch____MUI_sx_$_91_$json$_93_$_017ca2e8859ca35b3d42]:'{}',
        [db.DEFAULT+_instance_of_Property__Switch____Color_017c9e0e9f78c3147d37]:'primary',
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Checkbox',
        [db.DEFAULT+_instance_of_Property__Switch____Disabled_017c9e0e9f7bec54aaee]:false,
        [db.DEFAULT+_Renderable_Height_01611d9a0452a179c68f]:42,
        [db.DEFAULT+_instance_of_Property__Switch____Checked_017c9e0e9f719c35839d]:false,
        [db.DEFAULT+_instance_of_Property__Switch____Size_017c9e2adcb889ea129c]:'medium',
        'v'                                     :2
    });
db.assign(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, _Object_propertyRel_ff02200000000000000c          , _instance_of_Property__Switch____Checked_017c9e0e9f719c35839d);
db.assign(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, _Object_propertyRel_ff02200000000000000c          , _instance_of_Property__Switch____Color_017c9e0e9f78c3147d37);
db.assign(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, _Object_propertyRel_ff02200000000000000c          , _instance_of_Property__Switch____Disabled_017c9e0e9f7bec54aaee);
db.assign(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, _Object_propertyRel_ff02200000000000000c          , _instance_of_Property__Switch____On_Change_017c9e0e9f870b1deffd);
db.assign(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, _Object_propertyRel_ff02200000000000000c          , _instance_of_Property__Switch____Size_017c9e2adcb889ea129c);
db.assign(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, _Object_propertyRel_ff02200000000000000c          , _instance_of_Property__Switch____MUI_sx_$_91_$json$_93_$_017ca2e8859ca35b3d42);
db.setRootInstanceTag(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93);
// :_instance_of_Documentation_017c9e0e9f70d344d595
db.newInstance(_instance_of_Documentation_017c9e0e9f70d344d595)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Switches are the preferred way to adjust settings on mobile. The option that the switch controls, as well as the state it\'s in, should be made clear from the corresponding inline label.\n<br><br>\nIf you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead.\n<br><br>\nThe `MUI sx [json]` property is for advanced customization of the underlying MUI component, see more [here](https://mui.com/system/the-sx-prop/).\n<br><br>\n`Border Color` and `Border Width` have no effect on this component.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Switch toggles the state of a single setting on or off.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Property_Metadata_017c9e0e9f722cf6f0c7
db.newInstance(_instance_of_Property_Metadata_017c9e0e9f722cf6f0c7)
    .setModelTag(_Property_Metadata_016d1bb681929c2cc3f0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93)
    // Tag of parent goos
    .addParentGoo(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93)
    .setNameOrProperties({
        [_Property_Metadata_computable_016d1bb681929c2cc3f3]:true,
        [_Property_Metadata_editableInDefinition_0170beccaac4129d72a9]:true,
        [_Property_Metadata_rank_016d1bb681929c2cc3f1]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017c9e0e9f7362f89da4
db.newInstance(_instance_of_Documentation_017c9e0e9f7362f89da4)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'If true, the component is checked.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Property_Metadata_017c9e0e9f77f92ffc6c
db.newInstance(_instance_of_Property_Metadata_017c9e0e9f77f92ffc6c)
    .setModelTag(_Property_Metadata_016d1bb681929c2cc3f0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93)
    // Tag of parent goos
    .addParentGoo(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93)
    .setNameOrProperties({
        [_Property_Metadata_computable_016d1bb681929c2cc3f3]:true,
        [_Property_Metadata_editableInDefinition_0170beccaac4129d72a9]:true,
        [_Property_Metadata_rank_016d1bb681929c2cc3f1]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017c9e0e9f79b54f6d1e
db.newInstance(_instance_of_Documentation_017c9e0e9f79b54f6d1e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The color of the component. It supports those theme colors that make sense for this component.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Property_Metadata_017c9e0e9f7a2e7afeb0
db.newInstance(_instance_of_Property_Metadata_017c9e0e9f7a2e7afeb0)
    .setModelTag(_Property_Metadata_016d1bb681929c2cc3f0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93)
    // Tag of parent goos
    .addParentGoo(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93)
    .setNameOrProperties({
        [_Property_Metadata_computable_016d1bb681929c2cc3f3]:true,
        [_Property_Metadata_editableInDefinition_0170beccaac4129d72a9]:true,
        [_Property_Metadata_rank_016d1bb681929c2cc3f1]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017c9e0e9f7c20609dc4
db.newInstance(_instance_of_Documentation_017c9e0e9f7c20609dc4)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'If true, the component is disabled.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Property_Metadata_017c9e0e9f862a5e55a2
db.newInstance(_instance_of_Property_Metadata_017c9e0e9f862a5e55a2)
    .setModelTag(_Property_Metadata_016d1bb681929c2cc3f0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93)
    // Tag of parent goos
    .addParentGoo(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93)
    .setNameOrProperties({
        [_Property_Metadata_computable_016d1bb681929c2cc3f3]:false,
        [_Property_Metadata_editableInDefinition_0170beccaac4129d72a9]:true,
        [_Property_Metadata_rank_016d1bb681929c2cc3f1]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017c9e0e9f88bb90b335
db.newInstance(_instance_of_Documentation_017c9e0e9f88bb90b335)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Callback fired when the state is changed.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Property_Metadata_017c9e2adcb8dad0baf2
db.newInstance(_instance_of_Property_Metadata_017c9e2adcb8dad0baf2)
    .setModelTag(_Property_Metadata_016d1bb681929c2cc3f0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93)
    // Tag of parent goos
    .addParentGoo(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93)
    .setNameOrProperties({
        [_Property_Metadata_computable_016d1bb681929c2cc3f3]:true,
        [_Property_Metadata_editableInDefinition_0170beccaac4129d72a9]:true,
        [_Property_Metadata_rank_016d1bb681929c2cc3f1]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017c9e2adcdc4984a706
db.newInstance(_instance_of_Documentation_017c9e2adcdc4984a706)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The size of the component. small is equivalent to the dense switch styling.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Property_Metadata_017ca2e8859c9f2ca83c
db.newInstance(_instance_of_Property_Metadata_017ca2e8859c9f2ca83c)
    .setModelTag(_Property_Metadata_016d1bb681929c2cc3f0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93)
    // Tag of parent goos
    .addParentGoo(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93)
    .setNameOrProperties({
        [_Property_Metadata_computable_016d1bb681929c2cc3f3]:true,
        [_Property_Metadata_editableInDefinition_0170beccaac4129d72a9]:true,
        [_Property_Metadata_rank_016d1bb681929c2cc3f1]:4,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017ca2e885efe71c62fd
db.newInstance(_instance_of_Documentation_017ca2e885efe71c62fd)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The system prop that allows defining MUI system overrides as well as additional CSS styles.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Property__Switch____Checked_017c9e0e9f719c35839d, _Property_typeRel_ff02200000000000000d            , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Property__Switch____Color_017c9e0e9f78c3147d37, _Property_typeRel_ff02200000000000000d            , _Checkbox_Color_017c9cb2d2ca2b658dc5              );
db.assign(_instance_of_Property__Switch____Disabled_017c9e0e9f7bec54aaee, _Property_typeRel_ff02200000000000000d            , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Property__Switch____On_Change_017c9e0e9f870b1deffd, _Property_typeRel_ff02200000000000000d            , _UI_Event_0163fe51d83dad2a0f4b                    );
db.assign(_instance_of_Property__Switch____Size_017c9e2adcb889ea129c, _Property_typeRel_ff02200000000000000d            , _Switch_Size_017c9e2a731790f81ef2                 );
db.assign(_instance_of_Property__Switch____MUI_sx_$_91_$json$_93_$_017ca2e8859ca35b3d42, _Property_typeRel_ff02200000000000000d            , _String_ff021000000000000011                      );
db.assign(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, _Abstract_Visual_Component_themable_property_016951f802614c4350bf, _instance_of_Property__Switch____Color_017c9e0e9f78c3147d37);
db.assign(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, _Abstract_Visual_Component_themable_property_016951f802614c4350bf, _instance_of_Property__Switch____Disabled_017c9e0e9f7bec54aaee);
db.assign(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, _Abstract_Visual_Component_themable_property_016951f802614c4350bf, _instance_of_Property__Switch____Size_017c9e2adcb889ea129c);
db.assign(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, _Abstract_Visual_Component_themable_property_016951f802614c4350bf, _instance_of_Property__Switch____MUI_sx_$_91_$json$_93_$_017ca2e8859ca35b3d42);
db.assign(_instance_of_Property_Metadata_017c9e0e9f722cf6f0c7, _Property_Metadata_PropertyCategory_016d1bb681929c2cc3f4, _Custom_properties_0164188f5cc0c205bc06           );
db.assign(_instance_of_Property_Metadata_017c9e0e9f77f92ffc6c, _Property_Metadata_PropertyCategory_016d1bb681929c2cc3f4, _Custom_properties_0164188f5cc0c205bc06           );
db.assign(_instance_of_Property_Metadata_017c9e0e9f7a2e7afeb0, _Property_Metadata_PropertyCategory_016d1bb681929c2cc3f4, _Custom_properties_0164188f5cc0c205bc06           );
db.assign(_instance_of_Property_Metadata_017c9e0e9f862a5e55a2, _Property_Metadata_PropertyCategory_016d1bb681929c2cc3f4, _Custom_events_0165335122d2ea44dd92               );
db.assign(_instance_of_Property_Metadata_017c9e2adcb8dad0baf2, _Property_Metadata_PropertyCategory_016d1bb681929c2cc3f4, _Custom_properties_0164188f5cc0c205bc06           );
db.assign(_instance_of_Property_Metadata_017ca2e8859c9f2ca83c, _Property_Metadata_PropertyCategory_016d1bb681929c2cc3f4, _Custom_properties_0164188f5cc0c205bc06           );
db.assign(_instance_of_Property_Metadata_017c9e0e9f722cf6f0c7, _Property_Metadata_Property_016d1bb681929c2cc3f5  , _instance_of_Property__Switch____Checked_017c9e0e9f719c35839d);
db.assign(_instance_of_Property_Metadata_017c9e0e9f77f92ffc6c, _Property_Metadata_Property_016d1bb681929c2cc3f5  , _instance_of_Property__Switch____Color_017c9e0e9f78c3147d37);
db.assign(_instance_of_Property_Metadata_017c9e0e9f7a2e7afeb0, _Property_Metadata_Property_016d1bb681929c2cc3f5  , _instance_of_Property__Switch____Disabled_017c9e0e9f7bec54aaee);
db.assign(_instance_of_Property_Metadata_017c9e0e9f862a5e55a2, _Property_Metadata_Property_016d1bb681929c2cc3f5  , _instance_of_Property__Switch____On_Change_017c9e0e9f870b1deffd);
db.assign(_instance_of_Property_Metadata_017c9e2adcb8dad0baf2, _Property_Metadata_Property_016d1bb681929c2cc3f5  , _instance_of_Property__Switch____Size_017c9e2adcb889ea129c);
db.assign(_instance_of_Property_Metadata_017ca2e8859c9f2ca83c, _Property_Metadata_Property_016d1bb681929c2cc3f5  , _instance_of_Property__Switch____MUI_sx_$_91_$json$_93_$_017ca2e8859ca35b3d42);
db.assign(_instance_of_Documentation_017c9e0e9f70d344d595   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93);
db.assign(_instance_of_Documentation_017c9e0e9f7362f89da4   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Property__Switch____Checked_017c9e0e9f719c35839d);
db.assign(_instance_of_Documentation_017c9e0e9f79b54f6d1e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Property__Switch____Color_017c9e0e9f78c3147d37);
db.assign(_instance_of_Documentation_017c9e0e9f7c20609dc4   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Property__Switch____Disabled_017c9e0e9f7bec54aaee);
db.assign(_instance_of_Documentation_017c9e0e9f88bb90b335   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Property__Switch____On_Change_017c9e0e9f870b1deffd);
db.assign(_instance_of_Documentation_017c9e2adcdc4984a706   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Property__Switch____Size_017c9e2adcb889ea129c);
db.assign(_instance_of_Documentation_017ca2e885efe71c62fd   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Property__Switch____MUI_sx_$_91_$json$_93_$_017ca2e8859ca35b3d42);
db.assign(_instance_of_Property__Switch____Checked_017c9e0e9f719c35839d, _Object_gooRel_ff022000000000000003               , _instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93);
db.assign(_instance_of_Property__Switch____Color_017c9e0e9f78c3147d37, _Object_gooRel_ff022000000000000003               , _instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93);
db.assign(_instance_of_Property__Switch____Disabled_017c9e0e9f7bec54aaee, _Object_gooRel_ff022000000000000003               , _instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93);
db.assign(_instance_of_Property__Switch____On_Change_017c9e0e9f870b1deffd, _Object_gooRel_ff022000000000000003               , _instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93);
db.assign(_instance_of_Property__Switch____Size_017c9e2adcb889ea129c, _Object_gooRel_ff022000000000000003               , _instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93);
db.assign(_instance_of_Property__Switch____MUI_sx_$_91_$json$_93_$_017ca2e8859ca35b3d42, _Object_gooRel_ff022000000000000003               , _instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93);
db.assign(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017c9e0e9f70d344d595   );
db.assign(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, _Object_containsRel_ff02200000000000000f          , _instance_of_Property__Switch____Checked_017c9e0e9f719c35839d);
db.assign(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, _Object_containsRel_ff02200000000000000f          , _instance_of_Property__Switch____Color_017c9e0e9f78c3147d37);
db.assign(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, _Object_containsRel_ff02200000000000000f          , _instance_of_Property__Switch____Disabled_017c9e0e9f7bec54aaee);
db.assign(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, _Object_containsRel_ff02200000000000000f          , _instance_of_Property__Switch____On_Change_017c9e0e9f870b1deffd);
db.assign(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, _Object_containsRel_ff02200000000000000f          , _instance_of_Property__Switch____Size_017c9e2adcb889ea129c);
db.assign(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, _Object_containsRel_ff02200000000000000f          , _instance_of_Property__Switch____MUI_sx_$_91_$json$_93_$_017ca2e8859ca35b3d42);
db.assign(_instance_of_Property__Switch____Checked_017c9e0e9f719c35839d, _Object_containsRel_ff02200000000000000f          , _instance_of_Property_Metadata_017c9e0e9f722cf6f0c7);
db.assign(_instance_of_Property__Switch____Checked_017c9e0e9f719c35839d, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017c9e0e9f7362f89da4   );
db.assign(_instance_of_Property__Switch____Color_017c9e0e9f78c3147d37, _Object_containsRel_ff02200000000000000f          , _instance_of_Property_Metadata_017c9e0e9f77f92ffc6c);
db.assign(_instance_of_Property__Switch____Color_017c9e0e9f78c3147d37, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017c9e0e9f79b54f6d1e   );
db.assign(_instance_of_Property__Switch____Disabled_017c9e0e9f7bec54aaee, _Object_containsRel_ff02200000000000000f          , _instance_of_Property_Metadata_017c9e0e9f7a2e7afeb0);
db.assign(_instance_of_Property__Switch____Disabled_017c9e0e9f7bec54aaee, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017c9e0e9f7c20609dc4   );
db.assign(_instance_of_Property__Switch____On_Change_017c9e0e9f870b1deffd, _Object_containsRel_ff02200000000000000f          , _instance_of_Property_Metadata_017c9e0e9f862a5e55a2);
db.assign(_instance_of_Property__Switch____On_Change_017c9e0e9f870b1deffd, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017c9e0e9f88bb90b335   );
db.assign(_instance_of_Property__Switch____Size_017c9e2adcb889ea129c, _Object_containsRel_ff02200000000000000f          , _instance_of_Property_Metadata_017c9e2adcb8dad0baf2);
db.assign(_instance_of_Property__Switch____Size_017c9e2adcb889ea129c, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017c9e2adcdc4984a706   );
db.assign(_instance_of_Property__Switch____MUI_sx_$_91_$json$_93_$_017ca2e8859ca35b3d42, _Object_containsRel_ff02200000000000000f          , _instance_of_Property_Metadata_017ca2e8859c9f2ca83c);
db.assign(_instance_of_Property__Switch____MUI_sx_$_91_$json$_93_$_017ca2e8859ca35b3d42, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017ca2e885efe71c62fd   );
db.assignOptional(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, _Object_gooRel_ff022000000000000003, _Components_017c78c7a7b6795d5151);
db.assignOptional(_instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93, _GOO_parentGooRel_ff02200000000000000u, _Components_017c78c7a7b6795d5151);
db.assignOptional(_Components_017c78c7a7b6795d5151, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93);
db.assignOptional(_Components_017c78c7a7b6795d5151, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Visual_Component_model____Switch_017c9e0e9f6f81f21a93);
