
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Enum_017a768f966fc08ebb98               = '017a768f966fc08ebb98';
const _Enums_017a7a9ff057958e5678              = '017a7a9ff057958e5678';
const _EnumValue_016cdd861b32d56c81f7          = '016cdd861b32d56c81f7';


// Definition of tags of defined properties
const _EnumValue_Rank_017a7690c915975ea995          = '017a7690c915975ea995';
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
const _instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319 = db.assignTag('017c9d0cb77f74046319');
const _instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe = db.assignTag('017c9d0cd6eab1da2bfe');
const _instance_of_Text_Field_Type____Color_017c9d0d9ae7b81b44c6 = db.assignTag('017c9d0d9ae7b81b44c6');
const _instance_of_Text_Field_Type____Date_017c9d0d9b754e202d30 = db.assignTag('017c9d0d9b754e202d30');
const _instance_of_Text_Field_Type____Email_017c9d0d9c1678b64385 = db.assignTag('017c9d0d9c1678b64385');
const _instance_of_Text_Field_Type____Number_017c9d0d9cace4015bb9 = db.assignTag('017c9d0d9cace4015bb9');
const _instance_of_Text_Field_Type____Password_017c9d0d9d39dd8ef17f = db.assignTag('017c9d0d9d39dd8ef17f');
const _instance_of_Text_Field_Type____Text_017c9d0d9dccbdf58a93 = db.assignTag('017c9d0d9dccbdf58a93');
const _instance_of_Text_Field_Type____Date_$_43_$_Time_017c9d0fbe2fbd5326ae = db.assignTag('017c9d0fbe2fbd5326ae');
const _instance_of_Enum_model____Text_Field_Variant_017c9d10839273f0e9b7 = db.assignTag('017c9d10839273f0e9b7');
const _instance_of_Text_Field_Variant____Filled_017c9d10a8f1cf9c534c = db.assignTag('017c9d10a8f1cf9c534c');
const _instance_of_Text_Field_Variant____Outlined_017c9d10a98e7abecf16 = db.assignTag('017c9d10a98e7abecf16');
const _instance_of_Text_Field_Variant____Standard_017c9d10aa3222c75c3d = db.assignTag('017c9d10aa3222c75c3d');
const _instance_of_Enum_model____Text_Field_Size_017c9d7d3fe7368823c9 = db.assignTag('017c9d7d3fe7368823c9');
const _instance_of_Text_Field_Size____Medium_017c9d7d6230184b7e50 = db.assignTag('017c9d7d6230184b7e50');
const _instance_of_Text_Field_Size____Small_017c9d7d62f26cb05914 = db.assignTag('017c9d7d62f26cb05914');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Components_017c78c7a7b6795d5151         = '017c78c7a7b6795d5151';
const _Core_100000000000000000df               = '100000000000000000df';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319
db.newInstance(_instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319, _Enums_017a7a9ff057958e5678)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Text Field Enums',
        'v'                                     :1
    })
.done();
db.setRootInstanceTag(_instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319);
// :_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe
db.newModel(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe)
    .setModelTag(_Enum_017a768f966fc08ebb98) // tag of the model
    .setParentTag(_EnumValue_016cdd861b32d56c81f7) // tag of model's parent (if any; null else)
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319)
    // Tag of parent goos
    .addParentGoo(_instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Text Field Type',
        'v'                                     :1
    })
    .done();
// :_instance_of_Text_Field_Type____Color_017c9d0d9ae7b81b44c6
db.newInstance(_instance_of_Text_Field_Type____Color_017c9d0d9ae7b81b44c6)
    .setModelTag(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe)
    .setNameOrProperties({
        [_EnumValue_Rank_017a7690c915975ea995]  :6,
        [_Object_name_ff023000000000000011]     :'Color',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'color',
        'v'                                     :1
    })
    .done();
