
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
const _instance_of_Enums____Label_Enums_017c78ce9684bd3e4748 = db.assignTag('017c78ce9684bd3e4748');
const _instance_of_EnumDef_model____Label_Horizontal_Align_017c78cf4764e4107e17 = db.assignTag('017c78cf4764e4107e17');
const _instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935 = db.assignTag('017c78cf49003551c935');
const _instance_of_Label_Horizontal_Align____Left_017c78d0b0932d8a3c8e = db.assignTag('017c78d0b0932d8a3c8e');
const _instance_of_Label_Horizontal_Align____Center_017c78d0b168357be187 = db.assignTag('017c78d0b168357be187');
const _instance_of_Label_Horizontal_Align____Right_017c78d0b36cac5f9d87 = db.assignTag('017c78d0b36cac5f9d87');
const _instance_of_Label_Horizontal_Align____Justify_017c78d0b7e4aed02c39 = db.assignTag('017c78d0b7e4aed02c39');
const _instance_of_Label_Text_Variant____Heading_1_017c78d19a329a0a1aad = db.assignTag('017c78d19a329a0a1aad');
const _instance_of_Label_Text_Variant____Heading_2_017c78d1d9296560e2da = db.assignTag('017c78d1d9296560e2da');
const _instance_of_Label_Text_Variant____Heading_3_017c78d1da01acc2ef63 = db.assignTag('017c78d1da01acc2ef63');
const _instance_of_Label_Text_Variant____Heading_4_017c78d1daadc5402234 = db.assignTag('017c78d1daadc5402234');
const _instance_of_Label_Text_Variant____Heading_5_017c78d1db52c41e07ca = db.assignTag('017c78d1db52c41e07ca');
const _instance_of_Label_Text_Variant____Heading_6_017c78d1dbf7f79b9bc9 = db.assignTag('017c78d1dbf7f79b9bc9');
const _instance_of_Label_Text_Variant____Subtitle_1_017c78d1dc9000052ef2 = db.assignTag('017c78d1dc9000052ef2');
const _instance_of_Label_Text_Variant____Subtitle_2_017c78d1dd53004e6d9d = db.assignTag('017c78d1dd53004e6d9d');
const _instance_of_Label_Text_Variant____Overline_017c78d1de0173df1ada = db.assignTag('017c78d1de0173df1ada');
const _instance_of_Label_Text_Variant____Caption_017c78d2ff6d2ac8889e = db.assignTag('017c78d2ff6d2ac8889e');
const _instance_of_Label_Text_Variant____Button_017c78d300160c174135 = db.assignTag('017c78d300160c174135');
const _instance_of_Label_Text_Variant____Body_1_017c78d300baf1d953c8 = db.assignTag('017c78d300baf1d953c8');
const _instance_of_Label_Text_Variant____Body_2_017c78d301558e11b400 = db.assignTag('017c78d301558e11b400');
const _instance_of_EnumDef_model____Label_Vertical_Align_017cbca5a0f3e532731a = db.assignTag('017cbca5a0f3e532731a');
const _instance_of_Label_Vertical_Align____Top_017cbca5db50c50f029b = db.assignTag('017cbca5db50c50f029b');
const _instance_of_Label_Vertical_Align____Center_017cbca5dbd928e7c0d5 = db.assignTag('017cbca5dbd928e7c0d5');
const _instance_of_Label_Vertical_Align____Bottom_017cbca5dca0c967823b = db.assignTag('017cbca5dca0c967823b');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Components_017c78c7a7b6795d5151         = '017c78c7a7b6795d5151';
const _Core_100000000000000000df               = '100000000000000000df';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Enums____Label_Enums_017c78ce9684bd3e4748
db.newInstance(_instance_of_Enums____Label_Enums_017c78ce9684bd3e4748, _Enums_017a7a9ff057958e5678)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Label Enums',
        'v'                                     :1
    })
.done();
db.setRootInstanceTag(_instance_of_Enums____Label_Enums_017c78ce9684bd3e4748);
// :_instance_of_EnumDef_model____Label_Horizontal_Align_017c78cf4764e4107e17
db.newModel(_instance_of_EnumDef_model____Label_Horizontal_Align_017c78cf4764e4107e17)
    .setModelTag(_EnumDef_017a768f966fc08ebb98) // tag of the model
    .setParentTag(_Enum_016cdd861b32d56c81f7) // tag of model's parent (if any; null else)
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enums____Label_Enums_017c78ce9684bd3e4748)
    // Tag of parent goos
    .addParentGoo(_instance_of_Enums____Label_Enums_017c78ce9684bd3e4748)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Label Horizontal Align',
        'v'                                     :1
    })
    .done();
