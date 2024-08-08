interface NavigationItemProps {
    label: string;
  }
const NavigationItem:React.FC<NavigationItemProps>= ({label}) => {
  return (
    <div>
        <p>{label}</p>
    </div>
  )
}

export default NavigationItem
