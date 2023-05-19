const divToggle = document.querySelector('toggle');
const couter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({type: TOGGLE_SWITCH})
const increase = dif => ({type: INCREASE, dif})
const decrease = () => ({type: DECREASE})

const initialState = {
    toggle: false,
    counter: 0
}

// state 가 undifined 일 때 => 기본값 = initialState

const reducer = (state = initialState, action) => {
    // action.type 에 따라 다른 작업 처리
    switch(action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state, // 불변성 유지해야겠죠?
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.dif
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}