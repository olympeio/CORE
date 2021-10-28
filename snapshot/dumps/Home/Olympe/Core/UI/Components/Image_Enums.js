
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
const _instance_of_Enums____Image_Enums_017c9e53f2949ac5098d = db.assignTag('017c9e53f2949ac5098d');
const _instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7 = db.assignTag('017c9e5474d3ba4f6ad7');
const _instance_of_Image_Object_Fit____Cover_017c9e54a6be39d65ae5 = db.assignTag('017c9e54a6be39d65ae5');
const _instance_of_Image_Object_Fit____Fill_017c9e54a75f6ae4b0e5 = db.assignTag('017c9e54a75f6ae4b0e5');
const _instance_of_Image_Object_Fit____Contain_017c9e54a8032ee2c684 = db.assignTag('017c9e54a8032ee2c684');
const _instance_of_Image_Object_Fit____None_017ca1b0112b590a68ab = db.assignTag('017ca1b0112b590a68ab');
const _instance_of_Image_Object_Fit____Scale_Down_017ca1b0132a567e0af4 = db.assignTag('017ca1b0132a567e0af4');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Components_017c78c7a7b6795d5151         = '017c78c7a7b6795d5151';
const _Core_100000000000000000df               = '100000000000000000df';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Enums____Image_Enums_017c9e53f2949ac5098d
db.newInstance(_instance_of_Enums____Image_Enums_017c9e53f2949ac5098d, _Enums_017a7a9ff057958e5678)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Image Enums',
        'v'                                     :1
    })
.done();
db.setRootInstanceTag(_instance_of_Enums____Image_Enums_017c9e53f2949ac5098d);
// :_instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7
db.newModel(_instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7)
    .setModelTag(_Enum_017a768f966fc08ebb98) // tag of the model
    .setParentTag(_EnumValue_016cdd861b32d56c81f7) // tag of model's parent (if any; null else)
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enums____Image_Enums_017c9e53f2949ac5098d)
    // Tag of parent goos
    .addParentGoo(_instance_of_Enums____Image_Enums_017c9e53f2949ac5098d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Image Object Fit',
        'v'                                     :1
    })
    .done();
// :_instance_of_Image_Object_Fit____Cover_017c9e54a6be39d65ae5
db.newInstance(_instance_of_Image_Object_Fit____Cover_017c9e54a6be39d65ae5)
    .setModelTag(_instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7)
    .setNameOrProperties({
        [_EnumValue_Rank_017a7690c915975ea995]  :2,
        [_Object_name_ff023000000000000011]     :'Cover',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'cover',
        'v'                                     :1
    })
    .done();
// :_instance_of_Image_Object_Fit____Fill_017c9e54a75f6ae4b0e5
db.newInstance(_instance_of_Image_Object_Fit____Fill_017c9e54a75f6ae4b0e5)
    .setModelTag(_instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7)
    .setNameOrProperties({
        [_EnumValue_Rank_017a7690c915975ea995]  :0,
        [_Object_name_ff023000000000000011]     :'Fill',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'fill',
        'v'                                     :1
    })
    .done();
// :_instance_of_Image_Object_Fit____Contain_017c9e54a8032ee2c684
db.newInstance(_instance_of_Image_Object_Fit____Contain_017c9e54a8032ee2c684)
    .setModelTag(_instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7)
    .setNameOrProperties({
        [_EnumValue_Rank_017a7690c915975ea995]  :1,
        [_Object_name_ff023000000000000011]     :'Contain',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'contain',
        'v'                                     :1
    })
    .done();
// :_instance_of_Image_Object_Fit____None_017ca1b0112b590a68ab
db.newInstance(_instance_of_Image_Object_Fit____None_017ca1b0112b590a68ab)
    .setModelTag(_instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7)
    .setNameOrProperties({
        [_EnumValue_Rank_017a7690c915975ea995]  :3,
        [_Object_name_ff023000000000000011]     :'None',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'none',
        'v'                                     :1
    })
    .done();
// :_instance_of_Image_Object_Fit____Scale_Down_017ca1b0132a567e0af4
db.newInstance(_instance_of_Image_Object_Fit____Scale_Down_017ca1b0132a567e0af4)
    .setModelTag(_instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7)
    .setNameOrProperties({
        [_EnumValue_Rank_017a7690c915975ea995]  :4,
        [_Object_name_ff023000000000000011]     :'Scale Down',
        [_String_Value_$_40_$String$_41_$_ff023000000000000026]:'scale-down',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Enums____Image_Enums_017c9e53f2949ac5098d, _Folder_itemRel_016a697ef00ce7554692              , _instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7);
db.assign(_instance_of_Enums____Image_Enums_017c9e53f2949ac5098d, _Object_containsRel_ff02200000000000000f          , _instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7);
db.assign(_instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7, _Object_containsRel_ff02200000000000000f          , _instance_of_Image_Object_Fit____Cover_017c9e54a6be39d65ae5);
db.assign(_instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7, _Object_containsRel_ff02200000000000000f          , _instance_of_Image_Object_Fit____Fill_017c9e54a75f6ae4b0e5);
db.assign(_instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7, _Object_containsRel_ff02200000000000000f          , _instance_of_Image_Object_Fit____Contain_017c9e54a8032ee2c684);
db.assign(_instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7, _Object_containsRel_ff02200000000000000f          , _instance_of_Image_Object_Fit____None_017ca1b0112b590a68ab);
db.assign(_instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7, _Object_containsRel_ff02200000000000000f          , _instance_of_Image_Object_Fit____Scale_Down_017ca1b0132a567e0af4);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Enum_model____Image_Object_Fit_017c9e5474d3ba4f6ad7);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Image_Object_Fit____Cover_017c9e54a6be39d65ae5);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Image_Object_Fit____Fill_017c9e54a75f6ae4b0e5);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Image_Object_Fit____Contain_017c9e54a8032ee2c684);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Image_Object_Fit____None_017ca1b0112b590a68ab);
db.assign(_Core_100000000000000000df                        , _Project_primordialItemRel_ff02200000000000002a   , _instance_of_Image_Object_Fit____Scale_Down_017ca1b0132a567e0af4);
db.assignOptional(_instance_of_Enums____Image_Enums_017c9e53f2949ac5098d, _Object_gooRel_ff022000000000000003, _Components_017c78c7a7b6795d5151);
db.assignOptional(_instance_of_Enums____Image_Enums_017c9e53f2949ac5098d, _GOO_parentGooRel_ff02200000000000000u, _Components_017c78c7a7b6795d5151);
db.assignOptional(_Components_017c78c7a7b6795d5151, _Object_containsRel_ff02200000000000000f, _instance_of_Enums____Image_Enums_017c9e53f2949ac5098d);
db.assignOptional(_Components_017c78c7a7b6795d5151, _Folder_subFolderRel_016a697ef00ce7554691, _instance_of_Enums____Image_Enums_017c9e53f2949ac5098d);
