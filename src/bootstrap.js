// load framework modules
import angular from 'angular';
import ngComponentRouter from 'ngcomponentrouter';

// load application Angular modules
import app from './app/app.module';
import inputComponents from './input-components/input-components.module'

// create main module
let mainModule = angular.module('main', [ngComponentRouter, app, inputComponents]);

// must tell the Component Router which top level component to navigate components into
mainModule.value('$routerRootComponent', 'root');

angular.element(document).ready(() => {
	// bootstrap angular now that all modules have been loaded
	angular.bootstrap(document, [mainModule.name], { strictDi: true });
});
