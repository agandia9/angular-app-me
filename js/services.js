angular.module('Services', [])
	.value('job', "Web Developer!")
	.factory('MyFactory', function() {
		return {
			toCalculate: function(integer) {
					return integer * integer;
			}
		}
	})
