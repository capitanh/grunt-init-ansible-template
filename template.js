/*
 * grunt-init-ansible-template
 * 
 * Copyright (c) 2020 Luis Novo
 * Licensed under the MIT license
 */

'use strict';

 // Basic template description.
exports.description = 'Create an ansible playbook including all directories and a Vagrantfile for multibox projects';
exports.warnOn = '*';
// The actual init template.
exports.template = function(grunt, init, done) {
  init.process({type: 'jquery'}, [
    //Prompt for these values
    init.prompt('name'),
    init.prompt('description', 'Best ansible playbook')
  ], function(err,props) {
    props.keywords = [];

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'libs/**'});
    done();
  });
};
