import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { AttDirective } from './components/att-directive/att-directive';
import { GetApi } from './components/get-api/get-api';

export const routes: Routes = [
	{
		path: 'admin',
		component: Admin
	},
	{
		path: 'control-flow',
		component: ControlFlow
	},
	{
		path: 'data-binding',
		component: DataBinding
	},
	{
		path: 'signal',
		component: Signal
	},
	{
		path: 'att-directive',
		component: AttDirective
	},
	{
		path: 'get-api',
		component: GetApi
	}
];
