export const goToRoute = (props, route) => {
	// abstract to track events in ga
	return props.navigation.navigate(route)
}