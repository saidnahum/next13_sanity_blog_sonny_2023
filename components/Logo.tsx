import Image from "next/image";

const Logo = (props: any) => {

  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        src='https://avatars.githubusercontent.com/u/70162272?v=4'
        width={50}
        height={50}
        alt="Logo"
        className="rounded-full object-cover"
      />
      <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo;