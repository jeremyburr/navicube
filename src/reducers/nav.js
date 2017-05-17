const section = (state, action) => {
	switch (action.type) {
		case 'CHANGE_SECTION':
			if (state.index == action.index)
				return {
					name: state.name, 
					index: state.index, 
					position: 'center' 
				} 
			if (state.position == 'center') { 
				if (state.index < action.index)	{
						return {
							name: state.name,
							index: state.index,
							position: 'left' 
						} 
				}
			 if (state.index > action.index) {	
						return {
							name: state.name,
							index: state.index,
						  position: 'right'
						} 
				} 
			}
			default:
				return {
				name: state.name,
				index: state.index,
				position: state.position
			} 
	}
}
const nav = ( state = { 
		order: ['HOME','ABOUT','ENDEAVORS','CONTACT'],
		index: 0, 
		current: 'HOME', 
		direction: 'forward',
		sections: [
		 { name: 'HOME', index: '0', position: 'center'},
		 { name: 'ABOUT', index: '1', position: 'right'},
		 { name: 'ENDEAVORS', index: '2', position: 'right'},
		 { name: 'CONTACT', index: '3', position: 'right'}
		] 
	},
	action
	) => 
		{
			switch (action.type) {	
					case 'CHANGE_SECTION':
					let index = action.index
					let current = state.order[index];
					let sections = state.sections.map(s => section(s, action)); 
					return { 
						...state,
							index: index,
							current: current, 
							sections: sections
					} 
				default:
					return state
			}
		} 
export default nav 