// :_instance_of_Text_Field_Type____Date_017c9d0d9b754e202d30
db.newInstance(_instance_of_Text_Field_Type____Date_017c9d0d9b754e202d30)
    .setModelTag(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe)
    .setNameOrProperties({
        [_EnumValue_Rank_017a7690c915975ea995]  :4,
        [_Object_name_ff023000000000000011]     :'Date',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'date',
        'v'                                     :1
    })
    .done();
// :_instance_of_Text_Field_Type____Email_017c9d0d9c1678b64385
db.newInstance(_instance_of_Text_Field_Type____Email_017c9d0d9c1678b64385)
    .setModelTag(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe)
    .setNameOrProperties({
        [_EnumValue_Rank_017a7690c915975ea995]  :2,
        [_Object_name_ff023000000000000011]     :'Email',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'email',
        'v'                                     :1
    })
    .done();
// :_instance_of_Text_Field_Type____Number_017c9d0d9cace4015bb9
db.newInstance(_instance_of_Text_Field_Type____Number_017c9d0d9cace4015bb9)
    .setModelTag(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe)
    .setNameOrProperties({
        [_EnumValue_Rank_017a7690c915975ea995]  :1,
        [_Object_name_ff023000000000000011]     :'Number',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'number',
        'v'                                     :1
    })
    .done();
// :_instance_of_Text_Field_Type____Password_017c9d0d9d39dd8ef17f
db.newInstance(_instance_of_Text_Field_Type____Password_017c9d0d9d39dd8ef17f)
    .setModelTag(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe)
    .setNameOrProperties({
        [_EnumValue_Rank_017a7690c915975ea995]  :3,
        [_Object_name_ff023000000000000011]     :'Password',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'password',
        'v'                                     :1
    })
    .done();
// :_instance_of_Text_Field_Type____Text_017c9d0d9dccbdf58a93
db.newInstance(_instance_of_Text_Field_Type____Text_017c9d0d9dccbdf58a93)
    .setModelTag(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe)
    .setNameOrProperties({
        [_EnumValue_Rank_017a7690c915975ea995]  :0,
        [_Object_name_ff023000000000000011]     :'Text',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'text',
        'v'                                     :1
    })
    .done();
// :_instance_of_Text_Field_Type____Date_$_43_$_Time_017c9d0fbe2fbd5326ae
db.newInstance(_instance_of_Text_Field_Type____Date_$_43_$_Time_017c9d0fbe2fbd5326ae)
    .setModelTag(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe)
    .setNameOrProperties({
        [_EnumValue_Rank_017a7690c915975ea995]  :5,
        [_Object_name_ff023000000000000011]     :'Date + Time',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'datetime-local',
        'v'                                     :1
    })
    .done();
// :_instance_of_Enum_model____Text_Field_Variant_017c9d10839273f0e9b7
db.newModel(_instance_of_Enum_model____Text_Field_Variant_017c9d10839273f0e9b7)
    .setModelTag(_Enum_017a768f966fc08ebb98) // tag of the model
    .setParentTag(_EnumValue_016cdd861b32d56c81f7) // tag of model's parent (if any; null else)
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319)
    // Tag of parent goos
    .addParentGoo(_instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Text Field Variant',
        'v'                                     :1
    })
    .done();
// :_instance_of_Text_Field_Variant____Filled_017c9d10a8f1cf9c534c
db.newInstance(_instance_of_Text_Field_Variant____Filled_017c9d10a8f1cf9c534c)
    .setModelTag(_instance_of_Enum_model____Text_Field_Variant_017c9d10839273f0e9b7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enum_model____Text_Field_Variant_017c9d10839273f0e9b7)
    .setNameOrProperties({
        [_EnumValue_Rank_017a7690c915975ea995]  :0,
        [_Object_name_ff023000000000000011]     :'Filled',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'filled',
        'v'                                     :1
    })
    .done();