// :_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935
db.newModel(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935)
    .setModelTag(_EnumDef_017a768f966fc08ebb98) // tag of the model
    .setParentTag(_Enum_016cdd861b32d56c81f7) // tag of model's parent (if any; null else)
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enums____Label_Enums_017c78ce9684bd3e4748)
    // Tag of parent goos
    .addParentGoo(_instance_of_Enums____Label_Enums_017c78ce9684bd3e4748)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Label Text Variant',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Horizontal_Align____Left_017c78d0b0932d8a3c8e
db.newInstance(_instance_of_Label_Horizontal_Align____Left_017c78d0b0932d8a3c8e)
    .setModelTag(_instance_of_EnumDef_model____Label_Horizontal_Align_017c78cf4764e4107e17) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Horizontal_Align_017c78cf4764e4107e17)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :0,
        [_Object_name_ff023000000000000011]     :'Left',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'left',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Horizontal_Align____Center_017c78d0b168357be187
db.newInstance(_instance_of_Label_Horizontal_Align____Center_017c78d0b168357be187)
    .setModelTag(_instance_of_EnumDef_model____Label_Horizontal_Align_017c78cf4764e4107e17) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Horizontal_Align_017c78cf4764e4107e17)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :1,
        [_Object_name_ff023000000000000011]     :'Center',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'center',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Horizontal_Align____Right_017c78d0b36cac5f9d87
db.newInstance(_instance_of_Label_Horizontal_Align____Right_017c78d0b36cac5f9d87)
    .setModelTag(_instance_of_EnumDef_model____Label_Horizontal_Align_017c78cf4764e4107e17) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Horizontal_Align_017c78cf4764e4107e17)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :2,
        [_Object_name_ff023000000000000011]     :'Right',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'right',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Horizontal_Align____Justify_017c78d0b7e4aed02c39
db.newInstance(_instance_of_Label_Horizontal_Align____Justify_017c78d0b7e4aed02c39)
    .setModelTag(_instance_of_EnumDef_model____Label_Horizontal_Align_017c78cf4764e4107e17) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Horizontal_Align_017c78cf4764e4107e17)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :3,
        [_Object_name_ff023000000000000011]     :'Justify',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'justify',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Text_Variant____Heading_1_017c78d19a329a0a1aad
