
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
const _instance_of_Enums____Switch_Enums_017c9e2a1353d9af8130 = db.assignTag('017c9e2a1353d9af8130');
const _instance_of_Enum_model____Switch_Size_017c9e2a731790f81ef2 = db.assignTag('017c9e2a731790f81ef2');
const _instance_of_Switch_Size____Medium_017c9e2a8dfc45048cb3 = db.assignTag('017c9e2a8dfc45048cb3');
const _instance_of_Switch_Size____Small_017c9e2a8ea25abd0c0b = db.assignTag('017c9e2a8ea25abd0c0b');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Components_017c78c7a7b6795d5151         = '017c78c7a7b6795d5151';
const _Core_100000000000000000df               = '100000000000000000df';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Enums____Switch_Enums_017c9e2a1353d9af8130
db.newInstance(_instance_of_Enums____Switch_Enums_017c9e2a1353d9af8130, _Enums_017a7a9ff057958e5678)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Switch Enums',
        'v'                                     :1
    })
.done();
db.setRootInstanceTag(_instance_of_Enums____Switch_Enums_017c9e2a1353d9af8130);
// :_instance_of_Enum_model____Switch_Size_017c9e2a731790f81ef2
db.newModel(_instance_of_Enum_model____Switch_Size_017c9e2a731790f81ef2)
    .setModelTag(_Enum_017a768f966fc08ebb98) // tag of the model
    .setParentTag(_EnumValue_016cdd861b32d56c81f7) // tag of model's parent (if any; null else)
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enums____Switch_Enums_017c9e2a1353d9af8130)
    // Tag of parent goos
    .addParentGoo(_instance_of_Enums____Switch_Enums_017c9e2a1353d9af8130)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Switch Size',
        'v'                                     :1
    })
    .done();
// :_instance_of_Switch_Size____Medium_017c9e2a8dfc45048cb3
db.newInstance(_instance_of_Switch_Size____Medium_017c9e2a8dfc45048cb3)
    .setModelTag(_instance_of_Enum_model____Switch_Size_017c9e2a731790f81ef2) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enum_model____Switch_Size_017c9e2a731790f81ef2)
    .setNameOrProperties({
        [_EnumValue_Rank_017a7690c915975ea995]  :0,
        [_Object_name_ff023000000000000011]     :'Medium',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'medium',
        'v'                                     :1
    })
    .done();
// :_instance_of_Switch_Size____Small_017c9e2a8ea25abd0c0b
db.newInstance(_instance_of_Switch_Size____Small_017c9e2a8ea25abd0c0b)
    .setModelTag(_instance_of_Enum_model____Switch_Size_017c9e2a731790f81ef2) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enum_model____Switch_Size_017c9e2a731790f81ef2)
    .setNameOrProperties({
        [_EnumValue_Rank_017a7690c915975ea995]  :1,
        [_Object_name_ff023000000000000011]     :'Small',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'small',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Enums____Switch_Enums_017c9e2a1353d9af8130, _Folder_itemRel_016a697ef00ce7554692              , _instance_of_Enum_model____Switch_Size_017c9e2a731790f81ef2);
db.assign(_instance_of_Enums____Switch_Enums_017c9e2a1353d9af8130, _Object_containsRel_ff02200000000000000f          , _instance_of_Enum_model____Switch_Size_017c9e2a731790f81ef2);
db.assign(_instance_of_Enum_model____Switch_Size_017c9e2a731790f81ef2, _Object_containsRel_ff02200000000000000f          , _instance_of_Switch_Size____Medium_017c9e2a8dfc45048cb3);
db.assign(_instance_of_Enum_model____Switch_Size_017c9e2a731790f81ef2, _Object_containsRel_ff02200000000000000f          , _instance_of_Switch_Size____Small_017c9e2a8ea25abd0c0b);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Enum_model____Switch_Size_017c9e2a731790f81ef2);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Switch_Size____Medium_017c9e2a8dfc45048cb3);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Switch_Size____Small_017c9e2a8ea25abd0c0b);
db.assignOptional(_instance_of_Enums____Switch_Enums_017c9e2a1353d9af8130, _Object_gooRel_ff022000000000000003, _Components_017c78c7a7b6795d5151);
db.assignOptional(_instance_of_Enums____Switch_Enums_017c9e2a1353d9af8130, _GOO_parentGooRel_ff02200000000000000u, _Components_017c78c7a7b6795d5151);
db.assignOptional(_Components_017c78c7a7b6795d5151, _Object_containsRel_ff02200000000000000f, _instance_of_Enums____Switch_Enums_017c9e2a1353d9af8130);
db.assignOptional(_Components_017c78c7a7b6795d5151, _Folder_subFolderRel_016a697ef00ce7554691, _instance_of_Enums____Switch_Enums_017c9e2a1353d9af8130);
