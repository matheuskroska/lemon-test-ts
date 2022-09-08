import * as T from './ToggleButton.styled'

interface ToggleButtonProps {
  title?: string,
  onChange: () => void,
  defaultChecked?: boolean,
  variant?: 'default' | 'animationDirection';
}

export const ToggleButton = ({defaultChecked, onChange, title, variant = 'default', ...props} : ToggleButtonProps) => {
  return (
    <>
      <T.Container>
        <T.Title>{title}</T.Title>
        <T.Wrapper variant={variant}>
            <T.Input defaultChecked={defaultChecked} onChange={onChange} type="checkbox" {...props}></T.Input>
            <T.Knobs/>
            <T.Layer/>
        </T.Wrapper>
      </T.Container>
    </>
  )
}