// :_instance_of_Text_Field_Variant____Outlined_017c9d10a98e7abecf16
db.newInstance(_instance_of_Text_Field_Variant____Outlined_017c9d10a98e7abecf16)
    .setModelTag(_instance_of_Enum_model____Text_Field_Variant_017c9d10839273f0e9b7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enum_model____Text_Field_Variant_017c9d10839273f0e9b7)
    .setNameOrProperties({
        [_EnumValue_Rank_017a7690c915975ea995]  :1,
        [_Object_name_ff023000000000000011]     :'Outlined',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'outlined',
        'v'                                     :1
    })
    .done();
// :_instance_of_Text_Field_Variant____Standard_017c9d10aa3222c75c3d
db.newInstance(_instance_of_Text_Field_Variant____Standard_017c9d10aa3222c75c3d)
    .setModelTag(_instance_of_Enum_model____Text_Field_Variant_017c9d10839273f0e9b7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enum_model____Text_Field_Variant_017c9d10839273f0e9b7)
    .setNameOrProperties({
        [_EnumValue_Rank_017a7690c915975ea995]  :2,
        [_Object_name_ff023000000000000011]     :'Standard',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'standard',
        'v'                                     :1
    })
    .done();
// :_instance_of_Enum_model____Text_Field_Size_017c9d7d3fe7368823c9
db.newModel(_instance_of_Enum_model____Text_Field_Size_017c9d7d3fe7368823c9)
    .setModelTag(_Enum_017a768f966fc08ebb98) // tag of the model
    .setParentTag(_EnumValue_016cdd861b32d56c81f7) // tag of model's parent (if any; null else)
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319)
    // Tag of parent goos
    .addParentGoo(_instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Text Field Size',
        'v'                                     :1
    })
    .done();
// :_instance_of_Text_Field_Size____Medium_017c9d7d6230184b7e50
db.newInstance(_instance_of_Text_Field_Size____Medium_017c9d7d6230184b7e50)
    .setModelTag(_instance_of_Enum_model____Text_Field_Size_017c9d7d3fe7368823c9) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enum_model____Text_Field_Size_017c9d7d3fe7368823c9)
    .setNameOrProperties({
        [_EnumValue_Rank_017a7690c915975ea995]  :0,
        [_Object_name_ff023000000000000011]     :'Medium',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'medium',
        'v'                                     :1
    })
    .done();
