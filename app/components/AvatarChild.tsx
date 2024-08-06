'use client '
type propsAvatar={
  child_image?:string
  child_name:string
}
export default function AvatrChild({child_image,child_name}:propsAvatar) {
  return (
    <div>
      {
        child_image ==''? 
        <div>
          <img className="w-10 h-10 rounded-full" src={`${child_image}`} alt="Rounded avatar"></img>
          <span>
              {child_name}
            </span>
        </div>
        :
        <div className="relative flex flex-col w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            <span className=" absolute w-12 h-12 text-gray-400 -left-1">
              {/* {child_name} */}
              sdffsddddddddddddddddddddddddddddfdsfdsfs
            </span>
          </div>
        
        
      }
    
    </div>
  )
}
