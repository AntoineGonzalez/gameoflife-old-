const initalState = {
    content: []
}

function initializeGrid(payload) {
    return {
        content: [...Array(payload.width).keys()].map(() => {
            return [...Array(payload.height).keys()].map(() => Math.random() < 0.5)
        })
    }
}

function gridReducer(state = initalState, action) {
    switch (action.type) {
        case "grid/initialize":
            return initializeGrid(action.payload)
        default:
            return state
    }
}

export default gridReducer


