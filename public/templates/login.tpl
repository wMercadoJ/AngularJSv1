<style>
    .form-login {
        max-width: 330px;
        padding: 15px;
        margin: 0 auto;
    }
    .form-login .form-heading{
        margin-bottom: 20px;
        text-align: center;
    }
    .form-login .form-control {
        position: relative;
        height: auto;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 10px;
        font-size: 16px;
    }
    .form-login .form-control:focus {
        z-index: 2;
    }
    .form-login input[type="email"] {
        margin-bottom: 10px;
        width: 100%;
    }
    .form-login input[type="password"] {
        margin-bottom: 10px;
        width: 100%;
    }

</style>

<div class="container-fluid" ng-controller='login-controller' >
    <form id="loginform" ng-submit="doLogin()" class="form-login" role="form" ng-if="!user">
        <h1 class="list-heading text-center">Distribuidora SRVJ</h1>

        <input class="form-control" placeholder="Email address"  autofocus id="login-email" ng-model="login.username" type="email" >
        <input class="form-control" placeholder="Password"  id="login-password" ng-model="login.password"  type="password">
        <button class="btn btn-primary btn-block"   type="submit">Log In</button>
        <button class="btn btn-primary btn-block"   type="button" ng-click="adminLogin()">Log In as Demo Admin</button>
    </form>
    
    <div ng-if="user">
    	<h2>
    		Welcome, {{ user.email }}
    	</h2>
    	
    </div>
</div>
