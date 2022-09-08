import styled, {css} from "styled-components";

interface ToggleButtonProps {
    variant: "animationDirection" | "default"
}

const KnobsLayer = css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: 0.3s ease all;
`

export const Knobs = styled.div`
    ${KnobsLayer};
    z-index: 2;
    /* A pseudo element that is used to create the red circle with the white cross. */
    &:before {
        content: '';
        transition: 0.3s ease all;
        background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z' fill='white' fill-rule='evenodd' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E");
        position: absolute;
        background-position: center;
        background-repeat: no-repeat;
        top: 4px;
        left: 4px;
        width: 20px;
        height: 10px;
        color: #fff;
        font-size: 10px;
        font-weight: bold;
        text-align: center;
        line-height: 1;
        padding: 9px 4px;
        background-color: #f44336;
        border-radius: 50%;
        transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
    }
`

export const Layer = styled.div`
    ${KnobsLayer};
    border-radius: 100px;
    width: 100%;
    background-color: #fcebeb;
`

export const Container = styled.div`
    height: -webkit-fill-available;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 20px 0;
`

export const Title = styled.span`
    font-size: 1.4em;
    line-height: 1.875rem;
    letter-spacing: -0.007em;
    font-weight: 400;
`

export const Input = styled.input`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
    
    /* Changing the background image of the "Knobs" component when the "Input" component is checked. */
    &:checked + ${Knobs}:before {
        background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='white' fill-rule='evenodd' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E");
        left: 42px;
        background-repeat: no-repeat;
        background-position: center;
        background-color: #026C00;
    }

   /* Changing the background color of the Layer component when the Input component is checked. */ 
    &:checked ~ ${Layer} {
        background-color: #FFFEF9;
    }
    
`


export const Wrapper = styled.div<ToggleButtonProps>`
    position: relative;
    width: 74px;
    height: 36px;
    overflow: hidden;
    border-radius: 100px;
    border: 1px solid rgb(237 237 237);

    ${props => props.variant === "animationDirection" && css<ToggleButtonProps>`
        /* Changing the background image of the "Knobs" component when the "Input" component is
        checked. */
        ${Input} {
            &:checked + ${Knobs}:before {
                background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z' fill='white' fill-rule='evenodd' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E");            }
        }
        /* Changing the background color and image of the Knobs component when the Input component is checked. */
        ${Knobs} {
            &:before {
                background-color: #026C00;
                background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z' fill='%23fff' fill-rule='evenodd' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E");
            }
        }

        /* Changing the background color of the Layer component when the Input component is checked. */
        ${Layer} {
            background-color: #FFFEF9
        }
    `}

    
`
