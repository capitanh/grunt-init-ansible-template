/*
 * grunt-init-ansible-template
 *
 * Copyright (c) 2020 Luis Novo
 * Licensed under the MIT license
 */

'use strict';

 // Basic template description.
exports.description = 'Create an ansible playbook including all directories and a Vagrantfile for single box project';
exports.warnOn = '*';
// The actual init template.
exports.template = function(grunt, init, done) {
  init.process({type: 'jquery'}, [
    //Prompt for these values
    init.prompt('name'),
    init.prompt('description', 'ansible playbook'),
    init.prompt('box', 'Vagrant box id. Type one of centos/7, ubuntu/disco64'),
    init.prompt('hostname', 'host name: same as project name recommended'),
    init.prompt('domain', 'golili.net'),
    init.prompt('vbname', 'Virtual box name: same as project name recommended')
  ], function(err,props) {
    props.keywords = [];

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'libs/**'});
    done();
  });
};
