
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
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
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184 = db.assignTag('01632af2ee63ea368184');
const _instance_of_Runnable_Input____Interval_01632af2f03047e7704c = db.assignTag('01632af2f03047e7704c');
const _instance_of_Runnable_Input____On$_47_$Off_01632af2f4e3c6122f13 = db.assignTag('01632af2f4e3c6122f13');
const _instance_of_Runnable_Output____Control_flow_01632b0ee6b912d1937a = db.assignTag('01632b0ee6b912d1937a');
const _instance_of_Documentation_Function_Metadata_d0c32af2ee63ea368184 = db.assignTag('d0c32af2ee63ea368184');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Util_0179b26a12e03686de9c               = '0179b26a12e03686de9c';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184
db.newModel(_instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184, 'Ticker') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        ['01621fb84e320000f001']:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Ticker',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184);
// :_instance_of_Runnable_Input____Interval_01632af2f03047e7704c
db.newInstance(_instance_of_Runnable_Input____Interval_01632af2f03047e7704c)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Interval',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____On$_47_$Off_01632af2f4e3c6122f13
db.newInstance(_instance_of_Runnable_Input____On$_47_$Off_01632af2f4e3c6122f13)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'On/Off',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Control_flow_01632b0ee6b912d1937a
db.newInstance(_instance_of_Runnable_Output____Control_flow_01632b0ee6b912d1937a)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c32af2ee63ea368184
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c32af2ee63ea368184)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01632af2f03047e7704c-Interval | Number | The interval in milliseconds. |\n| 01632af2f4e3c6122f13-On/Off | Boolean | `true` to activate the ticker, `false` to turn it off. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| Control Flow | Control Flow | The output control-flow. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nTriggers the output control-flow at every specified interval.\nIt is also controlled by an on/off switch.\n\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Dispatches a controlFlow every x millisecond.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Interval_01632af2f03047e7704c);
db.assign(_instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____On$_47_$Off_01632af2f4e3c6122f13);
db.assign(_instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Control_flow_01632b0ee6b912d1937a);
db.assign(_instance_of_Runnable_Input____Interval_01632af2f03047e7704c, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____On$_47_$Off_01632af2f4e3c6122f13, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Runnable_Output____Control_flow_01632b0ee6b912d1937a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c32af2ee63ea368184);
db.assign(_instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Interval_01632af2f03047e7704c);
db.assign(_instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____On$_47_$Off_01632af2f4e3c6122f13);
db.assign(_instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Control_flow_01632b0ee6b912d1937a);
db.assign(_instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c32af2ee63ea368184);
db.assignOptional(_instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184, _Object_gooRel_ff022000000000000003, _Util_0179b26a12e03686de9c);
db.assignOptional(_instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184, _GOO_parentGooRel_ff02200000000000000u, _Util_0179b26a12e03686de9c);
db.assignOptional(_Util_0179b26a12e03686de9c, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184);
db.assignOptional(_Util_0179b26a12e03686de9c, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Ticker_01632af2ee63ea368184);
