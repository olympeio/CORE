
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Relation_ff021000000000000006           = 'ff021000000000000006';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
const _Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94 = '01703376c4a81c0e9d94';
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
const _instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726 = db.assignTag('0178265fcf5008c4d726');
const _instance_of_Runnable_Input____Origin_017826601ee84f0ff1f9 = db.assignTag('017826601ee84f0ff1f9');
const _instance_of_Runnable_Input____Relation_0178266037124b9bf475 = db.assignTag('0178266037124b9bf475');
const _instance_of_Runnable_Input____IncludeSelf_017826609794d340daef = db.assignTag('017826609794d340daef');
const _instance_of_Runnable_Output____List_01782660b3f85d5a5d6a = db.assignTag('01782660b3f85d5a5d6a');
const _instance_of_Documentation_017b35893b67a9a9349e = db.assignTag('017b35893b67a9a9349e');
const _instance_of_Documentation_017b35893f63da3a277c = db.assignTag('017b35893f63da3a277c');
const _instance_of_Documentation_017b35893f648594fa8c = db.assignTag('017b35893f648594fa8c');
const _instance_of_Documentation_017b35893f6583bc8294 = db.assignTag('017b35893f6583bc8294');
const _instance_of_Documentation_017b358942777062fabf = db.assignTag('017b358942777062fabf');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726
db.newModel(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726, 'Get Recursive Related') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Get Recursive Related',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726);
// :_instance_of_Runnable_Input____Origin_017826601ee84f0ff1f9
db.newInstance(_instance_of_Runnable_Input____Origin_017826601ee84f0ff1f9)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Origin',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Relation_0178266037124b9bf475
db.newInstance(_instance_of_Runnable_Input____Relation_0178266037124b9bf475)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Relation',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____IncludeSelf_017826609794d340daef
db.newInstance(_instance_of_Runnable_Input____IncludeSelf_017826609794d340daef)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'IncludeSelf',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____List_01782660b3f85d5a5d6a
db.newInstance(_instance_of_Runnable_Output____List_01782660b3f85d5a5d6a)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'List',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b67a9a9349e
db.newInstance(_instance_of_Documentation_017b35893b67a9a9349e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'If we have a chain or tree of objects of the same type (or with the same parent type in case of inheritance), e.g. a1->a2->a3 and a2->a4, the function returns all the objects as a single list {a1, a2, a3, a4}',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Follows the given relation recursively and returns all objects visited flattened into a list',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f63da3a277c
db.newInstance(_instance_of_Documentation_017b35893f63da3a277c)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Include origin object in the output list of related objects',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f648594fa8c
db.newInstance(_instance_of_Documentation_017b35893f648594fa8c)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Relation to follow',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f6583bc8294
db.newInstance(_instance_of_Documentation_017b35893f6583bc8294)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Object from which to recursively follow the relation',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b358942777062fabf
db.newInstance(_instance_of_Documentation_017b358942777062fabf)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'List of related objects',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Origin_017826601ee84f0ff1f9);
db.assign(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Relation_0178266037124b9bf475);
db.assign(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____IncludeSelf_017826609794d340daef);
db.assign(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____List_01782660b3f85d5a5d6a);
db.assign(_instance_of_Runnable_Input____Origin_017826601ee84f0ff1f9, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____Relation_0178266037124b9bf475, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Relation_ff021000000000000006                    );
db.assign(_instance_of_Runnable_Input____IncludeSelf_017826609794d340daef, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Runnable_Output____List_01782660b3f85d5a5d6a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Documentation_017b35893b67a9a9349e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726);
db.assign(_instance_of_Documentation_017b35893f63da3a277c   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____IncludeSelf_017826609794d340daef);
db.assign(_instance_of_Documentation_017b35893f648594fa8c   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Relation_0178266037124b9bf475);
db.assign(_instance_of_Documentation_017b35893f6583bc8294   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Origin_017826601ee84f0ff1f9);
db.assign(_instance_of_Documentation_017b358942777062fabf   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____List_01782660b3f85d5a5d6a);
db.assign(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Origin_017826601ee84f0ff1f9);
db.assign(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Relation_0178266037124b9bf475);
db.assign(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____IncludeSelf_017826609794d340daef);
db.assign(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____List_01782660b3f85d5a5d6a);
db.assign(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b67a9a9349e   );
db.assign(_instance_of_Runnable_Input____Origin_017826601ee84f0ff1f9, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f6583bc8294   );
db.assign(_instance_of_Runnable_Input____Relation_0178266037124b9bf475, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f648594fa8c   );
db.assign(_instance_of_Runnable_Input____IncludeSelf_017826609794d340daef, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f63da3a277c   );
db.assign(_instance_of_Runnable_Output____List_01782660b3f85d5a5d6a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b358942777062fabf   );
db.assignOptional(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Get_Recursive_Related_0178265fcf5008c4d726);
