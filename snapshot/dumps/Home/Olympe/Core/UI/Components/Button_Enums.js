
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Enum_016cdd861b32d56c81f7               = '016cdd861b32d56c81f7';
const _EnumDef_017a768f966fc08ebb98            = '017a768f966fc08ebb98';
const _Enums_017a7a9ff057958e5678              = '017a7a9ff057958e5678';


// Definition of tags of defined properties
const _Enum_Rank_017a7690c915975ea995               = '017a7690c915975ea995';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _String_Value_$_40_$String$_41_$_ff023000000000000026 = 'ff023000000000000026';


// Definition of tags of defined relations
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _Folder_subFolderRel_016a697ef00ce7554691     = '016a697ef00ce7554691';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Project_primordialItemRel_ff02200000000000002a = 'ff02200000000000002a';


// Definition of tags used for newly created instances 
const _instance_of_Enums____Button_Enums_017c9dc58038c20a1d33 = db.assignTag('017c9dc58038c20a1d33');
const _instance_of_EnumDef_model____Button_Variant_017c9e4064a3bb9c90b5 = db.assignTag('017c9e4064a3bb9c90b5');
const _instance_of_Button_Variant____Text_017c9e4074e43df7843b = db.assignTag('017c9e4074e43df7843b');
const _instance_of_Button_Variant____Contained_017c9e408c6a4655de4a = db.assignTag('017c9e408c6a4655de4a');
const _instance_of_Button_Variant____Outlined_017c9e40aa05acf15264 = db.assignTag('017c9e40aa05acf15264');
const _instance_of_EnumDef_model____Button_Size_017ca275d74f92ebe3f3 = db.assignTag('017ca275d74f92ebe3f3');
const _instance_of_Button_Size____Small_017ca275eea400599449 = db.assignTag('017ca275eea400599449');
const _instance_of_Button_Size____Medium_017ca275ef402c730dd9 = db.assignTag('017ca275ef402c730dd9');
const _instance_of_Button_Size____Large_017ca275efe1e892b582 = db.assignTag('017ca275efe1e892b582');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Components_017c78c7a7b6795d5151         = '017c78c7a7b6795d5151';
const _Core_100000000000000000df               = '100000000000000000df';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Enums____Button_Enums_017c9dc58038c20a1d33
db.newInstance(_instance_of_Enums____Button_Enums_017c9dc58038c20a1d33, _Enums_017a7a9ff057958e5678)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Button Enums',
        'v'                                     :1
    })
.done();
db.setRootInstanceTag(_instance_of_Enums____Button_Enums_017c9dc58038c20a1d33);
// :_instance_of_EnumDef_model____Button_Variant_017c9e4064a3bb9c90b5
db.newModel(_instance_of_EnumDef_model____Button_Variant_017c9e4064a3bb9c90b5)
    .setModelTag(_EnumDef_017a768f966fc08ebb98) // tag of the model
    .setParentTag(_Enum_016cdd861b32d56c81f7) // tag of model's parent (if any; null else)
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enums____Button_Enums_017c9dc58038c20a1d33)
    // Tag of parent goos
    .addParentGoo(_instance_of_Enums____Button_Enums_017c9dc58038c20a1d33)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Button Variant',
        'v'                                     :1
    })
    .done();
// :_instance_of_Button_Variant____Text_017c9e4074e43df7843b
db.newInstance(_instance_of_Button_Variant____Text_017c9e4074e43df7843b)
    .setModelTag(_instance_of_EnumDef_model____Button_Variant_017c9e4064a3bb9c90b5) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Button_Variant_017c9e4064a3bb9c90b5)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :0,
        [_Object_name_ff023000000000000011]     :'Text',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'text',
        'v'                                     :1
    })
    .done();
// :_instance_of_Button_Variant____Contained_017c9e408c6a4655de4a
db.newInstance(_instance_of_Button_Variant____Contained_017c9e408c6a4655de4a)
    .setModelTag(_instance_of_EnumDef_model____Button_Variant_017c9e4064a3bb9c90b5) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Button_Variant_017c9e4064a3bb9c90b5)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :1,
        [_Object_name_ff023000000000000011]     :'Contained',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'contained',
        'v'                                     :1
    })
    .done();
// :_instance_of_Button_Variant____Outlined_017c9e40aa05acf15264
db.newInstance(_instance_of_Button_Variant____Outlined_017c9e40aa05acf15264)
    .setModelTag(_instance_of_EnumDef_model____Button_Variant_017c9e4064a3bb9c90b5) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Button_Variant_017c9e4064a3bb9c90b5)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :2,
        [_Object_name_ff023000000000000011]     :'Outlined',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'outlined',
        'v'                                     :1
    })
    .done();
// :_instance_of_EnumDef_model____Button_Size_017ca275d74f92ebe3f3
db.newModel(_instance_of_EnumDef_model____Button_Size_017ca275d74f92ebe3f3)
    .setModelTag(_EnumDef_017a768f966fc08ebb98) // tag of the model
    .setParentTag(_Enum_016cdd861b32d56c81f7) // tag of model's parent (if any; null else)
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enums____Button_Enums_017c9dc58038c20a1d33)
    // Tag of parent goos
    .addParentGoo(_instance_of_Enums____Button_Enums_017c9dc58038c20a1d33)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Button Size',
        'v'                                     :1
    })
    .done();
