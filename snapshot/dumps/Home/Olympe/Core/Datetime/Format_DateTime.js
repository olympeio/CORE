
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Date$_47_$Time_ff021000000000000014     = 'ff021000000000000014';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
const _String_ff021000000000000011             = 'ff021000000000000011';


// Definition of tags of defined properties
const _Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001 = '01621fb84e320000f001';
const _Documentation_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_summary_01703376c4a81c0e9d91   = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Documentation_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282 = db.assignTag('0166f483d61cf87db282');
const _instance_of_Runnable_Input____datetime_0166f483dd2144349b0e = db.assignTag('0166f483dd2144349b0e');
const _instance_of_Runnable_Output____formatted_datetime_0166f483dea87c9b41fc = db.assignTag('0166f483dea87c9b41fc');
const _instance_of_Runnable_Input____format_0166f483dfb77544ea64 = db.assignTag('0166f483dfb77544ea64');
const _instance_of_Documentation_017b35893b2f59fe2a7b = db.assignTag('017b35893b2f59fe2a7b');
const _instance_of_Documentation_017b35893ec68bebfbe9 = db.assignTag('017b35893ec68bebfbe9');
const _instance_of_Documentation_017b35893ec6d3bb31e5 = db.assignTag('017b35893ec6d3bb31e5');
const _instance_of_Documentation_017b35894269fe826f68 = db.assignTag('017b35894269fe826f68');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Datetime_0179b2690f49a1f52652           = '0179b2690f49a1f52652';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282
db.newModel(_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282, 'Format DateTime') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Format DateTime',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282);
// :_instance_of_Runnable_Input____datetime_0166f483dd2144349b0e
db.newInstance(_instance_of_Runnable_Input____datetime_0166f483dd2144349b0e)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'datetime',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____formatted_datetime_0166f483dea87c9b41fc
db.newInstance(_instance_of_Runnable_Output____formatted_datetime_0166f483dea87c9b41fc)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'formatted datetime',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____format_0166f483dfb77544ea64
db.newInstance(_instance_of_Runnable_Input____format_0166f483dfb77544ea64)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'format',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b2f59fe2a7b
db.newInstance(_instance_of_Documentation_017b35893b2f59fe2a7b)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Converts a `DateTime` into a string by applying a format.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Transforms a `DateTime` into a string with a format.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ec68bebfbe9
db.newInstance(_instance_of_Documentation_017b35893ec68bebfbe9)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The date and time to format.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ec6d3bb31e5
db.newInstance(_instance_of_Documentation_017b35893ec6d3bb31e5)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The format to apply (see above).',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35894269fe826f68
db.newInstance(_instance_of_Documentation_017b35894269fe826f68)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The resulting string.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____datetime_0166f483dd2144349b0e);
db.assign(_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____format_0166f483dfb77544ea64);
db.assign(_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____formatted_datetime_0166f483dea87c9b41fc);
db.assign(_instance_of_Runnable_Input____datetime_0166f483dd2144349b0e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Date$_47_$Time_ff021000000000000014              );
db.assign(_instance_of_Runnable_Output____formatted_datetime_0166f483dea87c9b41fc, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____format_0166f483dfb77544ea64, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Documentation_017b35893b2f59fe2a7b   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282);
db.assign(_instance_of_Documentation_017b35893ec68bebfbe9   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____datetime_0166f483dd2144349b0e);
db.assign(_instance_of_Documentation_017b35893ec6d3bb31e5   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____format_0166f483dfb77544ea64);
db.assign(_instance_of_Documentation_017b35894269fe826f68   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____formatted_datetime_0166f483dea87c9b41fc);
db.assign(_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____datetime_0166f483dd2144349b0e);
db.assign(_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____formatted_datetime_0166f483dea87c9b41fc);
db.assign(_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____format_0166f483dfb77544ea64);
db.assign(_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b2f59fe2a7b   );
db.assign(_instance_of_Runnable_Input____datetime_0166f483dd2144349b0e, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ec68bebfbe9   );
db.assign(_instance_of_Runnable_Output____formatted_datetime_0166f483dea87c9b41fc, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35894269fe826f68   );
db.assign(_instance_of_Runnable_Input____format_0166f483dfb77544ea64, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ec6d3bb31e5   );
db.assignOptional(_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282, _Object_gooRel_ff022000000000000003, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282, _GOO_parentGooRel_ff02200000000000000u, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Format_DateTime_0166f483d61cf87db282);
