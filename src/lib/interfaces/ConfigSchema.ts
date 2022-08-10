export interface ConfigSchema {
	sim_layout_name: string;
	cycles_ran: number;
	cell_size: number;
	boards: BoardRow [ ];
}
export interface BoardRow {
	id: number;
	x: number;
	y: number;
	width: number;
	height: number;
	rule: number;
}
