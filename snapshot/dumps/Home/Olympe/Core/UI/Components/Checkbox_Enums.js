
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
const _instance_of_Enums____Checkbox_Enums_017c9cb2adfd6fc07de7 = db.assignTag('017c9cb2adfd6fc07de7');
const _instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5 = db.assignTag('017c9cb2d2ca2b658dc5');
const _instance_of_Checkbox_Color____Default_017c9cb33572eba23757 = db.assignTag('017c9cb33572eba23757');
const _instance_of_Checkbox_Color____Primary_017c9cb337facb59daf1 = db.assignTag('017c9cb337facb59daf1');
const _instance_of_Checkbox_Color____Secondary_017c9cb33bbde17ff989 = db.assignTag('017c9cb33bbde17ff989');
const _instance_of_Checkbox_Color____Error_017c9cb33e08ec078d87 = db.assignTag('017c9cb33e08ec078d87');
const _instance_of_Checkbox_Color____Info_017c9cb3403d87d573f8 = db.assignTag('017c9cb3403d87d573f8');
const _instance_of_Checkbox_Color____Success_017c9cb3425ec2e852dc = db.assignTag('017c9cb3425ec2e852dc');
const _instance_of_Checkbox_Color____Warning_017c9cb3443c69fb0525 = db.assignTag('017c9cb3443c69fb0525');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Components_017c78c7a7b6795d5151         = '017c78c7a7b6795d5151';
const _Core_100000000000000000df               = '100000000000000000df';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Enums____Checkbox_Enums_017c9cb2adfd6fc07de7
db.newInstance(_instance_of_Enums____Checkbox_Enums_017c9cb2adfd6fc07de7, _Enums_017a7a9ff057958e5678)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Checkbox Enums',
        'v'                                     :1
    })
.done();
db.setRootInstanceTag(_instance_of_Enums____Checkbox_Enums_017c9cb2adfd6fc07de7);
// :_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5
db.newModel(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5)
    .setModelTag(_EnumDef_017a768f966fc08ebb98) // tag of the model
    .setParentTag(_Enum_016cdd861b32d56c81f7) // tag of model's parent (if any; null else)
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enums____Checkbox_Enums_017c9cb2adfd6fc07de7)
    // Tag of parent goos
    .addParentGoo(_instance_of_Enums____Checkbox_Enums_017c9cb2adfd6fc07de7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Checkbox Color',
        'v'                                     :1
    })
    .done();
// :_instance_of_Checkbox_Color____Default_017c9cb33572eba23757
db.newInstance(_instance_of_Checkbox_Color____Default_017c9cb33572eba23757)
    .setModelTag(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :0,
        [_Object_name_ff023000000000000011]     :'Default',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'default',
        'v'                                     :1
    })
    .done();
// :_instance_of_Checkbox_Color____Primary_017c9cb337facb59daf1
db.newInstance(_instance_of_Checkbox_Color____Primary_017c9cb337facb59daf1)
    .setModelTag(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :1,
        [_Object_name_ff023000000000000011]     :'Primary',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'primary',
        'v'                                     :1
    })
    .done();
// :_instance_of_Checkbox_Color____Secondary_017c9cb33bbde17ff989
db.newInstance(_instance_of_Checkbox_Color____Secondary_017c9cb33bbde17ff989)
    .setModelTag(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :2,
        [_Object_name_ff023000000000000011]     :'Secondary',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'secondary',
        'v'                                     :1
    })
    .done();
// :_instance_of_Checkbox_Color____Error_017c9cb33e08ec078d87
db.newInstance(_instance_of_Checkbox_Color____Error_017c9cb33e08ec078d87)
    .setModelTag(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :3,
        [_Object_name_ff023000000000000011]     :'Error',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'error',
        'v'                                     :1
    })
    .done();
// :_instance_of_Checkbox_Color____Info_017c9cb3403d87d573f8
db.newInstance(_instance_of_Checkbox_Color____Info_017c9cb3403d87d573f8)
    .setModelTag(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :4,
        [_Object_name_ff023000000000000011]     :'Info',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'info',
        'v'                                     :1
    })
    .done();
// :_instance_of_Checkbox_Color____Success_017c9cb3425ec2e852dc
db.newInstance(_instance_of_Checkbox_Color____Success_017c9cb3425ec2e852dc)
    .setModelTag(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :5,
        [_Object_name_ff023000000000000011]     :'Success',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'success',
        'v'                                     :1
    })
    .done();
// :_instance_of_Checkbox_Color____Warning_017c9cb3443c69fb0525
db.newInstance(_instance_of_Checkbox_Color____Warning_017c9cb3443c69fb0525)
    .setModelTag(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5)
    .setNameOrProperties({
        [_Enum_Rank_017a7690c915975ea995]       :6,
        [_Object_name_ff023000000000000011]     :'Warning',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'warning',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Enums____Checkbox_Enums_017c9cb2adfd6fc07de7, _Folder_itemRel_016a697ef00ce7554692              , _instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5);
db.assign(_instance_of_Enums____Checkbox_Enums_017c9cb2adfd6fc07de7, _Object_containsRel_ff02200000000000000f          , _instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5);
db.assign(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5, _Object_containsRel_ff02200000000000000f          , _instance_of_Checkbox_Color____Default_017c9cb33572eba23757);
db.assign(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5, _Object_containsRel_ff02200000000000000f          , _instance_of_Checkbox_Color____Primary_017c9cb337facb59daf1);
db.assign(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5, _Object_containsRel_ff02200000000000000f          , _instance_of_Checkbox_Color____Secondary_017c9cb33bbde17ff989);
db.assign(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5, _Object_containsRel_ff02200000000000000f          , _instance_of_Checkbox_Color____Error_017c9cb33e08ec078d87);
db.assign(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5, _Object_containsRel_ff02200000000000000f          , _instance_of_Checkbox_Color____Info_017c9cb3403d87d573f8);
db.assign(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5, _Object_containsRel_ff02200000000000000f          , _instance_of_Checkbox_Color____Success_017c9cb3425ec2e852dc);
db.assign(_instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5, _Object_containsRel_ff02200000000000000f          , _instance_of_Checkbox_Color____Warning_017c9cb3443c69fb0525);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_EnumDef_model____Checkbox_Color_017c9cb2d2ca2b658dc5);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Checkbox_Color____Default_017c9cb33572eba23757);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Checkbox_Color____Primary_017c9cb337facb59daf1);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Checkbox_Color____Secondary_017c9cb33bbde17ff989);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Checkbox_Color____Error_017c9cb33e08ec078d87);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Checkbox_Color____Info_017c9cb3403d87d573f8);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Checkbox_Color____Success_017c9cb3425ec2e852dc);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Checkbox_Color____Warning_017c9cb3443c69fb0525);
db.assignOptional(_instance_of_Enums____Checkbox_Enums_017c9cb2adfd6fc07de7, _Object_gooRel_ff022000000000000003, _Components_017c78c7a7b6795d5151);
db.assignOptional(_instance_of_Enums____Checkbox_Enums_017c9cb2adfd6fc07de7, _GOO_parentGooRel_ff02200000000000000u, _Components_017c78c7a7b6795d5151);
db.assignOptional(_Components_017c78c7a7b6795d5151, _Object_containsRel_ff02200000000000000f, _instance_of_Enums____Checkbox_Enums_017c9cb2adfd6fc07de7);
db.assignOptional(_Components_017c78c7a7b6795d5151, _Folder_subFolderRel_016a697ef00ce7554691, _instance_of_Enums____Checkbox_Enums_017c9cb2adfd6fc07de7);
