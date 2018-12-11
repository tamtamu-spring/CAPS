<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head th:replace="fragments/head :: head"></head>
<body>
	<div class="container" style="margin-top: 21px;">
		<div th:replace="fragments/navigationbar :: navigationbar"></div>
		<div class="containner" style="margin-top: 5%;">
			<div class="row clearfix">
				<div class="col-xs-2 column">
					<div th:replace="fragments/admin-sidebar :: admin-sidebar"></div>
				</div>
				<div class="col-xs-10 column">
			
					<table class="table" id="courses-table"></table>
				</div>
			</div>
		</div>
	</div>
	<div th:replace="fragments/footer::footer"></div>
	<script type="text/javascript" th:src="@{/js/bootstrap-table.js}"></script>
	<script type="text/javascript" th:src="@{/js/tables/courses-table.js}"></script>
	<script type="text/javascript" th:src="@{/js/bootstrap-table-export.js}"></script>
	<script src="//rawgit.com/hhurz/tableExport.jquery.plugin/master/tableExport.js"></script>
</body>

</html>