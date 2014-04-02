/*:
	@module-configuration:
		{
			"moduleName": "argumentsToArray",
			"authorName": "Richeve S. Bebedor",
			"isGlobal": true
		}
	@end-module-configuration
*/

argumentsToArray = function argumentsToArray( parameters ){
	/*
		@meta-configuration:
			{
				"parameters": "Arguments"
			}
		@end-meta-configuration
	*/

	//ES5 compatible solution.
	if( "slice" in parameters 
		|| typeof parameters.slice == "function" )
	{
		return parameters.slice( );
	}

	//General fallback.
	return Array.prototype.slice.apply( parameters );
};