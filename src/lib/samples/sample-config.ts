import type { ConfigSchema } from "$lib/interfaces/ConfigSchema";

export const config:ConfigSchema = {
	sim_layout_name: 'Ant Farm',
	cycles_ran: 0,
	cell_size: 4,
	boards: [
		{
			id: 1,
			x: 10,
			y: 10,
			width: 4,
			height: 5,
			rule: 0
		},
		{
			id: 2,
			x: 50,
			y: 10,
			width: 3,
			height: 4,
			rule: 0
		},
		{
			id: 3,
			x: 100,
			y: 10,
			width: 5,
			height: 6,
			rule: 0
		}
	]
};