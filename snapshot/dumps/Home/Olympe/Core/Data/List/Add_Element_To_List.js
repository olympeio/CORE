
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Action_Call_0168c6f020f2a96a0000        = '0168c6f020f2a96a0000';
const _Ascender_01621fb84e32000000a0           = '01621fb84e32000000a0';
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Descender_01621fb84e32000000d0          = '01621fb84e32000000d0';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Predefined_input_Control_Flow_of_Action_016ac63229782039429f = '016ac63229782039429f';
const _Predefined_output_Control_Flow_016ac6322acf67eebfe7 = '016ac6322acf67eebfe7';
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
const _Ascender_Input_01621fb84e32000000a1          = '01621fb84e32000000a1';
const _Ascender_Upward_01621fb84e32000000a2         = '01621fb84e32000000a2';
const _Descender_Downward_01621fb84e32000000d1      = '01621fb84e32000000d1';
const _Descender_Output_01621fb84e32000000d2        = '01621fb84e32000000d2';
const _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c = '01692a4af82e8984742c';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0179c7fea60372504adc = db.assignTag('0179c7fea60372504adc');
const _instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4 = db.assignTag('0179c7fea60380c20ff4');
const _instance_of_Runnable_Input____New_input_0179c7fea60412bd75c3 = db.assignTag('0179c7fea60412bd75c3');
const _instance_of_Descender_0179c7fea6045a4f8b51   = db.assignTag('0179c7fea6045a4f8b51');
const _instance_of_Runnable_Output____New_output_0179c7fea60460641a90 = db.assignTag('0179c7fea60460641a90');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_0179c7fea6047302c492 = db.assignTag('0179c7fea6047302c492');
const _instance_of_Ascender_0179c7fea6048030a326    = db.assignTag('0179c7fea6048030a326');
const _instance_of_Runnable_Input____list_0179c7fedd654611ff60 = db.assignTag('0179c7fedd654611ff60');
const _instance_of_Runnable_Input____object_0179c7feffa67e2c9863 = db.assignTag('0179c7feffa67e2c9863');
const _instance_of_Runnable_Output____list_0179c7ff2942c8e19464 = db.assignTag('0179c7ff2942c8e19464');
const _instance_of_Documentation_Function_Metadata_017a1e5f2e091365d913 = db.assignTag('017a1e5f2e091365d913');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4
db.newModel(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, 'Add Element To List') // tag and name of the model 
    .extends(_Action_Call_0168c6f020f2a96a0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        ['01621fb84e320000f001']:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Add Element To List',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4);
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0179c7fea60372504adc
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0179c7fea60372504adc)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____New_input_0179c7fea60412bd75c3
db.newInstance(_instance_of_Runnable_Input____New_input_0179c7fea60412bd75c3)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'New input',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Descender_0179c7fea6045a4f8b51
db.newInstance(_instance_of_Descender_0179c7fea6045a4f8b51)
    .setModelTag(_Descender_01621fb84e32000000d0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____New_output_0179c7fea60460641a90
db.newInstance(_instance_of_Runnable_Output____New_output_0179c7fea60460641a90)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'New output',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_0179c7fea6047302c492
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_0179c7fea6047302c492)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Ascender_0179c7fea6048030a326
db.newInstance(_instance_of_Ascender_0179c7fea6048030a326)
    .setModelTag(_Ascender_01621fb84e32000000a0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____list_0179c7fedd654611ff60
db.newInstance(_instance_of_Runnable_Input____list_0179c7fedd654611ff60)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____object_0179c7feffa67e2c9863
db.newInstance(_instance_of_Runnable_Input____object_0179c7feffa67e2c9863)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'object',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____list_0179c7ff2942c8e19464
db.newInstance(_instance_of_Runnable_Output____list_0179c7ff2942c8e19464)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_017a1e5f2e091365d913
db.newInstance(_instance_of_Documentation_Function_Metadata_017a1e5f2e091365d913)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 0179c7feffa67e2c9863-object | Object | The element to add. |\n| 0179c7fedd654611ff60-list | List | The list in which the element will be added. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 0179c7ff2942c8e19464-list | List | The result list, with the added element. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nAdds en element to a list. If no list is provided, it is created.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Adds an element to a list.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Ascender_0179c7fea6048030a326        , _Ascender_Input_01621fb84e32000000a1              , _instance_of_Runnable_Input____New_input_0179c7fea60412bd75c3);
db.assign(_instance_of_Ascender_0179c7fea6048030a326        , _Ascender_Upward_01621fb84e32000000a2             , _instance_of_Predefined_output_Control_Flow____Control_Flow_0179c7fea6047302c492);
db.assign(_instance_of_Descender_0179c7fea6045a4f8b51       , _Descender_Downward_01621fb84e32000000d1          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0179c7fea60372504adc);
db.assign(_instance_of_Descender_0179c7fea6045a4f8b51       , _Descender_Output_01621fb84e32000000d2            , _instance_of_Runnable_Output____New_output_0179c7fea60460641a90);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0179c7fea60372504adc);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____list_0179c7fedd654611ff60);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____object_0179c7feffa67e2c9863);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_0179c7fea6047302c492);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____list_0179c7ff2942c8e19464);
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0179c7fea60372504adc, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____New_input_0179c7fea60412bd75c3, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Output____New_output_0179c7fea60460641a90, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_0179c7fea6047302c492, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____list_0179c7fedd654611ff60, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____object_0179c7feffa67e2c9863, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Output____list_0179c7ff2942c8e19464, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Descender_0179c7fea6045a4f8b51       );
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Ascender_0179c7fea6048030a326        );
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_017a1e5f2e091365d913);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0179c7fea60372504adc);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_0179c7fea6047302c492);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____list_0179c7fedd654611ff60);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____object_0179c7feffa67e2c9863);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____list_0179c7ff2942c8e19464);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_017a1e5f2e091365d913);
db.assign(_instance_of_Descender_0179c7fea6045a4f8b51       , _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0179c7fea60372504adc);
db.assign(_instance_of_Descender_0179c7fea6045a4f8b51       , _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____New_output_0179c7fea60460641a90);
db.assign(_instance_of_Ascender_0179c7fea6048030a326        , _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____New_input_0179c7fea60412bd75c3);
db.assign(_instance_of_Ascender_0179c7fea6048030a326        , _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_0179c7fea6047302c492);
db.assignOptional(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4);
