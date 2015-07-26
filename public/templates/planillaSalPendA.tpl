<div ng-controller="TodoCtrl">
	<!-- Panel izquierdo -->
	<aside class="col-md-2 fidden-xs hidden-sm post clearfix">
		<h4>Opciones</h4>
		<div class="list-group">
			<a href="#/planillaSalPendA" class="list-group-item active">Planillas de Salidas Pendientes de Revision</a>
			<a href="#/planillaSalA" class="list-group-item">Planillas de Salida del dia Revisadas</a>
		</div>
	</aside>
	<!-- Contenedor principal derecho -->
	<section class="posts col-md-10">
		<article class="post clearfix">
			<h2 class="post-title">
				<h1>{{message}}</h1>
			</h2>
			<p><span class="post-fecha">26 de Enero</span> creado por <span class="post-author"><a href="">SDP team</a></span></p>
			<p class="post-contenido text-justify">
				Llenar planillas de salidas pendientes
			</p>
			</article>
	</section>
</div>