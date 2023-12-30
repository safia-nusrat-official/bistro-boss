import MenuItem from "./MenuItem"

const MenuGrid = ({menu}) => {

  return (
    <div className="grid md:grid-cols-2 gap-4 md:mx-28 md:my-12 my-8">
          {menu &&
            menu.map((item) => <MenuItem data={item}></MenuItem>)}
        </div>
  )
}

export default MenuGrid