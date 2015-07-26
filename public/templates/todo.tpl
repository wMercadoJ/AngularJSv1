<style>
    .main-panel {
        max-width: 330px;
        padding: 15px;
        margin: 0 auto;
    }

</style>
<div class="container todo-main-container">
    <section id="todoapp" ng-controller="TodoCtrl">
        <header id="header">

            <h1>todos</h1>

            <form id="todo-form" ng-submit="addTodo()">
                <input id="new-todo" placeholder="What needs to be done?" ng-model="newTodo" autofocus>
            </form>
        </header>
        <section id="main" ng-show="todos.length" ng-cloak>
            <input id="toggle-all" type="checkbox" ng-model="allChecked" ng-click="markAll(allChecked)">
            <label for="toggle-all">Mark all as complete</label>
            <ul id="todo-list">
                <li ng-repeat="todo in todos | filter:statusFilter track by $index" ng-class="{completed: todo.completed, editing: todo == editedTodo}">
                    <div class="view">
                        <input class="toggle" type="checkbox" ng-model="todo.completed"  >
                        <label ng-dblclick="editTodo(todo)">{{todo.title}}</label>
                        <button class="destroy" ng-click="removeTodo(todo)"></button>
                    </div>
                    <form ng-submit="doneEditing(todo)">
                        <input class="edit" ng-trim="false" ng-model="todo.title" todo-escape="revertEditing(todo)" ng-blur="doneEditing(todo)" todo-focus="todo == editedTodo">
                    </form>
                </li>
            </ul>
        </section>
        <footer id="footer" ng-show="todos.length" ng-cloak>
					<span id="todo-count"><strong>{{remainingCount}}</strong>
						<ng-pluralize count="remainingCount" when="{ one: 'item left', other: 'items left' }"></ng-pluralize>
					</span>
            <ul id="filters">
                <li>
                    <a ng-class="{selected: status == ''} " href='#' ng-click="status=''">All</a>
                </li>
                <li>
                    <a ng-class="{selected: status == 'active'}" href='#'  ng-click="status='active'">Active</a>
                </li>
                <li>
                    <a ng-class="{selected: status == 'completed'}"  href='#' ng-click="status='completed'">Completed</a>
                </li>
            </ul>
            <button id="clear-completed" ng-click="clearCompletedTodos()" ng-show="completedCount">Clear completed ({{completedCount}})</button>
        </footer>
    </section>
</div>
