<div ng-controller="TodoCtrl">
	<!-- Contenedor izquierdo -->
	<aside class="col-md-2 fidden-xs hidden-sm post clearfix">
		<h4>Opciones</h4>
		<div class="list-group">
			<p>Opciones disponibles para su cuenta</p>
		</div>
	</aside>
	<!-- Contenedor derecho-->
	<section class="posts col-md-10">
		<!-- Contenedor article por pone un margen de division-->
		<article class="post clearfix">
		<h2 class="post-title">
			<h1>{{message}}</h1>
		</h2>
		<p><span class="post-fecha">26 de Enero</span> creado por <span class="post-author"><a href="">SDP team</a></span></p>
		<p class="post-contenido text-justify">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde autem tempora, expedita, nostrum sequi voluptatum quae quidem, voluptatem uscipit in doloremque? Consequuntur deleniti ea et, corporis vitae culpa nimi eligendi.
		</p>
		</article>
	</section>
</div>