// :_instance_of_Button_Size____Small_017ca275eea400599449
db.newInstance(_instance_of_Button_Size____Small_017ca275eea400599449)
    .setModelTag(_instance_of_EnumDef_model____Button_Size_017ca275d74f92ebe3f3) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Button_Size_017ca275d74f92ebe3f3)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :0,
        [_Object_name_ff023000000000000011]     :'Small',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'small',
        'v'                                     :1
    })
    .done();
// :_instance_of_Button_Size____Medium_017ca275ef402c730dd9
db.newInstance(_instance_of_Button_Size____Medium_017ca275ef402c730dd9)
    .setModelTag(_instance_of_EnumDef_model____Button_Size_017ca275d74f92ebe3f3) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Button_Size_017ca275d74f92ebe3f3)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :1,
        [_Object_name_ff023000000000000011]     :'Medium',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'medium',
        'v'                                     :1
    })
    .done();
// :_instance_of_Button_Size____Large_017ca275efe1e892b582
db.newInstance(_instance_of_Button_Size____Large_017ca275efe1e892b582)
    .setModelTag(_instance_of_EnumDef_model____Button_Size_017ca275d74f92ebe3f3) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Button_Size_017ca275d74f92ebe3f3)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :2,
        [_Object_name_ff023000000000000011]     :'Large',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'large',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Enums____Button_Enums_017c9dc58038c20a1d33, _Folder_itemRel_016a697ef00ce7554692              , _instance_of_EnumDef_model____Button_Variant_017c9e4064a3bb9c90b5);
db.assign(_instance_of_Enums____Button_Enums_017c9dc58038c20a1d33, _Folder_itemRel_016a697ef00ce7554692              , _instance_of_EnumDef_model____Button_Size_017ca275d74f92ebe3f3);
db.assign(_instance_of_Enums____Button_Enums_017c9dc58038c20a1d33, _Object_containsRel_ff02200000000000000f          , _instance_of_EnumDef_model____Button_Variant_017c9e4064a3bb9c90b5);
db.assign(_instance_of_Enums____Button_Enums_017c9dc58038c20a1d33, _Object_containsRel_ff02200000000000000f          , _instance_of_EnumDef_model____Button_Size_017ca275d74f92ebe3f3);
db.assign(_instance_of_EnumDef_model____Button_Variant_017c9e4064a3bb9c90b5, _Object_containsRel_ff02200000000000000f          , _instance_of_Button_Variant____Text_017c9e4074e43df7843b);
db.assign(_instance_of_EnumDef_model____Button_Variant_017c9e4064a3bb9c90b5, _Object_containsRel_ff02200000000000000f          , _instance_of_Button_Variant____Contained_017c9e408c6a4655de4a);
db.assign(_instance_of_EnumDef_model____Button_Variant_017c9e4064a3bb9c90b5, _Object_containsRel_ff02200000000000000f          , _instance_of_Button_Variant____Outlined_017c9e40aa05acf15264);
db.assign(_instance_of_EnumDef_model____Button_Size_017ca275d74f92ebe3f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Button_Size____Small_017ca275eea400599449);
db.assign(_instance_of_EnumDef_model____Button_Size_017ca275d74f92ebe3f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Button_Size____Medium_017ca275ef402c730dd9);
db.assign(_instance_of_EnumDef_model____Button_Size_017ca275d74f92ebe3f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Button_Size____Large_017ca275efe1e892b582);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_EnumDef_model____Button_Variant_017c9e4064a3bb9c90b5);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Button_Variant____Text_017c9e4074e43df7843b);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Button_Variant____Contained_017c9e408c6a4655de4a);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Button_Variant____Outlined_017c9e40aa05acf15264);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_EnumDef_model____Button_Size_017ca275d74f92ebe3f3);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Button_Size____Small_017ca275eea400599449);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Button_Size____Medium_017ca275ef402c730dd9);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Button_Size____Large_017ca275efe1e892b582);
db.assignOptional(_instance_of_Enums____Button_Enums_017c9dc58038c20a1d33, _Object_gooRel_ff022000000000000003, _Components_017c78c7a7b6795d5151);
db.assignOptional(_instance_of_Enums____Button_Enums_017c9dc58038c20a1d33, _GOO_parentGooRel_ff02200000000000000u, _Components_017c78c7a7b6795d5151);
db.assignOptional(_Components_017c78c7a7b6795d5151, _Object_containsRel_ff02200000000000000f, _instance_of_Enums____Button_Enums_017c9dc58038c20a1d33);
db.assignOptional(_Components_017c78c7a7b6795d5151, _Folder_subFolderRel_016a697ef00ce7554691, _instance_of_Enums____Button_Enums_017c9dc58038c20a1d33);
