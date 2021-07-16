
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
const _String_ff021000000000000011             = 'ff021000000000000011';


// Definition of tags of defined properties
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a = db.assignTag('016cb429d2e316b6478a');
const _instance_of_Runnable_Input____text_016cb429d2e316b6478b = db.assignTag('016cb429d2e316b6478b');
const _instance_of_Runnable_Input____regex_016cb429d2e316b6478c = db.assignTag('016cb429d2e316b6478c');
const _instance_of_Runnable_Output____matched_016cb429d2e316b6478d = db.assignTag('016cb429d2e316b6478d');
const _instance_of_Runnable_Output____match_elements_016cb429d2e316b6478e = db.assignTag('016cb429d2e316b6478e');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Text_0178445ee2a56bf00fd6               = '0178445ee2a56bf00fd6';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a
db.newModel(_instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a, 'Regex') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        ['01621fb84e320000f001']:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Regex',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a);
// :_instance_of_Runnable_Input____text_016cb429d2e316b6478b
db.newInstance(_instance_of_Runnable_Input____text_016cb429d2e316b6478b)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'text',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____regex_016cb429d2e316b6478c
db.newInstance(_instance_of_Runnable_Input____regex_016cb429d2e316b6478c)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'regex',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____matched_016cb429d2e316b6478d
db.newInstance(_instance_of_Runnable_Output____matched_016cb429d2e316b6478d)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'matched',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____match_elements_016cb429d2e316b6478e
db.newInstance(_instance_of_Runnable_Output____match_elements_016cb429d2e316b6478e)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'match elements',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____text_016cb429d2e316b6478b);
db.assign(_instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____regex_016cb429d2e316b6478c);
db.assign(_instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____matched_016cb429d2e316b6478d);
db.assign(_instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____match_elements_016cb429d2e316b6478e);
db.assign(_instance_of_Runnable_Input____text_016cb429d2e316b6478b, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____regex_016cb429d2e316b6478c, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____matched_016cb429d2e316b6478d, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Runnable_Output____match_elements_016cb429d2e316b6478e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____text_016cb429d2e316b6478b);
db.assign(_instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____regex_016cb429d2e316b6478c);
db.assign(_instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____matched_016cb429d2e316b6478d);
db.assign(_instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____match_elements_016cb429d2e316b6478e);
db.assignOptional(_instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a, _Object_gooRel_ff022000000000000003, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a, _GOO_parentGooRel_ff02200000000000000u, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Regex_016cb429d2e316b6478a);
