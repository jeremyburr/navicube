export const CHANGE_SECTION = 'CHANGE_SECTION'
function changeSection(index) {
  return {
    type: CHANGE_SECTION,
		index,
  }
} 
export function goToSection(target) {
  return (dispatch, getState) => {
		let index = getState().nav.index;
		let steps = index - target;
		if (steps == 0) {
			return 
		} 
		let timeout = 0; 
		(function loop(difference) {
			const promise = new Promise((resolve, reject) => {	
				setTimeout( () => {
					steps < 0 ? index++ : index--
					console.log(index)
					dispatch(changeSection(index)) 
					timeout+=500
					resolve()
				}, timeout)
		 }).then( () => index == target || loop(steps) )
		})(steps)
  }
} 

