export const selectLoggedIn = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.token;
export const selectUserName = state => state.auth.user.name;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
