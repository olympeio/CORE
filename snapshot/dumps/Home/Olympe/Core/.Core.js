
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Project_0163d9594700fcf61e54            = '0163d9594700fcf61e54';


// Definition of tags of defined properties
const _Object_name_ff023000000000000011             = 'ff023000000000000011';


// Definition of tags of defined relations
const _Documentation_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
const _Folder_subFolderRel_016a697ef00ce7554691     = '016a697ef00ce7554691';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Project_dependenciesRel_ff02200000000000002b = 'ff02200000000000002b';


// Definition of tags used for newly created instances 
const _instance_of_Documentation_017c7a0815e418b220ae = db.assignTag('017c7a0815e418b220ae');
const _instance_of_Project____Core_100000000000000000df = db.assignTag('100000000000000000df');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Folder_ff021000000000000020             = 'ff021000000000000020';
const _OLYMPE_FOLDER_10000000000000000001      = '10000000000000000001';
const _PRIMORDIAL_100000000000000000dd         = '100000000000000000dd';
const _ROOT_OF_ROOTS_10000000000000000000      = '10000000000000000000';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Project____Core_100000000000000000df
db.newInstance(_instance_of_Project____Core_100000000000000000df, _Project_0163d9594700fcf61e54)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Core',
        'v'                                     :1
    })
.done();
db.setRootInstanceTag(_instance_of_Project____Core_100000000000000000df);
// :_instance_of_Documentation_017c7a0815e418b220ae
db.newInstance(_instance_of_Documentation_017c7a0815e418b220ae)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Project____Core_100000000000000000df)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Documentation_017c7a0815e418b220ae   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Project____Core_100000000000000000df );
db.assign(_instance_of_Project____Core_100000000000000000df , _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017c7a0815e418b220ae   );
db.assign(_instance_of_Project____Core_100000000000000000df , _Project_dependenciesRel_ff02200000000000002b     , _PRIMORDIAL_100000000000000000dd                  );
db.newInstance(_OLYMPE_FOLDER_10000000000000000001, _Folder_ff021000000000000020)
    .setOptional()
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Olympe',
        'v'                                     :1
    })
.done();
db.assignOptional(_instance_of_Project____Core_100000000000000000df, _Object_gooRel_ff022000000000000003, _instance_of_Project____Core_100000000000000000df);
db.assignOptional(_instance_of_Project____Core_100000000000000000df, _Object_gooRel_ff022000000000000003, _OLYMPE_FOLDER_10000000000000000001);
db.assignOptional(_instance_of_Project____Core_100000000000000000df, _GOO_parentGooRel_ff02200000000000000u, _OLYMPE_FOLDER_10000000000000000001);
db.assignOptional(_OLYMPE_FOLDER_10000000000000000001, _Object_containsRel_ff02200000000000000f, _instance_of_Project____Core_100000000000000000df);
db.assignOptional(_OLYMPE_FOLDER_10000000000000000001, _Folder_subFolderRel_016a697ef00ce7554691, _instance_of_Project____Core_100000000000000000df);
db.assignOptional(_OLYMPE_FOLDER_10000000000000000001, _Object_gooRel_ff022000000000000003, _ROOT_OF_ROOTS_10000000000000000000);
db.assignOptional(_OLYMPE_FOLDER_10000000000000000001, _GOO_parentGooRel_ff02200000000000000u, _ROOT_OF_ROOTS_10000000000000000000);
db.assignOptional(_ROOT_OF_ROOTS_10000000000000000000, _Object_containsRel_ff02200000000000000f, _OLYMPE_FOLDER_10000000000000000001);
db.assignOptional(_ROOT_OF_ROOTS_10000000000000000000, _Folder_subFolderRel_016a697ef00ce7554691, _OLYMPE_FOLDER_10000000000000000001);
