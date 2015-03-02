module.exports = {
  normalizeEntityName: function() {},
  afterInstall: function() {
  	var self = this;
    return this.addBowerPackageToProject('moment').then(function(){
    	return self.addBowerPackageToProject('lodash');
    });
  }
};