db.newInstance(_instance_of_Label_Text_Variant____Heading_1_017c78d19a329a0a1aad)
    .setModelTag(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :7,
        [_Object_name_ff023000000000000011]     :'Heading 1',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'h1',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Text_Variant____Heading_2_017c78d1d9296560e2da
db.newInstance(_instance_of_Label_Text_Variant____Heading_2_017c78d1d9296560e2da)
    .setModelTag(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :8,
        [_Object_name_ff023000000000000011]     :'Heading 2',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'h2',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Text_Variant____Heading_3_017c78d1da01acc2ef63
db.newInstance(_instance_of_Label_Text_Variant____Heading_3_017c78d1da01acc2ef63)
    .setModelTag(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :9,
        [_Object_name_ff023000000000000011]     :'Heading 3',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'h3',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Text_Variant____Heading_4_017c78d1daadc5402234
db.newInstance(_instance_of_Label_Text_Variant____Heading_4_017c78d1daadc5402234)
    .setModelTag(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :10,
        [_Object_name_ff023000000000000011]     :'Heading 4',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'h4',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Text_Variant____Heading_5_017c78d1db52c41e07ca
db.newInstance(_instance_of_Label_Text_Variant____Heading_5_017c78d1db52c41e07ca)
    .setModelTag(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :11,
        [_Object_name_ff023000000000000011]     :'Heading 5',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'h5',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Text_Variant____Heading_6_017c78d1dbf7f79b9bc9
db.newInstance(_instance_of_Label_Text_Variant____Heading_6_017c78d1dbf7f79b9bc9)
    .setModelTag(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :12,
        [_Object_name_ff023000000000000011]     :'Heading 6',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'h6',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Text_Variant____Subtitle_1_017c78d1dc9000052ef2
db.newInstance(_instance_of_Label_Text_Variant____Subtitle_1_017c78d1dc9000052ef2)
    .setModelTag(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :5,
        [_Object_name_ff023000000000000011]     :'Subtitle 1',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'subtitle1',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Text_Variant____Subtitle_2_017c78d1dd53004e6d9d
db.newInstance(_instance_of_Label_Text_Variant____Subtitle_2_017c78d1dd53004e6d9d)
    .setModelTag(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :6,
        [_Object_name_ff023000000000000011]     :'Subtitle 2',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'subtitle2',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Text_Variant____Overline_017c78d1de0173df1ada
db.newInstance(_instance_of_Label_Text_Variant____Overline_017c78d1de0173df1ada)
    .setModelTag(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :4,
        [_Object_name_ff023000000000000011]     :'Overline',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'overline',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Text_Variant____Caption_017c78d2ff6d2ac8889e
db.newInstance(_instance_of_Label_Text_Variant____Caption_017c78d2ff6d2ac8889e)
    .setModelTag(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :3,
        [_Object_name_ff023000000000000011]     :'Caption',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'caption',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Text_Variant____Button_017c78d300160c174135
db.newInstance(_instance_of_Label_Text_Variant____Button_017c78d300160c174135)
    .setModelTag(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :2,
        [_Object_name_ff023000000000000011]     :'Button',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'button',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Text_Variant____Body_1_017c78d300baf1d953c8
db.newInstance(_instance_of_Label_Text_Variant____Body_1_017c78d300baf1d953c8)
    .setModelTag(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :0,
        [_Object_name_ff023000000000000011]     :'Body 1',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'body1',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Text_Variant____Body_2_017c78d301558e11b400
db.newInstance(_instance_of_Label_Text_Variant____Body_2_017c78d301558e11b400)
    .setModelTag(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :1,
        [_Object_name_ff023000000000000011]     :'Body 2',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'body2',
        'v'                                     :1
    })
    .done();
// :_instance_of_EnumDef_model____Label_Vertical_Align_017cbca5a0f3e532731a
db.newModel(_instance_of_EnumDef_model____Label_Vertical_Align_017cbca5a0f3e532731a)
    .setModelTag(_EnumDef_017a768f966fc08ebb98) // tag of the model
    .setParentTag(_Enum_016cdd861b32d56c81f7) // tag of model's parent (if any; null else)
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enums____Label_Enums_017c78ce9684bd3e4748)
    // Tag of parent goos
    .addParentGoo(_instance_of_Enums____Label_Enums_017c78ce9684bd3e4748)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Label Vertical Align',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Vertical_Align____Top_017cbca5db50c50f029b
db.newInstance(_instance_of_Label_Vertical_Align____Top_017cbca5db50c50f029b)
    .setModelTag(_instance_of_EnumDef_model____Label_Vertical_Align_017cbca5a0f3e532731a) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Vertical_Align_017cbca5a0f3e532731a)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :0,
        [_Object_name_ff023000000000000011]     :'Top',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'flex-start',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Vertical_Align____Center_017cbca5dbd928e7c0d5
db.newInstance(_instance_of_Label_Vertical_Align____Center_017cbca5dbd928e7c0d5)
    .setModelTag(_instance_of_EnumDef_model____Label_Vertical_Align_017cbca5a0f3e532731a) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Vertical_Align_017cbca5a0f3e532731a)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :1,
        [_Object_name_ff023000000000000011]     :'Center',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'center',
        'v'                                     :1
    })
    .done();
// :_instance_of_Label_Vertical_Align____Bottom_017cbca5dca0c967823b
db.newInstance(_instance_of_Label_Vertical_Align____Bottom_017cbca5dca0c967823b)
    .setModelTag(_instance_of_EnumDef_model____Label_Vertical_Align_017cbca5a0f3e532731a) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Label_Vertical_Align_017cbca5a0f3e532731a)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :2,
        [_Object_name_ff023000000000000011]     :'Bottom',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'flex-end',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Enums____Label_Enums_017c78ce9684bd3e4748, _Folder_itemRel_016a697ef00ce7554692              , _instance_of_EnumDef_model____Label_Horizontal_Align_017c78cf4764e4107e17);
db.assign(_instance_of_Enums____Label_Enums_017c78ce9684bd3e4748, _Folder_itemRel_016a697ef00ce7554692              , _instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935);
db.assign(_instance_of_Enums____Label_Enums_017c78ce9684bd3e4748, _Folder_itemRel_016a697ef00ce7554692              , _instance_of_EnumDef_model____Label_Vertical_Align_017cbca5a0f3e532731a);
db.assign(_instance_of_Enums____Label_Enums_017c78ce9684bd3e4748, _Object_containsRel_ff02200000000000000f          , _instance_of_EnumDef_model____Label_Horizontal_Align_017c78cf4764e4107e17);
db.assign(_instance_of_Enums____Label_Enums_017c78ce9684bd3e4748, _Object_containsRel_ff02200000000000000f          , _instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935);
db.assign(_instance_of_Enums____Label_Enums_017c78ce9684bd3e4748, _Object_containsRel_ff02200000000000000f          , _instance_of_EnumDef_model____Label_Vertical_Align_017cbca5a0f3e532731a);
db.assign(_instance_of_EnumDef_model____Label_Horizontal_Align_017c78cf4764e4107e17, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Horizontal_Align____Left_017c78d0b0932d8a3c8e);
db.assign(_instance_of_EnumDef_model____Label_Horizontal_Align_017c78cf4764e4107e17, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Horizontal_Align____Center_017c78d0b168357be187);
db.assign(_instance_of_EnumDef_model____Label_Horizontal_Align_017c78cf4764e4107e17, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Horizontal_Align____Right_017c78d0b36cac5f9d87);
db.assign(_instance_of_EnumDef_model____Label_Horizontal_Align_017c78cf4764e4107e17, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Horizontal_Align____Justify_017c78d0b7e4aed02c39);
db.assign(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Text_Variant____Heading_1_017c78d19a329a0a1aad);
db.assign(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Text_Variant____Heading_2_017c78d1d9296560e2da);
db.assign(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Text_Variant____Heading_3_017c78d1da01acc2ef63);
db.assign(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Text_Variant____Heading_4_017c78d1daadc5402234);
db.assign(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Text_Variant____Heading_5_017c78d1db52c41e07ca);
db.assign(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Text_Variant____Heading_6_017c78d1dbf7f79b9bc9);
db.assign(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Text_Variant____Subtitle_1_017c78d1dc9000052ef2);
db.assign(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Text_Variant____Subtitle_2_017c78d1dd53004e6d9d);
db.assign(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Text_Variant____Overline_017c78d1de0173df1ada);
db.assign(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Text_Variant____Caption_017c78d2ff6d2ac8889e);
db.assign(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Text_Variant____Button_017c78d300160c174135);
db.assign(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Text_Variant____Body_1_017c78d300baf1d953c8);
db.assign(_instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Text_Variant____Body_2_017c78d301558e11b400);
db.assign(_instance_of_EnumDef_model____Label_Vertical_Align_017cbca5a0f3e532731a, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Vertical_Align____Top_017cbca5db50c50f029b);
db.assign(_instance_of_EnumDef_model____Label_Vertical_Align_017cbca5a0f3e532731a, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Vertical_Align____Center_017cbca5dbd928e7c0d5);
db.assign(_instance_of_EnumDef_model____Label_Vertical_Align_017cbca5a0f3e532731a, _Object_containsRel_ff02200000000000000f          , _instance_of_Label_Vertical_Align____Bottom_017cbca5dca0c967823b);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_EnumDef_model____Label_Horizontal_Align_017c78cf4764e4107e17);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_EnumDef_model____Label_Text_Variant_017c78cf49003551c935);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Horizontal_Align____Left_017c78d0b0932d8a3c8e);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Horizontal_Align____Center_017c78d0b168357be187);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Horizontal_Align____Right_017c78d0b36cac5f9d87);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Horizontal_Align____Justify_017c78d0b7e4aed02c39);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Text_Variant____Heading_1_017c78d19a329a0a1aad);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Text_Variant____Heading_2_017c78d1d9296560e2da);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Text_Variant____Heading_3_017c78d1da01acc2ef63);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Text_Variant____Heading_4_017c78d1daadc5402234);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Text_Variant____Heading_5_017c78d1db52c41e07ca);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Text_Variant____Heading_6_017c78d1dbf7f79b9bc9);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Text_Variant____Subtitle_1_017c78d1dc9000052ef2);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Text_Variant____Subtitle_2_017c78d1dd53004e6d9d);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Text_Variant____Overline_017c78d1de0173df1ada);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Text_Variant____Caption_017c78d2ff6d2ac8889e);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Text_Variant____Button_017c78d300160c174135);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Text_Variant____Body_1_017c78d300baf1d953c8);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Text_Variant____Body_2_017c78d301558e11b400);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_EnumDef_model____Label_Vertical_Align_017cbca5a0f3e532731a);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Vertical_Align____Top_017cbca5db50c50f029b);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Vertical_Align____Center_017cbca5dbd928e7c0d5);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Label_Vertical_Align____Bottom_017cbca5dca0c967823b);
db.assignOptional(_instance_of_Enums____Label_Enums_017c78ce9684bd3e4748, _Object_gooRel_ff022000000000000003, _Components_017c78c7a7b6795d5151);
db.assignOptional(_instance_of_Enums____Label_Enums_017c78ce9684bd3e4748, _GOO_parentGooRel_ff02200000000000000u, _Components_017c78c7a7b6795d5151);
db.assignOptional(_Components_017c78c7a7b6795d5151, _Object_containsRel_ff02200000000000000f, _instance_of_Enums____Label_Enums_017c78ce9684bd3e4748);
db.assignOptional(_Components_017c78c7a7b6795d5151, _Folder_subFolderRel_016a697ef00ce7554691, _instance_of_Enums____Label_Enums_017c78ce9684bd3e4748);
