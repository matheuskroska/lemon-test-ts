
import ReactDOM from 'react-dom'

export const Portal = ({children}: any) => {
    return ReactDOM.createPortal(
        <>
            {children}
        </>,document.body
    )
}
