
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
let _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
let _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
let _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
let _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
let _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
let _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
let _String_ff021000000000000011             = 'ff021000000000000011';


// Definition of tags of defined properties
let _Documentation_Function_Metadata_errors_0172c6ae82952a74193f = '0172c6ae82952a74193f';
let _Documentation_Function_Metadata_inputs_0172c6ae82952a74193d = '0172c6ae82952a74193d';
let _Documentation_Function_Metadata_outputs_0172c6ae82952a74193e = '0172c6ae82952a74193e';
let _Documentation_Metadata_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
let _Documentation_Metadata_toolTip_01703376c4a81c0e9d91 = '01703376c4a81c0e9d91';
let _Object_name_ff023000000000000011             = 'ff023000000000000011';
let _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
let _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
let _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
let _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
let _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
let _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
let _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
let _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
let _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
let _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';
let _Runnable_IO_Default_Value_01740c5d4ae4b520dd02 = '01740c5d4ae4b520dd02';

//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
let _Math_0178445f8bd56b19894f               = '0178445f8bd56b19894f';
let _Text_0178445ee2a56bf00fd6               = '0178445ee2a56bf00fd6';
let _Logic_0178445ee2a56bf00fd6               = '0178445f8bd56b198950';
let _Auth_0178445f8bd56b198951               = '0178445f8bd56b198951';
let _Net_0178445f8bd56b198952               = '0178445f8bd56b198952';

// Definition of tags used for newly created instances
let _instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6 = db.assignTag('01633eddc42e7ea58ee6');
let _instance_of_Runnable_Input____01633eddc5f1c31462a9 = db.assignTag('01633eddc5f1c31462a9'); // a
let _instance_of_Runnable_Input____01633eddc72c178e7751 = db.assignTag('01633eddc72c178e7751'); // b
let _instance_of_Runnable_Input____01633eddc8760f3f0c6c = db.assignTag('01633eddc8760f3f0c6c'); // Strictly
let _instance_of_Runnable_Output____01633eddcb37df6ec5af = db.assignTag('01633eddcb37df6ec5af'); // a > b
let _instance_of_Documentation_Function_Metadata_d0c33eddc42e7ea58ee6 = db.assignTag('d0c33eddc42e7ea58ee6');

// :_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6
db.newModel(_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6, 'Is Greater Than').extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Is Greater Than',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6);

// :_instance_of_Runnable_Input____01633eddc5f1c31462a9 - a
db.newInstance(_instance_of_Runnable_Input____01633eddc5f1c31462a9)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____01633eddc5f1c31462a9);
db.assign(_instance_of_Runnable_Input____01633eddc5f1c31462a9, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000013');
db.assign(_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____01633eddc5f1c31462a9);

// :_instance_of_Runnable_Input____01633eddc72c178e7751 - b
db.newInstance(_instance_of_Runnable_Input____01633eddc72c178e7751)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____01633eddc72c178e7751);
db.assign(_instance_of_Runnable_Input____01633eddc72c178e7751, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000013');
db.assign(_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____01633eddc72c178e7751);

// :_instance_of_Runnable_Input____01633eddc8760f3f0c6c - Strictly
db.newInstance(_instance_of_Runnable_Input____01633eddc8760f3f0c6c)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Strictly',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        [_Runnable_IO_Default_Value_01740c5d4ae4b520dd02]: true,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____01633eddc8760f3f0c6c);
db.assign(_instance_of_Runnable_Input____01633eddc8760f3f0c6c, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000012');
db.assign(_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____01633eddc8760f3f0c6c);

// :_instance_of_Runnable_Output____01633eddcb37df6ec5af - a > b
db.newInstance(_instance_of_Runnable_Output____01633eddcb37df6ec5af)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'a > b',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6, _Runnable_Definition_Outputs_01621fb84e320000f00b  , _instance_of_Runnable_Output____01633eddcb37df6ec5af);
db.assign(_instance_of_Runnable_Output____01633eddcb37df6ec5af, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000012');
db.assign(_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____01633eddcb37df6ec5af);

// :_instance_of_Documentation_Function_Metadata_d0c33eddc42e7ea58ee6
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c33eddc42e7ea58ee6)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]: "",
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]: "## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01633eddc5f1c31462a9-a | Number | First operand. |\n| 01633eddc72c178e7751-b | Number | Second operand. |\n| strictly | Boolean | `true` to make a strict comparison. |\n",
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]: "## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01633eddcb37df6ec5af-a > b | Boolean | `true` is `a` is greater than `b`. |\n",
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]: "## Description\nReturns `true` if `a` is bigger than `b`. If `strictly` is set to false, then it returns true if `a` is bigger or\nequal to `b`.\n",
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]: "Checks if a number is greater than another one.",
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c33eddc42e7ea58ee6);
db.assign(_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c33eddc42e7ea58ee6);
db.assign(_instance_of_Documentation_Function_Metadata_d0c33eddc42e7ea58ee6, _Object_gooRel_ff022000000000000003, _instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6);

// Assigning to a Folder. Check this
let parentFolder = _Math_0178445f8bd56b19894f; // Core/Math
db.assignOptional(_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6, _Object_gooRel_ff022000000000000003, parentFolder);
db.assignOptional(parentFolder, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6);
db.assignOptional(_instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6, _GOO_parentGooRel_ff02200000000000000u, parentFolder);
db.assignOptional(parentFolder, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____IsGreaterThan_01633eddc42e7ea58ee6);
