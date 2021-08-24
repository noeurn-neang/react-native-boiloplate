import { createSelector } from 'reselect'

const rootCommont = state => state.common;

export const themeSelector = createSelector(
    rootCommont,
    data => data.theme
)