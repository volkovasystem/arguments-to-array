try{ var base = window; }catch( error ){ var base = exports; }
( function module( base ){
	define( "argumentsToArray",
		function construct( ){
			var argumentsToArray = function argumentsToArray( parameters ){
				//ES5 compatible solution.
				if( "slice" in parameters 
					|| typeof parameters.slice == "function" )
				{
					return parameters.slice( );
				}

				//General fallback.
				return Array.prototype.slice.apply( parameters );
			};

			base.argumentsToArray = argumentsToArray;
		} );
} )( base );

