var findtrainingcenter = angular.module('divergents');

findtrainingcenter.controller('findtrainingcenter', function($scope,$http){	
	
	$scope.errorMessage="";
	$scope.showInterest= false;

	
	$scope.gridOptions = {
	         enableGridMenus : false,  
	         enableSorting: false, 
	         enableFiltering: false,
	         enableCellEdit : false,
	         enableColumnMenus : false,
	         paginationPageSizes: [10, 2, 50],
	         paginationPageSize: 2,   
	         useExternalPagination: true,   
	         columnDefs: [
	              { name: 'trainingCenterName', displayName: 'Center Name', cellClass:'trainingCenterCellClass',headerCellClass:'trainingCenters'},
	              { name: 'address', displayName: 'Address' ,cellClass:'trainingCenterCellClass',headerCellClass:'trainingCenters' },
	              { name: 'contactNumber',displayName: 'Contact' , cellClass:'trainingCenterCellClass',headerCellClass:'trainingCenters'},
	              { name: 'Interest', displayName:'Show Interest' , cellTemplate: '<i class="fa fa-thumbs-o-up" style="color: blue; cursor: pointer; font-size: 2em" ng-click=grid.appScope.showYourInterest(row)> </i>',headerCellClass:'trainingCenters',cellClass:'trainingCenterCellClass'}
	              
	    ]
	  }; 
	
	$http.get('/getallStates')
    .success(function (response) {
        $scope.findState= response;
    })
    .error(function (error) {
       console.log("Error"+ error);
    });

	
	
	$http.get('/getallDistrict')
    .success(function (response) {
        $scope.findDistrict= response;
    })
    .error(function (error) {
       console.log("Error"+ error);
    });
	
	
	$http.get('/getallBlocks')
    .success(function (response) {
        $scope.findBlocks= response;
    })
    .error(function (error) {
       console.log("Error" + error);
    });
	
	
	$http.get('/getallSectors')
    .success(function (response) {
        $scope.findSector= response;
    })
    .error(function (error) {
       console.log("Error" + error);
    });
	
	
	$http.get('/getallJobRoles')
    .success(function (response) {
        $scope.findJobRole= response;
    })
    .error(function (error) {
       console.log("Error" + error);
    });
	
	
	
	
	$scope.findtc =function(){
        $http({
            method: 'POST',
            url: "/findTC",
            data : angular.toJson($scope.find)
        })
             .then(function(response){
            	$scope.gridOptions.data= response.data;
             },function Error(response) {
                 $scope.errorMessage = "Invalid selection" + response.statusText;
             });
        }
	
	
	
	$scope.showYourInterest=function(){
		if($scope.showInterest== false){
		$scope.showInterest= true;}
		else{
			$scope.showInterest= false;
		}
		
		
	}
	
	
	
	
});