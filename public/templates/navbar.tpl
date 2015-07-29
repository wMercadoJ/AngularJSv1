<div ng-controller="nav-controller" role="navigation">
	<div class="container-fluid">
	    <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="/login"><span class="glyphicon glyphicon-home"></span> Home</a>

        </div>
        <div class="collapse navbar-collapse" id="navbar-menu">
			<ul class="nav navbar-nav" >
                <li ng-if="user.roles == 'admin'"><a href="/planillaSalPendA">Planillas de Salida</a></li>
                <li ng-if="user.roles == 'admin'"><a href="/planillaLiqPend">Planillas de Liquidacion</a></li>
                 <li class="dropdown"  ng-if="user.roles == 'admin'">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown"  >Reporte Planilla Liquidacion<i class="icon-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="/reporteLiqFecha">Reporte Planilla Salida</a></li>
                        <li><a href="/reporteSalProdF">Reporte Planilla Salida Productos</a></li>
                    </ul>
                </li>
                 <li class="dropdown"  ng-if="user.roles == 'admin'">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"  >Registros<i class="icon-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="/listaEmpAd">Empleados</a></li>
                        <li><a href="/listaCarro">Carros</a></li>
                        <li><a href="/reporteProductoExistAl">Productos</a></li>
                    </ul>
                 </li>
                    <li ng-if="user.roles == 'almacenes'"><a href="/planillaDiaAl">Planillas de Salida</a></li>
                    <li ng-if="user.roles == 'almacenes'"><a href="/reporteProductoGral">Reportes Productos</a></li>
                    <li ng-if="user.roles == 'adminCuentas'"><a href="/listaUser">Administrar Usuarios</a></li>
                    <li ng-if="user.roles == 'adminCuentas'"><a href="/listaEmpleado">Administrar Empleados</a></li>

            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li class="pull-right"  ng-if="user" ><a href="#">  </a></li>
                <li class="dropdown"  ng-if="user.roles == 'admin' || user.roles == 'adminCuentas' " >
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"  >Admin Angoose<i class="icon-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="/deform/angoose-user/list">Manage Users</a></li>
                        <li><a href="/deform/role/list">Manage Permissions</a></li>
                    </ul>
                </li>
                <li ng-if="user"><a href="#">   Welcome, {{ user.email }} </a></li>
				<li class="pull-right"><a href="/logout" ng-click="doLogout()" ng-if="user">Logout</a></li>
      		</ul>
      		</div>
	</div>
</div>