// :_instance_of_Text_Field_Size____Small_017c9d7d62f26cb05914
db.newInstance(_instance_of_Text_Field_Size____Small_017c9d7d62f26cb05914)
    .setModelTag(_instance_of_Enum_model____Text_Field_Size_017c9d7d3fe7368823c9) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enum_model____Text_Field_Size_017c9d7d3fe7368823c9)
    .setNameOrProperties({
        [_EnumValue_Rank_017a7690c915975ea995]  :1,
        [_Object_name_ff023000000000000011]     :'Small',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'small',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319, _Folder_itemRel_016a697ef00ce7554692              , _instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe);
db.assign(_instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319, _Folder_itemRel_016a697ef00ce7554692              , _instance_of_Enum_model____Text_Field_Variant_017c9d10839273f0e9b7);
db.assign(_instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319, _Folder_itemRel_016a697ef00ce7554692              , _instance_of_Enum_model____Text_Field_Size_017c9d7d3fe7368823c9);
db.assign(_instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319, _Object_containsRel_ff02200000000000000f          , _instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe);
db.assign(_instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319, _Object_containsRel_ff02200000000000000f          , _instance_of_Enum_model____Text_Field_Variant_017c9d10839273f0e9b7);
db.assign(_instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319, _Object_containsRel_ff02200000000000000f          , _instance_of_Enum_model____Text_Field_Size_017c9d7d3fe7368823c9);
db.assign(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe, _Object_containsRel_ff02200000000000000f          , _instance_of_Text_Field_Type____Color_017c9d0d9ae7b81b44c6);
db.assign(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe, _Object_containsRel_ff02200000000000000f          , _instance_of_Text_Field_Type____Date_017c9d0d9b754e202d30);
db.assign(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe, _Object_containsRel_ff02200000000000000f          , _instance_of_Text_Field_Type____Email_017c9d0d9c1678b64385);
db.assign(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe, _Object_containsRel_ff02200000000000000f          , _instance_of_Text_Field_Type____Number_017c9d0d9cace4015bb9);
db.assign(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe, _Object_containsRel_ff02200000000000000f          , _instance_of_Text_Field_Type____Password_017c9d0d9d39dd8ef17f);
db.assign(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe, _Object_containsRel_ff02200000000000000f          , _instance_of_Text_Field_Type____Text_017c9d0d9dccbdf58a93);
db.assign(_instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe, _Object_containsRel_ff02200000000000000f          , _instance_of_Text_Field_Type____Date_$_43_$_Time_017c9d0fbe2fbd5326ae);
db.assign(_instance_of_Enum_model____Text_Field_Variant_017c9d10839273f0e9b7, _Object_containsRel_ff02200000000000000f          , _instance_of_Text_Field_Variant____Filled_017c9d10a8f1cf9c534c);
db.assign(_instance_of_Enum_model____Text_Field_Variant_017c9d10839273f0e9b7, _Object_containsRel_ff02200000000000000f          , _instance_of_Text_Field_Variant____Outlined_017c9d10a98e7abecf16);
db.assign(_instance_of_Enum_model____Text_Field_Variant_017c9d10839273f0e9b7, _Object_containsRel_ff02200000000000000f          , _instance_of_Text_Field_Variant____Standard_017c9d10aa3222c75c3d);
db.assign(_instance_of_Enum_model____Text_Field_Size_017c9d7d3fe7368823c9, _Object_containsRel_ff02200000000000000f          , _instance_of_Text_Field_Size____Medium_017c9d7d6230184b7e50);
db.assign(_instance_of_Enum_model____Text_Field_Size_017c9d7d3fe7368823c9, _Object_containsRel_ff02200000000000000f          , _instance_of_Text_Field_Size____Small_017c9d7d62f26cb05914);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Enum_model____Text_Field_Type_017c9d0cd6eab1da2bfe);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Text_Field_Type____Color_017c9d0d9ae7b81b44c6);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Text_Field_Type____Date_017c9d0d9b754e202d30);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Text_Field_Type____Email_017c9d0d9c1678b64385);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Text_Field_Type____Number_017c9d0d9cace4015bb9);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Text_Field_Type____Password_017c9d0d9d39dd8ef17f);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Text_Field_Type____Text_017c9d0d9dccbdf58a93);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Text_Field_Type____Date_$_43_$_Time_017c9d0fbe2fbd5326ae);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Enum_model____Text_Field_Variant_017c9d10839273f0e9b7);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Text_Field_Variant____Filled_017c9d10a8f1cf9c534c);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Text_Field_Variant____Outlined_017c9d10a98e7abecf16);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Text_Field_Variant____Standard_017c9d10aa3222c75c3d);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Enum_model____Text_Field_Size_017c9d7d3fe7368823c9);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Text_Field_Size____Medium_017c9d7d6230184b7e50);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Text_Field_Size____Small_017c9d7d62f26cb05914);
db.assignOptional(_instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319, _Object_gooRel_ff022000000000000003, _Components_017c78c7a7b6795d5151);
db.assignOptional(_instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319, _GOO_parentGooRel_ff02200000000000000u, _Components_017c78c7a7b6795d5151);
db.assignOptional(_Components_017c78c7a7b6795d5151, _Object_containsRel_ff02200000000000000f, _instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319);
db.assignOptional(_Components_017c78c7a7b6795d5151, _Folder_subFolderRel_016a697ef00ce7554691, _instance_of_Enums____Text_Field_Enums_017c9d0cb77f74046319);
