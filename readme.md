------------------------------------------------------------
* add submodule in current project
    - git submodule add repositoryURL subproject
    - e.g. inside rootFolder :  git submodule add https://git.jetbrains.space/apunch/node-common.git src/components 
    
* first time clone repository
    - git clone repositoryURL --recursive OR
    - git clone repositoryURL && src/components git submodule update --init
