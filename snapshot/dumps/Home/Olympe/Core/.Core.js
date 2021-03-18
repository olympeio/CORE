
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
let _Project_0163d9594700fcf61e54            = '0163d9594700fcf61e54';


// Definition of tags of defined properties
let _Object_name_ff023000000000000011             = 'ff023000000000000011';


// Definition of tags of defined relations
let _Folder_subFolderRel_016a697ef00ce7554691     = '016a697ef00ce7554691';
let _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
let _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
let _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
let _Repository_importsRepoRel_ff02200000000000002b = 'ff02200000000000002b';


// Definition of tags used for newly created instances 
let _instance_of_Project____Core_017840fd586db904fdf1 = db.assignTag('017840fd586db904fdf1');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
let _REPO_SC_CORE_011400000000ba0e0000       = '011400000000ba0e0000';
let _REPO_SC_LOGIC_0171bc5a906f5b9a25e6      = '0171bc5a906f5b9a25e6';
let _REPO_SC_UI_0171bc28afc1ffc04066         = '0171bc28afc1ffc04066';
let _ROOT_REPO_OLYMPE_10000000000000000001   = '10000000000000000001';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Project____Core_017840fd586db904fdf1
db.newInstance(_instance_of_Project____Core_017840fd586db904fdf1, _Project_0163d9594700fcf61e54)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Core',
        'v'                                     :1
    })
.done();
db.setRootInstanceTag(_instance_of_Project____Core_017840fd586db904fdf1);
db.assign(_instance_of_Project____Core_017840fd586db904fdf1 , _Repository_importsRepoRel_ff02200000000000002b   , _REPO_SC_CORE_011400000000ba0e0000                );
db.assign(_instance_of_Project____Core_017840fd586db904fdf1 , _Repository_importsRepoRel_ff02200000000000002b   , _REPO_SC_UI_0171bc28afc1ffc04066                  );
db.assign(_instance_of_Project____Core_017840fd586db904fdf1 , _Repository_importsRepoRel_ff02200000000000002b   , _REPO_SC_LOGIC_0171bc5a906f5b9a25e6               );
db.assignOptional(_instance_of_Project____Core_017840fd586db904fdf1, _Object_gooRel_ff022000000000000003, _instance_of_Project____Core_017840fd586db904fdf1);
db.assignOptional(_instance_of_Project____Core_017840fd586db904fdf1, _Object_gooRel_ff022000000000000003, _ROOT_REPO_OLYMPE_10000000000000000001);
db.assignOptional(_ROOT_REPO_OLYMPE_10000000000000000001, _Object_containsRel_ff02200000000000000f, _instance_of_Project____Core_017840fd586db904fdf1);
db.assignOptional(_instance_of_Project____Core_017840fd586db904fdf1, _GOO_parentGooRel_ff02200000000000000u, _ROOT_REPO_OLYMPE_10000000000000000001);
db.assignOptional(_ROOT_REPO_OLYMPE_10000000000000000001, _Folder_subFolderRel_016a697ef00ce7554691, _instance_of_Project____Core_017840fd586db904fdf1);
