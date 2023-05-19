import Link from "next/link";
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href='/' className="text-[#F7AB0A] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A] mr-2" />
          Go To Website
        </Link>

        <div className="hidden lg:flex p-5 rounded-lg justify-center border-2 border-[#F7AB0A]">
          <h1 className="font-bold text-white">¿Quieres un gestor de contenido como este? Visita mi sitio web para mayor información!!!</h1>
          <Link 
            href='https://saidn.tech' 
            className="text-[#F7AB0A] font-bold ml-2"
            target="_blank"
          >www.saidn.tech</Link>
        </div>
      </div>


      {props.renderDefault(props)}
    </div>
  )
}

export default StudioNavbar